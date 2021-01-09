"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeImage = exports.rotateImage = exports.exportImage = exports.uploadImage = exports.cropImage = void 0;

var _image = _interopRequireDefault(require("./image.crop"));

var _image2 = _interopRequireDefault(require("./image.upload"));

var _image3 = _interopRequireDefault(require("./image.rotate"));

var _image4 = _interopRequireDefault(require("./image.resize"));

var _image5 = _interopRequireDefault(require("./image.export"));

var _models = require("../models");

var _sharp = _interopRequireDefault(require("sharp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
const cropImage = (0, _image.default)({
  imageProcessor: _sharp.default,
  imageDb: _models.imageDb
});
exports.cropImage = cropImage;
const uploadImage = (0, _image2.default)({
  imageDb: _models.imageDb
});
exports.uploadImage = uploadImage;
const exportImage = (0, _image5.default)({
  imageProcessor: _sharp.default,
  imageDb: _models.imageDb
});
exports.exportImage = exportImage;
const rotateImage = (0, _image3.default)({
  imageProcessor: _sharp.default,
  imageDb: _models.imageDb
}); // @ts-ignore

exports.rotateImage = rotateImage;
const resizeImage = (0, _image4.default)({
  imageProcessor: _sharp.default,
  imageDb: _models.imageDb
});
exports.resizeImage = resizeImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiY3JvcEltYWdlIiwiaW1hZ2VQcm9jZXNzb3IiLCJzaGFycCIsImltYWdlRGIiLCJ1cGxvYWRJbWFnZSIsImV4cG9ydEltYWdlIiwicm90YXRlSW1hZ2UiLCJyZXNpemVJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7QUFDTyxNQUFNQSxTQUFTLEdBQUcsb0JBQWlCO0FBQUVDLEVBQUFBLGNBQWMsRUFBRUMsY0FBbEI7QUFBeUJDLEVBQUFBLE9BQU8sRUFBUEE7QUFBekIsQ0FBakIsQ0FBbEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLHFCQUFnQjtBQUFFRCxFQUFBQSxPQUFPLEVBQVBBO0FBQUYsQ0FBaEIsQ0FBcEI7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHLHFCQUFnQjtBQUFFSixFQUFBQSxjQUFjLEVBQUVDLGNBQWxCO0FBQXlCQyxFQUFBQSxPQUFPLEVBQVBBO0FBQXpCLENBQWhCLENBQXBCOztBQUVBLE1BQU1HLFdBQVcsR0FBRyxxQkFBZ0I7QUFBRUwsRUFBQUEsY0FBYyxFQUFFQyxjQUFsQjtBQUF5QkMsRUFBQUEsT0FBTyxFQUFQQTtBQUF6QixDQUFoQixDQUFwQixDLENBRVA7OztBQUNPLE1BQU1JLFdBQVcsR0FBRyxxQkFBaUI7QUFBRU4sRUFBQUEsY0FBYyxFQUFFQyxjQUFsQjtBQUF5QkMsRUFBQUEsT0FBTyxFQUFQQTtBQUF6QixDQUFqQixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWtlQ3JvcHBlZEltYWdlIGZyb20gJy4vaW1hZ2UuY3JvcCdcbmltcG9ydCBtYWtlVXBsb2FkSW1hZ2UgZnJvbSAnLi9pbWFnZS51cGxvYWQnXG5pbXBvcnQgbWFrZVJvdGF0ZUltYWdlIGZyb20gJy4vaW1hZ2Uucm90YXRlJ1xuaW1wb3J0IG1ha2VSZXNpemVkSW1hZ2UgZnJvbSAnLi9pbWFnZS5yZXNpemUnXG5pbXBvcnQgbWFrZUV4cG9ydEltYWdlIGZyb20gJy4vaW1hZ2UuZXhwb3J0J1xuaW1wb3J0IHsgaW1hZ2VEYiB9IGZyb20gJy4uL21vZGVscydcbmltcG9ydCBzaGFycCBmcm9tICdzaGFycCdcblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGNyb3BJbWFnZSA9IG1ha2VDcm9wcGVkSW1hZ2UoeyBpbWFnZVByb2Nlc3Nvcjogc2hhcnAsIGltYWdlRGIgfSlcbmV4cG9ydCBjb25zdCB1cGxvYWRJbWFnZSA9IG1ha2VVcGxvYWRJbWFnZSh7IGltYWdlRGIgfSlcbmV4cG9ydCBjb25zdCBleHBvcnRJbWFnZSA9IG1ha2VFeHBvcnRJbWFnZSh7IGltYWdlUHJvY2Vzc29yOiBzaGFycCwgaW1hZ2VEYiB9KVxuXG5leHBvcnQgY29uc3Qgcm90YXRlSW1hZ2UgPSBtYWtlUm90YXRlSW1hZ2UoeyBpbWFnZVByb2Nlc3Nvcjogc2hhcnAsIGltYWdlRGIgfSlcblxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNvbnN0IHJlc2l6ZUltYWdlID0gbWFrZVJlc2l6ZWRJbWFnZSh7IGltYWdlUHJvY2Vzc29yOiBzaGFycCwgaW1hZ2VEYiB9KVxuIl19