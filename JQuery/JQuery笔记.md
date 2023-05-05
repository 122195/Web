# jQuery

## 1.jQuery的基本使用

### 1.jQuery的入口函数

~~~ javascript
1.第一个方法
$(document).ready(function(){
    $('div').hide(); // 此处是页面DOM加载完成的入口
})
~~~

~~~ javascript
2.第二个方法
$(function(){
    $('div').hide(); // 此处是页面DOM加载完成的入口
})
~~~

>1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完毕，jQuery绑我们完成了封装
>2. 相当于原生js中的DOMContentLoaded
>3. 不同于原生js中的load事件是等页面文档，外部的js文件，css文件，图片加载完毕才执行内部代码
>4. 更推荐使用第二种方式

### 2.jQuery的顶级对象$

1.$是jQuery的别称，在代码中可以使用jQuery代替$，但一般为了方便，通常都直接使用$

2.$是jQuery的顶级对象，相当于原生JavaScript中的window，把元素利用$包装成jQuery对象，就可以调用jQuery的方法

### 3.jQuery对象和DOM对象

1.用原生js获取来的对象就是DOM对象

~~~ javascript
var mydiv = document.querySelector('div') // mydiv是DOM对象
console.dir(mydiv);
~~~



2.jQuery方法获取的元素就是jQuery对象

~~~ javascript
$('div'); // $('div')是一个jQuery对象
console.dir($('div'));
~~~



3.jQuery对象本质是：利用$对DOM对象包装后产生的对象(伪数组形式存储)

4.DOM对象与jQuery对象之间互相转换

因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装，想要使用这些属性和方法需要把jQuery对象转换为DOM对象才能使用

~~~ javascript
1.DOM对象转换为jQuery对象：$(DOM对象)
var div = document.querSelector('div')
$('div');
~~~

~~~ javascript
2.jQuery对象转换为DOM对象(两种方式)
// 1.方式一
$('div')[index]; // index是数组索引号
// 2.方式二
$('div').get(index) // index是数组索引号
~~~

## 2.jQuery常用APL

### 1.jQuery选择器

#### 1.1基础选择器

原生JS获取元素方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们做了封装，使获取元素统一标准

~~~ javascript
$("选择器") // 里面选择器直接写CSS选择器即可，但是要加引号
~~~

|    名称    |      用法       |           描述           |
| :--------: | :-------------: | :----------------------: |
|  ID选择器  |     $("id")     |     获取指定ID的元素     |
| 全选选择器 |     $("*")      |       匹配所有元素       |
|  类选择器  |   $(".class")   |  获取同一类class的元素   |
| 标签选择器 |    $("div")     | 获取同一类标签的所有元素 |
| 并集选择器 |  $("div,p,li")  |       选取多个元素       |
| 交集选择器 | $("li.current") |         交集元素         |

#### 1.2jQuery层级选择器

|    名称    |    用法     |                             描述                             |
| :--------: | :---------: | :----------------------------------------------------------: |
| 子代选择器 | $("ul>li"); | 使用>号，获取亲儿子层级的元素，注意，并不会获取孙子层级的元素 |
| 后代选择器 | $("ul li"); |  使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等  |

#### 1.3隐式迭代

遍历内部DOM元素(伪数组形式存储)的过程就叫做隐式迭代

隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法

#### 1.4jQuery筛选选择器

|    语法    |     用法      |                           描述                            |
| :--------: | :-----------: | :-------------------------------------------------------: |
|   :first   | $('li:first') |                     获取第一个li元素                      |
|   :last    | $('li:last')  |                    获取最后一个li元素                     |
| :eq(index) | $('li:eq(2)') | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始 |
|    :odd    |  $('li:odd')  |         获取到的li元素中，选择索引号为奇数的元素          |
|   :even    | $('li:even')  |         获取到的li元素中，选择索引号为偶数的元素          |

#### 1.5jQuery筛选方法

