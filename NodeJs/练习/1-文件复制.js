/* 
需求：复制文件下的[笑看风云.mp4]
*/
let fs = require('fs')
let process = require('process') // 获得代码内存的占用量
// // 方式一 readFile
// // 读取文件内容
// let data = fs.readFileSync('./笑看风云.mp4')
// // 写入文件
// fs.writeFileSync('./笑看风云-2.mp4', data)
// console.log(process.memoryUsage()); // memoryUsage()内存使用量 占用了116862976字节 = 111M内存

// 方式二 流式操作
// 创建读取流对象
let rs = fs.createReadStream('./笑看风云.mp4')
// 创建写入流对象
let ws = fs.createWriteStream('./笑看风云-3.mp4')
// 绑定data事件
rs.on('data', chunk => {
    ws.write(chunk)
})
rs.on('end', () => {
    console.log(process.memoryUsage()); // 占用了51154944字节 = 48M内存
})