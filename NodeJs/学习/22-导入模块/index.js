// 导入模块
// const tiemo = require('./me.js');

// 省略后缀 JS 在内部会自动添加后缀
let tiemo = require('./me')

// 导入JSON文件
let daunzi = require('./duanzi')
// console.log(daunzi); // 返回的是对象

// 导入其他类型的文件
let test = require('./test')
console.log(test);
// 调用函数
// tiemo()