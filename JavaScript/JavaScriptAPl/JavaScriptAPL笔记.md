# JavaScriptAPl

## 1. 获取DOM对象

### (1) 根据css选择器来获取DOM元素

- 选择匹配的第一个元素

  ~~~ javascript
  document.querySelector('css选择器')
  ~~~

  参数：

  - 包含一个或多个有效的css选择器字符串

  返回值：

  - css选择器匹配的第一个元素，一个HTMLElement对象
  - 如果没有匹配到，则返回null
  
- 获取多个元素

  ~~~javascript
  document.querySelectorAll('css选择器')
  ~~~

  参数：

  - 包含一个或多个有效的css选择器字符串

  返回值：

  - css选择器匹配的NodeList对象合集

  得到的是一个伪数组：

  - 有长度有索引号的数组
  - 但是没有pop() push()等数组方法
  - 想要得到里面的每一个对象，则需要遍历(for)的方式获得

  >注意事项：
  >
  >哪怕只有一个元素，通过querySelectorAll()获取过来的也是一个伪数组，里面只有一个元素而已

### (2)其他获取DOM元素方法

~~~javascript
// 根据id获取一个元素
document.getElementById('id属性')
// 根据标签获取一类元素 获取所有div
document.getElementByTagName('元素标签')
// 根据类名获取元素
document.getElementByClassName('类属性名')

~~~

## 2.设置/修改DOM元素内容

### (1)document.weite()

只能将文本内容追加到</body>前面的位置
文本中包含的标签会被解析

~~~ javascript
document.write('Hello World')
document.write('<h3>你好，世界！</h3>')
~~~

### (2)元素.innerText属性

将文本内容添加/更新到任意标签位置
文本中包含的标签不会被解析

~~~ javascript
// innerText 将文本内容添加/更新到任意标签位置
let box = document.querySelector('div')
// box是对象
// 对象.属性 = 值   不识别标签
box.innerText = '你好你好'
~~~

### (3)元素.innerHTML属性

将文本内容添加/更行到任意标签位置
文本中包含的标签会被解析

~~~ javascript
box.innerHTML = '<strong>你好你好</strong>'
~~~

## 3.设置/修改DOM元素属性

### (1)设置/修改元素常用属性

- 还可以通过js设置/修改标签元素属性，比如通过src更换图片

- 最常见的属性比如：href title src

  ~~~ javascript
  语法：对象.属性 = 值
  // 获取元素 图片
  let img = document.querySelector('img')
  // 修改元素属性 src
  img.src = '../images/2.webp'
  img.title = '德华'
  ~~~

  

### (2)设置/修改元素样式属性

- 还可以通过js设置/修改标签元素的样式属性

- 比如通过轮播图小圆点自动更换颜色样式

- 点击按钮可以滚动图片，这是移动的图片的位置legt等等

  1. 通过style属性操作CSS

     ~~~ javascript
     对象.style.样式属性 = 值
     // 1. 获取元素
     let div = document.querySelector('div')
     // 2. 改变背景颜色 style
     div.style.background = 'pink'
     ~~~

     > 注意：
     >
     > 1. 修改样式通过style属性引出
     > 2. 如果属性有`-`连接符，需要转换为小驼峰命名法
     > 3. 赋值的时候，需要的时候不要忘记加css单位
  
  2. 操作类名(className)操作css
  
     如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式
  
     ~~~ javascript
     语法：元素.className = ‘css类名’
     ~~~
  
     > 注意：
     >
     > 1. 由于class是关键字，所以使用className去代替
     > 2. className是使用新值换旧值，如果需要添加一个类，需要保留之前的类名
  
  3. 通过classList操作类控制css
  
     为了解决className容易覆盖以前的类名，我们可以通过classList方式追加和删除类名
  
     ~~~ javascript
     // 追加一个类
     元素.classList.add('类名')
     // 删除一个类
     元素.classList.remove('类名')
     // 切换一个类
     元素.classList.toggle('类名')
     ~~~
  
     

### (3)设置/修改表单元素属性

表单很多情况，也需要修改属性，正常的有属性有取值的跟其他的标签属性没有任何区别

- 获取：DOM对象.属性名

