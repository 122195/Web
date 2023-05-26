// 1. 导入express
let express = require('express')

// 2. 创建应用对象
let app = express();

// 3. 创建路由
app.get('/home', (req, res) => {
    res.end('hello express')
})

// 4. 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口3000 正在监听中....');
})
