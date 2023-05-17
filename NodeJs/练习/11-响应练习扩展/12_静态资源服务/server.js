/**
 * 创建一个 HTTP 服务，端口为 9000，满足如下需求
 * GET  /index.html        响应  page/index.html 的文件内容
 * GET  /css/app.css       响应  page/css/app.css 的文件内容
 * GET  /images/logo.png   响应  page/images/logo.png 的文件内容
 */
// 导入模块
let http = require('http')
let fs = require('fs')
let path = require('path')
let mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}
// 创建模块对象
let server = http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.statusCode = 405;
    response.end('<h1>405 Method Not Allowed</h1>') // 访问方法错误
    return;
  }
  // 获取请求url的路径
  let { pathname } = new URL(request.url, 'http://127.0.0.1')
  // 拼接文件路径
  let filePaht = __dirname + '/page' + pathname;
  // 读取文件 fs 异步读取 API 
  fs.readFile(filePaht, (err, data) => {
    if (err) {
      console.log(err);
      // 设置字符集
      response.setHeader('content-type', 'text/html;charset=utf-8')
      // 判断错误的代号
      switch (err.code) {
        case 'ENOENT':
          response.statusCode = 404;
          response.end('<h1>404 Not Found</h1>') // 未找到资源
        case 'EPERM':
          response.statusCode = 403;
          response.end('<h1>403 Forbidden</h1>') // 禁止访问
        default:
          response.statusCode = 500;
          response.end('<h1>Internal Server Error</h1>') // 服务内部错误
      }
      response.statusCode = 500
      response.end('文件读取失败')
      return
    }
    // 获取文件后缀名
    let ext = path.extname(filePaht).slice(1)
    // console.log(ext);
    // 获取对应的类型
    let type = mimes[ext]
    if (type) {
      // 匹配到了    text/html;charset=utf-8
      if (ext === 'html') {
        response.setHeader('content-type', type + ';charset=utf-8')
      } else {
        response.setHeader('content-type', type)
      }
    } else {
      // 没有匹配到
      response.setHeader('content-type', 'application/octet-stream')
    }
    // 响应文件内容
    response.end(data)
  })
  // if (pathname === '/index.html') {
  //   let html = fs.readFileSync(__dirname + '/page/index.html')
  //   response.end(html)
  // } else if (pathname === '/css/app.css') {
  //   let css = fs.readFileSync(__dirname + '/page/css/app.css')
  //   response.end(css)
  // } else if (pathname === '/images/logo.png') {
  //   let img = fs.readFileSync(__dirname + '/page/images/logo.png')
  //   response.end(img)
  // } else {
  //   response.statusCode = 404;
  //   response.end('<h1>404 Not Found</h1>')
  // }
})
// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
})