- 设置：DOM对象.属性名 = 新值

  ~~~ javascript
  表单.value = '用户名'
  表单.type = 'password'
  ~~~

- 表单属性中添加就有效果，移除就没有效果，一律使用布尔值表示，如果为true代表添加了该属性，如果是false代表移除了该属性

- 例如：disabled checked selected

## 4.定时器-间歇函数

1.开启定时器

~~~ javascript
setInterval(函数,间隔时间)
作用：每隔一段时间调用这个函数
间隔时间单位是毫秒
~~~

2.关闭定时器

~~~ javascript
let 变量名 = setInterval(函数,间隔时间)
clearInterval(变量名)
~~~

## 5.事件监听

1. 什么是事件

   事件是在编程时系统内发生的动作或者发生的事情

   比如用户在网页上单击一个按钮

2. 什么是事件监听

   就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为注册事件

3. 语法

   ~~~ javascript
   元素.addEventListener('事件',要执行的函数)
   ~~~

4. 事件监听三要素：

   - 事件源：那个dom元素被事件触发了，要获取dom元素
   - 事件：用什么方式触发，比如鼠标单击click，鼠标经过mouseover等
   - 事件调用的函数：要做什么事

## 6.高阶函数

高阶函数可以被简单理解为函数的高级应用，JavaScript中函数可以被当成[值]来对待，基于这个特性实现函数的高级应用

[值]就是JavaScript中的数据，如数值，字符串，布尔，对象等

1. 函数表达式

   - 函数也是[数据]
   - 把函数赋值给变量

2. 回调函数

   如果将函数a做为参数传递给函数b时，我们称函数a为回调函数

   简单理解：当一个函数当做参数来传递给另外一个函数的时候，这个函数就是回调函数

   ~~~ javascript
   function fn() {
       console.log('回调函数')
   }
   // fn传递给了setInterval，fn就是回调函数
   setInterval(fn,1000)
   ~~~

## 7.环境对象

环境对象指的是函数内部特殊的变量`this`,它代表着当前函数运行时所处的环境

作用：弄清楚`this`的指向，可以让我们代码更简洁

- 函数的调用方式不同，`this`指代的对象对象也 不同
- `【谁调用，this就是谁】`是判断`this`指向的粗略规则
- 直接调用函数，其实相当于是`window.函数`，所以`this`指代`window`

## 8.节点操作

### (1).DOM节点

- DOM节点的分类

  元素节点 比如div标签

  属性节点 比如class属性

  文本节点 比如标签里面的文字

### (2).节点查找

父节点查找：

~~~ javascript
`parentNode`属性
返回最近一级的父节点 找不到返回为null
`子元素.parentNode`
~~~

子节点查找：

~~~ javascript
`childNdes`获得所有子节点，包括文本节点(空格，换行)，注释节点等
`children`仅获得所有元素节点，返回的还是伪数组
`父元素.children`
~~~

兄弟节点查找：

~~~ javascript
1. 下一个兄弟节点：nextElementSibling
2. 上一个兄弟节点：previousElementSibling
~~~

### (3).增加节点

创建节点：

~~~ javascript
创造出一个新的网页元素，再添加到网页内，一般先创建节点，然后插入节点
创建元素节点方法：
`document.createElement('标签名')`
~~~

追加节点：

~~~ javascript
插入到父元素的最后一个子元素：
`父元素.appendChild(要插入的元素)`
插入到父元素的某个子元素的前面：
`父元素.insertBefore(要插入的元素，在哪个元素前面)`
~~~

克隆节点：

~~~ javascript
克隆一个已有的元素节点：`元素.cloneNode(布尔值)`
`cloneNode会克隆出一个根原标签一样的元素，括号内传入布尔值
	1.若为true，则代表克隆时会包含后代节点一起克隆
    2.若为false，则代表克隆时不包含后代节点
    3.默认为false`
~~~

### (4).删除节点

若一个节点在页面中已不需要时，可以删除它

在JavaScript原生DOM操作中，要删除元素必须通过父元素删除

~~~ javascript
`父元素.removerChild(要删除的元素)`
~~~

>注意：
>
>- 如果不存在父子关系则删除不成功
>- 删除节点和隐藏节点(display:none)有区别的：隐藏节点还是存在的，但是删除，则从html中删除节点

## 9.时间对象

