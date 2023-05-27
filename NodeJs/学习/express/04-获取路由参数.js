// 1. 导入express
let express = require('express')

// 2. 创建应用对象
let app = express();

// 3. 创建路由
// app.get('/100037199931', (req, res) => {
//     res.setHeader('content-type', 'text/html;charset=utf-8')
//     res.end('商品详情')
// })

// app.get('/100032253039', (req, res) => {
//     res.setHeader('content-type', 'text/html;charset=utf-8')
//     res.end('商品详情')
// })

app.get('/:id', (req, res) => {
    // 获取URL路由参数
    console.log(req.params.id);
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.end('商品详情')
})
// 4. 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口3000 正在监听中....');
})