import path from 'path'
export const filenameGenerator = ({ filename }: { filename: string }) => {
  const finalFilename = Date.now() + '-' + filename
  const outputFile = path.resolve(`uploads/${finalFilename}`)
  return outputFile
}