### (1)实例化时间对象

- 在代码中发现了new关键字时，一般将这个操作称为实例化

- 创建一个时间对象并获取时间

  ~~~javascript
  获得当前时间，小括号为空可以得到当前的时间
  `let data = new Date()`
  获得指定时间，小括号里面写上时间，可以返回指定的时间
  `let date = new Date('1949-10-01')`
  ~~~

### (2)时间对象方法

因为时间对象返回的数据我们不能直接使用，所以需要转换为实际开发中常用的格式

|      方法       |        作用        |         说明         |
| :-------------: | :----------------: | :------------------: |
| `getFullYear()` |      获得年份      |     获取四位年份     |
|  `getMonth()`   |      获得月份      |      取值为0~11      |
|   `getDate()`   | 获取月份中的每一天 | 不同月份取值也不相同 |
|   `getDay()`    |      获取星期      |      取值为0~6       |
|  `getHours()`   |      获取小时      |      取值为0~23      |
| `getMinutes()`  |      获取分钟      |      取值为0~59      |
| `getSeconds()`  |       获取秒       |      取值为0~59      |

### (3)时间戳

是指1970年01月01日00时00分00秒起至现在的毫秒数，它是一种特殊的计量时间的方式

可以利用将来的时间戳减去现在的时间戳就是剩余的时间毫秒数

三种方式获取时间戳

~~~ javascript
1.使用getTime()方法
let date = new Date()
console.log(date.getTime())
~~~

~~~javascript
2.简写 +new Date()
console.log(+new Date())
~~~

~~~ javascript
3.使用Date.now()
console.log(Date.now())
无需实例化
但是只能得到当前的时间戳，而前面两种可以返回指定时间的时间戳
~~~

##  10.重绘和回流

1. 浏览器是如何进行界面渲染的

   ![](web\JavaScript\JavaScriptAPl\images\屏幕截图 2023-02-07 212245.png)

   - 解析（Parser）HTML，生成DOM树(DOM Tree)
   - 同时解析（Parser） CSS，生成样式规则 (Style Rules)
   - 根据DOM树和样式规则，生成渲染树(Render Tree)
   - 进行布局 Layout(回流/重排):根据生成的渲染树，得到节点的几何信息（位置，大小
   - 进行绘制 Painting(重绘): 根据计算和获取的信息进行整个页面的绘制
   - Display: 展示在页面上

2. 重绘和回流(重排)

   - 回流(重排)

     当 Render Tree 中部分或者全部元素的尺寸、结构、布局等发生改变时，浏览器就会重新渲染部分或全部文档的过 程称为 回流。

   - 重绘

     由于节点(元素)的样式的改变并不影响它在文档流中的位置和文档布局时(比如：color、background-color、 outline等), 称为重绘。

     >`重绘不一定引起回流，而回流一定会引起重绘`

   - 会导致回流（重排）的操作：

   - 页面的首次刷新

   - 浏览器的窗口大小发生改变

   - 元素的大小或位置发生改变

   - 改变字体的大小

   - 内容的变化（如：input框的输入，图片的大小

   - 激活css伪类 （如：:hover

   - 脚本操作DOM（添加或者删除可见的DOM元素） 简单理解影响到布局了，就会有回流

## 11.事件对象

### (1)获取事件对象

- 事件对象是什么

  1. 也是个对象，这个对象里有事件触发时的相关信息
  2. 例如：鼠标点击事件中，事件对象就存了鼠标点在哪个位置等信息

- 如何获取

  1. 在事件绑定的回调函数的第一个参数就是事件对象

  2. 一般命名为event，ev，e

     ~~~javascript
     `元素.addEventListener('click', function (e) { })`
     ~~~

### (2)事件对象常用属性

- 部分常用属性
  1. `type：获取当前的事件类型`
  2. `clientX/clientY：获取光标相对于浏览器可见窗口左上角的位置`
  3. `offsetX/offsetY：获取光标相对于当前DOM元素左上角的位置`
  4. `key：用户按下的键盘键的值，现在不提倡使用keyCode`

## 12.事件流

### (1)事件流和两个阶段说明

- 事件流指的是事件完整执行过程中的流动路径

  ![](D:\图片\图片1.png)

