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

#### 7.1、操作步骤

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

#### 7.2、测试

浏览器请求对应端口

~~~ javascript
http://127.0.0.1:9000
~~~

#### 7.3、注意事项

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

### 九、设置HTTP响应报文

|       作用       |                      语法                      |
| :--------------: | :--------------------------------------------: |
|  设置响应状态码  |             `response.statusCode`              |
| 设置响应状态描述 |      `response.statusMessage(用的非常少)`      |
|  设置响应头信息  |      `response.setHeader(‘头名‘,'头值')`       |
|    设置响应体    | `response.write('xx')`<br>`response.end('xx')` |

### 十、静态资源服务

静态资源是指内容长时间不发生改变的资源，例如图片，视频，CSS文件，JS文件，HTML文件，字体文件等

动态资源是指内容经常更新的资源，例如百度首页，网易首页，京东搜索列表页面等

#### 10.1、网站根目录或静态资源目录

HTTP服务在哪个文件夹中寻找静态资源，那个文件夹就是静态资源目录，也称之为网站根目录

#### 10.2、网页中的URL

网页中的URL主要分为两大类：相对路径与绝对路径

##### 10.2.1、绝对路径

绝对路径可靠性强，而且相对容易理解，在项目中运用较多

|       形式       |                             特点                             |
| :--------------: | :----------------------------------------------------------: |
| http://baidu.com |   直接向目标资源发送请求，容易理解，网站的外链会用到此形式   |
| //baidu.com/web  | 与网页URL的协议拼接形成完整URL再发送请求，大型网站用的比较多 |
|       /web       | 与网页URL的协议，主机名，端口拼接形成完整URL再发送请求，中小型网站 |

##### 10.2.2、相对路径

相对路径在发送请求时，需要与当前页面URL路径进行计算，得到完整URL后，再发送请求，学习阶段用的比较多

例如当前网页url为 http://atguigu.com/course/h5.html

|         形式         |                 最终的URL                 |
| :------------------: | :---------------------------------------: |
|   `./css/app.css`    | http://www.atguigu.com/course/css/app.css |
|     `js/app.js`      |  http://www.atguigu.com/course/js/app.js  |
|  `../img/logo.png`   |    http://www.atguigu.com/img/logo.png    |
| `../../mp4/show.mp4` |    http://www.atguigu.com/mo4/show.mp4    |

##### 10.2.3、网页中使用URL的场景小结

包括但不限于如下场景：

- a标签href
- link标签href
- script标签src
- img标签src
- video audio 标签src
- form中的action
- AJAX请求中的URL

#### 10.4、GET和POST请求场景小结

**GET请求的情况：**

- 在地址栏直接输入url访问
- 点击a链接
- link标签引入css
- script标签引入js
- img标签引入图片
- form标签中的method为get(不区分大小写)
- ajax中的get请求

**POST请求的情况：**

- form标签中的method为post(不区分大小写)
- AJAX的post请求

### 十一、GET和POST请求的区别

**GET和POST是HTTP协议请求的两种方式**

- GET主要用来获取数据，POST主要用来提交数据
- GET带参数请求是将参数缀到URL之后，在地址栏中输入url访问网站就是GET请求，POST带参数请求是将参数放到请求体中
- POST请求相对GET安全一些，因为在浏览器中参数会暴露在地址栏
- GET请求大小有限制，一般为2K，而POST请求则没有大小限制

## Node.js模块化

### 一、介绍

#### 1.1、什么是模块化与模块

将一个复杂的程序文件依据一定规则(规范)拆分成多个文件的过程称之为模块化

其中拆分出的每个文件就是一个模块，模块的内部数据是私有的，不过模块可以暴露内部数以便其他模块使用

#### 1.2、什么是模块化项目

编码时是按照模块一个一个编码的，整个项目就是一个模块化的项目

#### 1.3、模块化好处

下面是模块化的一些好处：

1. 防止命名冲突
2. 高复用性
3. 高维护性

### 二、模块暴露数据

#### 2.1模块初体验

可以通过下面的操作步骤，快速体验模块化

