'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @author Mantou
 * @desc 兼容IE9的代码。全局暴露两个变量： MT_IE9 是否是IE9： true or false , MT_MS 判断是否是IE浏览器
 */
function showScroll(mark) {
    // body...
    document.body.style = '';
}

function hideScroll(mark) {
    // 显示后，禁用滚动条
    if (MT_MS === 'IE') {
        document.body.style = 'padding-right: 17px; overflow: hidden;';
    } else {
        document.body.style = 'padding-right: 5px; overflow: hidden;';
    }
}

exports.showScroll = showScroll;
exports.hideScroll = hideScroll;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(showScroll, 'showScroll', 'dev/mtui/utils/bodyscroll.jsx');

    __REACT_HOT_LOADER__.register(hideScroll, 'hideScroll', 'dev/mtui/utils/bodyscroll.jsx');
}();

;
//# sourceMappingURL=bodyscroll.js.map