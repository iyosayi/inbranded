## Instructions

## Project structure

This project follows the `Clean code Architecture`. \n
The `Logic implementation` for the various `use-cases` can be found in the `use-cases` folder which is inside the `src` folder. e.g `/src/use-cases`. \n
The Controllers are in the `/src/controllers` folder. \n

The project code base tends to implement `Functional Programming` as its programming paradigm. 

## Prerequisites

1. Make sure you have Node.js and MongoDB installed locally on your machine.
2. Run `npm install` to install the necessary packages.
3. To start up the server, simply type `npm start` from your terminal. Make sure `mongodb` is running locally.

The API does the following

1. You can upload images
2. You can crop, resize, and rotate images
3. You can export images to `JPG`, `PNG`, and `PDF`

### Routes

1. To upload an image, make a `POST` request to `http://localhost:5000/api/v1/image/upload`.
   You can use `POSTMAN` to upload the image file, through the `form-data` body and the respective key name is `filename`.
   The uploaded file is available in the `uploads` folder which can be viewed in the project root directory e.g `rootDir/uploads`

2. To crop an image, make a `PATCH` request to `http://localhost:5000/api/v1/image/crop/:id` where the `id` is the
   id of the image. The required query parameters are `width`, `height`, `x`, and `y`. These values are numbers.

3. To resize an image, make a `PATCH` request to `http://localhost:5000/api/v1/image/resize/:id` where the `id` is the
   id of the image. The required query parameters are `width`, and `height`. These values are numbers.

4. To rotate an image, make a `PATCH` request to `http://localhost:5000/api/v1/image/rotate/:id` where the `id` is the
   id of the image. The required query parameters is `deg`. which specifies the degree of rotation. This value is a number.

### Export Routes

1. To export the image to either `JPEG`, `PNG` and `PDF`, simply make a make a `POST` request to `http://localhost:5000/api/v1/image/export/:id` where the `id` is the id of the image. The required query parameter is `imageType`. `imageType` can either be `png`, `jpg` or `pdf`. The exported images can be viewed in the `uploads` folder in the project root directory e.g `rootDir/uploads`. The generated pdf file can be viewed in the `pdf` folder directory which is also in the root project directory e.g `rootDir/pdf`.
