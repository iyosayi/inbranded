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
    const {
      width,
      height
    } = image.bitmap;
    return (0, _http.default)({
      status: true,
      statusCode: 200,
      message: 'Image resized successfully',
      data: {
        width,
        height
      }
    });
  });
};

var _default = makePatchResize;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wYXRjaC5yZXNpemUudHMiXSwibmFtZXMiOlsibWFrZVBhdGNoUmVzaXplIiwicmVzaXplSW1hZ2UiLCJodHRwUmVxdWVzdCIsImlkIiwicGFyYW1zIiwicmVzaXplRGV0YWlscyIsInF1ZXJ5IiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJpdG1hcCIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFVQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBbUM7QUFDekQsU0FBTyxxQkFBVSxNQUFPQyxXQUFQLElBQTRCO0FBQzNDLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFTRCxXQUFXLENBQUNFLE1BQTNCOztBQUNBLFVBQVdDLGFBQVgsZ0JBQXNDSCxXQUFXLENBQUNJLEtBQWxEOztBQUVBLFVBQU1DLEtBQUssR0FBRyxNQUFNTixXQUFXO0FBQUdFLE1BQUFBO0FBQUgsT0FBVUUsYUFBVixFQUEvQjtBQUNBLFVBQU07QUFBRUcsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULFFBQW9CRixLQUFLLENBQUNHLE1BQWhDO0FBQ0EsV0FBTyxtQkFBWTtBQUNqQkMsTUFBQUEsTUFBTSxFQUFFLElBRFM7QUFFakJDLE1BQUFBLFVBQVUsRUFBRSxHQUZLO0FBR2pCQyxNQUFBQSxPQUFPLEVBQUUsNEJBSFE7QUFJakJDLE1BQUFBLElBQUksRUFBRTtBQUFFTixRQUFBQSxLQUFGO0FBQVNDLFFBQUFBO0FBQVQ7QUFKVyxLQUFaLENBQVA7QUFNRCxHQVpNLENBQVA7QUFhRCxDQWREOztlQWdCZVQsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGlSZXNwb25zZSBmcm9tICcuLi9oZWxwZXJzL2h0dHAucmVzcG9uc2UnXG5pbXBvcnQgeyB3cmFwQXN5bmMgfSBmcm9tICcuLi9oZWxwZXJzL3dyYXAuYXN5bmMnXG5pbXBvcnQgeyBJUmVzaXplIH0gZnJvbSAnLi4vdHlwaW5ncy9pbnRlcmZhY2VzJ1xuXG5pbnRlcmZhY2UgSVBhdGNoUmVzaXplIHtcbiAgcmVzaXplSW1hZ2U6ICh7XG4gICAgaWQsXG4gICAgLi4ucmVzaXplRGV0YWlsc1xuICB9OiB7IGlkOiBzdHJpbmcgfSAmIElSZXNpemUpID0+IFByb21pc2U8YW55PlxufVxuXG5jb25zdCBtYWtlUGF0Y2hSZXNpemUgPSAoeyByZXNpemVJbWFnZSB9OiBJUGF0Y2hSZXNpemUpID0+IHtcbiAgcmV0dXJuIHdyYXBBc3luYyhhc3luYyAoaHR0cFJlcXVlc3Q6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IGh0dHBSZXF1ZXN0LnBhcmFtc1xuICAgIGNvbnN0IHsgLi4ucmVzaXplRGV0YWlscyB9OiBJUmVzaXplID0gaHR0cFJlcXVlc3QucXVlcnlcblxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgcmVzaXplSW1hZ2UoeyBpZCwgLi4ucmVzaXplRGV0YWlscyB9KVxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2UuYml0bWFwXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlKHtcbiAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIG1lc3NhZ2U6ICdJbWFnZSByZXNpemVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICBkYXRhOiB7IHdpZHRoLCBoZWlnaHQgfSxcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlUGF0Y2hSZXNpemVcbiJdfQ==