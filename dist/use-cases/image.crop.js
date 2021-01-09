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

    _fs.default.unlink(filepath, err => {
      if (err) {
        throw err;
      }
    });

    return imageToCrop;
  };
};

var _default = makeCroppedImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2UuY3JvcC50cyJdLCJuYW1lcyI6WyJtYWtlQ3JvcHBlZEltYWdlIiwiaW1hZ2VQcm9jZXNzb3IiLCJpbWFnZURiIiwiY3JvcEltYWdlIiwiaWQiLCJjcm9wRGV0YWlscyIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJmb3VuZEltYWdlIiwiZmluZEJ5SWQiLCJJbnZhbGlkUGFyYW1ldGVyRXJyb3IiLCJmaWxlcGF0aCIsImZpbGVuYW1lIiwiaXNWYWxpZEZpbGVQYXRoIiwiZnMiLCJleGlzdHNTeW5jIiwibW9kaWZpZWRYQXhpcyIsIk51bWJlciIsIm1vZGlmaWVkWUF4aXMiLCJoIiwidyIsIm91dHB1dEZpbGUiLCJpbWFnZVRvQ3JvcCIsImV4dHJhY3QiLCJ0b3AiLCJsZWZ0IiwidG9GaWxlIiwidXBkYXRlIiwidW5saW5rIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBR0EsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxjQUFGO0FBQWtCQyxFQUFBQTtBQUFsQixDQUFELEtBQXdDO0FBQy9ELFNBQU8sZUFBZUMsU0FBZixPQUdvQjtBQUFBLFFBSEs7QUFDOUJDLE1BQUFBO0FBRDhCLEtBR0w7QUFBQSxRQUR0QkMsV0FDc0I7O0FBQ3pCLFVBQU07QUFBRUMsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQSxNQUFUO0FBQWlCQyxNQUFBQSxDQUFqQjtBQUFvQkMsTUFBQUE7QUFBcEIsUUFBMEJKLFdBQWhDO0FBQ0EsVUFBTUssVUFBVSxHQUFHLE1BQU1SLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQjtBQUFFUCxNQUFBQTtBQUFGLEtBQWpCLENBQXpCOztBQUNBLFFBQUksQ0FBQ00sVUFBTCxFQUFpQjtBQUNmLFlBQU0sSUFBSUUsNkJBQUosQ0FBMEIsdUJBQTFCLENBQU47QUFDRDs7QUFFRCxVQUFNO0FBQUVDLE1BQUFBLFFBQUY7QUFBWUMsTUFBQUE7QUFBWixRQUF5QkosVUFBL0I7O0FBQ0EsVUFBTUssZUFBZSxHQUFHQyxZQUFHQyxVQUFILENBQWNKLFFBQWQsQ0FBeEI7O0FBQ0EsUUFBSSxDQUFDRSxlQUFMLEVBQXNCO0FBQ3BCLFlBQU0sSUFBSUgsNkJBQUosQ0FBMEIsc0JBQTFCLENBQU47QUFDRDs7QUFDRCxVQUFNTSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ1gsQ0FBRCxDQUE1QjtBQUNBLFVBQU1ZLGFBQWEsR0FBR0QsTUFBTSxDQUFDVixDQUFELENBQTVCO0FBQ0EsVUFBTVksQ0FBQyxHQUFHRixNQUFNLENBQUNaLE1BQUQsQ0FBaEI7QUFDQSxVQUFNZSxDQUFDLEdBQUdILE1BQU0sQ0FBQ2IsS0FBRCxDQUFoQjtBQUVBLFVBQU1pQixVQUFVLEdBQUcsaUNBQWtCO0FBQUVULE1BQUFBO0FBQUYsS0FBbEIsQ0FBbkI7QUFDQSxVQUFNVSxXQUFXLEdBQUcsTUFBTXZCLGNBQWMsQ0FBQ1ksUUFBRCxDQUFkLENBQ3ZCWSxPQUR1QixDQUNmO0FBQ1BuQixNQUFBQSxLQUFLLEVBQUVnQixDQURBO0FBRVBmLE1BQUFBLE1BQU0sRUFBRWMsQ0FGRDtBQUdQSyxNQUFBQSxHQUFHLEVBQUVOLGFBSEU7QUFJUE8sTUFBQUEsSUFBSSxFQUFFVDtBQUpDLEtBRGUsRUFPdkJVLE1BUHVCLENBT2hCTCxVQVBnQixDQUExQjtBQVFBLFVBQU1yQixPQUFPLENBQUMyQixNQUFSLENBQWU7QUFBRXpCLE1BQUFBLEVBQUY7QUFBTVMsTUFBQUEsUUFBUSxFQUFFVTtBQUFoQixLQUFmLENBQU47O0FBQ0FQLGdCQUFHYyxNQUFILENBQVVqQixRQUFWLEVBQXFCa0IsR0FBRCxJQUFTO0FBQzNCLFVBQUlBLEdBQUosRUFBUztBQUNQLGNBQU1BLEdBQU47QUFDRDtBQUNGLEtBSkQ7O0FBS0EsV0FBT1AsV0FBUDtBQUNELEdBcENEO0FBcUNELENBdENEOztlQXdDZXhCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgSW52YWxpZFBhcmFtZXRlckVycm9yIH0gZnJvbSAnLi4vaGVscGVycy9lcnJvcnMnXG5pbXBvcnQgeyBmaWxlbmFtZUdlbmVyYXRvciB9IGZyb20gJy4uL2hlbHBlcnMvZ2VuZXJhdGUuZmlsZW5hbWUnXG5pbXBvcnQgeyBJQ3JvcCwgSURlcHMgfSBmcm9tICcuLi90eXBpbmdzL2ludGVyZmFjZXMnXG5cbmNvbnN0IG1ha2VDcm9wcGVkSW1hZ2UgPSAoeyBpbWFnZVByb2Nlc3NvciwgaW1hZ2VEYiB9OiBJRGVwcykgPT4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gY3JvcEltYWdlKHtcbiAgICBpZCxcbiAgICAuLi5jcm9wRGV0YWlsc1xuICB9OiB7IGlkOiBzdHJpbmcgfSAmIElDcm9wKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB4LCB5IH0gPSBjcm9wRGV0YWlsc1xuICAgIGNvbnN0IGZvdW5kSW1hZ2UgPSBhd2FpdCBpbWFnZURiLmZpbmRCeUlkKHsgaWQgfSlcbiAgICBpZiAoIWZvdW5kSW1hZ2UpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IoJ0ltYWdlIGRvZXMgbm90IGV4aXN0LicpXG4gICAgfVxuXG4gICAgY29uc3QgeyBmaWxlcGF0aCwgZmlsZW5hbWUgfSA9IGZvdW5kSW1hZ2VcbiAgICBjb25zdCBpc1ZhbGlkRmlsZVBhdGggPSBmcy5leGlzdHNTeW5jKGZpbGVwYXRoKVxuICAgIGlmICghaXNWYWxpZEZpbGVQYXRoKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFBhcmFtZXRlckVycm9yKCdGaWxlIGRvZXMgbm90IGV4aXN0LicpXG4gICAgfVxuICAgIGNvbnN0IG1vZGlmaWVkWEF4aXMgPSBOdW1iZXIoeClcbiAgICBjb25zdCBtb2RpZmllZFlBeGlzID0gTnVtYmVyKHkpXG4gICAgY29uc3QgaCA9IE51bWJlcihoZWlnaHQpXG4gICAgY29uc3QgdyA9IE51bWJlcih3aWR0aClcblxuICAgIGNvbnN0IG91dHB1dEZpbGUgPSBmaWxlbmFtZUdlbmVyYXRvcih7IGZpbGVuYW1lIH0pXG4gICAgY29uc3QgaW1hZ2VUb0Nyb3AgPSBhd2FpdCBpbWFnZVByb2Nlc3NvcihmaWxlcGF0aClcbiAgICAgIC5leHRyYWN0KHtcbiAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgdG9wOiBtb2RpZmllZFlBeGlzLFxuICAgICAgICBsZWZ0OiBtb2RpZmllZFhBeGlzLFxuICAgICAgfSlcbiAgICAgIC50b0ZpbGUob3V0cHV0RmlsZSlcbiAgICBhd2FpdCBpbWFnZURiLnVwZGF0ZSh7IGlkLCBmaWxlcGF0aDogb3V0cHV0RmlsZSB9KVxuICAgIGZzLnVubGluayhmaWxlcGF0aCwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBpbWFnZVRvQ3JvcFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDcm9wcGVkSW1hZ2VcbiJdfQ==