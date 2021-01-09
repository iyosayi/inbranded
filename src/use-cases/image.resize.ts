import fs from 'fs'
import {
  InvalidParameterError,
  RequiredParameterError,
} from '../helpers/errors'
import { IDeps, IResize } from '../typings/interfaces'
import { filenameGenerator } from '../helpers/generate.filename'

const makeResizedImage = ({ imageProcessor, imageDb }: IDeps) => {
  return async function resizeImage({
    id,
    ...resizeDetails
  }: { id: string } & IResize) {
    const { width, height } = resizeDetails
    if (!id) {
      throw new RequiredParameterError('Id')
    }
    const foundImage = await imageDb.findById({ id })
    if (!foundImage) {
      throw new InvalidParameterError('Image does not exist.')
    }
    const { filepath, filename } = foundImage
    if (!filepath) {
      throw new InvalidParameterError('Path not found')
    }
    const isValidFilePath = fs.existsSync(filepath)
    if (!isValidFilePath) {
      throw new InvalidParameterError('File does not exist.')
    }
    if (!width || !height) {
      throw new RequiredParameterError('Width and Height Parameters')
    }
    const modifiedHeight = Number(height)
    const modifiedWidth = Number(width)

    const outputFile = filenameGenerator({ filename })
    const imageToResize = await imageProcessor(filepath)
      .resize({ width: modifiedWidth, height: modifiedHeight })
      .toFile(outputFile)
    await imageDb.update({ id, filepath: outputFile })
    fs.unlink(filepath, (err) => {
      if(err) {
        throw err
      }
    })
    return imageToResize
  }
}

export default makeResizedImage
