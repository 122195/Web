# `NodeJs`

## fs模块

fs 全称为`file system`，称之为 文件系统 ，是`Node.js`中的内置模块 ，可以对计算机中的磁盘进行操作。

### 1.文件写入

文件写入就是将数据保存到文件中，我们可以使用如下几个方法来实现该效果

|            方法             |   说明   |
| :-------------------------: | :------: |
|         `writeFile`         | 异步写入 |
|       `writeFileSyns`       | 同步写入 |
| `appendFile/appendFileSync` | 追加写入 |
|     `createWriteStream`     | 流式写入 |

 #### 1-1.writeFile 异步写入

~~~ javascript
语法：`fs.writeFile(file,data[,options],callback)`
~~~

参数说明：

- `file`文件名
- `data`待写入的数据
- `options`选项设置(可选)
- `callback`写入回调

代码实例：

~~~ javascript
/*
需求: 新建一个，座右铭.txt，写入内容，三人行，则必有我师焉
*/
// 1. 导入 fs　模块
let fs = require('fs');

// 2.写入文件
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
    // err 写入失败：错误对象 写入成功：null
    if (err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})
~~~

#### 1-2.wrteFileSync同步写入

~~~ javascript
语法：fs.writeFileSync(file,data[,options])
~~~

参数与`fs.wrtiteFile`大体一致，只是没有callback参数

返回值：undefined

代码实例：

~~~ javascript
fs.writeFileSync('./data.txt', 'test')
~~~

> Node.js 中的磁盘操作是由其他线程完成的，结果的处理有两种模式： 
>
> - 同步处理 JavaScript 主线程会等待其他线程的执行结果，然后再继续执行主线程的代码，效率较低
> - 异步处理 JavaScript 主线程不会等待其他线程的执行结果，直接执行后续的主线程代码，效率较好

#### 1-3.`appendFile/appendFileSync`追加写入

`appendFile`作用是在文件尾部追加内容，`appendFile`语法与`writeFild`语法完全相同

语法：

~~~ javascript
fs.appendFile(file,data[,option],callback)
fs.appendFileSync(file,data[,options])
~~~

返回值：二者都为undefined

代码实例：

~~~ javascript
// 引入 fs 模块
let fs = require('fs');
// 调用appendFile
fs.appendFile('./座右铭.txt', '择其善者而从之，择其不善者而改之', err => {
    // 判断
    if (err) {
        console.log('写入失败');
        return;
    }
    console.log('追加写入成功');
})
// appendFileSync
fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣') // \r\n 换行
~~~



### 2.文件读取

### 3.文件移动与重命名

### 4.文件删除

### 5.文件夹操作

### 6.查看资源状态