1.创建me.js

~~~ javascript
// 声明函数
function tiemo(){
    console.log('贴膜...')
}
// 暴露数据
module.exports = tiemo;
~~~

2.创建index.js

~~~ javascript
// 导入模块
const tiemo = require('./me.js');
// 调用函数
tiemo();
~~~

#### 2.2 暴露数据

模块暴露数据的方式有两种:

1. module.exports=value
2. exports.name=value

> 使用有几点注意：
>
> - module.exports可以暴露任意数据
> - 不能使用`exports = value`的形式暴露数据，模块内部module与exports的隐式关系`exports = module.exports={}`,返回的是目标模块中`module.exports`的值

### 三、导入(引入)模块

在模块中使用`require`传入文件路径即可引入文件

~~~ javascript
const tiemo = require('./me.js');
~~~

**require使用的一些注意事项：**

1. 对于自己创建的模块，导入时路径建议写`相对路径`，且不能省略`./`和`../`
2. `js`和`json`文件导入时可以不用写后缀，c/c++编写的`node`扩展文件也可以不写后缀，但是一般用不到
3. 如果导入其他类型的文件，会以`js`文件进行处理
4. 如果导入的路径是个文件夹，则会`首先`检测该文件夹下`package.json`文件中`main`属性对应的文件，如果存在则导入，反之如果文件不存在会报错，如果`main`属性不存在，或者`package.json`不存在，则尝试导入文件夹下的`index.js`和`index.json`,如果还是没有找到，就会报错
5. 导入`node.js`内置模块时，直接`reuqire`模块的名字即可，无需加`./`和`../`

### 四、导入模块的基本流程

这里我们介绍一下`require`导入`自定义模块`的基本流程

1. 将相对路径转为绝对路径，定位目标文件
2. 缓存检测
3. 读取目标文件代码
4. 包裹为一个函数并执行(自执行函数)通过`arguments.callee.toString()`查看自执行函数
5. 缓存模块的值
6. 返回`module.exports`的值

### 五、`CommonJs规范`

`module.expoets`、`exports`以及`require`这些都是`CommonJs`模块化规范中的内容

而Nose.js是实现了`CommonJs`模块化规范，二者关系有点像JavaScript与ECMAScript

## 包管理工具

### 一、概念介绍

#### 1.1包是什么

`包`英文单词是`package`，代表了一组特定功能的源码集合

#### 1.2包管理工具

管理『包』的应用软件，可以对「包」进行 下载安装 ， 更新 ， 删除 ， 上传 等操作

借助包管理工具，可以快速开发项目，提升开发效率

包管理工具是一个通用的概念，很多编程语言都有包管理工具，所以 掌握好包管理工具非常重要

#### 1.3常用的包管理工具

下面列举了前端常用的包管理工具

- npm
- yarn
- cnpm

### 二、npm

npm 全称`Node Package Manager`，翻译为中文意思是『Node 的包管理工具』

npm 是 node.js 官方内置的包管理工具，是 必须要掌握住的工具

#### 2.1 npm的安装

node.js 在安装时会自动安装 npm ，所以如果你已经安装了 node.js，可以直接使用 npm 可以通过`npm -v`查看版本号测试，如果显示版本号说明安装成功，反之安装失败

#### 2.2 npm基本使用

##### 2.2.1 初始化

创建一个空目录，然后以此目录作为工作目录 启动命令行工具 ，执行`npm init`

`npm init`命令的作用是将文件夹初始化为一个『包』，`交互式创建 package.json 文件`

`package.json`是包的配置文件，每个包都必须要有`package.json`

` package.json`内容示例:

