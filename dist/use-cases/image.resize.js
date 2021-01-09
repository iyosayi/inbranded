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

    _fs.default.unlink(filepath, err => {
      if (err) {
        throw err;
      }
    });

    return imageToResize;
  };
};

var _default = makeResizedImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2UucmVzaXplLnRzIl0sIm5hbWVzIjpbIm1ha2VSZXNpemVkSW1hZ2UiLCJpbWFnZVByb2Nlc3NvciIsImltYWdlRGIiLCJyZXNpemVJbWFnZSIsImlkIiwicmVzaXplRGV0YWlscyIsIndpZHRoIiwiaGVpZ2h0IiwiUmVxdWlyZWRQYXJhbWV0ZXJFcnJvciIsImZvdW5kSW1hZ2UiLCJmaW5kQnlJZCIsIkludmFsaWRQYXJhbWV0ZXJFcnJvciIsImZpbGVwYXRoIiwiZmlsZW5hbWUiLCJpc1ZhbGlkRmlsZVBhdGgiLCJmcyIsImV4aXN0c1N5bmMiLCJtb2RpZmllZEhlaWdodCIsIk51bWJlciIsIm1vZGlmaWVkV2lkdGgiLCJvdXRwdXRGaWxlIiwiaW1hZ2VUb1Jlc2l6ZSIsInJlc2l6ZSIsInRvRmlsZSIsInVwZGF0ZSIsInVubGluayIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUtBOzs7Ozs7OztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLENBQUM7QUFBRUMsRUFBQUEsY0FBRjtBQUFrQkMsRUFBQUE7QUFBbEIsQ0FBRCxLQUF3QztBQUMvRCxTQUFPLGVBQWVDLFdBQWYsT0FHc0I7QUFBQSxRQUhLO0FBQ2hDQyxNQUFBQTtBQURnQyxLQUdMO0FBQUEsUUFEeEJDLGFBQ3dCOztBQUMzQixVQUFNO0FBQUVDLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxRQUFvQkYsYUFBMUI7O0FBQ0EsUUFBSSxDQUFDRCxFQUFMLEVBQVM7QUFDUCxZQUFNLElBQUlJLDhCQUFKLENBQTJCLElBQTNCLENBQU47QUFDRDs7QUFDRCxVQUFNQyxVQUFVLEdBQUcsTUFBTVAsT0FBTyxDQUFDUSxRQUFSLENBQWlCO0FBQUVOLE1BQUFBO0FBQUYsS0FBakIsQ0FBekI7O0FBQ0EsUUFBSSxDQUFDSyxVQUFMLEVBQWlCO0FBQ2YsWUFBTSxJQUFJRSw2QkFBSixDQUEwQix1QkFBMUIsQ0FBTjtBQUNEOztBQUNELFVBQU07QUFBRUMsTUFBQUEsUUFBRjtBQUFZQyxNQUFBQTtBQUFaLFFBQXlCSixVQUEvQjs7QUFDQSxRQUFJLENBQUNHLFFBQUwsRUFBZTtBQUNiLFlBQU0sSUFBSUQsNkJBQUosQ0FBMEIsZ0JBQTFCLENBQU47QUFDRDs7QUFDRCxVQUFNRyxlQUFlLEdBQUdDLFlBQUdDLFVBQUgsQ0FBY0osUUFBZCxDQUF4Qjs7QUFDQSxRQUFJLENBQUNFLGVBQUwsRUFBc0I7QUFDcEIsWUFBTSxJQUFJSCw2QkFBSixDQUEwQixzQkFBMUIsQ0FBTjtBQUNEOztBQUNELFFBQUksQ0FBQ0wsS0FBRCxJQUFVLENBQUNDLE1BQWYsRUFBdUI7QUFDckIsWUFBTSxJQUFJQyw4QkFBSixDQUEyQiw2QkFBM0IsQ0FBTjtBQUNEOztBQUNELFVBQU1TLGNBQWMsR0FBR0MsTUFBTSxDQUFDWCxNQUFELENBQTdCO0FBQ0EsVUFBTVksYUFBYSxHQUFHRCxNQUFNLENBQUNaLEtBQUQsQ0FBNUI7QUFFQSxVQUFNYyxVQUFVLEdBQUcsaUNBQWtCO0FBQUVQLE1BQUFBO0FBQUYsS0FBbEIsQ0FBbkI7QUFDQSxVQUFNUSxhQUFhLEdBQUcsTUFBTXBCLGNBQWMsQ0FBQ1csUUFBRCxDQUFkLENBQ3pCVSxNQUR5QixDQUNsQjtBQUFFaEIsTUFBQUEsS0FBSyxFQUFFYSxhQUFUO0FBQXdCWixNQUFBQSxNQUFNLEVBQUVVO0FBQWhDLEtBRGtCLEVBRXpCTSxNQUZ5QixDQUVsQkgsVUFGa0IsQ0FBNUI7QUFHQSxVQUFNbEIsT0FBTyxDQUFDc0IsTUFBUixDQUFlO0FBQUVwQixNQUFBQSxFQUFGO0FBQU1RLE1BQUFBLFFBQVEsRUFBRVE7QUFBaEIsS0FBZixDQUFOOztBQUNBTCxnQkFBR1UsTUFBSCxDQUFVYixRQUFWLEVBQXFCYyxHQUFELElBQVM7QUFDM0IsVUFBR0EsR0FBSCxFQUFRO0FBQ04sY0FBTUEsR0FBTjtBQUNEO0FBQ0YsS0FKRDs7QUFLQSxXQUFPTCxhQUFQO0FBQ0QsR0FyQ0Q7QUFzQ0QsQ0F2Q0Q7O2VBeUNlckIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQge1xuICBJbnZhbGlkUGFyYW1ldGVyRXJyb3IsXG4gIFJlcXVpcmVkUGFyYW1ldGVyRXJyb3IsXG59IGZyb20gJy4uL2hlbHBlcnMvZXJyb3JzJ1xuaW1wb3J0IHsgSURlcHMsIElSZXNpemUgfSBmcm9tICcuLi90eXBpbmdzL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBmaWxlbmFtZUdlbmVyYXRvciB9IGZyb20gJy4uL2hlbHBlcnMvZ2VuZXJhdGUuZmlsZW5hbWUnXG5cbmNvbnN0IG1ha2VSZXNpemVkSW1hZ2UgPSAoeyBpbWFnZVByb2Nlc3NvciwgaW1hZ2VEYiB9OiBJRGVwcykgPT4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzaXplSW1hZ2Uoe1xuICAgIGlkLFxuICAgIC4uLnJlc2l6ZURldGFpbHNcbiAgfTogeyBpZDogc3RyaW5nIH0gJiBJUmVzaXplKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXNpemVEZXRhaWxzXG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkUGFyYW1ldGVyRXJyb3IoJ0lkJylcbiAgICB9XG4gICAgY29uc3QgZm91bmRJbWFnZSA9IGF3YWl0IGltYWdlRGIuZmluZEJ5SWQoeyBpZCB9KVxuICAgIGlmICghZm91bmRJbWFnZSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFcnJvcignSW1hZ2UgZG9lcyBub3QgZXhpc3QuJylcbiAgICB9XG4gICAgY29uc3QgeyBmaWxlcGF0aCwgZmlsZW5hbWUgfSA9IGZvdW5kSW1hZ2VcbiAgICBpZiAoIWZpbGVwYXRoKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFBhcmFtZXRlckVycm9yKCdQYXRoIG5vdCBmb3VuZCcpXG4gICAgfVxuICAgIGNvbnN0IGlzVmFsaWRGaWxlUGF0aCA9IGZzLmV4aXN0c1N5bmMoZmlsZXBhdGgpXG4gICAgaWYgKCFpc1ZhbGlkRmlsZVBhdGgpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXJyb3IoJ0ZpbGUgZG9lcyBub3QgZXhpc3QuJylcbiAgICB9XG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICB0aHJvdyBuZXcgUmVxdWlyZWRQYXJhbWV0ZXJFcnJvcignV2lkdGggYW5kIEhlaWdodCBQYXJhbWV0ZXJzJylcbiAgICB9XG4gICAgY29uc3QgbW9kaWZpZWRIZWlnaHQgPSBOdW1iZXIoaGVpZ2h0KVxuICAgIGNvbnN0IG1vZGlmaWVkV2lkdGggPSBOdW1iZXIod2lkdGgpXG5cbiAgICBjb25zdCBvdXRwdXRGaWxlID0gZmlsZW5hbWVHZW5lcmF0b3IoeyBmaWxlbmFtZSB9KVxuICAgIGNvbnN0IGltYWdlVG9SZXNpemUgPSBhd2FpdCBpbWFnZVByb2Nlc3NvcihmaWxlcGF0aClcbiAgICAgIC5yZXNpemUoeyB3aWR0aDogbW9kaWZpZWRXaWR0aCwgaGVpZ2h0OiBtb2RpZmllZEhlaWdodCB9KVxuICAgICAgLnRvRmlsZShvdXRwdXRGaWxlKVxuICAgIGF3YWl0IGltYWdlRGIudXBkYXRlKHsgaWQsIGZpbGVwYXRoOiBvdXRwdXRGaWxlIH0pXG4gICAgZnMudW5saW5rKGZpbGVwYXRoLCAoZXJyKSA9PiB7XG4gICAgICBpZihlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaW1hZ2VUb1Jlc2l6ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSZXNpemVkSW1hZ2VcbiJdfQ==