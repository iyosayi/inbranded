"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "app", void 0);

    this.app = (0, _express.default)();
    this.config();
    this.indexRoute();
  }

  config() {
    this.app.use((0, _helmet.default)());
    this.app.use((0, _cors.default)());
    this.app.use(_express.default.json());
    this.app.use(_express.default.urlencoded({
      extended: false
    }));

    require('../routes')(this.app);
  }

  indexRoute() {
    this.app.get('/', (_, res) => res.json({
      message: 'Inbranded API is up and running.!'
    }));
  }

}

var _default = new App().app;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsImNvbnN0cnVjdG9yIiwiYXBwIiwiY29uZmlnIiwiaW5kZXhSb3V0ZSIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVxdWlyZSIsImdldCIsIl8iLCJyZXMiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLEdBQU4sQ0FBVTtBQUdSQyxFQUFBQSxXQUFXLEdBQUc7QUFBQTs7QUFDWixTQUFLQyxHQUFMLEdBQVcsdUJBQVg7QUFDQSxTQUFLQyxNQUFMO0FBQ0EsU0FBS0MsVUFBTDtBQUNEOztBQUVPRCxFQUFBQSxNQUFSLEdBQWlCO0FBQ2YsU0FBS0QsR0FBTCxDQUFTRyxHQUFULENBQWEsc0JBQWI7QUFDQSxTQUFLSCxHQUFMLENBQVNHLEdBQVQsQ0FBYSxvQkFBYjtBQUNBLFNBQUtILEdBQUwsQ0FBU0csR0FBVCxDQUFhQyxpQkFBUUMsSUFBUixFQUFiO0FBQ0EsU0FBS0wsR0FBTCxDQUFTRyxHQUFULENBQWFDLGlCQUFRRSxVQUFSLENBQW1CO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBQW5CLENBQWI7O0FBQ0FDLElBQUFBLE9BQU8sQ0FBQyxXQUFELENBQVAsQ0FBcUIsS0FBS1IsR0FBMUI7QUFDRDs7QUFFTUUsRUFBQUEsVUFBUCxHQUFvQjtBQUNsQixTQUFLRixHQUFMLENBQVNTLEdBQVQsQ0FBYSxHQUFiLEVBQWtCLENBQUNDLENBQUQsRUFBSUMsR0FBSixLQUNoQkEsR0FBRyxDQUFDTixJQUFKLENBQVM7QUFBRU8sTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBVCxDQURGO0FBR0Q7O0FBckJPOztlQXdCSyxJQUFJZCxHQUFKLEdBQVVFLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdoZWxtZXQnXG5cbmNsYXNzIEFwcCB7XG4gIHB1YmxpYyBhcHA6IEFwcGxpY2F0aW9uXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBleHByZXNzKClcbiAgICB0aGlzLmNvbmZpZygpXG4gICAgdGhpcy5pbmRleFJvdXRlKClcbiAgfVxuXG4gIHByaXZhdGUgY29uZmlnKCkge1xuICAgIHRoaXMuYXBwLnVzZShoZWxtZXQoKSlcbiAgICB0aGlzLmFwcC51c2UoY29ycygpKVxuICAgIHRoaXMuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbiAgICB0aGlzLmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKVxuICAgIHJlcXVpcmUoJy4uL3JvdXRlcycpKHRoaXMuYXBwKVxuICB9XG5cbiAgcHVibGljIGluZGV4Um91dGUoKSB7XG4gICAgdGhpcy5hcHAuZ2V0KCcvJywgKF8sIHJlcykgPT5cbiAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ0luYnJhbmRlZCBBUEkgaXMgdXAgYW5kIHJ1bm5pbmcuIScgfSlcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcCgpLmFwcFxuIl19