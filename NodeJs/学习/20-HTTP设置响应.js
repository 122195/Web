// 导入 http 模块
let http = require('http')
// 创建服务对象
let server = http.createServer((request, response) => {
    // 1.设置响应状态码
    response.statusCode = 203;
    // 2. 响应状态的描述
    response.statusMessage = 'iloveyou'
    // 3. 响应头
    // response.setHeader('content-type', 'text/html;charset=utf-8')
    // response.setHeader('Server', 'Node.js')
    // response.setHeader('myheader', 'test test test') // 自定义响应头
    response.setHeader('test', ['a', 'b', 'c']) // 设置多个同名相应头
    // 4. 设置响应体write可以多次使用
    response.write('love')
    response.write('love')
    response.write('love')
    response.write('love')
    response.end() // 设置响应体
})
// 监听端口 启动服务
server.listen(9000, () => {
    console.log('服务已经启动');
})