|        语法        |              用法              |                          说明                          |
| :----------------: | :----------------------------: | :----------------------------------------------------: |
|      parent()      |       $('li').parent();        |                        查找父级                        |
| children(selector) |    $('ul').children('li');     |           相当于$('ul>li'),最近一级(亲儿子)            |
|   find(selector)   |      $('ul').find('li');       |              相当于$('ul li'),后代选择器               |
| siblings(selector) |  $('.first').siblings('li');   |              查找兄弟节点，不包括自己本身              |
|  nextAll([expr])   |     $('.first').nextAll()      |             查找当前元素之后所有的同辈元素             |
|  prevtAll([expr])  |      $('.last').prevAll()      |             查找当前元素之前所有的同辈元素             |
|  hasClass(class)   | $('div').hasClass('protected') | 检查当前的元素是否含有某个特定的类，如果有，则返回true |
|     eq(index)      |         $('li').eq(2);         |            相当于$('li:eq(2),index从0开始')            |

#### 1.6jQuery里面的排他思想

~~~ javascript
<script>
        // 1. 隐式迭代 给所有的按钮都绑定了点击事件
        $('button').click(function () {
            // 2.当前的元素变化背景颜色
            $(this).css('background', 'red')
            // 3.其余的兄弟去掉背景颜色 隐式迭代
            $(this).siblings('button').css('background', '')
        })
</script>
~~~

### 2.jQuery样式操作

#### 2.1操作css方法

jQuery可以使用css方法来修改简单元素样式，也可以操作类，修改多个样式

1. 参数只写属性名，则返回的是属性值

   ~~~javascript
   console.log($('div').css('width'));  // 返回的是带单位的字符串 200px
   ~~~

2. 参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号

   ~~~ javascript
   $('div').css('width', '300px');
   $('div').css('width', 300);
   ~~~

3. 参数可以是对象形式，方便设置多组样式，属性名和属性值用冒号隔开，属性可以不用加引号，单位也可以不用加，如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号

   ~~~ javascript
   $('div').css({
       width: 400,
       height: 400,
       backgroundColor: 'green'
   })
   ~~~

#### 2.2设置类样式方法

作用等同于以前的classLIst，可以操作类样式，注意操作类里面的参数不要加点

1. 添加类 addClass()

   ~~~javascript
   $('div').click(function () {
       $(this).addClass("current");
   });
   ~~~

2. 移除类 removeClass()

   ~~~ javascript
   $('div').click(function () {
       $(this).removeClass('current')
   })
   ~~~

3. 切换类 toggleClass()

   ~~~ javascript
   $('div').click(function () {
       $(this).toggleClass('current')
   })
   ~~~

#### 2.3类操作与className区别

原生js中className会覆盖元素原先里面的类名

jQuery里面的类操作只是对指定类进行操作，不影响原先的类名

### 3.jQuery效果

#### 3.1显示隐藏效果

1. 显示语法规范

   ~~~ javascript
   show([speed,[easing],[fn]])
   ~~~

2. 显示参数

   (1)参数都可以省略，无动画直接显示

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

1. 隐藏语法规范

   ~~~ javascript
   hide([speed,[easing],[fn]])
   ~~~

2. 隐藏参数

   (1)参数都可以省略，无动画直接显示

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

1. 切换语法规范

   ~~~ javascript
   toggle([speed,[easing],[fn]])
   ~~~

2. 切换参数

   (1)参数都可以省略，无动画直接显示

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

#### 3.2滑动效果

1. 上滑效果语法规范

   ~~~ javascript
   slideUp([speed,[easing],[fn]])
   ~~~

2. 上滑效果参数

   (1)参数都可以省略

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

1. 下滑效果语法规范

   ~~~ javascript
   slideDown([speed,[easing],[fn]])
   ~~~

2. 下滑效果参数

   (1)参数都可以省略

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

1. 滑动切换效果语法规范

   ~~~ javascript
   slideToggle([speed,[easing],[fn]])
   ~~~

