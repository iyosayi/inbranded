import makeCroppedImage from './image.crop'
import makeUploadImage from './image.upload'
import makeRotateImage from './image.rotate'
import makeResizedImage from './image.resize'
import makeExportImage from './image.export'
import { imageDb } from '../models'
import sharp from 'sharp'

// @ts-ignore
export const cropImage = makeCroppedImage({ imageProcessor: sharp, imageDb })
export const uploadImage = makeUploadImage({ imageDb })
export const exportImage = makeExportImage({ imageProcessor: sharp, imageDb })

export const rotateImage = makeRotateImage({ imageProcessor: sharp, imageDb })

// @ts-ignore
export const resizeImage = makeResizedImage({ imageProcessor: sharp, imageDb })
