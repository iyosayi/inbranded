import makeExpressCallback from '../express/'
import {
  uploadImageController,
  resizeImageController,
  rotateImageController,
  cropImageController,
  exportImageController,
} from '../controllers'
import upload from '../configuration/multer'
import { Application } from 'express'

export const path = '/api/v1/image'
export function config(router: Application) {
  router
    .post(
      '/upload',
      upload.single('filename'),
      makeExpressCallback(uploadImageController)
    )
    .post('/export/:id', makeExpressCallback(exportImageController))
    .patch('/resize/:id', makeExpressCallback(resizeImageController))
    .patch('/rotate/:id', makeExpressCallback(rotateImageController))
    .patch('/crop/:id', makeExpressCallback(cropImageController))
  return router
}
