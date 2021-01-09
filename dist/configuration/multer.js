"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _create = require("../helpers/create.dir");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dir = _path.default.resolve('uploads');
/**
 * @function createDir checks if the pdf directory exists already,
 * If not, it creates it on server startup
 */


(0, _create.createDir)(dir);

const storage = _multer.default.diskStorage({
  destination(req, file, cb) {
    cb(null, _path.default.resolve('uploads'));
  },

  filename(req, file, cb) {
    cb(null, file.originalname);
  }

});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, 'uploads');
  }

  return cb(null, false);
};

const upload = (0, _multer.default)({
  storage,
  fileFilter
});
var _default = upload;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWd1cmF0aW9uL211bHRlci50cyJdLCJuYW1lcyI6WyJkaXIiLCJwYXRoIiwicmVzb2x2ZSIsInN0b3JhZ2UiLCJtdWx0ZXIiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwicmVxIiwiZmlsZSIsImNiIiwiZmlsZW5hbWUiLCJvcmlnaW5hbG5hbWUiLCJmaWxlRmlsdGVyIiwibWltZXR5cGUiLCJ1cGxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBR0MsY0FBS0MsT0FBTCxDQUFhLFNBQWIsQ0FBWjtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSx1QkFBVUYsR0FBVjs7QUFFQSxNQUFNRyxPQUFPLEdBQUdDLGdCQUFPQyxXQUFQLENBQW1CO0FBQ2pDQyxFQUFBQSxXQUFXLENBQUNDLEdBQUQsRUFBZUMsSUFBZixFQUEwQkMsRUFBMUIsRUFBOEI7QUFDdkNBLElBQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU9SLGNBQUtDLE9BQUwsQ0FBYSxTQUFiLENBQVAsQ0FBRjtBQUNELEdBSGdDOztBQUlqQ1EsRUFBQUEsUUFBUSxDQUFDSCxHQUFELEVBQU1DLElBQU4sRUFBWUMsRUFBWixFQUFnQjtBQUN0QkEsSUFBQUEsRUFBRSxDQUFDLElBQUQsRUFBT0QsSUFBSSxDQUFDRyxZQUFaLENBQUY7QUFDRDs7QUFOZ0MsQ0FBbkIsQ0FBaEI7O0FBU0EsTUFBTUMsVUFBVSxHQUFHLENBQUNMLEdBQUQsRUFBZUMsSUFBZixFQUEwQkMsRUFBMUIsS0FBbUQ7QUFDcEUsTUFBSUQsSUFBSSxDQUFDSyxRQUFMLEtBQWtCLFlBQWxCLElBQWtDTCxJQUFJLENBQUNLLFFBQUwsS0FBa0IsV0FBeEQsRUFBcUU7QUFDbkVKLElBQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU8sU0FBUCxDQUFGO0FBQ0Q7O0FBQ0QsU0FBT0EsRUFBRSxDQUFDLElBQUQsRUFBTyxLQUFQLENBQVQ7QUFDRCxDQUxEOztBQU9BLE1BQU1LLE1BQU0sR0FBRyxxQkFBTztBQUFFWCxFQUFBQSxPQUFGO0FBQVdTLEVBQUFBO0FBQVgsQ0FBUCxDQUFmO2VBQ2VFLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcidcbmltcG9ydCB7IGV4aXN0c1N5bmMsIG1rZGlyIH0gZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBjcmVhdGVEaXIgfSBmcm9tICcuLi9oZWxwZXJzL2NyZWF0ZS5kaXInXG5cbmNvbnN0IGRpciA9IHBhdGgucmVzb2x2ZSgndXBsb2FkcycpXG5cbi8qKlxuICogQGZ1bmN0aW9uIGNyZWF0ZURpciBjaGVja3MgaWYgdGhlIHBkZiBkaXJlY3RvcnkgZXhpc3RzIGFscmVhZHksXG4gKiBJZiBub3QsIGl0IGNyZWF0ZXMgaXQgb24gc2VydmVyIHN0YXJ0dXBcbiAqL1xuY3JlYXRlRGlyKGRpcilcblxuY29uc3Qgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XG4gIGRlc3RpbmF0aW9uKHJlcTogUmVxdWVzdCwgZmlsZTogYW55LCBjYikge1xuICAgIGNiKG51bGwsIHBhdGgucmVzb2x2ZSgndXBsb2FkcycpKVxuICB9LFxuICBmaWxlbmFtZShyZXEsIGZpbGUsIGNiKSB7XG4gICAgY2IobnVsbCwgZmlsZS5vcmlnaW5hbG5hbWUpXG4gIH0sXG59KVxuXG5jb25zdCBmaWxlRmlsdGVyID0gKHJlcTogUmVxdWVzdCwgZmlsZTogYW55LCBjYjogQ2FsbGFibGVGdW5jdGlvbikgPT4ge1xuICBpZiAoZmlsZS5taW1ldHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUubWltZXR5cGUgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgY2IobnVsbCwgJ3VwbG9hZHMnKVxuICB9XG4gIHJldHVybiBjYihudWxsLCBmYWxzZSlcbn1cblxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZSwgZmlsZUZpbHRlciB9KVxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkXG4iXX0=