// 导入 fs
let fs = require('fs')
let path = require('path')
// console.log(__dirname + '/index.html');
// resolve 解决
// console.log(path.resolve(__dirname, './index.html'))
// console.log(path.resolve(__dirname, 'index.html'))


// sep 分隔符 
// console.log(path.sep); // 获取操作系统的路径分隔符

// parse 是一个方法
// console.log(__filename); // 保存的是文件的绝对路径
let str = 'D:\\桌面\\Web\\Web\\NodeJs\\学习> node .\\13-path.js'
// console.log(path.parse(str));

// basename 获取文件名
// console.log(path.basename(str));

// dirname 获取路径部分
// console.log(path.dirname(str));

// extname
console.log(path.extname(str));