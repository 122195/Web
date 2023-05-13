// 1.导入 fs 模块
// const { log } = require('console');
let fs = require('fs')
// 2.创建文件夹 mkdir mk = make制作 dir directory = 文件夹
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功');
// })
// 2-2 递归创建
// fs.mkdir('./a/d/c', { recursive: true }, err => {
//     if (err) {
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功');
// })
// 2-3 读取文件夹 readdir
// fs.readdir('../资料/代码', (err, data) => {
// fs.readdir('./', (err, data) => { // 读取当前文件夹
//     if (err) {
//         console.log('读取失败');
//         return
//     }
//     console.log(data);
// })

// 2-4 删除文件夹 rmdir
// fs.rmdir('./html', err => {
//     if (err) {
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
// })
// 递归删除 不推荐使用
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log('删除成功');
//         return
//     }
//     console.log('删除失败');
// })
// 官方建议使用
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})