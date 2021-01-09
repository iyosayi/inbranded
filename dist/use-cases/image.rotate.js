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
    return imageToRotate;
  };
};

var _default = makeRotateImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2Uucm90YXRlLnRzIl0sIm5hbWVzIjpbIm1ha2VSb3RhdGVJbWFnZSIsImltYWdlUHJvY2Vzc29yIiwiaW1hZ2VEYiIsInJvdGF0ZUltYWdlIiwiaWQiLCJkZWciLCJSZXF1aXJlZFBhcmFtZXRlckVycm9yIiwiZm91bmRJbWFnZSIsImZpbmRCeUlkIiwiSW52YWxpZFBhcmFtZXRlckVycm9yIiwiZmlsZXBhdGgiLCJmaWxlbmFtZSIsImlzVmFsaWRGaWxlUGF0aCIsImZzIiwiZXhpc3RzU3luYyIsIm1vZGlmaWVkRGVncmVlIiwiTnVtYmVyIiwib3V0cHV0RmlsZSIsImltYWdlVG9Sb3RhdGUiLCJyb3RhdGUiLCJ0b0ZpbGUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFJQTs7OztBQUdBLE1BQU1BLGVBQWUsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLGNBQUY7QUFBa0JDLEVBQUFBO0FBQWxCLENBQUQsS0FBd0M7QUFDOUQsU0FBTyxlQUFlQyxXQUFmLENBQTJCO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUE7QUFBTixHQUEzQixFQUFrRTtBQUN2RSxRQUFJLENBQUNELEVBQUwsRUFBUztBQUNQLFlBQU0sSUFBSUUsOEJBQUosQ0FBMkIsSUFBM0IsQ0FBTjtBQUNEOztBQUNELFVBQU1DLFVBQVUsR0FBRyxNQUFNTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUI7QUFBRUosTUFBQUE7QUFBRixLQUFqQixDQUF6Qjs7QUFDQSxRQUFJLENBQUNHLFVBQUwsRUFBaUI7QUFDZixZQUFNLElBQUlFLDZCQUFKLENBQTBCLHVCQUExQixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTTtBQUFFQyxNQUFBQSxRQUFGO0FBQVlDLE1BQUFBO0FBQVosUUFBeUJKLFVBQS9COztBQUNBLFVBQU1LLGVBQWUsR0FBR0MsWUFBR0MsVUFBSCxDQUFjSixRQUFkLENBQXhCOztBQUNBLFFBQUksQ0FBQ0UsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUlILDZCQUFKLENBQTBCLHNCQUExQixDQUFOO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDSixHQUFMLEVBQVU7QUFDUixZQUFNLElBQUlDLDhCQUFKLENBQTJCLFFBQTNCLENBQU47QUFDRDs7QUFDRCxVQUFNUyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ1gsR0FBRCxDQUE3QjtBQUVBLFVBQU1ZLFVBQVUsR0FBRyxpQ0FBa0I7QUFBRU4sTUFBQUE7QUFBRixLQUFsQixDQUFuQjtBQUNBLFVBQU1PLGFBQWEsR0FBRyxNQUFNakIsY0FBYyxDQUFDUyxRQUFELENBQWQsQ0FDekJTLE1BRHlCLENBQ2xCSixjQURrQixFQUV6QkssTUFGeUIsQ0FFbEJILFVBRmtCLENBQTVCO0FBR0EsVUFBTWYsT0FBTyxDQUFDbUIsTUFBUixDQUFlO0FBQUVqQixNQUFBQSxFQUFGO0FBQU1NLE1BQUFBLFFBQVEsRUFBRU87QUFBaEIsS0FBZixDQUFOO0FBQ0EsV0FBT0MsYUFBUDtBQUNELEdBeEJEO0FBeUJELENBMUJEOztlQTRCZWxCLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgYWNjZXNzIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmltcG9ydCB7XG4gIEludmFsaWRQYXJhbWV0ZXJFcnJvcixcbiAgUmVxdWlyZWRQYXJhbWV0ZXJFcnJvcixcbn0gZnJvbSAnLi4vaGVscGVycy9lcnJvcnMnXG5pbXBvcnQgeyBmaWxlbmFtZUdlbmVyYXRvciB9IGZyb20gJy4uL2hlbHBlcnMvZ2VuZXJhdGUuZmlsZW5hbWUnXG5pbXBvcnQgeyBJRGVwcywgSVJvdGF0ZSB9IGZyb20gJy4uL3R5cGluZ3MvaW50ZXJmYWNlcydcblxuY29uc3QgbWFrZVJvdGF0ZUltYWdlID0gKHsgaW1hZ2VQcm9jZXNzb3IsIGltYWdlRGIgfTogSURlcHMpID0+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHJvdGF0ZUltYWdlKHsgaWQsIGRlZyB9OiB7IGlkOiBzdHJpbmcgfSAmIElSb3RhdGUpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICB0aHJvdyBuZXcgUmVxdWlyZWRQYXJhbWV0ZXJFcnJvcignSWQnKVxuICAgIH1cbiAgICBjb25zdCBmb3VuZEltYWdlID0gYXdhaXQgaW1hZ2VEYi5maW5kQnlJZCh7IGlkIH0pXG4gICAgaWYgKCFmb3VuZEltYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFBhcmFtZXRlckVycm9yKCdJbWFnZSBkb2VzIG5vdCBleGlzdC4nKVxuICAgIH1cbiAgICBjb25zdCB7IGZpbGVwYXRoLCBmaWxlbmFtZSB9ID0gZm91bmRJbWFnZVxuICAgIGNvbnN0IGlzVmFsaWRGaWxlUGF0aCA9IGZzLmV4aXN0c1N5bmMoZmlsZXBhdGgpXG4gICAgaWYgKCFpc1ZhbGlkRmlsZVBhdGgpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IoJ0ZpbGUgZG9lcyBub3QgZXhpc3QuJylcbiAgICB9XG4gICAgaWYgKCFkZWcpIHtcbiAgICAgIHRocm93IG5ldyBSZXF1aXJlZFBhcmFtZXRlckVycm9yKCdEZWdyZWUnKVxuICAgIH1cbiAgICBjb25zdCBtb2RpZmllZERlZ3JlZSA9IE51bWJlcihkZWcpXG5cbiAgICBjb25zdCBvdXRwdXRGaWxlID0gZmlsZW5hbWVHZW5lcmF0b3IoeyBmaWxlbmFtZSB9KVxuICAgIGNvbnN0IGltYWdlVG9Sb3RhdGUgPSBhd2FpdCBpbWFnZVByb2Nlc3NvcihmaWxlcGF0aClcbiAgICAgIC5yb3RhdGUobW9kaWZpZWREZWdyZWUpXG4gICAgICAudG9GaWxlKG91dHB1dEZpbGUpXG4gICAgYXdhaXQgaW1hZ2VEYi51cGRhdGUoeyBpZCwgZmlsZXBhdGg6IG91dHB1dEZpbGUgfSlcbiAgICByZXR1cm4gaW1hZ2VUb1JvdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3RhdGVJbWFnZVxuIl19