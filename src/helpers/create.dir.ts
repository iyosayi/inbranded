import { existsSync, mkdir } from 'fs'
import path from 'path'

/**
 * @function createDir checks if the pdf directory exists already,
 * If not, it creates it on server startup
 */

export const createDir = function createDir(directory: string) {
  if (!existsSync(directory)) {
    mkdir(path.resolve(directory), { recursive: true }, (err) => {
      if (err) {
        throw err
      }
      return 'done'
    })
  }
}
