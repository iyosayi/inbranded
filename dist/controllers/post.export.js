"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("../helpers/http.response"));

var _wrap = require("../helpers/wrap.async");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makePostExport = ({
  exportImage
}) => {
  return (0, _wrap.wrapAsync)(async httpRequest => {
    const {
      id
    } = httpRequest.params;
    const {
      imageType
    } = httpRequest.query;
    const image = await exportImage({
      id,
      imageType
    });
    return (0, _http.default)({
      status: true,
      statusCode: 200,
      message: 'Image exported successfully',
      data: image
    });
  });
};

var _default = makePostExport;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wb3N0LmV4cG9ydC50cyJdLCJuYW1lcyI6WyJtYWtlUG9zdEV4cG9ydCIsImV4cG9ydEltYWdlIiwiaHR0cFJlcXVlc3QiLCJpZCIsInBhcmFtcyIsImltYWdlVHlwZSIsInF1ZXJ5IiwiaW1hZ2UiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQWFBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFtQztBQUN4RCxTQUFPLHFCQUFVLE1BQU9DLFdBQVAsSUFBNEI7QUFDM0MsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQVNELFdBQVcsQ0FBQ0UsTUFBM0I7QUFDQSxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBZ0JILFdBQVcsQ0FBQ0ksS0FBbEM7QUFFQSxVQUFNQyxLQUFLLEdBQUcsTUFBTU4sV0FBVyxDQUFDO0FBQUVFLE1BQUFBLEVBQUY7QUFBTUUsTUFBQUE7QUFBTixLQUFELENBQS9CO0FBQ0EsV0FBTyxtQkFBWTtBQUNqQkcsTUFBQUEsTUFBTSxFQUFFLElBRFM7QUFFakJDLE1BQUFBLFVBQVUsRUFBRSxHQUZLO0FBR2pCQyxNQUFBQSxPQUFPLEVBQUUsNkJBSFE7QUFJakJDLE1BQUFBLElBQUksRUFBRUo7QUFKVyxLQUFaLENBQVA7QUFNRCxHQVhNLENBQVA7QUFZRCxDQWJEOztlQWVlUCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaVJlc3BvbnNlIGZyb20gJy4uL2hlbHBlcnMvaHR0cC5yZXNwb25zZSdcbmltcG9ydCB7IHdyYXBBc3luYyB9IGZyb20gJy4uL2hlbHBlcnMvd3JhcC5hc3luYydcblxuXG5pbnRlcmZhY2UgSUV4cG9ydEltYWdlIHtcbiAgZXhwb3J0SW1hZ2U6ICh7XG4gICAgaWQsXG4gICAgaW1hZ2VUeXBlLFxuICB9OiB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIGltYWdlVHlwZTogc3RyaW5nXG4gIH0pID0+IFByb21pc2U8YW55PlxufVxuXG5jb25zdCBtYWtlUG9zdEV4cG9ydCA9ICh7IGV4cG9ydEltYWdlIH06IElFeHBvcnRJbWFnZSkgPT4ge1xuICByZXR1cm4gd3JhcEFzeW5jKGFzeW5jIChodHRwUmVxdWVzdDogYW55KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gaHR0cFJlcXVlc3QucGFyYW1zXG4gICAgY29uc3QgeyBpbWFnZVR5cGUgfSA9IGh0dHBSZXF1ZXN0LnF1ZXJ5XG5cbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGV4cG9ydEltYWdlKHsgaWQsIGltYWdlVHlwZSB9KVxuICAgIHJldHVybiBhcGlSZXNwb25zZSh7XG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAnSW1hZ2UgZXhwb3J0ZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGRhdGE6IGltYWdlLFxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VQb3N0RXhwb3J0XG4iXX0=