2. 滑动切换效果参数

   (1)参数都可以省略

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

#### 3.3事件切换

~~~ javascript
hover([over],out)
~~~

(1)over:鼠标移到元素上要触发的函数(相当于mouseenter)

(2)out:鼠标移出元素要触发的函数(相当于mouseleave)

(3)如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数

~~~ javascript
$(function () {
    $('.nav>li').hover(function () {
    	$(this).children('ul').slideDown(200)
    }, function () {
    	$(this).children('ul').slideUp(200)
    })
})
~~~

#### 3.4动画队列及其停止排队方法

1. 动画或效果队列

   动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行

2. 停止排队

   ~~~ javascript
   stop()
   ~~~

   (1)stop()方法用于停止动画或效果

   (2)注意：stop()写到动画或者效果的前面，相当于停止结束上一次的动画

#### 3.5淡入淡出效果

1. 淡入效果语法规范

   ~~~ javascript
   fadeIn([speed,[easing],[fn]])
   ~~~

   (1)参数都可以省略

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

2. 淡出效果语法规范

   ~~~ javascript
   fadeOut([speed,[easing],[fn]])
   ~~~

   (1)参数都可以省略

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

3. 淡入淡出切换效果语法规范

   ~~~ javascript
   fadeToggle([speed,[easing],[fn]])
   ~~~

   (1)参数都可以省略

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

4. 渐进方式调整到指定的不透明度

   ~~~ javascript
   fadeTo([speed],opacity,[easing],[fn]])
   ~~~

   (1)opacity透明度必须写，取值1~0之间

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

#### 3.6自定义动画

1. 语法

   ~~~ javascript
   animate(params,[speed],[easing],[fn])
   ~~~