- 说明：假设页面里有div，当触发事件时，会经历两个阶段，分别是捕获阶段，冒泡阶段

- 简单来说：捕获阶段是从父到子 冒泡阶段是从子到父

### (2)事件捕获和事件冒泡

1. 事件冒泡概念：

   - 当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发，这一过程被称为事件冒泡

   - 简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的同名事件

   - 事件冒泡是默认存在的

2. 事件捕获概念：

   - 从DOM的根元素开始去执行对应的事件(从外到里)

   - 事件捕获需要写对应代码才能看到效果

   - ~~~javascript
     `DOM.addEventListener(事件类型,事件处理函数,是否使用捕获机制)`
     ~~~

   - 说明：

     - addEventListener第三个参数传入true代表是捕获阶段触发(很少使用)
     - 若传入false代表冒泡阶段触发，默认就是false
     - 若是用L0事件监听，则只有冒泡阶段，没有捕获

### (3)阻止事件流动

- 因为默认就有冒泡模式的存在，所以容易导致事件影响到父级元素

- 若想把事件就限制在当前元素内，就需要阻止事件流动

- 阻止事件流动需要拿到事件对象

- ~~~ javascript
  `事件对象.stopPropagation()`
  ~~~

- 此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效

- 鼠标经过事件：

  `mouseover和mouseout`会有冒泡效果

  `mouseenter和mouseleave`没有冒泡效果(推荐)

- 阻止默认行为，比如链接点击不跳转，表单域不提交

- ~~~ javascript
  `e.preventDefault()`
  ~~~

## 13.事件委托

事件委托是利用事件流的特征解决一些开发需求的知识技巧

优点：给父级元素加事件(可以提高性能)

原理：事件委托其实是利用事件冒泡的特点，给父元素添加事件，子元素可以触发

实现：`(事件对象)e.target`可以获得真正的触发事件的元素

## 14.滚动和加载事件

### (1)滚动事件

- 当页面进行滚动时触发的事件

- 很多网页需要检测用户把页面滚动到某个区域后做一些处理，比如固定导航栏，比如返回顶部

- ~~~ javascript
  `事件名：scroll`
  window.addEventListener('scroll',function(){
      // 执行操作
  })
  给window或document添加scroll事件都可以
  ~~~

- 监听某个元素的内部滚动直接给某个元素加即可

### (2)加载事件

- 加载外部资源(如图片，外联css和javascript等)加载完毕时触发的事件

- 有时候需要等页面资源全部处理完了做一些事情

- 老代码喜欢把script写在head中，这时候直接找dom元素找不到

- ~~~ javascript
  事件名：load
  监听页面所有资源加载完毕：
  给window添加load事件
  window.addEventListener('load',function(){
      // 执行的操作
  })
  ~~~

- >注意：不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定load事件

- 当初始的HTML文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表，图像等完全加载

- ~~~ javascript
  事件名: DOMContentLoaded
  监听页面DOM加载完毕：给document添加DOMContentLoaded事件
  document.addEventListener('DOMContentLoaded',function(){
      // 执行的操作
  })
  ~~~

## 15.元素大小和位置

### (1)scroll

- 获取宽高：
  1. 获取元素的内容总宽高(不包含滚动条)返回值不带单位
  2. `scrollWidth和scrollHeight`
- 获取位置：
  1. 获取元素内容往左，往上滚出去看不到的距离
  2. `scrollLeft和scrollTop`
  3. 这两个属性是可以修改的，也可以赋值
  4. `document.documentElement获取过来的是HTML的页面`

### (2)offset

- 获取宽高：
  1. 获取元素的自身宽高，包含元素自身设置的宽高,padding，border
  2. `offsetWidth和offsetHeight`
- 获取位置：
  1. 获取元素距离自己定位父级元素的左，上距离
  2. `offsetLeft和offsetTop 注意是只读属性`

### (3)client

- 获取宽高：

  1. 获取元素的可见部分宽高(不包含边框，滚动条等)
  2. `clientWidth和clientHeight`

- 获取位置：

  1. 获取左边框和上边框宽度
  2. `clientLeft和clientTop 注意是只读属性`

- 会在窗口尺寸改变的时候触发事件：

  ~~~ javascript
  resize
  window.addEventListener('resize',function(){
      // 执行的代码
  })
  ~~~

