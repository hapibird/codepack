"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _event = require("../../../event/event");

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains information about event which is emitted before sending response to client
 */
var BeforeSendEvent = function (_Event) {
  _inherits(BeforeSendEvent, _Event);

  /**
   * Constructor
   * @param {?Connection} connection Current active connection
   */
  function BeforeSendEvent(connection) {
    _classCallCheck(this, BeforeSendEvent);

    /**
     * Current connection
     * @type {Connection}
     */
    var _this = _possibleConstructorReturn(this, (BeforeSendEvent.__proto__ || Object.getPrototypeOf(BeforeSendEvent)).call(this, BeforeSendEvent.NAME, false));

    _this.connection = connection;
    return _this;
  }

  return BeforeSendEvent;
}(_event2.default);

exports.default = BeforeSendEvent;

BeforeSendEvent.NAME = "response.before_send";