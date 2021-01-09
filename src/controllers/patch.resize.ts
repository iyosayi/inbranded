import apiResponse from '../helpers/http.response'
import { wrapAsync } from '../helpers/wrap.async'
import { IResize } from '../typings/interfaces'

interface IPatchResize {
  resizeImage: ({
    id,
    ...resizeDetails
  }: { id: string } & IResize) => Promise<any>
}

const makePatchResize = ({ resizeImage }: IPatchResize) => {
  return wrapAsync(async (httpRequest: any) => {
    const { id } = httpRequest.params
    const { ...resizeDetails }: IResize = httpRequest.query

    const image = await resizeImage({ id, ...resizeDetails })
    const { width, height } = image.bitmap
    return apiResponse({
      status: true,
      statusCode: 200,
      message: 'Image resized successfully',
      data: { width, height },
    })
  })
}

export default makePatchResize
