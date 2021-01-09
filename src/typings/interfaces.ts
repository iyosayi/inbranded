export interface UploadImage {
  path: string
  filename: string
}

export interface IResize {
  width: number
  height: number
}

export interface ICrop {
  x?: number
  y?: number
  width: number
  height: number
}

export interface IRotate {
  deg: number
}

export interface IDeps {
  imageProcessor?: any
  imageDb: ImageDb
}

export interface Update {
  filepath: string
}

export interface ImageDb {
  insert({
    filepath,
    filename,
  }: {
    filepath: string
    filename: string
  }): Promise<any>
  findById({ id: _id }: { id: string }): Promise<any>
  update({ id: _id, ...changes }: { id: string } & Update): Promise<any>
}

export interface IApiResponse {
  status: boolean
  statusCode: number
  message: string
  data: any
}

export interface IErrorResponse {
  statusCode: number
  title: string
  errorMessage: string
  stack: string | undefined
}
