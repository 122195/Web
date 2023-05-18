// 声明一个函数
function tiemo() {
    console.log('贴膜...');
}
// hello 
function hello() {
    console.log('你好...');
}
// 暴露数据
// module.exports = {
//     tiemo: tiemo,
//     hello: hello
// }
// expotes 暴露数据
// exports.tiemo = tiemo;
// exports.hello = hello;

// 1. module.exports 可以暴露任意数据
// module.exports = 'iloveyou'
// module.exports = 521
// 2.不能使用 exports = value 的形式暴露数据
// exports = 'iloveyou'
// exports = module.exports = {}
console.log(module.exports); // {} {}
console.log(module.exports === exports);
exports = module.exports = { tiemo: tiemo }
exports.tiemo = tiemo;