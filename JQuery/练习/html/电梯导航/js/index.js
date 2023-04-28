$(function () {
    // 1. 显示隐藏电梯导航
    var boxTop = $('.recommend').offset().top
    $(window).scroll(function () {
        if ($(document).scrollTop() >= boxTop) {
            $('.fixedtool').fadeIn()
        } else {
            $('.fixedtool').fadeOut()
        }
    })
    // 2.点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        // console.log($(this).index());
        // 当每次点击li 就需要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var curent = $('.floor .w').eq($(this).index()).offset().top
        // 页面滚动效果
        $('body,html').stop().animate({
            scrollTop: curent,
        })
    })
})