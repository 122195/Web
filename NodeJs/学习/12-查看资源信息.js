// 1.导入 fs 模块
let fs = require('fs')
// 2.stat 方法
fs.stat('./笑看风云.mp4', (err, data) => {
    if (err) {
        console.log('操作失败');
        return
    }
    // console.log(data);
    // 查看文件类型
    // isFile 查看这个资源是不是文件
    console.log(data.isFile()); // true
    // isDirectory 查看目标资源是不是一个文件夹
    console.log(data.isDirectory()); // false
})