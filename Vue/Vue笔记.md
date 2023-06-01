# Vue

## 一、Vue核心

### 1.1 Vue简介

#### 1.1.1 官网

1. 英文官网：https://vuejs.org/
2. 中文官网：https://cn.vuejs.org/

#### 1.1.2 介绍与描述

1. 动态构建用户界面的渐进式JavaScript框架
2. 作者：尤雨溪

#### 1.1.3 Vue的特点

1. 遵循MVVM模式
2. 编码简介，体积小，运行效率高，适合移动/PC端开发
3. 它本身只关注UI，也可以引入其他第三方库开发项目

#### 1.1.4 与其他JS框架的关联

1. 借鉴Angular的模板和数据绑定技术
2. 借鉴React的组件化和虚拟DOM技术

#### 1.1.5 Vue周边库

1. vue-cli: vue脚手架
2. vue-resource
3. axios
4. vue-router：路由
5. vuex：状态管理
6. element-ui：基于vue的UI组件库(PC端)

### 1.2 初始Vue

初始Vue:

​    1.想让Vue工作，就必须创建一个Vue实例，且要传入一个`配置对象`

​    2.root容器里的代码依然符合html规范，只不过混入了一些特殊的vue语法

​    3.root容器里的代码被称为`[Vue模板]`

​    4.Vue实例和容器是一一对应的；

​    5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；

​    6.`{{xxx}}`中的`xxx`要写`js表达式`，且`xxx`可以自动读取到`data`中的所有属性；

​    7.一旦`data`中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

> 注意区分：js表达式 和 js代码(语句)
>
> 1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
>
> ​          (1). a
>
> ​          (2). a+b
>
> ​          (3). demo(1)
>
> ​          (4). x === y ? 'a' : 'b'
>
> 2.js代码(语句)
>
> ​          (1). if(){}
>
> ​          (2). for(){}

​      

~~~ javascript
    <div id="root">
        <h1>Hello{{name}},{{address}}</h1>
    </div>
    <script>
        Vue.config.productionTip = false // 阻止 vue 在启动时生成生产提示
        // 创建Vue实例
        new Vue({
            el: '#root', // el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
            data: { // data中用于存储数据，数据供el所指定的容器去使用，值暂时先写成一个对象
                name: '你好',
                address: '北京'
            }
        })
    </script>
~~~

### 1.3 模板语法

 Vue模板语法有2大类：

#### 1.插值语法：

​        功能：用于解析标签体内容

​        写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性

#### 2.指令语法：

​        功能：用于解析标签(包括：标签属性，标签体内容，绑定事件....)

​        举例：v-bind:href="xxx" 或 简写为 :href="xxx" , xxx同样要写js表达式，且可以直接读取到data中的所有属性

​        备注：Vue中有很多指令，且形式都是: v-???，此处我们只是拿v-bind举个例子

~~~ javascript
<!-- 准备好一个容器 -->
    <div id="root">
        <h1>插值语法</h1>
        <h3>你好，{{name}}</h3>
        <h1>指令语法</h1>
        <a v-bind:href="scroll.url" v-bind:x="hello">点我去{{scroll.name}}1</a>
        <a :href="url">点我去百度2</a> <!-- v-bind 简写成 : -->
    </div>
    <script>
        new Vue({
            el: '#root',
            data: {
                name: 'jack',
                scroll: {
                    name: '你好世界',
                    url: 'http://www.baidu.com',
                },

                hello: '你好'
            }
        })
    </script>
~~~

### 1.4 数据绑定

Vue中有2种数据绑定的方式：

​      1.单向绑定(v-bind):数据只能从data流向页面

​      2.双向绑定(v-model):数据不仅能从data流向页面，还可以从页面流向data

​      备注：

​        1.双向绑定一般都应用在表单类元素上(如：input、select等)

​        2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值

~~~ javascript
<div id="root">
        <!-- 普通写法 -->
        单向数据绑定：<input type="text" v-bind:value="name"><br>
        双向数据绑定：<input type="text" v-model:value="name">

        <!-- 简写 -->
        单向数据绑定：<input type="text" :value="name"><br>
        双向数据绑定：<input type="text" v-model="name">

        <!-- 如下代码是错误的，因为v-model只能应用在表单类元素(输入类元素)上 -->
        <h1 v-model:x="name">你好</h1>
    </div>
    <script>
        new Vue({
            el: '#root',
            data: {
                name: '你好'
            }
        })
    </script>
~~~

### 1.5 MVVM模型

1. M：模型(model):对应data中的数据
2. V：视图(View)：模板
3. VM：视图模型(ViewModel)：Vue实例对象

### 1.6 事件处理

