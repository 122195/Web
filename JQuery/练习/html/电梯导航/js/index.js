$(function () {
    // 1. 显示隐藏电梯导航
    var flag = true;
    var boxTop = $('.recommend').offset().top
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= boxTop) {
            $('.fixedtool').fadeIn()
        } else {
            $('.fixedtool').fadeOut()
        }
    }
    $(window).scroll(function () {
        toggleTool();
        // 页面滚动到某个内容区域，左侧电梯导航li相应添加和删除current类名
        if (flag) {
            $('.floor .w').each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass()
                }
            })
        }
    })
    // 2.点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false
        // console.log($(this).index());
        // 当每次点击li 就需要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子 计算它的.offset().top
        var curent = $('.floor .w').eq($(this).index()).offset().top
        // 页面滚动效果
        $('body,html').stop().animate({
            scrollTop: curent,
        }, function () {
            flag = true
        })
        // 点击之后，让当前的li，添加current类名，其余的移除current类名
        $(this).addClass('current').siblings().removeClass();
    })
})