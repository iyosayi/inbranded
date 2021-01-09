"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _errors = require("../helpers/errors");

var _path = _interopRequireDefault(require("path"));

var _pdf = require("../pdf-generator/pdf.generator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function returnImageType({
  filename,
  imageType
}) {
  const fileExtenstion = _path.default.extname(filename);

  const reg = new RegExp(fileExtenstion, 'gi');
  const newFileExtenstion = filename.replace(reg, `.${imageType}`);
  const finalFilename = Date.now() + '-' + `${newFileExtenstion}`;

  const outputFile = _path.default.resolve(`uploads/${finalFilename}`);

  return outputFile;
}

const makeExportImage = ({
  imageProcessor,
  imageDb
}) => {
  return async function exportImage({
    id,
    imageType
  }) {
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

    if (imageType === 'pdf') {
      return (0, _pdf.makePdfFromImage)(filepath);
    }

    const outputFile = returnImageType({
      filename,
      imageType
    });
    const imageToExport = await imageProcessor(filepath).toFormat(imageType).toFile(outputFile);
    return imageToExport;
  };
};

var _default = makeExportImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2UuZXhwb3J0LnRzIl0sIm5hbWVzIjpbInJldHVybkltYWdlVHlwZSIsImZpbGVuYW1lIiwiaW1hZ2VUeXBlIiwiZmlsZUV4dGVuc3Rpb24iLCJwYXRoIiwiZXh0bmFtZSIsInJlZyIsIlJlZ0V4cCIsIm5ld0ZpbGVFeHRlbnN0aW9uIiwicmVwbGFjZSIsImZpbmFsRmlsZW5hbWUiLCJEYXRlIiwibm93Iiwib3V0cHV0RmlsZSIsInJlc29sdmUiLCJtYWtlRXhwb3J0SW1hZ2UiLCJpbWFnZVByb2Nlc3NvciIsImltYWdlRGIiLCJleHBvcnRJbWFnZSIsImlkIiwiZm91bmRJbWFnZSIsImZpbmRCeUlkIiwiSW52YWxpZFBhcmFtZXRlckVycm9yIiwiZmlsZXBhdGgiLCJpc1ZhbGlkRmlsZVBhdGgiLCJmcyIsImV4aXN0c1N5bmMiLCJpbWFnZVRvRXhwb3J0IiwidG9Gb3JtYXQiLCJ0b0ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUdBLFNBQVNBLGVBQVQsQ0FBeUI7QUFDdkJDLEVBQUFBLFFBRHVCO0FBRXZCQyxFQUFBQTtBQUZ1QixDQUF6QixFQU1HO0FBQ0QsUUFBTUMsY0FBYyxHQUFHQyxjQUFLQyxPQUFMLENBQWFKLFFBQWIsQ0FBdkI7O0FBQ0EsUUFBTUssR0FBRyxHQUFHLElBQUlDLE1BQUosQ0FBV0osY0FBWCxFQUEyQixJQUEzQixDQUFaO0FBQ0EsUUFBTUssaUJBQWlCLEdBQUdQLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQkgsR0FBakIsRUFBdUIsSUFBR0osU0FBVSxFQUFwQyxDQUExQjtBQUNBLFFBQU1RLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEtBQWEsR0FBYixHQUFvQixHQUFFSixpQkFBa0IsRUFBOUQ7O0FBQ0EsUUFBTUssVUFBVSxHQUFHVCxjQUFLVSxPQUFMLENBQWMsV0FBVUosYUFBYyxFQUF0QyxDQUFuQjs7QUFDQSxTQUFPRyxVQUFQO0FBQ0Q7O0FBRUQsTUFBTUUsZUFBZSxHQUFHLENBQUM7QUFBRUMsRUFBQUEsY0FBRjtBQUFrQkMsRUFBQUE7QUFBbEIsQ0FBRCxLQUF3QztBQUM5RCxTQUFPLGVBQWVDLFdBQWYsQ0FBMkI7QUFDaENDLElBQUFBLEVBRGdDO0FBRWhDakIsSUFBQUE7QUFGZ0MsR0FBM0IsRUFNSjtBQUNELFVBQU1rQixVQUFVLEdBQUcsTUFBTUgsT0FBTyxDQUFDSSxRQUFSLENBQWlCO0FBQUVGLE1BQUFBO0FBQUYsS0FBakIsQ0FBekI7O0FBQ0EsUUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2YsWUFBTSxJQUFJRSw2QkFBSixDQUEwQix1QkFBMUIsQ0FBTjtBQUNEOztBQUNELFVBQU07QUFBRUMsTUFBQUEsUUFBRjtBQUFZdEIsTUFBQUE7QUFBWixRQUF5Qm1CLFVBQS9COztBQUNBLFVBQU1JLGVBQWUsR0FBR0MsWUFBR0MsVUFBSCxDQUFjSCxRQUFkLENBQXhCOztBQUNBLFFBQUksQ0FBQ0MsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUlGLDZCQUFKLENBQTBCLHNCQUExQixDQUFOO0FBQ0Q7O0FBQ0QsUUFBSXBCLFNBQVMsS0FBSyxLQUFsQixFQUF5QjtBQUN2QixhQUFPLDJCQUFpQnFCLFFBQWpCLENBQVA7QUFDRDs7QUFDRCxVQUFNVixVQUFVLEdBQUdiLGVBQWUsQ0FBQztBQUFFQyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBO0FBQVosS0FBRCxDQUFsQztBQUNBLFVBQU15QixhQUFhLEdBQUcsTUFBTVgsY0FBYyxDQUFDTyxRQUFELENBQWQsQ0FDekJLLFFBRHlCLENBQ2hCMUIsU0FEZ0IsRUFFekIyQixNQUZ5QixDQUVsQmhCLFVBRmtCLENBQTVCO0FBR0EsV0FBT2MsYUFBUDtBQUNELEdBeEJEO0FBeUJELENBMUJEOztlQTRCZVosZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCB7IEludmFsaWRQYXJhbWV0ZXJFcnJvciB9IGZyb20gJy4uL2hlbHBlcnMvZXJyb3JzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IG1ha2VQZGZGcm9tSW1hZ2UgfSBmcm9tICcuLi9wZGYtZ2VuZXJhdG9yL3BkZi5nZW5lcmF0b3InXG5pbXBvcnQgeyBJRGVwcyB9IGZyb20gJy4uL3R5cGluZ3MvaW50ZXJmYWNlcydcblxuZnVuY3Rpb24gcmV0dXJuSW1hZ2VUeXBlKHtcbiAgZmlsZW5hbWUsXG4gIGltYWdlVHlwZSxcbn06IHtcbiAgZmlsZW5hbWU6IHN0cmluZ1xuICBpbWFnZVR5cGU6IHN0cmluZ1xufSkge1xuICBjb25zdCBmaWxlRXh0ZW5zdGlvbiA9IHBhdGguZXh0bmFtZShmaWxlbmFtZSlcbiAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChmaWxlRXh0ZW5zdGlvbiwgJ2dpJylcbiAgY29uc3QgbmV3RmlsZUV4dGVuc3Rpb24gPSBmaWxlbmFtZS5yZXBsYWNlKHJlZywgYC4ke2ltYWdlVHlwZX1gKVxuICBjb25zdCBmaW5hbEZpbGVuYW1lID0gRGF0ZS5ub3coKSArICctJyArIGAke25ld0ZpbGVFeHRlbnN0aW9ufWBcbiAgY29uc3Qgb3V0cHV0RmlsZSA9IHBhdGgucmVzb2x2ZShgdXBsb2Fkcy8ke2ZpbmFsRmlsZW5hbWV9YClcbiAgcmV0dXJuIG91dHB1dEZpbGVcbn1cblxuY29uc3QgbWFrZUV4cG9ydEltYWdlID0gKHsgaW1hZ2VQcm9jZXNzb3IsIGltYWdlRGIgfTogSURlcHMpID0+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIGV4cG9ydEltYWdlKHtcbiAgICBpZCxcbiAgICBpbWFnZVR5cGUsXG4gIH06IHtcbiAgICBpZDogc3RyaW5nXG4gICAgaW1hZ2VUeXBlOiBzdHJpbmdcbiAgfSkge1xuICAgIGNvbnN0IGZvdW5kSW1hZ2UgPSBhd2FpdCBpbWFnZURiLmZpbmRCeUlkKHsgaWQgfSlcbiAgICBpZiAoIWZvdW5kSW1hZ2UpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IoJ0ltYWdlIGRvZXMgbm90IGV4aXN0LicpXG4gICAgfVxuICAgIGNvbnN0IHsgZmlsZXBhdGgsIGZpbGVuYW1lIH0gPSBmb3VuZEltYWdlXG4gICAgY29uc3QgaXNWYWxpZEZpbGVQYXRoID0gZnMuZXhpc3RzU3luYyhmaWxlcGF0aClcbiAgICBpZiAoIWlzVmFsaWRGaWxlUGF0aCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdC4nKVxuICAgIH1cbiAgICBpZiAoaW1hZ2VUeXBlID09PSAncGRmJykge1xuICAgICAgcmV0dXJuIG1ha2VQZGZGcm9tSW1hZ2UoZmlsZXBhdGgpXG4gICAgfVxuICAgIGNvbnN0IG91dHB1dEZpbGUgPSByZXR1cm5JbWFnZVR5cGUoeyBmaWxlbmFtZSwgaW1hZ2VUeXBlIH0pXG4gICAgY29uc3QgaW1hZ2VUb0V4cG9ydCA9IGF3YWl0IGltYWdlUHJvY2Vzc29yKGZpbGVwYXRoKVxuICAgICAgLnRvRm9ybWF0KGltYWdlVHlwZSlcbiAgICAgIC50b0ZpbGUob3V0cHV0RmlsZSlcbiAgICByZXR1cm4gaW1hZ2VUb0V4cG9ydFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VFeHBvcnRJbWFnZVxuIl19