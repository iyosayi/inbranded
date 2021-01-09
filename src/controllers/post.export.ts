import apiResponse from '../helpers/http.response'
import { wrapAsync } from '../helpers/wrap.async'


interface IExportImage {
  exportImage: ({
    id,
    imageType,
  }: {
    id: string
    imageType: string
  }) => Promise<any>
}

const makePostExport = ({ exportImage }: IExportImage) => {
  return wrapAsync(async (httpRequest: any) => {
    const { id } = httpRequest.params
    const { imageType } = httpRequest.query

    const image = await exportImage({ id, imageType })
    return apiResponse({
      status: true,
      statusCode: 200,
      message: 'Image exported successfully',
      data: image,
    })
  })
}

export default makePostExport
