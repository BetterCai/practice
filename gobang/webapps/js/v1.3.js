/**
 *  全局变量，相当于绑定在window全局对象上
 *  定义了棋盘为15路
 **/
var road = 15;  // window.road

/*自定义函数*/
/*用于实现一个具体的功能，生成N路棋盘的一行*/
function initRowHtml(road) {
    var rows = [];
    /*road 局部变量，优先级最高，就近原则*/
    for (var i = 0; i < road; i++) {
        var rowHtml = '<tr>';
        for (var j = 0; j < road; j++) {
            rowHtml += '<td><div style="width: 100%;height: 100%" onclick="action(\'' + i + '\',\'' + j + '\',this)"></div></td>';
        }
        rowHtml += '</tr>';
        rows.push(rowHtml);
    }
    return rows;
}

/**
 * 初始化
 */
document.getElementById('content').innerHTML = initRowHtml(road).join("");

/**
 * 默认下黑棋
 * @type {string}
 */
var type = '1';

var tip = document.getElementById('tip');

function action(i, j, _this) {
    if ('1' == type) {
        if (updateGobangData(i, j, '1')) {
            _this.setAttribute("class", "black");
            type = "2";
            tip.innerHTML = '轮到白子玩家';
        }
    } else {
        if (updateGobangData(i, j, '2')) {
            _this.setAttribute("class", "white");
            type = "1";
            tip.innerHTML = '轮到黑子玩家';
        }
    }
}

/*
 定义棋谱:15*15
 */
function initGobangData() {
    if (!!window.sessionStorage['gobangData']) return;
    var cols = [];
    for (var i = 0; i < road; i++) {
        var rows = [];
        for (var j = 0; j < road; j++) {
            rows.push('');
        }
        cols.push(rows);
    }
    window.sessionStorage['gobangData'] = JSON.stringify(cols);
}

initGobangData();
/**
 * 清空棋盘
 */
function resetGobangData() {
    delete window.sessionStorage['gobangData'];
    var blackEleList = document.getElementsByClassName('black');
    var len = blackEleList.length;
    for (var i = 0; i < len; i++) {
        blackEleList[0].setAttribute('class', '');
    }
    var whiteEleList = document.getElementsByClassName('white');
    len = whiteEleList.length;
    for (var i = 0; i < len; i++) {
        whiteEleList[0].setAttribute('class', '');
    }
    initGobangData();
}

/**
 * 获取棋盘数据
 */
function getGobangData() {
    return JSON.parse(window.sessionStorage['gobangData']);
}

/**
 * 更新棋谱
 * @param row 横坐标
 * @param col 纵坐标
 * @param role 下的角色
 * @returns {boolean} 判断是否下成功
 */
function updateGobangData(row, col, role) {
    var gobangData = getGobangData();
    if ('' == gobangData[row][col]) {
        gobangData[row][col] = role;
        window.sessionStorage['gobangData'] = JSON.stringify(gobangData);
        if(win(row, col,role,gobangData)){
            alert('1' == role ? '黑子玩家赢！' : '白子玩家赢！');
        }
        return true;
    }
    return false;
}

function win(row, col, role, gobangData) {

}