- 检测屏幕宽度：

  ~~~ javascript
  window.addEventListener('resize',function(){
      let w = document.documentElement.clientWidth
      console.log(w)
  })
  ~~~


## 16.Window对象

### 1.BOM(浏览器对象模型)

- BOM(Browser Object MOdel)是浏览器对象模型

  ![](D:\图片\屏幕截图 2023-02-24 120144.png)

- window是浏览器内置中的全局对象，我们所学习的所有Web APls的知识内容都是基于window对象实现的
- window对象下包含了 navigator,locaton,document,history,screen5个属性，即所谓的BOM(浏览器对象模型)
- document是实现DOM的基础，它其实是依附于window的属性
- 注：依附于window对象的所有属性和方法，使用时可以省略window

### 2.定时器-延时函数

-  JavaScript内置的一个用来让代码延迟执行的函数，叫`setTimeout`

  ~~~javascript
  语法：setTimeout(回调函数,等待的毫秒数)
  ~~~
  
- `setTimeout`仅仅只执行一次，所有可以理解为就是把一段代码延迟执行，平时省略window

  ~~~ javascript
  清除延时函数：
  let timer = setTImeout(回调函数，等待的毫秒数)
  clearTimeout(timer)
  ~~~

- >`setlnerval`的特征是重复执行，首次执行会延时
  >
  >`setTimeout`的特征是延时执行，只执行一次
  >
  >`setTimeout`结合递归函数，能模拟`setInterval`重复执行
  >
  >`clearTimeout`清除由`setTimeout`创建的定时任务

### 3.js执行机制

#### js是单线程：

1. JavaScript语言的一大特点就是单线程，也就是说，`同一个时间只能做一件事`。这是因为JavaScript这门脚本语言诞生的使命所致--JavaScript是为处理页面中用户的交互，以及操作DOM而诞生的，比如我们对某个DOM元素进行添加和删除操作，不能同时进行。
2. 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果js执行的时间过长，这样就会造成页面的渲染不连贯。导致页面渲染加载阻塞的感觉

#### 同步和异步

为了解决这个问题，利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，于是，js中出现了同步和异步

1. 同步：

   前一个任务结束后再执行后一个认为，程序的执行顺序与任务的排列顺序是一致的，同步的，比如做饭的同步做法：我们要烧水煮饭，等水烧开了(10分钟之后)，再去切菜，炒菜

2. 异步：

   你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情，比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜

3. 同步任务：

   同步任务都在主线程上执行，形成一个执行栈

   ![](D:\图片\屏幕截图 2023-02-24 145728.png)

4. 异步任务：

   js的异步是通过回调函数实现的

   一般而言，异步任务有以下三种类型：

   - 普通事件，如click，resize等

   - 资源加载，如load，error等

   - 定时器，包括setIntervel，setTimeout等

     `异步任务相关添加到任务队列中(任务队列也称消息队列)`

     ![](D:\图片\屏幕截图 2023-02-24 145804.png)

#### js执行机制

1. 先执行`执行栈中的同步任务`

2. 异步任务放入任务队列中

3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行

   ![](D:\图片\屏幕截图 2023-02-24 150059.png)

#### 图列小结

<img src="D:\图片\屏幕截图 2023-02-24 150212.png"  />

`由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop）。`

### 4.location对象

location的数据类型是对象，它拆分并保存了URL地址的各个组成部分

- 常用属性和方法：

  1. `href`属性获取完整的URL地址，对其赋值时用于地址的跳转

     ~~~javascript
     // 可以得到当前文件URL地址
     console.log(location.href)
     // 可以通过js方式跳转到目标地址
     location.href = 'http://www.bilibili.com'
     ~~~

  2. `search` 属性获取地址中携带的参数，符号 ？后面部分

     ~~~ javascript
     console.log(location.search)
     ~~~

  3. `hash`属性获取地址中的哈希值，符号#后面部分

     ~~~ javascript
     console.log(location.hash)
     ~~~

     后期Vue路由的铺垫，经常用于不刷新页面，显示不同页面

  4. `reload`方法用来刷新当前页面，传入参数true时表示强制刷新
  
     ~~~ javascript
     let btn = document.querySelector('button')
             btn.addEventListener('click', function () {
                 // reload() 刷新方法 有本地缓存   强制刷新 ctrl + f5   直接更新最新内容从网上拉去，不走本地缓存
                 location.reload(true)
             })
     ~~~

