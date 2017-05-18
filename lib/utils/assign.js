"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* @type 合并obj 方法
* @author : Mantou
*/
function assign(arr) {
    var newObj = {};
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            newObj[key] = arr[i][key];
        }
    }
    return newObj;
}
//
var _default = assign;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(assign, "assign", "dev/mtui/utils/assign.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "dev/mtui/utils/assign.jsx");
}();

;
//# sourceMappingURL=assign.js.map