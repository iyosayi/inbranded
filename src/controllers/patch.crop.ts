import apiResponse from '../helpers/http.response'
import { wrapAsync } from '../helpers/wrap.async'
import { ICrop } from '../typings/interfaces'

interface IPatchCrop {
  cropImage: ({ id, ...cropDetails }: { id: string } & ICrop) => Promise<any>
}

const makePatchCrop = ({ cropImage }: IPatchCrop) => {
  return wrapAsync(async (httpRequest: any) => {
    const { id } = httpRequest.params
    const { ...cropDetails }: ICrop = httpRequest.query

    const image = await cropImage({ id, ...cropDetails })
    return apiResponse({
      status: true,
      statusCode: 200,
      message: 'Image cropped successfully',
      data: image,
    })
  })
}

export default makePatchCrop
 