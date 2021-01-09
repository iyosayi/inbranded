import fs from 'fs'
import { InvalidParameterError } from '../helpers/errors'
import { filenameGenerator } from '../helpers/generate.filename'
import { ICrop, IDeps } from '../typings/interfaces'

const makeCroppedImage = ({ imageProcessor, imageDb }: IDeps) => {
  return async function cropImage({
    id,
    ...cropDetails
  }: { id: string } & ICrop) {
    const { width, height, x, y } = cropDetails
    const foundImage = await imageDb.findById({ id })
    if (!foundImage) {
      throw new InvalidParameterError('Image does not exist.')
    }

    const { filepath, filename } = foundImage
    const isValidFilePath = fs.existsSync(filepath)
    if (!isValidFilePath) {
      throw new InvalidParameterError('File does not exist.')
    }
    const modifiedXAxis = Number(x)
    const modifiedYAxis = Number(y)
    const h = Number(height)
    const w = Number(width)

    const outputFile = filenameGenerator({ filename })
    const imageToCrop = await imageProcessor(filepath)
      .extract({
        width: w,
        height: h,
        top: modifiedYAxis,
        left: modifiedXAxis,
      })
      .toFile(outputFile)
    await imageDb.update({ id, filepath: outputFile })
    return imageToCrop
  }
}

export default makeCroppedImage
