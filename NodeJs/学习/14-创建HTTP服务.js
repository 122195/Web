// 1. 导入 http 模块
let http = require('http')
// 2. 创建服务对象
let server = http.createServer((request, response) => {
    response.end('Hello HTTP Server'); // 设置响应体
});
// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动....');
})