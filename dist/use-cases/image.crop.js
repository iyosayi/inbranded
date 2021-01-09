"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _errors = require("../helpers/errors");

var _generate = require("../helpers/generate.filename");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const makeCroppedImage = ({
  imageProcessor,
  imageDb
}) => {
  return async function cropImage(_ref) {
    let {
      id
    } = _ref,
        cropDetails = _objectWithoutProperties(_ref, ["id"]);

    const {
      width,
      height,
      x,
      y
    } = cropDetails;
    const foundImage = await imageDb.findById({
      id
    });

    if (!foundImage) {
      throw new _errors.InvalidParameterError('Image does not exist.');
    }

    const {
      filepath,
      filename
    } = foundImage;

    const isValidFilePath = _fs.default.existsSync(filepath);

    if (!isValidFilePath) {
      throw new _errors.InvalidParameterError('File does not exist.');
    }

    const modifiedXAxis = Number(x);
    const modifiedYAxis = Number(y);
    const h = Number(height);
    const w = Number(width);
    const outputFile = (0, _generate.filenameGenerator)({
      filename
    });
    const imageToCrop = await imageProcessor(filepath).extract({
      width: w,
      height: h,
      top: modifiedYAxis,
      left: modifiedXAxis
    }).toFile(outputFile);
    await imageDb.update({
      id,
      filepath: outputFile
    });
    return imageToCrop;
  };
};