### 5.navigator对象

`navigator`的数据类型是对象，该对象下记录了浏览器自身的相关信息

- 通过 userAgent 检测浏览器的版本及平台

  ~~~ javascript
  // 检测 userAgent（浏览器信息）
  !(function () {
  const userAgent = navigator.userAgent
  // 验证是否为Android或iPhone
  const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
  const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
  // 如果是Android或iPhone，则跳转至移动站点
  if (android || iphone) {
  location.href = 'http://m.itcast.cn'
  }
  })()
  
  ~~~

  

### 6.histroy对象

`history`的数据类型是对象，该对象与浏览器地址栏的操作相对应，如前进，后退，历史记录等

| history对象 | 作用                                                     |
| ----------- | -------------------------------------------------------- |
| back()      | 可以后退功能                                             |
| forward()   | 前进功能                                                 |
| go(参数)    | 前进后退功能 参数如果是1 前进1个页面 如果是-1后退1个页面 |

history对象一般在实际开发中比较少用，但是会在一些OA办公系统中见到

## 17.本地存储

### 1.本地存储的特性

随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在 本地存储大量的数据，HTML5规范提出了相关解决方案。

1. 数据存储在用户浏览器中
2. 设置、读取方便、甚至页面刷新不丢失数据 
3. 容量较大，sessionStorage和localStorage约 5M 左右

###　2.localStorage

1. 生命周期永久生效，除非手动删除 否则关闭页面也会存在
2. 可以多窗口（页面）共享(同一浏览器可以共享)
3. 以键值对的形式存储使用

存储数据:

~~~ javascript
localStorage.setItem('键', '值')
~~~

获取数据:

~~~ javascript
localStorage.getItem('键')
console.log(localStorage.getItem('uname'));
~~~

删除数据:

~~~ javascript
localStorage.removeItem('uname')
~~~

存储复杂数据类型存储

本地只能存储字符串，无法存储复杂数据类型，需要将复杂数据类型转换成JSON字符串，在存储到本地

将复杂数据类型转换成JSON字符串 存储本地存储中

~~~ javascript
localStorage.setItem('obj', JSON.stringify(obj))
~~~

将JSON字符串转换成对象 取出时候使用

~~~ javascript
console.log(JSON.parse(localStorage.getItem('obj')));
~~~

数组也是一样的存储

### 3.sessionStorage

1. 生命周期为关闭浏览器窗口
2. 在同一个窗口(页面)下数据可以共享
3. 以键值对的形式存储使用
4. 用法跟localStorage基本相同

### 4.自定义属性

1. 固定属性：标签天生自带的属性 比如class id title等, 可以直接使用点语法操作

2. 自定义属性：

   由程序员自己添加的属性,在DOM对象中找不到, 无法使用点语法操作,必须使用专门的API

   getAttribute('属性名') // 获取自定义属性

   setAttribute('属性名', '属性值') // 设置自定义属性 removeAttribute('属性名') // 删除自定义属性

3. data-自定义属性：

   传统的自定义属性没有专门的定义规则,开发者随意定值,不够规范,所以在html5中推出来了专门的data-自定义属性 在 标签上一律以data-开头

   在DOM对象上一律以dataset对象方式获取

## 18.正则表达式

### 1.语法

1. JavaScript中定义正则表达式的语法有两种

   - 定义正则表达式语法：

   ~~~javascript
   let 变量名 = /表达式/
   其中`//`是正则表达式字面量
   比如：let reg = /你好/
   ~~~

   - 判断是否有符合规则的字符串：

     `test()`方法用来查看正则表达式与指定的字符串是否匹配

     ~~~javascript
     语法：
     regObj.test(被检测的字符串)
     let reg = /你好/
     let str = 'ok你好OK你好'
     console.log(reg.test(str));
     如果正则表达式与指定的字符串匹配，返回true，否则false
     ~~~

   - 检索(查找)符合规则的字符串：

     `exec()`方法在一个指定字符串中执行一个搜索匹配

     ~~~javascript
     语法：
     regObj.exec(被检测字符串)
     let reg = /你好/
     let str = 'ok你好OK你好'
     console.log(reg.exec(str));
     如果匹配成功，exec()方法返回一个数组，否则返回null
     ~~~

