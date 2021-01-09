import { IDeps, UploadImage } from '../typings/interfaces'

const makeUploadImage = ({ imageDb }: IDeps) => {
  return async function uploadImage({ ...details }: UploadImage) {
    const { path, filename } = details
    const newImage = await imageDb.insert({ filepath: path, filename })
    return newImage
  }
}

export default makeUploadImage
