// 1.导入 fs 模块
const { log } = require('console')
let fs = require('fs')
// 2.调用 unlink 方法
fs.unlink('./观书有感.txt', err => {
    if (err) {
        console.log('删除失败');
    }
    console.log('删除成功');
})
// 调用 rm 方法
fs.rm('./论语.txt', err => {
    if (err) {
        console.log('删除成功');
    }
    console.log('删除成功');
})