2. 参数

   (1)params:想要更改的样式属性，以对象形式传递，必须写，属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法borderLeft，其余参数都可以省略

   (2)speed：三种预定速度之一的字符串('show','normal',or'fast)或表示动画时长的毫秒数值(如:1000)

   (3)easing:(Optional)用来指定切换效果，默认是‘swing’，可用参数‘linear’

   (4)fn:回调函数，在动画完成时执行的函数，每个元素执行一次

### 4.jQuery属性操作

#### 4.1设置或获取元素固有属性值prop()

所谓元素固有属性就是元素本身自带的属性，比如<a>元素里面的href，比如<input>里面的type

1. 获取属性语法

   ~~~ javascript
   prop('属性')
   ~~~

2. 设置属性语法

   ~~~ javascript
   prop('属性','属性值')
   ~~~

#### 4.2设置或获取元素自定义属性值attr()

用户自己给元素添加的属性，我们称为自定义属性，比如给div添加index=1

1. 获取属性语法

   ~~~ javascript
   attr('属性') // 类似原生getAttribute()
   ~~~

2. 设置属性语法

   ~~~ javascript
   attr('属性','属性值') // 类似原生setAttribute()
   ~~~

#### 4.3数据缓存data()

data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构，一旦页面刷新，之前存放的数据都将被移除

1. 附加数据语法

   ~~~ javascript
   data('key','value') // 向被选元素附加数据
   ~~~

2. 获取数据语法

   ~~~ javascript
   console.log(data('key')) // 向被选元素获取数据
   ~~~

### 5.jQuery文本属性值

#### 5.1 普通元素内容`html()` (相当于原生innerHTML)

~~~ javascript
html() // 获取元素的内容
html('内容') // 设置元素的内容
~~~

#### 5.2 普通元素文本内容`text()`(相当于原生innerText)

~~~ javascript
text() // 获取元素的文本内容
text('文本内容') // 设置元素的文本内容
~~~

#### 5.3表单的值`val()`(相当于原生value)

~~~ javascript
val() // 获取元素的文本内容
val('文本内容') // 设置元素的文本内容
~~~

### 6.jQuery元素操作

#### 6.1遍历元素

jQuery隐式迭代是对同一类元素做了同样的操作，如果想要给同一类元素做不同的操作，就需要用到遍历

语法1：

~~~ javascript
$('div').each(function (index,domEle){ xxx ;})
~~~

1. each()方法遍历匹配的每一个元素，主要用DOM处理，each每一个
2. 里面的回调函数有2个参数：index是每个元素的索引号；demEle是每个DOM元素对象，不是jQuery对象
3. 所以要想使用jQuery方法，需要给这个dom元素转换为jquery对象$(domEle)

语法2：

~~~ javascript
$.each(object,function(index,element) {xxx;})
~~~

1. $.each()方法可用于遍历任何对象。主要用于数据处理，比如数组，对象

2. 里面的函数有2个参数：index是每个元素的索引号；element遍历内容

#### 6.2创建元素

语法：

~~~ javascript
$("<li></li>") // 动态的创建了一个<li>
~~~

#### 6.3添加元素

1.内部添加

~~~ javascript
element.append("内容")
~~~

把内容放入匹配元素内部最后面，类似原生appendChild

~~~ javascript
element.prepend("内容")
~~~

把内容放入匹配元素内部最前面

>内部添加元素，生成后，它们是父子关系
>
>外部添加元素，生成之后，它们是兄弟关系

#### 6.4删除元素

~~~ javascript
element.remove() // 删除匹配的元素(本身)
element.empty() // 删除匹配的元素集合中所有的子节点
element.html("") // 清空匹配的元素内容
~~~

### 7.jQuery尺寸，位置操作

#### 7.1jQuery尺寸

|                语法                |                        用法                        |
| :--------------------------------: | :------------------------------------------------: |
|          width()/height()          |      取得匹配元素宽度和高度 只算width/height       |
|     innerWidth()/innerHieght()     |        取得匹配元素宽度和高度值包含padding         |
|     outerWidth()/outerHeight()     |    取得匹配元素宽度和高度值包含padding，border     |
| outerWidth(true)/outerHeight(true) | 取得匹配元宽度和高度值 包含padding，border，margin |

- 以上参数为空，则是获取相应值，返回的是数字型
- 如果参数为数字，则是修改相应值
- 参数可以不必写单位

#### 7.2jQuery位置

**1.offset()设置获取元素偏移**

- offset()方法设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系
- 该方法有2个属性left,top offset().top 用于获取距离文档顶部的距离，offset().left用于获取距离文档左侧的距离
- 可以设置元素的偏移: offset({top:10,left:30})

**2.position()获取元素偏移**

- position()方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准

**3.scrollTop()/scrollLeft()设置或或元素被卷去的头部和左侧**

- scrollTop()方法设置或返回被选元素被卷去的头部
- scrollLeft()方法设置或返回被选元素被卷去的左侧

## 8.jQuery事件

### 8.1事件注册

单个事件注册

语法：

~~~ javascript
element.事件(function () {})
$('div').click(function () {事件处理程序})
~~~

其他事件和原生基本一致

比如mouseover,mouseout,blur,focus,change,keydown,keyup,resize,scoll等

### 8.2事件处理

**事件处理on()绑定事件**

on()方法在匹配元素上绑定一个或多个事件的事件处理函数

语法：

~~~ javascript
element.on(events,[selector],fn)
~~~

1. events:一个或多个用空格分隔的事件类型，如click或keydown
2. selector：元素的子元素选择器
3. fn：回调函数即绑定在元素身上的侦听函数

on()方法优势2

可以事件委派操作，事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素

~~~ javascript
$('ul').on('click', 'li', function () {
            alert(11)
        })
~~~

on()方法优势3：

动态创建的元素，click()没有办法绑定事件，on()可以给动态生成的元素绑定事件

**事件处理off()解绑事件**

off()方法可以移除通过on()方法添加的事件处理程序

~~~ javascript
$('div').off() // 解绑div上面所有的事件
$('div').off('click') // 解绑div上面点击事件
$('ul').off('click', 'li') // 解绑事件委托
~~~



### 8.3事件对象
