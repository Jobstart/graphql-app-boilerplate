
  require('source-map-support').install({
    environment: 'node'
  });

exports.id = 0;
exports.modules = [
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var main = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            _server.app.use(function (req, res, next) {
              return r(req, res, next);
            });
            log('awaiting io connected state');
            _context.next = 5;
            return ioConnectedPromise;

          case 5:
            log('io connected');
            _context.next = 8;
            return workersConnected;

          case 8:

            log('workers connected');

            (0, _subscription2.default)(httpServer);

            log('GraphQL listening on ' + _environment.HOSTNAME + ':' + _environment.PORT);

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);

            trace(_context.t0);
            process.exit(1);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 13]]);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var _bluebird = __webpack_require__(9);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _debug = __webpack_require__(8);

var _debug2 = _interopRequireDefault(_debug);

var _server = __webpack_require__(10);

var _environment = __webpack_require__(3);

var _router = __webpack_require__(7);

var _router2 = _interopRequireDefault(_router);

var _subscription = __webpack_require__(11);

var _subscription2 = _interopRequireDefault(_subscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var r = _router2.default;

process.on('uncaughtException', function (err) {
  return trace('UncaughtException', err);
});
process.on('unhandledRejection', function (err) {
  return trace('unhandledRejection', err);
});

_server.app.get('/health', function (req, res) {
  return healthy ? res.status(200).send({ status: 'up' }) : res.status(503).send({ status: 'down' });
});

if (__DEV__) {
  if (true) {
    log('[HMR] Waiting for server-side updates');

    module.hot.accept(7, function () {
      r = __webpack_require__(7).default;
    });

    module.hot.addStatusHandler(function (status) {
      if (status === 'abort') {
        process.nextTick(function () {
          return process.exit(0);
        });
      }
    });
  }
}

main();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(12);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _debug = __webpack_require__(8);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = exports.server = exports.app = undefined;

var _http = __webpack_require__(13);

var _http2 = _interopRequireDefault(_http);

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _bluebird = __webpack_require__(9);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _debug = __webpack_require__(8);

var _debug2 = _interopRequireDefault(_debug);

var _environment = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug2.default)('graphql:io:server');

var app = exports.app = (0, _express2.default)();

var healthy = false;

var server = exports.server = _http2.default.createServer(app);

var listen = exports.listen = new _bluebird2.default(function (resolve, reject) {
  return server.listen(_environment.PORT, function (err) {
    if (err) {
      error('error booting server -> ' + err.message);
      return reject(err);
    }
    log('server online');
    return resolve();
  });
});

listen.then(function () {
  log('listening on port ' + _environment.PORT);
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
];
//# sourceMappingURL=0.1199bc6994f9df208445.hot-update.js.map