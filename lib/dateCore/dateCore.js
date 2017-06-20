'use strict';
// 日历核心算法
//  给定年月获取当月天数

Object.defineProperty(exports, "__esModule", {
    value: true
});
function getMDay(y, m) {
    var mday = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) // 判断是否是闰月 
        mday[1] = 29;
    return mday[m - 1];
}

//  获取星期数 
function weekNumber(y, m, d) {
    var wk;
    if (m <= 12 && m >= 1) {
        for (var i = 1; i < m; ++i) {
            d += getMDay(y, i); // 
        }
    }
    /* 根据日期计算星期的公式 */
    wk = (y - 1 + (y - 1) / 4 - (y - 1) / 100 + (y - 1) / 400 + d) % 7;
    // 0对应星期天，1对应星期一 
    return parseInt(wk, 10);
}

// 加，减一个月,返回对应的 y ，m
function addAndDelOneMonth(y, m, mark) {
    y = parseInt(y, 10);
    m = parseInt(m, 10);
    // 加一个月
    if (mark == 'add') {
        if (m != 12) {
            m++;
        } else {
            m = 1;
            y++;
        }
    } else if (mark == 'del') {
        // 减一个月
        if (m != 1) {
            m--;
        } else {
            m = 12;
            y--;
        }
    }
    return {
        year: y,
        month: m
    };
}

// 加减一个月。y,m,d
function addOrDelMonthDay(date, mark) {
    var obj = addAndDelOneMonth(date.year, date.month, mark);
    var maxday = getMDay(obj.year, obj.month);
    if (date.day > maxday) {
        obj['day'] = maxday;
    } else {
        obj['day'] = date.day;
    }
    return obj;
}

