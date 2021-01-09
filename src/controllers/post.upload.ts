import apiResponse from '../helpers/http.response'
import { wrapAsync } from '../helpers/wrap.async'
import { UploadImage } from '../typings/interfaces'

interface IPostUpload {
  uploadImage: ({ ...details }: UploadImage) => Promise<any>
}

const makePostUpload = ({ uploadImage }: IPostUpload) => {
  return wrapAsync(async (httpRequest: any) => {
    const { ...details } = httpRequest.file

    const image = await uploadImage({ ...details })
    return apiResponse({
      status: true,
      statusCode: 201,
      message: 'Image upload successful',
      data: image,
    })
  })
}

export default makePostUpload
