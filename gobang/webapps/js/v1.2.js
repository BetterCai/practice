/**
 *  全局变量，相当于绑定在window全局对象上
 *  定义了棋盘为15路
 **/
var road = 15;  // window.road

/*自定义函数*/
/*用于实现一个具体的功能，生成N路棋盘的一行*/
function initRowHtml(road) {
    var rowHtml = '<tr>';
    /*road 局部变量，优先级最高，就近原则*/
    for (var i = 0; i < road; i++) {
        rowHtml += '<td><div style="width: 100%;height: 100%" onclick="action(this)"></div></td>';
    }
    rowHtml += '</tr>';
    return rowHtml;
}

/**
 * 生成棋盘行列的html
 * @type {Array}
 */
var rows = [];
/**
 * 初始化
 */
var rowHtml = initRowHtml(road);
for (var i = 0; i < road; i++) {
    rows.push(rowHtml);
}

document.getElementById('content').innerHTML = rows.join("");


/**
 * 默认下黑棋
 * @type {string}
 */
var type = '1';

var tip = document.getElementById('tip');

function action(_this) {
    if ('1' == type) {
        _this.setAttribute("class", "black");
        type = "2";
        tip.innerHTML = '轮到白子玩家';
    } else {
        _this.setAttribute("class", "white");
        type = "1";
        tip.innerHTML = '轮到黑子玩家';
    }
}