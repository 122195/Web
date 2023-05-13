// alloc
let buf = Buffer.alloc(10)
// console.log(buf);
// allocUnsafe 这创建的Buffer可能会包含旧的创建数据，但是这个创建数据要比alloc更快不需要做归零操作
let buf_2 = Buffer.allocUnsafe(10)
// console.log(buf_2);
// from 可以将一个数据或字符串转换为Buffer
let buf_3 = Buffer.from('hello')
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_3);
console.log(buf_4);