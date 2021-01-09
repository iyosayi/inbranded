"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("../helpers/http.response"));

var _wrap = require("../helpers/wrap.async");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const makePatchResize = ({
  resizeImage
}) => {
  return (0, _wrap.wrapAsync)(async httpRequest => {
    const {
      id
    } = httpRequest.params;

    const resizeDetails = _extends({}, httpRequest.query);

    const image = await resizeImage(_objectSpread({
      id
    }, resizeDetails));
    return (0, _http.default)({
      status: true,
      statusCode: 200,
      message: 'Image resized successfully',
      data: image
    });
  });
};

var _default = makePatchResize;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wYXRjaC5yZXNpemUudHMiXSwibmFtZXMiOlsibWFrZVBhdGNoUmVzaXplIiwicmVzaXplSW1hZ2UiLCJodHRwUmVxdWVzdCIsImlkIiwicGFyYW1zIiwicmVzaXplRGV0YWlscyIsInF1ZXJ5IiwiaW1hZ2UiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBVUEsTUFBTUEsZUFBZSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQW1DO0FBQ3pELFNBQU8scUJBQVUsTUFBT0MsV0FBUCxJQUE0QjtBQUMzQyxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBU0QsV0FBVyxDQUFDRSxNQUEzQjs7QUFDQSxVQUFXQyxhQUFYLGdCQUFzQ0gsV0FBVyxDQUFDSSxLQUFsRDs7QUFFQSxVQUFNQyxLQUFLLEdBQUcsTUFBTU4sV0FBVztBQUFHRSxNQUFBQTtBQUFILE9BQVVFLGFBQVYsRUFBL0I7QUFDQSxXQUFPLG1CQUFZO0FBQ2pCRyxNQUFBQSxNQUFNLEVBQUUsSUFEUztBQUVqQkMsTUFBQUEsVUFBVSxFQUFFLEdBRks7QUFHakJDLE1BQUFBLE9BQU8sRUFBRSw0QkFIUTtBQUlqQkMsTUFBQUEsSUFBSSxFQUFFSjtBQUpXLEtBQVosQ0FBUDtBQU1ELEdBWE0sQ0FBUDtBQVlELENBYkQ7O2VBZWVQLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpUmVzcG9uc2UgZnJvbSAnLi4vaGVscGVycy9odHRwLnJlc3BvbnNlJ1xuaW1wb3J0IHsgd3JhcEFzeW5jIH0gZnJvbSAnLi4vaGVscGVycy93cmFwLmFzeW5jJ1xuaW1wb3J0IHsgSVJlc2l6ZSB9IGZyb20gJy4uL3R5cGluZ3MvaW50ZXJmYWNlcydcblxuaW50ZXJmYWNlIElQYXRjaFJlc2l6ZSB7XG4gIHJlc2l6ZUltYWdlOiAoe1xuICAgIGlkLFxuICAgIC4uLnJlc2l6ZURldGFpbHNcbiAgfTogeyBpZDogc3RyaW5nIH0gJiBJUmVzaXplKSA9PiBQcm9taXNlPGFueT5cbn1cblxuY29uc3QgbWFrZVBhdGNoUmVzaXplID0gKHsgcmVzaXplSW1hZ2UgfTogSVBhdGNoUmVzaXplKSA9PiB7XG4gIHJldHVybiB3cmFwQXN5bmMoYXN5bmMgKGh0dHBSZXF1ZXN0OiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBodHRwUmVxdWVzdC5wYXJhbXNcbiAgICBjb25zdCB7IC4uLnJlc2l6ZURldGFpbHMgfTogSVJlc2l6ZSA9IGh0dHBSZXF1ZXN0LnF1ZXJ5XG5cbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHJlc2l6ZUltYWdlKHsgaWQsIC4uLnJlc2l6ZURldGFpbHMgfSlcbiAgICByZXR1cm4gYXBpUmVzcG9uc2Uoe1xuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ0ltYWdlIHJlc2l6ZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGRhdGE6IGltYWdlLFxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VQYXRjaFJlc2l6ZVxuIl19