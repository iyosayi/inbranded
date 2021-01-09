// const express = require('express')
// const multer = require('multer')
// const { MongoClient, ObjectID } = require('mongodb')
// const jimp = require('jimp')
const path = require('path')
// const { existsSync, mkdir } = require('fs')

// const app = express()

// const URL = 'mongodb://localhost:27017'
// const client = new MongoClient(URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// async function makeDb() {
//   if (!client.isConnected()) {
//     await client.connect()
//   }
//   return client.db('inbranded')
// }

// makeDb().then(() => console.log('Database started'))

// const dir = path.resolve('./uploads')

// ;(function createDir(directory) {
//   if (!existsSync(directory)) {
//     mkdir(path.join(__dirname, 'uploads'), { recursive: true }, (err) => {
//       if (err) {
//         throw err
//       }
//       return 'done'
//     })
//   }
// })(dir)

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, path.join(__dirname, 'uploads'))
//   },
//   filename(req, file, cb) {
//     cb(null, file.originalname)
//   },
// })

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true)
//   }
//   return cb(null, false)
// }

// const upload = multer({ storage, fileFilter })

// app.post('/upload', upload.single('avatar'), async (req, res) => {
//   try {
//     const { filename, path } = req.file
//     const db = await makeDb()
//     const toInsert = await db.collection('images').insertOne({
//       filename,
//       path,
//     })
//     console.log(toInsert.ops[0])
//     res.end('done')
//   } catch (error) {
//     console.error(error)
//   }
// })

// async function resizeImage({ imagePath, height, width }) {
//   const image = await jimp.read(imagePath)
//   image.resize(height, width)
//   image.write(imagePath)
// }

// app.get('/resize/:id', async (req, res) => {
//   const { id } = req.params
//   const { height, width } = req.query
//   const modifiedHeight = Number(height)
//   const modifiedWidth = Number(width)
//   const db = await makeDb()
//   const found = await db.collection('images').findOne({ _id: transformId(id) })
//   const { path } = found
//   await resizeImage({
//     imagePath: path,
//     height: modifiedHeight,
//     width: modifiedWidth,
//   })
//   res.end('done')
// })

// app.listen(4000, () => console.log('Server is listening'))

const fs = require('fs/promises')

const image = fs.readFile('./uploads/CMG - Foil Vibes Flash 17.jpg', 'binary')
image.then((data) => {
  fs.writeFile('./uploads/king.jpg', data, 'binary')
})
