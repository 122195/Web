// 1.引入fs模块
let fs = require('fs')
// 2.异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//     if (err) {
//         console.log('读取失败~~~');
//         return;
//     }
//     console.log(data); // 接收过来的是十六进制 buffer
//     console.log(data.toString()); // 十六进制转换为字符串
// })
// 3.同步读取
let data = fs.readFileSync('./观书有感.txt')
// console.log(data); // 接收过来的是十六进制 buffer
console.log(data.toString()); // 十六进制转换为字符串