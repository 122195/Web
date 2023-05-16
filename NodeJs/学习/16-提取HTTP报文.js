// 1. 导入 http 模块
let http = require('http')
// 2. 创建服务对象
let server = http.createServer((request, response) => {
    // // 获取请求的方法
    // console.log(request.method);
    // // 获取请求的url
    // console.log(request.url); // 只包含url 中的路径与查询字符串
    // // 获取 HTPP 协议的版本号
    // console.log(request.httpVersion);
    // 获取HTTP的请求头
    // console.log(request.headers);
    console.log(request.headers.host); // 只获取host的值
    response.end('HTTP'); // 设置响应体并结束响应
});
// 3. 监听端口，启动服务 9000端口号
server.listen(9000, () => {
    console.log('服务已经启动....');
})