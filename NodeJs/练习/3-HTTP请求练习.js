// 1.导入 HTTP 模块
let http = require('http')

// 2. 创建服务对象
let server = http.createServer((request, response) => {
    // 获取请求的方法
    let { method } = request
    // 获取请求的 url 路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    // 解决乱码
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // console.log(method);
    // console.log(pathname);
    // 判断
    if (method === 'GET' && pathname === '/login') {
        // 登录情形
        response.end('登录页面')
    } else if (method == 'GET' && pathname === '/reg') {
        response.end('注册页面')
    } else {
        response.end('Not Found')
    }
    // response.end('practise')
})

// 3. 监听端口 启动服务
server.listen(9000, () => {
    console.log('服务已经启动... 端口 9000 监听中...');
})