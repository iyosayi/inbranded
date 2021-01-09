import apiResponse from '../helpers/http.response'
import { wrapAsync } from '../helpers/wrap.async'
import { IRotate } from '../typings/interfaces'

interface IPatchRotate {
  rotateImage: ({
    id,
    deg
  }: { id: string } & IRotate) => Promise<any>
}

const makePatchRotate = ({ rotateImage }: IPatchRotate) => {
  return wrapAsync(async (httpRequest: any) => {
    const { id } = httpRequest.params
    const { deg } = httpRequest.query

    const image = await rotateImage({ id, deg })
    return apiResponse({
      status: true,
      statusCode: 200,
      message: 'Image rotated successfully',
      data: image,
    })
  })
}

export default makePatchRotate
