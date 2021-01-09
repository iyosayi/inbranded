"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongodb = require("mongodb");

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function transformId(id) {
  return new _mongodb.ObjectID(id);
}

const makeImageDb = ({
  makeDb
}) => {
  async function insert(_ref) {
    let imageDetails = _extends({}, _ref);

    const db = await makeDb();
    const toInsert = await db.collection('images').insertOne(_objectSpread({}, imageDetails));
    return toInsert.ops[0];
  }

  async function findById({
    id: _id
  }) {
    const db = await makeDb();
    const found = await db.collection('images').findOne({
      _id: transformId(_id)
    });
    return found;
  }

  async function update(_ref2) {
    let {
      id: _id
    } = _ref2,
        changes = _objectWithoutProperties(_ref2, ["id"]);

    const db = await makeDb();
    const found = await db.collection('images').updateOne({
      _id: transformId(_id)
    }, {
      $set: _objectSpread({}, changes)
    });
    return found.modifiedCount > 0 ? _objectSpread({
      id: _id
    }, changes) : null;
  }

  return Object.freeze({
    insert,
    findById,
    update
  });
};

var _default = makeImageDb;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaW1hZ2UuZGIudHMiXSwibmFtZXMiOlsidHJhbnNmb3JtSWQiLCJpZCIsIk9iamVjdElEIiwibWFrZUltYWdlRGIiLCJtYWtlRGIiLCJpbnNlcnQiLCJpbWFnZURldGFpbHMiLCJkYiIsInRvSW5zZXJ0IiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsIm9wcyIsImZpbmRCeUlkIiwiX2lkIiwiZm91bmQiLCJmaW5kT25lIiwidXBkYXRlIiwiY2hhbmdlcyIsInVwZGF0ZU9uZSIsIiRzZXQiLCJtb2RpZmllZENvdW50IiwiT2JqZWN0IiwiZnJlZXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBR0EsU0FBU0EsV0FBVCxDQUFxQkMsRUFBckIsRUFBaUM7QUFDL0IsU0FBTyxJQUFJQyxpQkFBSixDQUFhRCxFQUFiLENBQVA7QUFDRDs7QUFLRCxNQUFNRSxXQUFXLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBeUI7QUFDM0MsaUJBQWVDLE1BQWYsT0FBd0Q7QUFBQSxRQUE3QkMsWUFBNkI7O0FBQ3RELFVBQU1DLEVBQUUsR0FBRyxNQUFNSCxNQUFNLEVBQXZCO0FBQ0EsVUFBTUksUUFBUSxHQUFHLE1BQU1ELEVBQUUsQ0FDdEJFLFVBRG9CLENBQ1QsUUFEUyxFQUVwQkMsU0FGb0IsbUJBRUxKLFlBRkssRUFBdkI7QUFHQSxXQUFPRSxRQUFRLENBQUNHLEdBQVQsQ0FBYSxDQUFiLENBQVA7QUFDRDs7QUFFRCxpQkFBZUMsUUFBZixDQUF3QjtBQUFFWCxJQUFBQSxFQUFFLEVBQUVZO0FBQU4sR0FBeEIsRUFBcUQ7QUFDbkQsVUFBTU4sRUFBRSxHQUFHLE1BQU1ILE1BQU0sRUFBdkI7QUFDQSxVQUFNVSxLQUFLLEdBQUcsTUFBTVAsRUFBRSxDQUNuQkUsVUFEaUIsQ0FDTixRQURNLEVBRWpCTSxPQUZpQixDQUVUO0FBQUVGLE1BQUFBLEdBQUcsRUFBRWIsV0FBVyxDQUFDYSxHQUFEO0FBQWxCLEtBRlMsQ0FBcEI7QUFHQSxXQUFPQyxLQUFQO0FBQ0Q7O0FBRUQsaUJBQWVFLE1BQWYsUUFBd0U7QUFBQSxRQUFsRDtBQUFFZixNQUFBQSxFQUFFLEVBQUVZO0FBQU4sS0FBa0Q7QUFBQSxRQUFwQ0ksT0FBb0M7O0FBQ3RFLFVBQU1WLEVBQUUsR0FBRyxNQUFNSCxNQUFNLEVBQXZCO0FBQ0EsVUFBTVUsS0FBSyxHQUFHLE1BQU1QLEVBQUUsQ0FDbkJFLFVBRGlCLENBQ04sUUFETSxFQUVqQlMsU0FGaUIsQ0FFUDtBQUFFTCxNQUFBQSxHQUFHLEVBQUViLFdBQVcsQ0FBQ2EsR0FBRDtBQUFsQixLQUZPLEVBRW9CO0FBQUVNLE1BQUFBLElBQUksb0JBQU9GLE9BQVA7QUFBTixLQUZwQixDQUFwQjtBQUdBLFdBQU9ILEtBQUssQ0FBQ00sYUFBTixHQUFzQixDQUF0QjtBQUE0Qm5CLE1BQUFBLEVBQUUsRUFBRVk7QUFBaEMsT0FBd0NJLE9BQXhDLElBQW9ELElBQTNEO0FBQ0Q7O0FBRUQsU0FBT0ksTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDbkJqQixJQUFBQSxNQURtQjtBQUVuQk8sSUFBQUEsUUFGbUI7QUFHbkJJLElBQUFBO0FBSG1CLEdBQWQsQ0FBUDtBQUtELENBOUJEOztlQWdDZWIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERiLCBPYmplY3RJRCB9IGZyb20gJ21vbmdvZGInXG5pbXBvcnQgeyBVcGxvYWRJbWFnZSwgVXBkYXRlIH0gZnJvbSAnLi4vdHlwaW5ncy9pbnRlcmZhY2VzJ1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1JZChpZDogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgT2JqZWN0SUQoaWQpXG59XG5cbmludGVyZmFjZSBJTWFrZURiIHtcbiAgbWFrZURiOiAoKSA9PiBQcm9taXNlPERiPlxufVxuY29uc3QgbWFrZUltYWdlRGIgPSAoeyBtYWtlRGIgfTogSU1ha2VEYikgPT4ge1xuICBhc3luYyBmdW5jdGlvbiBpbnNlcnQoeyAuLi5pbWFnZURldGFpbHMgfTogVXBsb2FkSW1hZ2UpIHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1ha2VEYigpXG4gICAgY29uc3QgdG9JbnNlcnQgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oJ2ltYWdlcycpXG4gICAgICAuaW5zZXJ0T25lKHsgLi4uaW1hZ2VEZXRhaWxzIH0pXG4gICAgcmV0dXJuIHRvSW5zZXJ0Lm9wc1swXVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmluZEJ5SWQoeyBpZDogX2lkIH06IHsgaWQ6IHN0cmluZyB9KSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBtYWtlRGIoKVxuICAgIGNvbnN0IGZvdW5kID0gYXdhaXQgZGJcbiAgICAgIC5jb2xsZWN0aW9uKCdpbWFnZXMnKVxuICAgICAgLmZpbmRPbmUoeyBfaWQ6IHRyYW5zZm9ybUlkKF9pZCkgfSlcbiAgICByZXR1cm4gZm91bmRcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZSh7IGlkOiBfaWQsIC4uLmNoYW5nZXMgfTogeyBpZDogc3RyaW5nIH0gJiBVcGRhdGUpIHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1ha2VEYigpXG4gICAgY29uc3QgZm91bmQgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oJ2ltYWdlcycpXG4gICAgICAudXBkYXRlT25lKHsgX2lkOiB0cmFuc2Zvcm1JZChfaWQpIH0sIHsgJHNldDogeyAuLi5jaGFuZ2VzIH0gfSlcbiAgICByZXR1cm4gZm91bmQubW9kaWZpZWRDb3VudCA+IDAgPyB7IGlkOiBfaWQsIC4uLmNoYW5nZXMgfSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBpbnNlcnQsXG4gICAgZmluZEJ5SWQsXG4gICAgdXBkYXRlLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlSW1hZ2VEYlxuIl19