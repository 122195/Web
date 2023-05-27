// 1. 导入express
let express = require('express')

// 2. 创建应用对象
let app = express();

// 3. 创建路由
app.get('/home', (req, res) => {
    res.end('hello express')
})

app.get('/', (req, res) => {
    res.end('home')
})
// post
app.post('/login', (req, res) => {
    res.end('login login')
})
// 匹配所有方法
app.all('/test', (req, res) => {
    res.end('test test')
})

// 404响应
app.all('*', (req, res) => {
    res.end('404 not Found')
})
// 4. 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动，端口3000 正在监听中....');
})
