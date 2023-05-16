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

在Node.js中，我们可以使用`stat`或`statSync`来查看资源的详情信息

语法：

~~~ javascript
fs.stat(path[,options],callback)
fs.statSync(path[,options])
~~~

参数说明：

- path 文件夹路径
- options 选项配置(可选)
- callback 操作后的回调

代码示例：

~~~ javascript
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
~~~

结果值对象结构：

- `size`		文件体积
- `birthtime`   创建时间
- `mtime`       最后修改时间
- `isFile `     检测是否为文件
- `isDirectory` 检测是否为文件夹

## path模块

path模块提供了操作路径的功能，我们将介绍如下几个较为常用的结构API：

|       API       |           说明           |
| :-------------: | :----------------------: |
| `path.resolve`  | 拼接规范的绝对路径(常用) |
|   `path.sep`    | 获取操作系统的路径分隔符 |
|  `path.parse`   |    解析路径并返回对象    |
| `path.basename` |    获取路径的基础名称    |
| `path.dirname`  |     获取路径的目录名     |
| `path.extname`  |     获得路径的扩展名     |

代码示例：

~~~ javascript
// 导入 fs
let fs = require('fs')
let path = require('path')
console.log(__dirname + '/index.html');
// resolve 解决
// console.log(path.resolve(__dirname, './index.html'))
// console.log(path.resolve(__dirname, 'index.html'))


// sep 分隔符 
console.log(path.sep); // 获取操作系统的路径分隔符

// parse 是一个方法
console.log(__filename); // 保存的是文件的绝对路径
let str = 'D:\\桌面\\Web\\Web\\NodeJs\\学习> node .\\13-path.js'
console.log(path.parse(str));

// basename 获取文件名
console.log(path.basename(str));

// dirname 获取路径部分
console.log(path.dirname(str));

// extname 获取文件扩展名
console.log(path.extname(str));
~~~

## HTTP协议

### 一、概念

`HTTP(hypertext transport protocol)`协议；`中文叫超文本传输协议`

是一种基于TCP/IP的应用层通信协议

这个协议详细规定了浏览器和万维网服务器之间互相通信的规则

协议中主要规定了两个方面的内容

- 客户端：用来向服务器发送数据，可以被称之为请求报文
- 服务端：向客户端返回数据，可以被称之为响应报文

> 报文：可以简单理解为就是一堆字符串

### 二、请求报文的组成

- 请求行
- 请求头
- 空行
- 请求体

### 三、HTTP的请求行

- 请求方法

  - get(主要用于获取数据)
  - opst(主要用于新增数据)
  - put(主要用于更新数据)
  - delete(主要用于删除数据)

- 请求URL(统一资源定位器)

  例如：http://www.baidu.com:80/index.html?a=100&b=200#logo

  - http:			协议(http,ftp,ssh等)
  - www.baodi.com    域名
  - 80			   端口号
  - /index.html      路径
  - a=100&b=200      查询字符串
  - #logo            哈希(锚点链接)

### 四、HTTP请求头

格式：[头名：头值]

常见的请求头有：

|           请求头           |                             解释                             |
| :------------------------: | :----------------------------------------------------------: |
|           `Host`           |                            主机名                            |
|        `Connection`        |       连接的设置keep-alive(保持连接)； close(关闭连接)       |
|      `Cache-Control`       |                 缓存控制max-age=0(没有缓存)                  |
| `Upgrade-nsecure-Requests` |     将网页中的http请求转化为https请求(很少用)老网站升级      |
|        `User-Agent`        | 用户代理，客户端字符串标识，服务器可以通过这个标识来识别这个请求来自哪个客户端，一般在PC端和手机端的区分 |
|          `Accept`          |                   设置浏览器接收的数据类型                   |
|     `Accept-Encoding`      |                      设置接收的压缩方式                      |
|     `Accept-Language`      |            设置接收的语言q-0.7为喜好系数，满分为1            |
|          `Cookie`          |                          后面单独讲                          |

###　五、HTTP的请求体

请求体内容的格式是非常灵活的

(可以是空) ==> GET请求

(也可以是字符串，还可以是JSON) ===>post请求

例如：

- 字符串：keywords=手机&price=2000
- JSON：{"`kyewords`":"手机","price":2000}

### 六、响应报文的组成

- 响应行

  ~~~ javascript
  HTTP/1.1 200 OK
  ~~~

  - HTTP/1.1: HTTP协议版本号

  - 200：OK， 404：Not Found，500：Internal Server Error 403：Forbidden

    还有一些状态码，参考：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

  - OK：响应状态描述

  > 响应状态码和响应字符串关系是———对应的

- 响应头

  ~~~ javascript
  Cache-Control:缓存控制 private 私有的，只允许客户端缓存数据
  Connection 链接设置
  Content-Type:text/html;charset=utf-8 设置响应体的数据类型以及字符集，响应体为html，字符集utf-8
  Content-Length:响应体的长度，单位为字节
  ~~~

- 空行

- 响应体

  响应体内容的类型是非常灵活的，常见的类型有HTML，CSS，JS，图片，JSON

### 七、创建HTTP服务

使用`nodejs`创建HTTP服务

#### 7.1操作步骤

~~~ javascript
// 1. 导入 http 模块
let http = require('http')
// 2. 创建服务对象
// request 意为请求, 是对请求报文的封装对象，通过 request 对象可以获得请求报文的数据
// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文
let server = http.createServer((request, response) => {
    response.end('Hello HTTP Server'); // 设置响应体
});
// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动....');
})
~~~

> `http.createServer`里的回调函数的执行时机：当接收到HTTP请求的时候，就会执行

#### 7.2测试

浏览器请求对应端口

~~~ javascript
http://127.0.0.1:9000
~~~

#### 7.3注意事项

1. 命令行`ctrl+c`停止服务

2. 当服务启动后，更新代码必须重启服务才能生效

3. 响应内容中文乱码的解决办法

   ~~~ javascript
   response.setHeader('content-type','text/html;charset=utf-8');
   ~~~

4. 端口号被占用

   ~~~ javascript
   Error:listen EADDRINUSE:address already in use :::9000
   ~~~

   1)关闭当前正在运行监听端口的服务(使用较多)

   2)修改其他端口号

5. HTTP协议默认端口是80 HTPPS协议的默认端口是443，HTTP服务开发常用端口有3000,8080,8090,9000等

> 如果端口被其他程序占用，可以使用资源监视器找到占用端口的程序，然后使用任务管理器关闭对应的程序

### 八、获取HTTP请求报文

想要获取请求的数据，需要通过`request`对象

|     含义      |                             含义                             | 重点掌握 |
| :-----------: | :----------------------------------------------------------: | :------: |
|   请求方法    |                       `request.method`                       |    *     |
|   请求版本    |                    `request.httpVersion`                     |          |
|   请求路径    |                        `request.url`                         |    *     |
|    URL路径    |         `require('url').parse(request.url).pathname`         |    *     |
| URL查询字符串 |        `require('uel').parse(request.url,true).query`        |    *     |
|    请求头     |                      `request.headers`                       |    *     |
|    请求体     | `request.on('data',function(chunk){}),rquest.on('end',function(){})` |          |

> 注意事项：
>
> 1. request.url只能获取路径以及查询字符串，无法获取URL中的域名以及协议的内容
> 2. request.headers将请求信息转化成一个对象，并将属性名都转化成了小写
> 3. 关于路径：如果访问网站的时候，只填写了IP地址或者是域名信息，此时请求的路径为`/`
> 4. 关于favicon.ico：这个请求是数据浏览器自动发送的请求