var _default = makeCroppedImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2UuY3JvcC50cyJdLCJuYW1lcyI6WyJtYWtlQ3JvcHBlZEltYWdlIiwiaW1hZ2VQcm9jZXNzb3IiLCJpbWFnZURiIiwiY3JvcEltYWdlIiwiaWQiLCJjcm9wRGV0YWlscyIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJmb3VuZEltYWdlIiwiZmluZEJ5SWQiLCJJbnZhbGlkUGFyYW1ldGVyRXJyb3IiLCJmaWxlcGF0aCIsImZpbGVuYW1lIiwiaXNWYWxpZEZpbGVQYXRoIiwiZnMiLCJleGlzdHNTeW5jIiwibW9kaWZpZWRYQXhpcyIsIk51bWJlciIsIm1vZGlmaWVkWUF4aXMiLCJoIiwidyIsIm91dHB1dEZpbGUiLCJpbWFnZVRvQ3JvcCIsImV4dHJhY3QiLCJ0b3AiLCJsZWZ0IiwidG9GaWxlIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBR0EsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxjQUFGO0FBQWtCQyxFQUFBQTtBQUFsQixDQUFELEtBQXdDO0FBQy9ELFNBQU8sZUFBZUMsU0FBZixPQUdvQjtBQUFBLFFBSEs7QUFDOUJDLE1BQUFBO0FBRDhCLEtBR0w7QUFBQSxRQUR0QkMsV0FDc0I7O0FBQ3pCLFVBQU07QUFBRUMsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQSxNQUFUO0FBQWlCQyxNQUFBQSxDQUFqQjtBQUFvQkMsTUFBQUE7QUFBcEIsUUFBMEJKLFdBQWhDO0FBQ0EsVUFBTUssVUFBVSxHQUFHLE1BQU1SLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQjtBQUFFUCxNQUFBQTtBQUFGLEtBQWpCLENBQXpCOztBQUNBLFFBQUksQ0FBQ00sVUFBTCxFQUFpQjtBQUNmLFlBQU0sSUFBSUUsNkJBQUosQ0FBMEIsdUJBQTFCLENBQU47QUFDRDs7QUFFRCxVQUFNO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUE7QUFBWixRQUF5QkosVUFBL0I7O0FBQ0EsVUFBTUssZUFBZSxHQUFHQyxZQUFHQyxVQUFILENBQWNKLFFBQWQsQ0FBeEI7O0FBQ0EsUUFBSSxDQUFDRSxlQUFMLEVBQXNCO0FBQ3BCLFlBQU0sSUFBSUgsNkJBQUosQ0FBMEIsc0JBQTFCLENBQU47QUFDRDs7QUFDRCxVQUFNTSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ1gsQ0FBRCxDQUE1QjtBQUNBLFVBQU1ZLGFBQWEsR0FBR0QsTUFBTSxDQUFDVixDQUFELENBQTVCO0FBQ0EsVUFBTVksQ0FBQyxHQUFHRixNQUFNLENBQUNaLE1BQUQsQ0FBaEI7QUFDQSxVQUFNZSxDQUFDLEdBQUdILE1BQU0sQ0FBQ2IsS0FBRCxDQUFoQjtBQUVBLFVBQU1pQixVQUFVLEdBQUcsaUNBQWtCO0FBQUVULE1BQUFBO0FBQUYsS0FBbEIsQ0FBbkI7QUFDQSxVQUFNVSxXQUFXLEdBQUcsTUFBTXZCLGNBQWMsQ0FBQ1ksUUFBRCxDQUFkLENBQ3ZCWSxPQUR1QixDQUNmO0FBQ1BuQixNQUFBQSxLQUFLLEVBQUVnQixDQURBO0FBRVBmLE1BQUFBLE1BQU0sRUFBRWMsQ0FGRDtBQUdQSyxNQUFBQSxHQUFHLEVBQUVOLGFBSEU7QUFJUE8sTUFBQUEsSUFBSSxFQUFFVDtBQUpDLEtBRGUsRUFPdkJVLE1BUHVCLENBT2hCTCxVQVBnQixDQUExQjtBQVFBLFVBQU1yQixPQUFPLENBQUMyQixNQUFSLENBQWU7QUFBRXpCLE1BQUFBLEVBQUY7QUFBTVMsTUFBQUEsUUFBUSxFQUFFVTtBQUFoQixLQUFmLENBQU47QUFDQSxXQUFPQyxXQUFQO0FBQ0QsR0EvQkQ7QUFnQ0QsQ0FqQ0Q7O2VBbUNleEIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgeyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IgfSBmcm9tICcuLi9oZWxwZXJzL2Vycm9ycydcbmltcG9ydCB7IGZpbGVuYW1lR2VuZXJhdG9yIH0gZnJvbSAnLi4vaGVscGVycy9nZW5lcmF0ZS5maWxlbmFtZSdcbmltcG9ydCB7IElDcm9wLCBJRGVwcyB9IGZyb20gJy4uL3R5cGluZ3MvaW50ZXJmYWNlcydcblxuY29uc3QgbWFrZUNyb3BwZWRJbWFnZSA9ICh7IGltYWdlUHJvY2Vzc29yLCBpbWFnZURiIH06IElEZXBzKSA9PiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBjcm9wSW1hZ2Uoe1xuICAgIGlkLFxuICAgIC4uLmNyb3BEZXRhaWxzXG4gIH06IHsgaWQ6IHN0cmluZyB9ICYgSUNyb3ApIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHgsIHkgfSA9IGNyb3BEZXRhaWxzXG4gICAgY29uc3QgZm91bmRJbWFnZSA9IGF3YWl0IGltYWdlRGIuZmluZEJ5SWQoeyBpZCB9KVxuICAgIGlmICghZm91bmRJbWFnZSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFcnJvcignSW1hZ2UgZG9lcyBub3QgZXhpc3QuJylcbiAgICB9XG5cbiAgICBjb25zdCB7IGZpbGVwYXRoLCBmaWxlbmFtZSB9ID0gZm91bmRJbWFnZVxuICAgIGNvbnN0IGlzVmFsaWRGaWxlUGF0aCA9IGZzLmV4aXN0c1N5bmMoZmlsZXBhdGgpXG4gICAgaWYgKCFpc1ZhbGlkRmlsZVBhdGgpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IoJ0ZpbGUgZG9lcyBub3QgZXhpc3QuJylcbiAgICB9XG4gICAgY29uc3QgbW9kaWZpZWRYQXhpcyA9IE51bWJlcih4KVxuICAgIGNvbnN0IG1vZGlmaWVkWUF4aXMgPSBOdW1iZXIoeSlcbiAgICBjb25zdCBoID0gTnVtYmVyKGhlaWdodClcbiAgICBjb25zdCB3ID0gTnVtYmVyKHdpZHRoKVxuXG4gICAgY29uc3Qgb3V0cHV0RmlsZSA9IGZpbGVuYW1lR2VuZXJhdG9yKHsgZmlsZW5hbWUgfSlcbiAgICBjb25zdCBpbWFnZVRvQ3JvcCA9IGF3YWl0IGltYWdlUHJvY2Vzc29yKGZpbGVwYXRoKVxuICAgICAgLmV4dHJhY3Qoe1xuICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICB0b3A6IG1vZGlmaWVkWUF4aXMsXG4gICAgICAgIGxlZnQ6IG1vZGlmaWVkWEF4aXMsXG4gICAgICB9KVxuICAgICAgLnRvRmlsZShvdXRwdXRGaWxlKVxuICAgIGF3YWl0IGltYWdlRGIudXBkYXRlKHsgaWQsIGZpbGVwYXRoOiBvdXRwdXRGaWxlIH0pXG4gICAgcmV0dXJuIGltYWdlVG9Dcm9wXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNyb3BwZWRJbWFnZVxuIl19