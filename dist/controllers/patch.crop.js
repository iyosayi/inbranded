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

const makePatchCrop = ({
  cropImage
}) => {
  return (0, _wrap.wrapAsync)(async httpRequest => {
    const {
      id
    } = httpRequest.params;

    const cropDetails = _extends({}, httpRequest.query);

    const image = await cropImage(_objectSpread({
      id
    }, cropDetails));
    return (0, _http.default)({
      status: true,
      statusCode: 200,
      message: 'Image cropped successfully',
      data: image
    });
  });
};

var _default = makePatchCrop;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wYXRjaC5jcm9wLnRzIl0sIm5hbWVzIjpbIm1ha2VQYXRjaENyb3AiLCJjcm9wSW1hZ2UiLCJodHRwUmVxdWVzdCIsImlkIiwicGFyYW1zIiwiY3JvcERldGFpbHMiLCJxdWVyeSIsImltYWdlIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQU9BLE1BQU1BLGFBQWEsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUErQjtBQUNuRCxTQUFPLHFCQUFVLE1BQU9DLFdBQVAsSUFBNEI7QUFDM0MsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQVNELFdBQVcsQ0FBQ0UsTUFBM0I7O0FBQ0EsVUFBV0MsV0FBWCxnQkFBa0NILFdBQVcsQ0FBQ0ksS0FBOUM7O0FBRUEsVUFBTUMsS0FBSyxHQUFHLE1BQU1OLFNBQVM7QUFBR0UsTUFBQUE7QUFBSCxPQUFVRSxXQUFWLEVBQTdCO0FBQ0EsV0FBTyxtQkFBWTtBQUNqQkcsTUFBQUEsTUFBTSxFQUFFLElBRFM7QUFFakJDLE1BQUFBLFVBQVUsRUFBRSxHQUZLO0FBR2pCQyxNQUFBQSxPQUFPLEVBQUUsNEJBSFE7QUFJakJDLE1BQUFBLElBQUksRUFBRUo7QUFKVyxLQUFaLENBQVA7QUFNRCxHQVhNLENBQVA7QUFZRCxDQWJEOztlQWVlUCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaVJlc3BvbnNlIGZyb20gJy4uL2hlbHBlcnMvaHR0cC5yZXNwb25zZSdcbmltcG9ydCB7IHdyYXBBc3luYyB9IGZyb20gJy4uL2hlbHBlcnMvd3JhcC5hc3luYydcbmltcG9ydCB7IElDcm9wIH0gZnJvbSAnLi4vdHlwaW5ncy9pbnRlcmZhY2VzJ1xuXG5pbnRlcmZhY2UgSVBhdGNoQ3JvcCB7XG4gIGNyb3BJbWFnZTogKHsgaWQsIC4uLmNyb3BEZXRhaWxzIH06IHsgaWQ6IHN0cmluZyB9ICYgSUNyb3ApID0+IFByb21pc2U8YW55PlxufVxuXG5jb25zdCBtYWtlUGF0Y2hDcm9wID0gKHsgY3JvcEltYWdlIH06IElQYXRjaENyb3ApID0+IHtcbiAgcmV0dXJuIHdyYXBBc3luYyhhc3luYyAoaHR0cFJlcXVlc3Q6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IGh0dHBSZXF1ZXN0LnBhcmFtc1xuICAgIGNvbnN0IHsgLi4uY3JvcERldGFpbHMgfTogSUNyb3AgPSBodHRwUmVxdWVzdC5xdWVyeVxuXG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBjcm9wSW1hZ2UoeyBpZCwgLi4uY3JvcERldGFpbHMgfSlcbiAgICByZXR1cm4gYXBpUmVzcG9uc2Uoe1xuICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgbWVzc2FnZTogJ0ltYWdlIGNyb3BwZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGRhdGE6IGltYWdlLFxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VQYXRjaENyb3BcbiAiXX0=