### 2.元字符

- 普通字符：

  大多数的字符仅能够描述它们本身，这些字符称作普通字符，例如所有的字母和数字。也就是说普通字符只能够匹配字符串中与它们相同的字符

- 元字符(特殊字符)

  是一些具有特殊含义的字符，可以极大提高了灵活性和强大的匹配功能

  - 比如，规定用户只能输入英文26个英文字母，普通字符的话abcdefghijklm…..
  - 但是换成元字符写法：[a-z]

- 为了方便记忆和学习，我们对众多的元字符进行了分类：

  1. 边界符(表示位置，开头和结尾，必须用什么开头，用什么结尾)

     正则表达式中的边界符(位置符)用来提示字符所处的位置，主要有两个字符

     | 边界符 | 说明                         |
     | ------ | ---------------------------- |
     | ^      | 表示匹配行首的文本(以谁开始) |
     | $      | 表示匹配行尾的文本(以谁结束) |

     > 如果^和$在一起，表示必须是精确匹配

     ~~~javascript
     console.log(/哈/.test('哈哈哈')); // true
     // ^ 开头
     console.log(/^哈/.test('二哈')); // true
     // $ 结尾
     console.log(/^哈$/.test('哈哈哈')); // false
     // 如果^和$在一起，表示必须是精确匹配
     console.log(/^哈$/.test('哈')); // true
     ~~~

  2. 量词

     量词用来设定某个模式出现的次数

     | 量词  | 说明             |
     | ----- | ---------------- |
     | *     | 重复零次或更多次 |
     | +     | 重复一次或更多次 |
     | ?     | 重复零次或一次   |
     | {n}   | 重复n次          |
     | {n,}  | 重复n次或更多次  |
     | {n,m} | 重复n到m次       |

     >注意：逗号左右两侧千万不要出现空格

  3. 字符类

     (1).[]匹配字符集合

     后面的字符串只要包含abc中任意一个字符，都返回true

     ~~~javascript
     console.log(/[abc]/.test('abc')); // true
     console.log(/[abc]/.test('a')); // true
     console.log(/[abc]/.test('b')); // true
     console.log(/[abc]/.test('c')); // true
     console.log(/[abc]/.test('die')); // false
     ~~~

     (2). []里面加上 - 连字符

     使用连字符`-`表示一个范围

     ~~~javascript
     console.log(/^[a-z]$/.test('c')); // true
     ~~~

     比如：

     1. [a-z]表示a到z26个英文字母都可以
     2. [a-zA-Z]表示大小写都可以
     3. [0-9]表示0~9的数字都可以

     (3).[]里面加上^取反符号

     ~~~javascript
     [^a-z]匹配除了小写字母以外的字符
     注意要写到中括号里面
     ~~~

     (4) `.`匹配除换行符之外的任何单个字符

     (5). 预定义：指的是某些常见模式的简写方式

     | 预订类 | 说明                                                         |
     | ------ | ------------------------------------------------------------ |
     | \d     | 匹配0-9之间的任一数字，相当于`[0-9]`                         |
     | \D     | 匹配所有0-9以外的字符，相当于`[^0-9]`                        |
     | \w     | 匹配任意的字母，数字和下划线，相当于`[A-Za-z0-9]`            |
     | \W     | 除所有字母，数字和下划线以外的字符，相当于`[^A-Za-z0-9]`     |
     | \s     | 匹配空格(包括换行符，制表符，空格符等)，想当于`[\t\r\n\v\f]` |
     | \S     | 匹配非空格的字符，相当于`[^\t\r\n\v\f]`                      |

### 3.修饰符

修饰符约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配等

~~~javascript
/表达式/修饰符
~~~

i是ignore的缩写，正则匹配时字母不区分大小写

g是global的缩写，匹配所有满足正则表达式的结果

~~~javascript
console.log(/a/i.test('a')) // true
console.log(/a/g.test('A')) // true
~~~

替换replace替换

~~~javascript
语法：字符串.replace(/正则表达式/,'替换的文本')
~~~

