"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("../helpers/http.response"));

var _wrap = require("../helpers/wrap.async");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makePatchRotate = ({
  rotateImage
}) => {
  return (0, _wrap.wrapAsync)(async httpRequest => {
    const {
      id
    } = httpRequest.params;
    const {
      deg
    } = httpRequest.query;
    const image = await rotateImage({
      id,
      deg
    });
    return (0, _http.default)({
      status: true,
      statusCode: 200,
      message: 'Image rotated successfully',
      data: image
    });
  });
};

var _default = makePatchRotate;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wYXRjaC5yb3RhdGUudHMiXSwibmFtZXMiOlsibWFrZVBhdGNoUm90YXRlIiwicm90YXRlSW1hZ2UiLCJodHRwUmVxdWVzdCIsImlkIiwicGFyYW1zIiwiZGVnIiwicXVlcnkiLCJpbWFnZSIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBVUEsTUFBTUEsZUFBZSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQW1DO0FBQ3pELFNBQU8scUJBQVUsTUFBT0MsV0FBUCxJQUE0QjtBQUMzQyxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBU0QsV0FBVyxDQUFDRSxNQUEzQjtBQUNBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFVSCxXQUFXLENBQUNJLEtBQTVCO0FBRUEsVUFBTUMsS0FBSyxHQUFHLE1BQU1OLFdBQVcsQ0FBQztBQUFFRSxNQUFBQSxFQUFGO0FBQU1FLE1BQUFBO0FBQU4sS0FBRCxDQUEvQjtBQUNBLFdBQU8sbUJBQVk7QUFDakJHLE1BQUFBLE1BQU0sRUFBRSxJQURTO0FBRWpCQyxNQUFBQSxVQUFVLEVBQUUsR0FGSztBQUdqQkMsTUFBQUEsT0FBTyxFQUFFLDRCQUhRO0FBSWpCQyxNQUFBQSxJQUFJLEVBQUVKO0FBSlcsS0FBWixDQUFQO0FBTUQsR0FYTSxDQUFQO0FBWUQsQ0FiRDs7ZUFlZVAsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGlSZXNwb25zZSBmcm9tICcuLi9oZWxwZXJzL2h0dHAucmVzcG9uc2UnXG5pbXBvcnQgeyB3cmFwQXN5bmMgfSBmcm9tICcuLi9oZWxwZXJzL3dyYXAuYXN5bmMnXG5pbXBvcnQgeyBJUm90YXRlIH0gZnJvbSAnLi4vdHlwaW5ncy9pbnRlcmZhY2VzJ1xuXG5pbnRlcmZhY2UgSVBhdGNoUm90YXRlIHtcbiAgcm90YXRlSW1hZ2U6ICh7XG4gICAgaWQsXG4gICAgZGVnXG4gIH06IHsgaWQ6IHN0cmluZyB9ICYgSVJvdGF0ZSkgPT4gUHJvbWlzZTxhbnk+XG59XG5cbmNvbnN0IG1ha2VQYXRjaFJvdGF0ZSA9ICh7IHJvdGF0ZUltYWdlIH06IElQYXRjaFJvdGF0ZSkgPT4ge1xuICByZXR1cm4gd3JhcEFzeW5jKGFzeW5jIChodHRwUmVxdWVzdDogYW55KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gaHR0cFJlcXVlc3QucGFyYW1zXG4gICAgY29uc3QgeyBkZWcgfSA9IGh0dHBSZXF1ZXN0LnF1ZXJ5XG5cbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHJvdGF0ZUltYWdlKHsgaWQsIGRlZyB9KVxuICAgIHJldHVybiBhcGlSZXNwb25zZSh7XG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBtZXNzYWdlOiAnSW1hZ2Ugcm90YXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgZGF0YTogaW1hZ2UsXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVBhdGNoUm90YXRlXG4iXX0=