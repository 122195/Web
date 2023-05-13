// 1.导入 fs 模块
const { log } = require('console')
let fs = require('fs')
// 读取code文件列表
let files = fs.readdirSync('./code')
// console.log(files);
// 遍历数组
// files.forEach(item => {
//     // console.log(item);
//     // 拆分文件名
//     let data = item.split('-')
//     // console.log(data);
//     let [num, name] = data
//     // console.log(num, name);
//     // 判断
//     if (Number(num) < 10) {
//         num = '0' + num
//     }
//     // 创建新的文件名
//     let newName = num + '-' + name
//     // console.log(newName);
//     // 重命名
//     fs.renameSync(`./code/${item}`, `./code/${newName}`)
// })
files.forEach((item, index) => {
    //拆分
    let [num, name] = item.split('-');
    // console.log(index);
    //index 自增
    index++;
    // console.log(index);
    // //判断
    // index = index < 10 ? '0' + index : index;
    // //拼接新的名字
    // let newName = index + '-' + name;
    // //移动文件
    // fs.renameSync(`./code/${item}`, `./code/${newName}`);
});