'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('../dropdown/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Input = require('../input/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePicker = function (_Component) {
    (0, _inherits3.default)(TimePicker, _Component);

    // 构造函数
    function TimePicker(props) {
        (0, _classCallCheck3.default)(this, TimePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TimePicker.__proto__ || (0, _getPrototypeOf2.default)(TimePicker)).call(this, props));

        _this.state = {
            times: '--:--:--'
        };
        return _this;
    }

    // 渲染前


    (0, _createClass3.default)(TimePicker, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // 初始化日期 默认是当前日期
            this.setState({
                times: this.props.defaultValue || this.props.value || this.state.times
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
        // ...


        // 更新弹窗里面的数据

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
        // ...


        // 如果 value 更新

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({
                    times: nextProps.times
                });
            }
        }
    }, {
        key: 'showBack',
        value: function showBack(e) {
            if (this.props.showBack) {
                this.props.showBack(e);
            }
        }
    }, {
        key: 'closeBack',
        value: function closeBack(e) {
            if (this.props.closeBack) {
                this.props.closeBack(e);
            }
        }

        //

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                showBack = _props.showBack,
                type = _props.type,
                closeBack = _props.closeBack,
                modalClass = _props.modalClass,
                className = _props.className,
                modalStyle = _props.modalStyle,
                size = _props.size,
                visible = _props.visible,
                validateInfo = _props.validateInfo,
                onChange = _props.onChange,
                other = (0, _objectWithoutProperties3.default)(_props, ['showBack', 'type', 'closeBack', 'modalClass', 'className', 'modalStyle', 'size', 'visible', 'validateInfo', 'onChange']);

            var cName = ['mt-input mt-input-timepicker mt-input-suffix-out'];
            if (className) {
                cName.push(className);
            }

            var inputDom = _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_Input2.default, (0, _extends3.default)({ readOnly: true,
                    className: cName.join(' ')
                }, other, {
                    placeholder: '\u65F6\u95F4',
                    suffix: _react2.default.createElement('i', { className: 'iconfont icon-time' }) }))
            );
            return _react2.default.createElement(
                _Dropdown2.default,
                {
                    btn: inputDom,
                    modalStyle: modalStyle || {},
                    modalClass: modalClass || '',
                    visible: visible || false,
                    showBack: this.showBack.bind(this),
                    closeBack: this.closeBack.bind(this),
                    trigger: 'click' },
                _react2.default.createElement(
                    'div',
                    null,
                    '\u5F00\u53D1\u4E2D...'
                )
            );
        }
    }]);
    return TimePicker;
}(_react.Component);

// TimePicker


TimePicker.defaultProps = {
    size: '' // 默认, min
};
var _default = TimePicker;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(TimePicker, 'TimePicker', 'dev/mtui/timePicker/TimePicker.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', 'dev/mtui/timePicker/TimePicker.jsx');
}();

;
//# sourceMappingURL=TimePicker.js.map