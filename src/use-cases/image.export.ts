import fs from 'fs'
import { InvalidParameterError } from '../helpers/errors'
import path from 'path'
import { makePdfFromImage } from '../pdf-generator/pdf.generator'
import { IDeps } from '../typings/interfaces'

function returnImageType({
  filename,
  imageType,
}: {
  filename: string
  imageType: string
}) {
  const fileExtenstion = path.extname(filename)
  const reg = new RegExp(fileExtenstion, 'gi')
  const newFileExtenstion = filename.replace(reg, `.${imageType}`)
  const finalFilename = Date.now() + '-' + `${newFileExtenstion}`
  const outputFile = path.resolve(`uploads/${finalFilename}`)
  return outputFile
}

const makeExportImage = ({ imageProcessor, imageDb }: IDeps) => {
  return async function exportImage({
    id,
    imageType,
  }: {
    id: string
    imageType: string
  }) {
    const foundImage = await imageDb.findById({ id })
    if (!foundImage) {
      throw new InvalidParameterError('Image does not exist.')
    }
    const { filepath, filename } = foundImage
    const isValidFilePath = fs.existsSync(filepath)
    if (!isValidFilePath) {
      throw new InvalidParameterError('File does not exist.')
    }
    if (imageType === 'pdf') {
      return makePdfFromImage(filepath)
    }
    const outputFile = returnImageType({ filename, imageType })
    const imageToExport = await imageProcessor(filepath)
      .toFormat(imageType)
      .toFile(outputFile)
    return imageToExport
  }
}

export default makeExportImage