// 设置初始化的时，分，秒
function setHHMMSS() {
    var hours = [],
        minutes = [],
        seconds = [];
    var setArr = function setArr(arr, max) {
        for (var i = 0; i < max; i++) {
            if (i < 10) {
                arr.push('0' + i);
            } else {
                arr.push(i.toString());
            }
        }
    };
    setArr(hours, 12);
    setArr(minutes, 60);
    setArr(seconds, 60);

    setArr = null;

    return {
        years: [],
        months: [],
        days: [],
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// 获取当前时间
function getDateNow() {
    var myDate = new Date();
    return {
        year: myDate.getFullYear(),
        month: 1 + parseInt(myDate.getMonth()),
        day: myDate.getDate()
    };
}

// 字符串转换obj 格式 xxxx-xx-xx
function strToObj(str) {
    var arr = str.split('-');
    return {
        year: parseInt(arr[0], 10) || null,
        month: parseInt(arr[1], 10) || null,
        day: parseInt(arr[2], 10) || null
    };
}

// obj to xxxx-xx-xx
function objToStr(obj) {
    var str = '';
    var toDB = function toDB(val) {
        val = parseInt(val, 10);
        if (val < 10) {
            val = '0' + val;
        } else {
            val = '' + val;
        }
        return val;
    };

    if (obj.year) {
        str += obj.year;
    } else {
        str += 'null';
    }
    if (obj.month) {
        str += toDB(obj.month);
    } else {
        str += 'null';
    }
    if (obj.day) {
        str += toDB(obj.day);
    } else {
        str += 'null';
    }

    toDB = null;

    return str;
}

// 判断日历的范围
function judgeDate(obj, range) {

    // 如果没有范围
    if (!range) {
        return true;
    }

    range = range || ',';
    var arr = range.split(',');
    var start = parseInt(arr[0].replace(/-/g, ''), 10) || 0;
    var end = parseInt(arr[1].replace(/-/g, ''), 10) || 0;

    // 如果没有限制
    if (start === 0 && end === 0) {
        return true;
    }
    var now = parseInt(objToStr(obj).replace(/null/g, '00'), 10);
    if (start === 0 && now <= end) {
        return true;
    }
    if (end === 0 && now >= start) {
        return true;
    }
    if (now <= end && now >= start) {
        return true;
    }

    return false;
}

// 格式化日历
function formatDate(data, format) {
    if (format != undefined && data) {

        var yearLen = format.indexOf('y') == -1 ? 0 : format.match(/[y]/ig).length;
        var monthLen = format.indexOf('m') == -1 ? 0 : format.match(/[m]/ig).length;
        var dayLen = format.indexOf('d') == -1 ? 0 : format.match(/[d]/ig).length;

        var val = format;
        if (yearLen > 4 || monthLen > 2 || dayLen > 2) {
            console.error('format 格式错误，请参考 yyyy-mm-dd');
            return;
        }
        var str = '';
        for (var i = 0; i < yearLen; i++) {
            str += 'y';
        }
        val = val.replace(str, function () {
            data.year = data.year.toString();
            return data.year.substr(data.year.length - yearLen, yearLen);
        });

        if (monthLen == 2) {
            val = val.replace('mm', data.month < 10 ? '0' + data.month : data.month);
        } else {
            val = val.replace('m', data.month);
        }
        if (dayLen == 2) {
            val = val.replace('dd', data.day < 10 ? '0' + data.day : data.day);
        } else {
            val = val.replace('d', data.day);
        }
    } else if (data) {
        var yearLen = 4;
        var monthLen = 2;
        var dayLen = 2;
        var val = data.year + '/' + data.month + '/' + data.day;
    } else {
        val = '';
    }

    return {
        val: val,
        show: {
            year: yearLen == 0 ? false : true,
            month: monthLen == 0 ? false : true,
            day: dayLen == 0 ? false : true
        }
    };
}

// 1~9 加 0
function fliterNum(num) {
    num = parseInt(num, 10);
    if (num < 10) {
        num = '0' + num;
    } else {
        num = num.toString();
    }
    return num;
}

// 加工组合选择框，选择区间的底色
function setDatesDaysBg(obj, start, end) {
    var now = parseInt(formatDate(obj, 'yyyymmdd').val, 10);
    if (now >= start && now <= end) {
        obj['inner'] = true;
    }

    if (now === start) {
        obj['active'] = true;
        obj['mark'] = 'start';
    }
    if (now === end) {
        obj['active'] = true;
        obj['mark'] = 'end';
    }

    return obj;
}

// 设置days 的列表
function setDays(date, dates, mark) {

    // 如果是日历组合的时候
    var start = void 0,
        end = void 0;
    if (dates) {
        start = parseInt(formatDate(dates.startDate, 'yyyymmdd').val, 10);
        end = parseInt(formatDate(dates.endDate, 'yyyymmdd').val, 10);
    }

    // 一共有6*7 = 42 个格子
    var arr = [];
    // 当月第一天周几
    var firstWeek = weekNumber(date.year, date.month, 1);
    // 当月有多少天
    var monthDay = getMDay(date.year, date.month);

    // 加一个月
    var addone = addAndDelOneMonth(date.year, date.month, 'add');
    if (firstWeek == 7) {
        for (var i = 1; i <= 42; i++) {
            if (i <= monthDay) {
                var obj = {
                    day: i,
                    month: date.month,
                    year: date.year,
                    type: 'now',
                    active: i === date.day ? true : false
                };

                // 日历组合,开始和结束的点都要设置 mt-dates-start or mt-dates-end
                if (mark && i === date.day) {
                    obj['mark'] = mark.split('_')[1];
                }

                if (mark) {
                    // 加工组合选择框，选择区间的底色
                    setDatesDaysBg(obj, start, end);
                }

                arr.push(obj);
            } else {

                var _obj = {
                    day: i - monthDay,
                    month: addone.month,
                    year: addone.year,
                    type: 'next',
                    active: false
                };

                if (mark) {
                    // 加工组合选择框，选择区间的底色
                    setDatesDaysBg(_obj, start, end);
                }

                arr.push(_obj);
            }
        }
    } else {
        // 减一个月
        var delone = addAndDelOneMonth(date.year, date.month, 'del');
        // 获取上个月的日期
        var prevMonth = addAndDelOneMonth(date.year, date.month, 'del').month;
        var prevMonthDay = getMDay(date.year, prevMonth);
        for (var _i = 1; _i <= 42; _i++) {
            if (_i <= firstWeek) {
                var _obj2 = {
                    day: prevMonthDay - firstWeek + _i,
                    month: delone.month,
                    year: delone.year,
                    type: 'prev',
                    active: false
                };
                if (mark) {
                    // 加工组合选择框，选择区间的底色
                    setDatesDaysBg(_obj2, start, end);
                }
                arr.push(_obj2);
            } else if (_i > firstWeek && _i <= monthDay + firstWeek) {
                var _obj3 = {
                    day: _i - firstWeek,
                    month: date.month,
                    year: date.year,
                    type: 'now',
                    active: _i - firstWeek === date.day ? true : false
                };

                // 日历组合
                if (mark && _i - firstWeek === date.day) {
                    _obj3['mark'] = mark.split('_')[1];
                }

                if (mark) {
                    // 加工组合选择框，选择区间的底色
                    setDatesDaysBg(_obj3, start, end);
                }

                arr.push(_obj3);
            } else {

                var _obj4 = {
                    day: _i - monthDay - firstWeek,
                    month: addone.month,
                    year: addone.year,
                    type: 'next',
                    active: false
                };

                if (mark) {
                    // 加工组合选择框，选择区间的底色
                    setDatesDaysBg(_obj4, start, end);
                }

                arr.push(_obj4);
            }
        }
    }
    return arr;
}

// 设置month 显示列表
function setMonths(nowDate) {
    var arr = [];
    for (var i = 0; i < 12; i++) {
        arr.push({
            active: i + 1 === nowDate.month ? true : false,
            year: nowDate.year,
            month: i + 1
        });
    }
    return arr;
}

// 
exports.getMDay = getMDay;
exports.weekNumber = weekNumber;
exports.addAndDelOneMonth = addAndDelOneMonth;
exports.addOrDelMonthDay = addOrDelMonthDay;
exports.formatDate = formatDate;
exports.getDateNow = getDateNow;
exports.fliterNum = fliterNum;
exports.setHHMMSS = setHHMMSS;
exports.setDays = setDays;
exports.setMonths = setMonths;
exports.strToObj = strToObj;
exports.objToStr = objToStr;
exports.judgeDate = judgeDate;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(getMDay, 'getMDay', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(weekNumber, 'weekNumber', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(addAndDelOneMonth, 'addAndDelOneMonth', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(addOrDelMonthDay, 'addOrDelMonthDay', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(setHHMMSS, 'setHHMMSS', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(getDateNow, 'getDateNow', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(strToObj, 'strToObj', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(objToStr, 'objToStr', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(judgeDate, 'judgeDate', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(formatDate, 'formatDate', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(fliterNum, 'fliterNum', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(setDatesDaysBg, 'setDatesDaysBg', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(setDays, 'setDays', 'dev/mtui/dateCore/dateCore.jsx');

    __REACT_HOT_LOADER__.register(setMonths, 'setMonths', 'dev/mtui/dateCore/dateCore.jsx');
}();

;
//# sourceMappingURL=dateCore.js.map