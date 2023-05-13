# `NodeJs`

## fs模块

fs 全称为`file system`，称之为 文件系统 ，是`Node.js`中的内置模块 ，可以对计算机中的磁盘进行操作。

### 1.`文件写入`

文件写入就是将数据保存到文件中，我们可以使用如下几个方法来实现该效果

|            方法             |   说明   |
| :-------------------------: | :------: |
|         `writeFile`         | 异步写入 |
|       `writeFileSyns`       | 同步写入 |
| `appendFile/appendFileSync` | 追加写入 |
|     `createWriteStream`     | 流式写入 |

 #### 1-1.`writeFile 异步写入`

~~~ javascript
语法：`fs.writeFile(file,data[,options],callback)`
~~~

参数说明：

- `file`文件名
- `data`待写入的数据
- `options`选项设置(可选)
- `callback`写入回调

代码示例：

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

#### 1-2.`wrteFileSync同步写入`

~~~ javascript
语法：fs.writeFileSync(file,data[,options])
~~~

参数与`fs.wrtiteFile`大体一致，只是没有callback参数

返回值：undefined

代码示例：

~~~ javascript
fs.writeFileSync('./data.txt', 'test')
~~~

> Node.js中的磁盘操作是由其他线程完成的，结果的处理有两种模式： 
>
> - 同步处理 JavaScript 主线程会等待其他线程的执行结果，然后再继续执行主线程的代码，效率较低
> - 异步处理 JavaScript 主线程不会等待其他线程的执行结果，直接执行后续的主线程代码，效率较好

#### 1-3.`appendFile/appendFileSync追加写入`

`appendFile`作用是在文件尾部追加内容，`appendFile`语法与`writeFild`语法完全相同

语法：

~~~ javascript
fs.appendFile(file,data[,option],callback)
fs.appendFileSync(file,data[,options])
~~~

返回值：二者都为`undefined`

代码示例：

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

#### 1-4.`createWriteStream流式写入`

语法:

~~~ javascript
fs.createWriteStream(path[,options])
~~~

参数说明：

- path文件路径
- options选项配置(可选)
- 返回值：Object

代码示例：

~~~ javascript
// 观书有感.txt
// 1.导入 fs
let fs = require('fs');
// 2.创建写入流式对象
let ws = fs.createWriteStream('./观书有感.txt');
// 3.write
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
// 4.关闭通道
ws.close();
~~~

>程序打开一个文件需要消耗资源，流式写入可以减少打开关闭文件的此时，流式写入方式适用于大文件写入或频繁写入的场景，`writeFile`适合于写入频繁较低的场景

#### 1-5.`文件写入场景`

文件写入在计算机中是一个非常常见的操作，下面的场景都用到了文件写入

- 下载文件
- 安装文件
- 保存程序日志，如git
- 编辑器保持文件
- 视频录制

>当需要持久化保存数据的时候，应该想到文件写入

### 2.文件读取

文件读取顾名思义，就是通过程序从文件中取出其中的数据，我们可以使用如下几种方法：

|        方法        |   说明   |
| :----------------: | :------: |
|     `readFile`     | 异步读取 |
|   `readFileSync`   | 同步读取 |
| `createReadStream` | 流式读取 |

#### 2-1.`readFile异步读取`

语法：

~~~ javascript
fs.readFile(path[,options],callback)
~~~

参数说明：

- path文件路径
- options选项配置
- callback回调函数

返回值：undefined

代码示例：

~~~ javascript
// 1.引入fs模块
let fs = require('fs')
// 2.异步读取
fs.readFile('./观书有感.txt', (err, data) => {
    if (err) {
        console.log('读取失败~~~');
        return;
    }
    console.log(data); // 接收过来的是十六进制 buffer
    console.log(data.toString()); // 十六进制转换为字符串
})
~~~

#### 2-2.`readFileSync同步读取`

语法：

~~~ javascript
fs.readFileSync(path[,options])
~~~

参数说明：

- path文件路径
- options选项配置

返回值：`string | Buffer`

代码示例：

