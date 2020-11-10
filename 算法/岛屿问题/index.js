/*
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// function add() {
//     var _args = [].slice.call(arguments);
//     var adder = function () {
//         var _adder = function () {
//             _args.push(...arguments);
//             return _adder;
//         }
//         _adder.toString = function () {
//             return _args.reduce(function (a, b) {
//                 return a + b;
//             });
//         }
//         return _adder
//     }
//     return adder(..._args)
// }

// var res = add(1, 2)(3, 4)
// console.log(Number(`${res}`))

/**
 * @param {character[][]} grid
 * @return {number}
 */

function deeper(grid, row, col, rows, cols) {
    if (row < 0 || col < 0 || row > rows - 1 || col > cols - 1 || grid[row][col] == 0)
        return;

    grid[row][col] = 0;

    deeper(grid, row + 1, col, rows, cols);
    deeper(grid, row, col + 1, rows, cols);
    deeper(grid, row - 1, col, rows, cols);
    deeper(grid, row, col - 1, rows, cols);

}
var numIslands = function (grid) {
    let count = 0;
    const rows = grid.length;
    if (rows === 0) {
        return 0;
    }
    const cols = grid[0].length;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 1) {
                deeper(grid, row, col, rows, cols);
                count++
            }
        }
    }
    return count;
};