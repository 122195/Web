// 导入模块
let http = require('http')
let fs = require('fs')
// 创建模块对象
let server = http.createServer((request, response) => {
    // response.end(`<table><tr><td>test</td></tr></table>`)
    let html = fs.readFileSync(__dirname + '/5-table.html')
    response.end(html)
})
// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动...');
})