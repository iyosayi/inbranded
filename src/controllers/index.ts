import makePatchResize from './patch.resize'
import makePostUpload from './post.upload'
import makePatchRotate from './patch.rotate'
import makePatchCrop from './patch.crop'
import makeExportImage from './post.export'
import {
  uploadImage,
  cropImage,
  resizeImage,
  rotateImage,
  exportImage,
} from '../use-cases'

export const uploadImageController = makePostUpload({ uploadImage })
export const resizeImageController = makePatchResize({ resizeImage })
export const rotateImageController = makePatchRotate({ rotateImage })
export const cropImageController = makePatchCrop({ cropImage })
export const exportImageController = makeExportImage({ exportImage })
