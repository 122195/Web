/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
// 封装-获取并渲染图书列表函数
const creator = '你好'
function getBooksList() {
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      creator: creator
    }
  }).then((result) => {
    const bookslist = result.data.data
    // console.log(bookslist);
    // 1.2渲染数据
    const htmlStr = bookslist.map((item, index) => {
      return ` <tr>
      <td>${index + 1}</td>
      <td>${item.bookname}</td>
      <td>${item.author}</td>
      <td>${item.publisher}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`
    }).join('')
    // console.log(htmlStr);
    document.querySelector('.list').innerHTML = htmlStr
  })
}
// 网页加载运行，获取并渲染列表一次
getBooksList()

// 目标2：新增图书
// 2.1新增弹框-显示隐藏
// 2.2收集表单数据，并提交到服务器保存
// 2.3刷新图书列表
// 创建弹框对象
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
document.querySelector('.add-btn').addEventListener('click', () => {
  // 点击收集表单数据
  const addForm = document.querySelector('.add-form')
  const bookObj = serialize(addForm, { hash: true, empty: true })
  console.log(bookObj);
  // 提交到服务器
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'POST',
    data: {
      ...bookObj,
      creator: creator
    }
  }).then((result) => {
    console.log(result);
    // 重新请求渲染请求列表
    getBooksList()
    // 重置表单
    addForm.reset()
    // 隐藏弹框
    addModal.hide()
  })
})

// 目标3：删除图书
// 3.1删除元素绑定点击事件-获取图书id
// 3.2调用删除接口
// 3.3刷新图书列表
// 删除元素-点击(事件委托)
document.querySelector('.list').addEventListener('click', e => {
  // console.log(e.target);
  // 判断是否是删除元素
  if (e.target.classList.contains('del')) {
    // 获取图书id
    const theId = e.target.parentNode.dataset.id
    console.log(theId);
  }
})