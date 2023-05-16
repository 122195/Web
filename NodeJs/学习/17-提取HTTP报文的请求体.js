// 1. 导入 http 模块
let http = require('http')
// 2. 创建服务对象
let server = http.createServer((request, response) => {
    // (1) 声明变量
    let body = ''
    // (2) 绑定data事件
    request.on('data', chunk => {
        body += chunk;
    })
    // (3) 绑定end事件
    request.on('end', () => {
        console.log(body);
        // 响应
        response.end('Hello HTTP')
    })
    // console.log(request.headers.host); // 只获取host的值
    // response.end('HTTP'); // 设置响应体并结束响应
});
// 3. 监听端口，启动服务 9000端口号
server.listen(9000, () => {
    console.log('服务已经启动....');
})