import multer from 'multer'
import { existsSync, mkdir } from 'fs'
import path from 'path'
import { Request } from 'express'
import { createDir } from '../helpers/create.dir'

const dir = path.resolve('uploads')

/**
 * @function createDir checks if the pdf directory exists already,
 * If not, it creates it on server startup
 */
createDir(dir)

const storage = multer.diskStorage({
  destination(req: Request, file: any, cb) {
    cb(null, path.resolve('uploads'))
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  },
})

const fileFilter = (req: Request, file: any, cb: CallableFunction) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, 'uploads')
  }
  return cb(null, false)
}

const upload = multer({ storage, fileFilter })
export default upload
