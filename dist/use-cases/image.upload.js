"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const makeUploadImage = ({
  imageDb
}) => {
  return async function uploadImage(_ref) {
    let details = _extends({}, _ref);

    const {
      path,
      filename
    } = details;
    const newImage = await imageDb.insert({
      filepath: path,
      filename
    });
    return newImage;
  };
};

var _default = makeUploadImage;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2UtY2FzZXMvaW1hZ2UudXBsb2FkLnRzIl0sIm5hbWVzIjpbIm1ha2VVcGxvYWRJbWFnZSIsImltYWdlRGIiLCJ1cGxvYWRJbWFnZSIsImRldGFpbHMiLCJwYXRoIiwiZmlsZW5hbWUiLCJuZXdJbWFnZSIsImluc2VydCIsImZpbGVwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBd0I7QUFDOUMsU0FBTyxlQUFlQyxXQUFmLE9BQXdEO0FBQUEsUUFBeEJDLE9BQXdCOztBQUM3RCxVQUFNO0FBQUVDLE1BQUFBLElBQUY7QUFBUUMsTUFBQUE7QUFBUixRQUFxQkYsT0FBM0I7QUFDQSxVQUFNRyxRQUFRLEdBQUcsTUFBTUwsT0FBTyxDQUFDTSxNQUFSLENBQWU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFSixJQUFaO0FBQWtCQyxNQUFBQTtBQUFsQixLQUFmLENBQXZCO0FBQ0EsV0FBT0MsUUFBUDtBQUNELEdBSkQ7QUFLRCxDQU5EOztlQVFlTixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSURlcHMsIFVwbG9hZEltYWdlIH0gZnJvbSAnLi4vdHlwaW5ncy9pbnRlcmZhY2VzJ1xuXG5jb25zdCBtYWtlVXBsb2FkSW1hZ2UgPSAoeyBpbWFnZURiIH06IElEZXBzKSA9PiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiB1cGxvYWRJbWFnZSh7IC4uLmRldGFpbHMgfTogVXBsb2FkSW1hZ2UpIHtcbiAgICBjb25zdCB7IHBhdGgsIGZpbGVuYW1lIH0gPSBkZXRhaWxzXG4gICAgY29uc3QgbmV3SW1hZ2UgPSBhd2FpdCBpbWFnZURiLmluc2VydCh7IGZpbGVwYXRoOiBwYXRoLCBmaWxlbmFtZSB9KVxuICAgIHJldHVybiBuZXdJbWFnZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VVcGxvYWRJbWFnZVxuIl19