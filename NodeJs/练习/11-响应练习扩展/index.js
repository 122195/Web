// 获取所有td
let tds = document.querySelectorAll('td')
// 遍历
tds.forEach(item => {
    item.onclikc = function () {
        this.style.background = '#222';
    };
})