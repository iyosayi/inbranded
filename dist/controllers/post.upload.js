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

const makePostUpload = ({
  uploadImage
}) => {
  return (0, _wrap.wrapAsync)(async httpRequest => {
    const details = _extends({}, httpRequest.file);

    const image = await uploadImage(_objectSpread({}, details));
    return (0, _http.default)({
      status: true,
      statusCode: 201,
      message: 'Image upload successful',
      data: image
    });
  });
};

var _default = makePostUpload;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wb3N0LnVwbG9hZC50cyJdLCJuYW1lcyI6WyJtYWtlUG9zdFVwbG9hZCIsInVwbG9hZEltYWdlIiwiaHR0cFJlcXVlc3QiLCJkZXRhaWxzIiwiZmlsZSIsImltYWdlIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQU9BLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQztBQUN2RCxTQUFPLHFCQUFVLE1BQU9DLFdBQVAsSUFBNEI7QUFDM0MsVUFBV0MsT0FBWCxnQkFBdUJELFdBQVcsQ0FBQ0UsSUFBbkM7O0FBRUEsVUFBTUMsS0FBSyxHQUFHLE1BQU1KLFdBQVcsbUJBQU1FLE9BQU4sRUFBL0I7QUFDQSxXQUFPLG1CQUFZO0FBQ2pCRyxNQUFBQSxNQUFNLEVBQUUsSUFEUztBQUVqQkMsTUFBQUEsVUFBVSxFQUFFLEdBRks7QUFHakJDLE1BQUFBLE9BQU8sRUFBRSx5QkFIUTtBQUlqQkMsTUFBQUEsSUFBSSxFQUFFSjtBQUpXLEtBQVosQ0FBUDtBQU1ELEdBVk0sQ0FBUDtBQVdELENBWkQ7O2VBY2VMLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBpUmVzcG9uc2UgZnJvbSAnLi4vaGVscGVycy9odHRwLnJlc3BvbnNlJ1xuaW1wb3J0IHsgd3JhcEFzeW5jIH0gZnJvbSAnLi4vaGVscGVycy93cmFwLmFzeW5jJ1xuaW1wb3J0IHsgVXBsb2FkSW1hZ2UgfSBmcm9tICcuLi90eXBpbmdzL2ludGVyZmFjZXMnXG5cbmludGVyZmFjZSBJUG9zdFVwbG9hZCB7XG4gIHVwbG9hZEltYWdlOiAoeyAuLi5kZXRhaWxzIH06IFVwbG9hZEltYWdlKSA9PiBQcm9taXNlPGFueT5cbn1cblxuY29uc3QgbWFrZVBvc3RVcGxvYWQgPSAoeyB1cGxvYWRJbWFnZSB9OiBJUG9zdFVwbG9hZCkgPT4ge1xuICByZXR1cm4gd3JhcEFzeW5jKGFzeW5jIChodHRwUmVxdWVzdDogYW55KSA9PiB7XG4gICAgY29uc3QgeyAuLi5kZXRhaWxzIH0gPSBodHRwUmVxdWVzdC5maWxlXG5cbiAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHVwbG9hZEltYWdlKHsgLi4uZGV0YWlscyB9KVxuICAgIHJldHVybiBhcGlSZXNwb25zZSh7XG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgICBzdGF0dXNDb2RlOiAyMDEsXG4gICAgICBtZXNzYWdlOiAnSW1hZ2UgdXBsb2FkIHN1Y2Nlc3NmdWwnLFxuICAgICAgZGF0YTogaW1hZ2UsXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVBvc3RVcGxvYWRcbiJdfQ==