~~~ javascript
{
"name": "01_npm",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"l
~~~

属性翻译

~~~ javascript
{
"name": "1-npm", #包的名字
"version": "1.0.0", #包的版本
"description": "", #包的描述
"main": "index.js", #包的入口文件
"scripts": { #脚本配置
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "", #作者
"license": "ISC" #开源证书
}
~~~

>初始化的过程中还有一些注意事项： 
>
>1. package name (`包名`) 不能使用中文、大写，默认值是 文件夹的名称 ，所以文件夹名称也不 能使用中文和大写
>2. version (`版本号`)要求`x.x.x`的形式定义，`x`必须是数字，默认值是`1.0.0`
>3. ISC 证书与 MIT 证书功能上是相同的，关于开源证书扩展阅读http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html
>4. `package.json`可以手动创建与修改
>5. 使用`npm init -y`或者`npm init --yes`极速创`package.json`

##### 2.2.2 搜索包

搜索包的方式有两种

1. 命令行`npm s/search 关键字`
2. `网站搜索`网址是`http://www.npmjs.com`

##### 2.2.3 下载安装包

我们可以通过`npm install`和`npm i`命令安装包

~~~ javascript
# 格式
npm install <包名>
npm i <包名>
# 示例
npm install uniq
npm i uniq
~~~

运行之后文件夹下会增加两个资源

- `node_modules 文件夹`存放下载的包
- `package-lock.json 包的锁文件`，用来锁定包的版本

> 安装`uniq`之后，`uniq`就是当前这个包的一个`依赖包`，有时会简称为`依赖`
>
> 比如我们创建一个包名字为A，A中安装了包名字是 B，我们就说`B 是 A 的一个依赖包`，也会说`A 依赖 B`

##### 2.2.4 require 导入nmp包基本流程

1. 在当前文件夹下 node_modules 中寻找同名的文件夹
2. 在上级目录中下的 node_modules 中寻找同名的文件夹，直至找到磁盘根目录

#### 2.3 生产环境与开发环境

开发环境是程序员`专门用来写代码`的环境，一般是指程序员的电脑，开发环境的项目一般`只能程序员自己访问`

生产环境是项目`代码正式运行`的环境，一般是指正式的服务器电脑，生产环境的项目一般`每个客户都可以访问`

#### 2.4 生产依赖与开发依赖

我们可以在安装时设置选项来区分`依赖的类型`，目前分为两类：

|   类型   |                   命令                   |                             补充                             |
| :------: | :--------------------------------------: | :----------------------------------------------------------: |
| 生产依赖 |   `npm i-S uniq`<br> `npm i-save uniq`   | -S等效于-save，-S是默认选项<br> 包信息保存在package.json中`dependencies`属性 |
| 开发依赖 | `npm i-D less`<br> `npm i-save-dev less` | -D等效于-save-dev<br> 包信息保存在package.json中`devDependencies`属性 |

#### 2.5 全局安装

我们可以执行安装选项`-g`进行全局安装

~~~ javascript
npm i -g nodemon
~~~

全局安装完成之后就可以在命令行的任何位置运行`nodemon`命令

该命令的作用是`自动重启 node 应用程序`

> 说明：
>
> - 全局安装的命令不受工作目录位置影响
> - 可以通过`npm root -g`可以查看全局安装包的位置
> - `不是所有的包都适合全局安装`,只有全局类的工具才适合，可以通过`查看包的官方文档来确定安装方法`,这里先不必太纠结

#### 2.6 安装包依赖

在项目协作中有一个常用的命令就是`npm i`，通过该命令可以依据`package.json`和`package-lock.json`的依赖声明安装项目依赖

~~~ javascript
npm i
npm install
~~~

> node_modules 文件夹大多数情况都不会存入版本库

#### 2.7 安装指定版本的包

项目中可能会遇到版本不匹配的情况，有时就需要安装指定版本的包，可以使用下面的命令

~~~ javascript
// 格式
npm i <包名@版本号>
// 示例
npm i jquery@1.11.2
~~~

#### 2.8 删除依赖

项目中可能需要删除某些不需要的包，可以使用下面的命令

~~~ javascript
// 局部删除
`npm remove uniq`
`npm r uniq`
// 全局删除后
npm remove -g nodemon
~~~

#### 2.9 配置命令别名

通过配置命令别名可以更简单的执行命令

配置`package.json`中的`scripts`属性

~~~ javascript
{
	.
	.
	.
	"scripts": {
		"server": "node server.js",
		"start": "node index.js",
	},
	.
	.
}
~~~

配置完成之后，可以使用别名执行命令

~~~ javascript
npm run server
npm run start
~~~

不过`start`别名比较特别，使用时可以省略`run`

~~~ javascript
npm start
~~~

> 补充说明：
>
> - `npm start`是项目中常用的一个命令，一般用来启动项目
> - `npm run`有自动向上级目录查找的特性，跟`require`函数也一样
> - 对于陌生的项目，我们可以通过查看`scripts`属性来参考项目的一些操作

## express

### 一、express介绍

express是一个基于Node.js平台的极简，灵活的WEB应用开发框架，官方网址：http://www.expressjs.com.cn/

简单来说，express是一个封装好的工具包，封装了很多功能，便于我们开发WEB应用(HTTP服务)

### 二、express使用

#### 2.1 express下载

express本身是一个npm包，所有可以通过npm安装

~~~ javascript
npm init
npm i express
~~~

#### 2.2 express初体验

可以按照这个步骤进行操作：

1. 创建js文件，键入如下代码

   ~~~ javascript
   // 1. 导入express
   let express = require('express')
   
   // 2. 创建应用对象
   let app = express();
   
   // 3. 创建路由
   app.get('/home', (req, res) => {
       res.end('hello express')
   })
   
   // 4. 监听端口，启动服务
   app.listen(3000, () => {
       console.log('服务已启动，端口3000 正在监听中....');
   })
   ~~~

2. 命令行下执行该脚本

   ~~~ javascript
   node<文件名>
   # 或者
   nodemon<文件名>
   ~~~

3. 然后在浏览器就可以访问`http://127.0.0.1:3000/home`

### 三、express路由

#### 3.1 什么是路由

官方定义：`路由确定了应用程序如何响应客户端对特定端点的请求`

#### 3.2路由的使用

一个路由的组成有`请求方法`,`路径`和`回调函数`组成

express中提供了一系列方法，可以很方便的使用路由，使用格式如下：

~~~javascript
app.<method>(path.callback)
~~~

代码示例：

~~~ javascript
// 1. 导入express
let express = require('express')

// 2. 创建应用对象
let app = express();

// 3. 创建路由
app.get('/home', (req, res) => {
    res.end('hello express')
})

app.get('/', (req, res) => {
    res.end('home')
})
// post
app.post('/login', (req, res) => {
    res.end('login login')
})
// 匹配所有方法
app.all('/test', (req, res) => {
    res.end('test test')
})

// 404响应
app.all('*', (req, res) => {
    res.end('404 not Found')
})
// 4. 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口3000 正在监听中....');
})

