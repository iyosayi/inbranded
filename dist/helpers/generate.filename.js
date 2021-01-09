"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filenameGenerator = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const filenameGenerator = ({
  filename
}) => {
  const finalFilename = Date.now() + '-' + filename;

  const outputFile = _path.default.resolve(`uploads/${finalFilename}`);

  return outputFile;
};

exports.filenameGenerator = filenameGenerator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2dlbmVyYXRlLmZpbGVuYW1lLnRzIl0sIm5hbWVzIjpbImZpbGVuYW1lR2VuZXJhdG9yIiwiZmlsZW5hbWUiLCJmaW5hbEZpbGVuYW1lIiwiRGF0ZSIsIm5vdyIsIm91dHB1dEZpbGUiLCJwYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ08sTUFBTUEsaUJBQWlCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBd0M7QUFDdkUsUUFBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsS0FBYSxHQUFiLEdBQW1CSCxRQUF6Qzs7QUFDQSxRQUFNSSxVQUFVLEdBQUdDLGNBQUtDLE9BQUwsQ0FBYyxXQUFVTCxhQUFjLEVBQXRDLENBQW5COztBQUNBLFNBQU9HLFVBQVA7QUFDRCxDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmV4cG9ydCBjb25zdCBmaWxlbmFtZUdlbmVyYXRvciA9ICh7IGZpbGVuYW1lIH06IHsgZmlsZW5hbWU6IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IGZpbmFsRmlsZW5hbWUgPSBEYXRlLm5vdygpICsgJy0nICsgZmlsZW5hbWVcbiAgY29uc3Qgb3V0cHV0RmlsZSA9IHBhdGgucmVzb2x2ZShgdXBsb2Fkcy8ke2ZpbmFsRmlsZW5hbWV9YClcbiAgcmV0dXJuIG91dHB1dEZpbGVcbn1cbiJdfQ==