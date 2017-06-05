/**
* @type class操作
* @author : Mantou
*/
import {offsetTop, offsetLeft} from './offset';

function getXY(obj){
    return {
        width: obj.offsetWidth,
        height: obj.offsetHeight,
        left: parseInt(obj.style.left, 10) || offsetLeft(obj),
        top: parseInt(obj.style.top, 10) || offsetTop(obj)
    };
}

// 如果点击了空白区域就是false
function clickBlank(obj, callback, events, _btn, onlybtn){

    events = events || 'click';

    // 点击事件
    var handler = function(e){
        let modal = getXY(obj);
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let y = e.clientY + scrollTop || 0;

        // 如果是hover
        let btn = null, btnJudge = false;
        if(_btn && events === 'mousemove'){
            btn = getXY(_btn);
            if(e.clientX >= btn.left && e.clientX <= btn.left + btn.width && y >= btn.top && y <= btn.top + btn.height){
                btnJudge = true;
            }
        }

        // 判断点击的边界
        if(!onlybtn && (e.clientX >= modal.left && e.clientX <= modal.left + modal.width && y >= modal.top && y <= modal.top + modal.height) || btnJudge){
            callback(true);
        }else{
            callback(false);
            if(_btn && events !== 'mousemove'){
                document.removeEventListener(events, handler);
                handler = null;
            }
        }
    };
    document.addEventListener(events, handler);

    return handler;
}

function offClickBlank(handler, events){
    if (!handler) {
        return;
    }
    events = events || 'click';
    document.removeEventListener(events, handler);
    handler = null;
}

export { getXY, clickBlank, offClickBlank};