~~~

#### 3.3获取请求参数

express框架封装了一些API来方便请求报文中的数据，并且兼容原生HTTP模块的获取方式

~~~ javascript
// 1. 导入express
let express = require('express')

// 2. 创建应用对象
let app = express();

// 3. 创建路由
app.get('/request', (req, res) => {
    // 原生操作
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    res.end('hello express')
    // express框架操作
    console.log(req.path); // 获取路径
    console.log(req.query); // 获取查询字符串
    // 获取ip
    console.log(req.ip);
    // 获取请求头
    console.log(req.get('host')); // 获取host请求头
})
// 4. 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口3000 正在监听中....');
})
~~~

#### 3.4获取路由参数

路由参数指的是`URL路径中的参数(数据)`

~~~ javascript
// 1. 导入express
let express = require('express')

// 2. 创建应用对象
let app = express();

// 3. 创建路由
// app.get('/100037199931', (req, res) => {
//     res.setHeader('content-type', 'text/html;charset=utf-8')
//     res.end('商品详情')
// })

// app.get('/100032253039', (req, res) => {
//     res.setHeader('content-type', 'text/html;charset=utf-8')
//     res.end('商品详情')
// })

app.get('/:id', (req, res) => {
    // 获取URL路由参数
    console.log(req.params.id);
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.end('商品详情')
})
// 4. 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口3000 正在监听中....');
})
~~~

