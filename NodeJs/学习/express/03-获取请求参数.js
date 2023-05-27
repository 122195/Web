// 1. 导入express
let express = require('express')

// 2. 创建应用对象
let app = express();

// 3. 创建路由
app.get('/request', (req, res) => {
    // 原生操作
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);
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
