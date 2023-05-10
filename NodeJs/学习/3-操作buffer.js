// buffer与字符串的转换
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_4.toString()); // iloveyou
// []
let buf = Buffer.from('hello')
console.log(buf[0]); // 104 把第一个字母转换为十六进制
console.log(buf[0].toString(2)); // 2的意思是转换为二进制