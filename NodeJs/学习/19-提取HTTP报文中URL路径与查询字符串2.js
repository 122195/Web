// 导入 http 模块
let http = require('http')

// 创建服务对象
let server = http.createServer((request, response) => {
    // 实例化 URL 的对象
    // let url = new URL('http://www.xxx.com/search?a=100&b=200')
    // let url = new URL('/search?a=100&b=200', 'http://127.0.0.1:9000') // 和第一种方法一样
    let url = new URL(request.url, 'http://127.0.0.1')
    console.log(url);
    // console.log(url.pathname);
    // 输出keyword 查询字符串
    // console.log(url.searchParams.get('keyword'));
    response.end('url')
});
// 监听端口，启动服务 9000端口号
server.listen(9000, () => {
    console.log('服务已经启动....');
})