~~~ javascript
// 1.引入fs模块
let fs = require('fs')
// 2.同步读取
let data = fs.readFileSync('./观书有感.txt')
// console.log(data); // 接收过来的是十六进制 buffer
console.log(data.toString()); // 十六进制转换为字符串
~~~

#### 2-3.`createReadStream流式读取`

语法：

~~~ javascript
fs.createReadStream(path[,options])
~~~

参数说明：

- path文件路径
- options选项配置(可选)

返回值：`Object`

代码示例：

~~~ javascript
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
~~~

### 3.文件移动与重命名

在Node.js中，我们可以使用`rename`或`renameSync`来移动或重命名文件或文件夹

语法：

~~~ javascript
fs.rename(oldPath,naePath,callback)
fs.renameSync(oldPath,newPath)
~~~

参数说明：

- `oldPath`文件当前的路径
- `newPath`文件新的路径
- `callback`操作后的回调

~~~ javascript
// 1.导入 fs 模块
let fs = require('fs')
// 2.调用 rename 方法
fs.rename('./座右铭.txt', './论语.txt', err => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log('操作成功');
})
// 文件移动
fs.rename('./data.txt', '../资料/data.txt', err => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log('操作成功');
})
~~~



### 4.文件删除

在Node.js中，我们可以使用`unlink`或`unlinkSync`来删除文件
语法：

~~~ javascript
fs.unlink(path,callback)
fs.unlinkSync(path)
~~~

参数说明：

- path 文件路径
- callback 操作后的回调

代码示例：

~~~ javascript
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
~~~

### 5.文件夹操作

借助Node.js的能力，我们可以对文件夹进行`创建`,`读取`，`删除`等操作

|         方法          |    说明    |
| :-------------------: | :--------: |
|   `mkdir/mkdirSync`   | 创建文件夹 |
| `readdir/readdirSync` | 读取文件集 |
|   `rmdir/rmdirSync`   | 删除文件夹 |

#### 5-1 `mkdir`创建文件夹

在Node.js中，我们可以使用`mkdir`或`mkdirSync`来创建文件夹

语法：

~~~ javascript
fs.mkdir(path[,optins],callback)
fs.mkdirSync(path[,options])
~~~

参数说明：

- path 文件路径
- options 选项配置(可选)
- callback 操作后的回调

代码示例：

~~~ javascript
let fs = require('fs')
// 2.创建文件夹 mkdir mk = make制作 dir directory = 文件夹
fs.mkdir('./html', err => {
    if (err) {
        console.log('创建失败');
        return
    }
    console.log('创建成功');
})
fs.mkdir('./a/d/c', { recursive: true }, err => {
    if (err) {
        console.log('创建失败');
        return
    }
    console.log('创建成功');
})
~~~

#### 5-2 readdir读取文件夹

在Node.js中，我们可以使用`readdir`或`readdirSync`来读取文件夹

语法：
~~~ javascript
fs.readdir(path[,optins],callback)
fs.readdirSync(path[,options])
~~~

参数说明：

- path 文件路径
- options 选项配置(可选)
- callback 操作后的回调

代码示例：

~~~ javascript
fs.readdir('../资料/代码', (err, data) => {
fs.readdir('./', (err, data) => { // 读取当前文件夹
    if (err) {
        console.log('读取失败');
        return
    }
    console.log(data);
})
~~~

#### 5-3 rmdir删除文件夹

在Node.js中，我们可以使用`rmdir`或`rmdirSync`来删除文件夹

语法：

~~~ javascript
fs.rmdir(path[,optins],callback)
fs.rmdirSync(path[,options])
~~~

参数说明：

- path 文件路径
- options 选项配置(可选)
- callback 操作后的回调

代码示例：

~~~ javascript
// 2-4 删除文件夹 rmdir
fs.rmdir('./html', err => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})
// 递归删除 不推荐使用
fs.rmdir('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除成功');
        return
    }
    console.log('删除失败');
})
// 官方建议使用
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})
~~~



### 6.查看资源状态

