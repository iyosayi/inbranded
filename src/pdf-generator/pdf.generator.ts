import PdfPrinter from 'pdfmake'
import { readFile } from 'fs/promises'
import { createWriteStream } from 'fs'
import { createDir } from '../helpers/create.dir'
import path from 'path'

const dir = path.resolve('pdf')
/**
 * @function createDir checks if the pdf directory exists already,
 * If not, it creates it on server startup
 */

createDir(dir)
export const makePdfFromImage = async (imagePath: string) => {
  const fonts = {
    Roboto: {
      normal: await readFile(path.join(__dirname, 'Roboto-Regular.ttf')),
      bold: await readFile(path.join(__dirname, 'Roboto-Bold.ttf')),
      italics: await readFile(path.join(__dirname, 'Roboto-Italic.ttf')),
      bolditalics: await readFile(
        path.join(__dirname, 'Roboto-BoldItalic.ttf')
      ),
    },
  }
  const printer = new PdfPrinter(fonts)

  const docDefinition = {
    content: [
      "Here's your generated image. Enjoy :)",
      {
        image: imagePath,
      },
    ],
  }
  const pdfPath = path.resolve('pdf')
  const filename = 'pdfImage' + Date.now()
  const finalPdf = `${pdfPath}/${filename}.pdf`
  const pdfDoc = printer.createPdfKitDocument(docDefinition)
  pdfDoc.pipe(createWriteStream(finalPdf))
  pdfDoc.end()
}
