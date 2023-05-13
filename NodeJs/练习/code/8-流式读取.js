// 1.引入fs模块
let fs = require('fs')
// 2.创建流式读取
let rs = fs.createReadStream('./笑看风云.mp4')
// 3.绑定data事件
rs.on('data', chunk => {
    // console.log(chunk);
    console.log(chunk.length); // 65536 字节 = 64KB
})
// 4.end 可选事件
rs.on('end', () => {
    console.log('读取完成');
})