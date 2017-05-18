/**
* @type 合并obj 方法
* @author : Mantou
*/
function assign(arr) {
    var newObj = {};
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            newObj[key] = arr[i][key];
        }
    }
    return newObj;
}
//
export default assign;