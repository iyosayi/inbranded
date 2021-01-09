"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _errors = require("../helpers/errors");

var _generate = require("../helpers/generate.filename");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeRotateImage = ({
  imageProcessor,
  imageDb
}) => {
  return async function rotateImage({
    id,
    deg
  }) {
    if (!id) {
      throw new _errors.RequiredParameterError('Id');
    }

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

    if (!deg) {
      throw new _errors.RequiredParameterError('Degree');
    }

    const modifiedDegree = Number(deg);
    const outputFile = (0, _generate.filenameGenerator)({
      filename
    });
    const imageToRotate = await imageProcessor(filepath).rotate(modifiedDegree).toFile(outputFile);
    await imageDb.update({
      id,
      filepath: outputFile
    });

    _fs.default.unlink(filepath, err => {
      if (err) {
        throw err;
      }
    });

    return imageToRotate;
  };
};

var _default = makeRotateImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2Uucm90YXRlLnRzIl0sIm5hbWVzIjpbIm1ha2VSb3RhdGVJbWFnZSIsImltYWdlUHJvY2Vzc29yIiwiaW1hZ2VEYiIsInJvdGF0ZUltYWdlIiwiaWQiLCJkZWciLCJSZXF1aXJlZFBhcmFtZXRlckVycm9yIiwiZm91bmRJbWFnZSIsImZpbmRCeUlkIiwiSW52YWxpZFBhcmFtZXRlckVycm9yIiwiZmlsZXBhdGgiLCJmaWxlbmFtZSIsImlzVmFsaWRGaWxlUGF0aCIsImZzIiwiZXhpc3RzU3luYyIsIm1vZGlmaWVkRGVncmVlIiwiTnVtYmVyIiwib3V0cHV0RmlsZSIsImltYWdlVG9Sb3RhdGUiLCJyb3RhdGUiLCJ0b0ZpbGUiLCJ1cGRhdGUiLCJ1bmxpbmsiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFJQTs7OztBQUdBLE1BQU1BLGVBQWUsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLGNBQUY7QUFBa0JDLEVBQUFBO0FBQWxCLENBQUQsS0FBd0M7QUFDOUQsU0FBTyxlQUFlQyxXQUFmLENBQTJCO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUE7QUFBTixHQUEzQixFQUFrRTtBQUN2RSxRQUFJLENBQUNELEVBQUwsRUFBUztBQUNQLFlBQU0sSUFBSUUsOEJBQUosQ0FBMkIsSUFBM0IsQ0FBTjtBQUNEOztBQUNELFVBQU1DLFVBQVUsR0FBRyxNQUFNTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUI7QUFBRUosTUFBQUE7QUFBRixLQUFqQixDQUF6Qjs7QUFDQSxRQUFJLENBQUNHLFVBQUwsRUFBaUI7QUFDZixZQUFNLElBQUlFLDZCQUFKLENBQTBCLHVCQUExQixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTTtBQUFFQyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBO0FBQVosUUFBeUJKLFVBQS9COztBQUNBLFVBQU1LLGVBQWUsR0FBR0MsWUFBR0MsVUFBSCxDQUFjSixRQUFkLENBQXhCOztBQUNBLFFBQUksQ0FBQ0UsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUlILDZCQUFKLENBQTBCLHNCQUExQixDQUFOO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDSixHQUFMLEVBQVU7QUFDUixZQUFNLElBQUlDLDhCQUFKLENBQTJCLFFBQTNCLENBQU47QUFDRDs7QUFDRCxVQUFNUyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ1gsR0FBRCxDQUE3QjtBQUVBLFVBQU1ZLFVBQVUsR0FBRyxpQ0FBa0I7QUFBRU4sTUFBQUE7QUFBRixLQUFsQixDQUFuQjtBQUNBLFVBQU1PLGFBQWEsR0FBRyxNQUFNakIsY0FBYyxDQUFDUyxRQUFELENBQWQsQ0FDekJTLE1BRHlCLENBQ2xCSixjQURrQixFQUV6QkssTUFGeUIsQ0FFbEJILFVBRmtCLENBQTVCO0FBR0EsVUFBTWYsT0FBTyxDQUFDbUIsTUFBUixDQUFlO0FBQUVqQixNQUFBQSxFQUFGO0FBQU1NLE1BQUFBLFFBQVEsRUFBRU87QUFBaEIsS0FBZixDQUFOOztBQUNBSixnQkFBR1MsTUFBSCxDQUFVWixRQUFWLEVBQXFCYSxHQUFELElBQVM7QUFDM0IsVUFBR0EsR0FBSCxFQUFRO0FBQ04sY0FBTUEsR0FBTjtBQUNEO0FBQ0YsS0FKRDs7QUFLQSxXQUFPTCxhQUFQO0FBQ0QsR0E3QkQ7QUE4QkQsQ0EvQkQ7O2VBaUNlbEIsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBhY2Nlc3MgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IHtcbiAgSW52YWxpZFBhcmFtZXRlckVycm9yLFxuICBSZXF1aXJlZFBhcmFtZXRlckVycm9yLFxufSBmcm9tICcuLi9oZWxwZXJzL2Vycm9ycydcbmltcG9ydCB7IGZpbGVuYW1lR2VuZXJhdG9yIH0gZnJvbSAnLi4vaGVscGVycy9nZW5lcmF0ZS5maWxlbmFtZSdcbmltcG9ydCB7IElEZXBzLCBJUm90YXRlIH0gZnJvbSAnLi4vdHlwaW5ncy9pbnRlcmZhY2VzJ1xuXG5jb25zdCBtYWtlUm90YXRlSW1hZ2UgPSAoeyBpbWFnZVByb2Nlc3NvciwgaW1hZ2VEYiB9OiBJRGVwcykgPT4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcm90YXRlSW1hZ2UoeyBpZCwgZGVnIH06IHsgaWQ6IHN0cmluZyB9ICYgSVJvdGF0ZSkge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBSZXF1aXJlZFBhcmFtZXRlckVycm9yKCdJZCcpXG4gICAgfVxuICAgIGNvbnN0IGZvdW5kSW1hZ2UgPSBhd2FpdCBpbWFnZURiLmZpbmRCeUlkKHsgaWQgfSlcbiAgICBpZiAoIWZvdW5kSW1hZ2UpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IoJ0ltYWdlIGRvZXMgbm90IGV4aXN0LicpXG4gICAgfVxuICAgIGNvbnN0IHsgZmlsZXBhdGgsIGZpbGVuYW1lIH0gPSBmb3VuZEltYWdlXG4gICAgY29uc3QgaXNWYWxpZEZpbGVQYXRoID0gZnMuZXhpc3RzU3luYyhmaWxlcGF0aClcbiAgICBpZiAoIWlzVmFsaWRGaWxlUGF0aCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdC4nKVxuICAgIH1cbiAgICBpZiAoIWRlZykge1xuICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkUGFyYW1ldGVyRXJyb3IoJ0RlZ3JlZScpXG4gICAgfVxuICAgIGNvbnN0IG1vZGlmaWVkRGVncmVlID0gTnVtYmVyKGRlZylcblxuICAgIGNvbnN0IG91dHB1dEZpbGUgPSBmaWxlbmFtZUdlbmVyYXRvcih7IGZpbGVuYW1lIH0pXG4gICAgY29uc3QgaW1hZ2VUb1JvdGF0ZSA9IGF3YWl0IGltYWdlUHJvY2Vzc29yKGZpbGVwYXRoKVxuICAgICAgLnJvdGF0ZShtb2RpZmllZERlZ3JlZSlcbiAgICAgIC50b0ZpbGUob3V0cHV0RmlsZSlcbiAgICBhd2FpdCBpbWFnZURiLnVwZGF0ZSh7IGlkLCBmaWxlcGF0aDogb3V0cHV0RmlsZSB9KVxuICAgIGZzLnVubGluayhmaWxlcGF0aCwgKGVycikgPT4ge1xuICAgICAgaWYoZXJyKSB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGltYWdlVG9Sb3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlUm90YXRlSW1hZ2VcbiJdfQ==