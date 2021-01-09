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

const makeResizedImage = ({
  imageProcessor,
  imageDb
}) => {
  return async function resizeImage(_ref) {
    let {
      id
    } = _ref,
        resizeDetails = _objectWithoutProperties(_ref, ["id"]);

    const {
      width,
      height
    } = resizeDetails;

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

    if (!filepath) {
      throw new _errors.InvalidParameterError('Path not found');
    }

    const isValidFilePath = _fs.default.existsSync(filepath);

    if (!isValidFilePath) {
      throw new _errors.InvalidParameterError('File does not exist.');
    }

    if (!width || !height) {
      throw new _errors.RequiredParameterError('Width and Height Parameters');
    }

    const modifiedHeight = Number(height);
    const modifiedWidth = Number(width);
    const outputFile = (0, _generate.filenameGenerator)({
      filename
    });
    const imageToResize = await imageProcessor(filepath).resize({
      width: modifiedWidth,
      height: modifiedHeight
    }).toFile(outputFile);
    await imageDb.update({
      id,
      filepath: outputFile
    });
    console.log(imageToResize);
    return imageToResize;
  };
};

var _default = makeResizedImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2UucmVzaXplLnRzIl0sIm5hbWVzIjpbIm1ha2VSZXNpemVkSW1hZ2UiLCJpbWFnZVByb2Nlc3NvciIsImltYWdlRGIiLCJyZXNpemVJbWFnZSIsImlkIiwicmVzaXplRGV0YWlscyIsIndpZHRoIiwiaGVpZ2h0IiwiUmVxdWlyZWRQYXJhbWV0ZXJFcnJvciIsImZvdW5kSW1hZ2UiLCJmaW5kQnlJZCIsIkludmFsaWRQYXJhbWV0ZXJFcnJvciIsImZpbGVwYXRoIiwiZmlsZW5hbWUiLCJpc1ZhbGlkRmlsZVBhdGgiLCJmcyIsImV4aXN0c1N5bmMiLCJtb2RpZmllZEhlaWdodCIsIk51bWJlciIsIm1vZGlmaWVkV2lkdGgiLCJvdXRwdXRGaWxlIiwiaW1hZ2VUb1Jlc2l6ZSIsInJlc2l6ZSIsInRvRmlsZSIsInVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFLQTs7Ozs7Ozs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLGNBQUY7QUFBa0JDLEVBQUFBO0FBQWxCLENBQUQsS0FBd0M7QUFDL0QsU0FBTyxlQUFlQyxXQUFmLE9BR3NCO0FBQUEsUUFISztBQUNoQ0MsTUFBQUE7QUFEZ0MsS0FHTDtBQUFBLFFBRHhCQyxhQUN3Qjs7QUFDM0IsVUFBTTtBQUFFQyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBO0FBQVQsUUFBb0JGLGFBQTFCOztBQUNBLFFBQUksQ0FBQ0QsRUFBTCxFQUFTO0FBQ1AsWUFBTSxJQUFJSSw4QkFBSixDQUEyQixJQUEzQixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTUMsVUFBVSxHQUFHLE1BQU1QLE9BQU8sQ0FBQ1EsUUFBUixDQUFpQjtBQUFFTixNQUFBQTtBQUFGLEtBQWpCLENBQXpCOztBQUNBLFFBQUksQ0FBQ0ssVUFBTCxFQUFpQjtBQUNmLFlBQU0sSUFBSUUsNkJBQUosQ0FBMEIsdUJBQTFCLENBQU47QUFDRDs7QUFDRCxVQUFNO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUE7QUFBWixRQUF5QkosVUFBL0I7O0FBQ0EsUUFBSSxDQUFDRyxRQUFMLEVBQWU7QUFDYixZQUFNLElBQUlELDZCQUFKLENBQTBCLGdCQUExQixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTUcsZUFBZSxHQUFHQyxZQUFHQyxVQUFILENBQWNKLFFBQWQsQ0FBeEI7O0FBQ0EsUUFBSSxDQUFDRSxlQUFMLEVBQXNCO0FBQ3BCLFlBQU0sSUFBSUgsNkJBQUosQ0FBMEIsc0JBQTFCLENBQU47QUFDRDs7QUFDRCxRQUFJLENBQUNMLEtBQUQsSUFBVSxDQUFDQyxNQUFmLEVBQXVCO0FBQ3JCLFlBQU0sSUFBSUMsOEJBQUosQ0FBMkIsNkJBQTNCLENBQU47QUFDRDs7QUFDRCxVQUFNUyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ1gsTUFBRCxDQUE3QjtBQUNBLFVBQU1ZLGFBQWEsR0FBR0QsTUFBTSxDQUFDWixLQUFELENBQTVCO0FBRUEsVUFBTWMsVUFBVSxHQUFHLGlDQUFrQjtBQUFFUCxNQUFBQTtBQUFGLEtBQWxCLENBQW5CO0FBQ0EsVUFBTVEsYUFBYSxHQUFHLE1BQU1wQixjQUFjLENBQUNXLFFBQUQsQ0FBZCxDQUN6QlUsTUFEeUIsQ0FDbEI7QUFBRWhCLE1BQUFBLEtBQUssRUFBRWEsYUFBVDtBQUF3QlosTUFBQUEsTUFBTSxFQUFFVTtBQUFoQyxLQURrQixFQUV6Qk0sTUFGeUIsQ0FFbEJILFVBRmtCLENBQTVCO0FBR0EsVUFBTWxCLE9BQU8sQ0FBQ3NCLE1BQVIsQ0FBZTtBQUFFcEIsTUFBQUEsRUFBRjtBQUFNUSxNQUFBQSxRQUFRLEVBQUVRO0FBQWhCLEtBQWYsQ0FBTjtBQUNBSyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsYUFBWjtBQUNBLFdBQU9BLGFBQVA7QUFDRCxHQWpDRDtBQWtDRCxDQW5DRDs7ZUFxQ2VyQixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCB7XG4gIEludmFsaWRQYXJhbWV0ZXJFcnJvcixcbiAgUmVxdWlyZWRQYXJhbWV0ZXJFcnJvcixcbn0gZnJvbSAnLi4vaGVscGVycy9lcnJvcnMnXG5pbXBvcnQgeyBJRGVwcywgSVJlc2l6ZSB9IGZyb20gJy4uL3R5cGluZ3MvaW50ZXJmYWNlcydcbmltcG9ydCB7IGZpbGVuYW1lR2VuZXJhdG9yIH0gZnJvbSAnLi4vaGVscGVycy9nZW5lcmF0ZS5maWxlbmFtZSdcblxuY29uc3QgbWFrZVJlc2l6ZWRJbWFnZSA9ICh7IGltYWdlUHJvY2Vzc29yLCBpbWFnZURiIH06IElEZXBzKSA9PiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiByZXNpemVJbWFnZSh7XG4gICAgaWQsXG4gICAgLi4ucmVzaXplRGV0YWlsc1xuICB9OiB7IGlkOiBzdHJpbmcgfSAmIElSZXNpemUpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlc2l6ZURldGFpbHNcbiAgICBpZiAoIWlkKSB7XG4gICAgICB0aHJvdyBuZXcgUmVxdWlyZWRQYXJhbWV0ZXJFcnJvcignSWQnKVxuICAgIH1cbiAgICBjb25zdCBmb3VuZEltYWdlID0gYXdhaXQgaW1hZ2VEYi5maW5kQnlJZCh7IGlkIH0pXG4gICAgaWYgKCFmb3VuZEltYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFBhcmFtZXRlckVycm9yKCdJbWFnZSBkb2VzIG5vdCBleGlzdC4nKVxuICAgIH1cbiAgICBjb25zdCB7IGZpbGVwYXRoLCBmaWxlbmFtZSB9ID0gZm91bmRJbWFnZVxuICAgIGlmICghZmlsZXBhdGgpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IoJ1BhdGggbm90IGZvdW5kJylcbiAgICB9XG4gICAgY29uc3QgaXNWYWxpZEZpbGVQYXRoID0gZnMuZXhpc3RzU3luYyhmaWxlcGF0aClcbiAgICBpZiAoIWlzVmFsaWRGaWxlUGF0aCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdC4nKVxuICAgIH1cbiAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgIHRocm93IG5ldyBSZXF1aXJlZFBhcmFtZXRlckVycm9yKCdXaWR0aCBhbmQgSGVpZ2h0IFBhcmFtZXRlcnMnKVxuICAgIH1cbiAgICBjb25zdCBtb2RpZmllZEhlaWdodCA9IE51bWJlcihoZWlnaHQpXG4gICAgY29uc3QgbW9kaWZpZWRXaWR0aCA9IE51bWJlcih3aWR0aClcblxuICAgIGNvbnN0IG91dHB1dEZpbGUgPSBmaWxlbmFtZUdlbmVyYXRvcih7IGZpbGVuYW1lIH0pXG4gICAgY29uc3QgaW1hZ2VUb1Jlc2l6ZSA9IGF3YWl0IGltYWdlUHJvY2Vzc29yKGZpbGVwYXRoKVxuICAgICAgLnJlc2l6ZSh7IHdpZHRoOiBtb2RpZmllZFdpZHRoLCBoZWlnaHQ6IG1vZGlmaWVkSGVpZ2h0IH0pXG4gICAgICAudG9GaWxlKG91dHB1dEZpbGUpXG4gICAgYXdhaXQgaW1hZ2VEYi51cGRhdGUoeyBpZCwgZmlsZXBhdGg6IG91dHB1dEZpbGUgfSlcbiAgICBjb25zb2xlLmxvZyhpbWFnZVRvUmVzaXplKVxuICAgIHJldHVybiBpbWFnZVRvUmVzaXplXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJlc2l6ZWRJbWFnZVxuIl19