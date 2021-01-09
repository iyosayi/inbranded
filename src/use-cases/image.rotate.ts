import path from 'path'
import { access } from 'fs/promises'
import fs from 'fs'

import {
  InvalidParameterError,
  RequiredParameterError,
} from '../helpers/errors'
import { filenameGenerator } from '../helpers/generate.filename'
import { IDeps, IRotate } from '../typings/interfaces'

const makeRotateImage = ({ imageProcessor, imageDb }: IDeps) => {
  return async function rotateImage({ id, deg }: { id: string } & IRotate) {
    if (!id) {
      throw new RequiredParameterError('Id')
    }
    const foundImage = await imageDb.findById({ id })
    if (!foundImage) {
      throw new InvalidParameterError('Image does not exist.')
    }
    const { filepath, filename } = foundImage
    const isValidFilePath = fs.existsSync(filepath)
    if (!isValidFilePath) {
      throw new InvalidParameterError('File does not exist.')
    }
    if (!deg) {
      throw new RequiredParameterError('Degree')
    }
    const modifiedDegree = Number(deg)

    const outputFile = filenameGenerator({ filename })
    const imageToRotate = await imageProcessor(filepath)
      .rotate(modifiedDegree)
      .toFile(outputFile)
    await imageDb.update({ id, filepath: outputFile })
    fs.unlink(filepath, (err) => {
      if(err) {
        throw err
      }
    })
    return imageToRotate
  }
}

export default makeRotateImage
