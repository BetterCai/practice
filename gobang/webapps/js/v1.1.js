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
        if (i % 2 == 0) {
            rowHtml += '<td><div class="white"></div></td>';
        } else {
            rowHtml += '<td><div class="black"></div></td>';
        }

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