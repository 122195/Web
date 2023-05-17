// 导入模块
let http = require('http')
let fs = require('fs')
// 创建模块对象
let server = http.createServer((request, response) => {
    // 获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    if (pathname === '/') {
        let html = fs.readFileSync(__dirname + '/5-table.html')
        response.end(html)
    } else if (pathname === '/index.css') {
        let css = fs.readFileSync(__dirname + '/index.css')
        response.end(css)
    } else if (pathname === '/index.js') {
        let js = fs.readFileSync(__dirname + '/index.js')
        response.end(js)
    } else {
        response.statusCode = 404;
        response.end('<h1>404 Not Found</h1>')
    }
})
// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})