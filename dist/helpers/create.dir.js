"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDir = void 0;

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function createDir checks if the pdf directory exists already,
 * If not, it creates it on server startup
 */
const createDir = function createDir(directory) {
  if (!(0, _fs.existsSync)(directory)) {
    (0, _fs.mkdir)(_path.default.resolve(directory), {
      recursive: true
    }, err => {
      if (err) {
        throw err;
      }

      return 'done';
    });
  }
};

exports.createDir = createDir;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2NyZWF0ZS5kaXIudHMiXSwibmFtZXMiOlsiY3JlYXRlRGlyIiwiZGlyZWN0b3J5IiwicGF0aCIsInJlc29sdmUiLCJyZWN1cnNpdmUiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsU0FBUyxHQUFHLFNBQVNBLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQXNDO0FBQzdELE1BQUksQ0FBQyxvQkFBV0EsU0FBWCxDQUFMLEVBQTRCO0FBQzFCLG1CQUFNQyxjQUFLQyxPQUFMLENBQWFGLFNBQWIsQ0FBTixFQUErQjtBQUFFRyxNQUFBQSxTQUFTLEVBQUU7QUFBYixLQUEvQixFQUFxREMsR0FBRCxJQUFTO0FBQzNELFVBQUlBLEdBQUosRUFBUztBQUNQLGNBQU1BLEdBQU47QUFDRDs7QUFDRCxhQUFPLE1BQVA7QUFDRCxLQUxEO0FBTUQ7QUFDRixDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhpc3RzU3luYywgbWtkaXIgfSBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8qKlxuICogQGZ1bmN0aW9uIGNyZWF0ZURpciBjaGVja3MgaWYgdGhlIHBkZiBkaXJlY3RvcnkgZXhpc3RzIGFscmVhZHksXG4gKiBJZiBub3QsIGl0IGNyZWF0ZXMgaXQgb24gc2VydmVyIHN0YXJ0dXBcbiAqL1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGlyID0gZnVuY3Rpb24gY3JlYXRlRGlyKGRpcmVjdG9yeTogc3RyaW5nKSB7XG4gIGlmICghZXhpc3RzU3luYyhkaXJlY3RvcnkpKSB7XG4gICAgbWtkaXIocGF0aC5yZXNvbHZlKGRpcmVjdG9yeSksIHsgcmVjdXJzaXZlOiB0cnVlIH0sIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgICByZXR1cm4gJ2RvbmUnXG4gICAgfSlcbiAgfVxufVxuIl19