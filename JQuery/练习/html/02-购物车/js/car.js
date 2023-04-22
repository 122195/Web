$(function () {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮(checkall)的状态赋值给三个小的按钮(j-checkbox)就可以了
    // 事件可以使用change
    $('.checkall').change(function () {
        // console.log($(this).prop('checked'));
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'))
    })
})