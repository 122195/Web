// 1. 导入 uniq包
// let uniq = require('uniq')
let uniq = require('./node_modules/uniq')

// 2. 使用函数

let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let result = uniq(arr)
console.log(result); // [ 1, 2, 3, 4, 5 ]