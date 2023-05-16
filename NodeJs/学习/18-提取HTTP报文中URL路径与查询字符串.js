// 导入 http 模块
let http = require('http')
// 1.导入url模块
let url = require('url');
// 创建服务对象
let server = http.createServer((request, response) => {
    // 解析 request.url
    // console.log(request.url);
    let res = url.parse(request.url, true) // 解析url
    // console.log(res);
    // 获得url路径
    let pathname = res.pathname;
    console.log(pathname);
    // 获得查询字符串
    let keyword = res.query.keyword
    console.log(keyword);
    response.end('url')
});
// 监听端口，启动服务 9000端口号
server.listen(9000, () => {
    console.log('服务已经启动....');
})