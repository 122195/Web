# z`JS高级

## 1.作用域

### 1.局部作用域

1. 函数作用域：

   在函数内部声明的变量只能在函数内部被访问，外部无法直接访问

   ~~~ javascript
   <script>
       function getSum() {
       // 函数内部是函数作用域 属于局部变量
       const num = 10
   }
   console.log(num) // 此处报错 函数外部不能使用局部作用域变量
   </script>
   ~~~

   总结：

   - 函数内部声明的变量，在函数外部无法被访问
   - 函数的参数也是函数内部的局部变量
   - 不同函数内部声明的变量无法互相访问
   - 函数执行完毕后，函数内部的变量实际被清空了

2. 块作用域：

   在JavaScript中使用{}包裹的代码称为代码块，代码块内部声明的变量外部将[有可能]无法被访问

   ~~~ javascript
   for (let i = 0; i < 3; i++) {
   	console.log(i) // 正常
   }
   // 超出了i的作用域
   console.log(i) // 报错
   ~~~

   总结：

   - let 声明的变量会产生块作用域，`var` 不会产生块作用域
   - `const`声明的常量也会产生块作用域
   - 不同代码块之间的变量无法互相访问
   - 推荐使用let或`const`

### 2.全局作用域

`<script>`标签和.js的[最外层]就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。

全局作用域中声明的变量，任何其他作用域都可以被访问

<script>
    // 全局作用域
    // 全局作用域下声明了 num 变量
    const num = 10
    function fn() {
		// 函数内部可以使用全局作用域的变量
        console.log(num)
    }
    // 此处全局作用域
</script>

> 注意:
>
> 1. 为window对象动态添加的属性默认也是全局的,不推荐
> 2. 函数中未使用任何关键字声明的变量为全局变量,不推荐
> 3. 尽可能少的声明全局变量,防止全局变量被污染

### 3.作用域链

作用域链本质上是底层的变量查找机制

在函数被执行时,会优先查找当前函数作用域中查找变量

如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域

<script>
    // 全局作用域
    let a = 1
    let b = 2
    // 局部作用域
    function f() {
        let a= 1
        function g() {
            a = 2
            console.log(a)
        }
        g() // 调用g
    }
    f() // 调用f
</script>

> 总结：
>
> 1. 嵌套关系的作用域串联起来形成了作用域链
> 2. 相同作用域中按着从小到大的规则查找变量
> 3. 子作用域能够访问父作用域，父作用域无法访问子级作用域

### 4.垃圾回收机制

1. 什么是垃圾回收机制

   垃圾回收机制(Garbage Collection)简称GC

   JS中内存的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收

   正因为垃圾回收器的存在，许多人认为JS不太用关系内存管理的问题

   但如果不了解JS的内存管理机制，我们同样非常容易造成内存泄露(内存无法被回收)的情况

   不再用到的内存，没有及时释放，就叫做内存泄露

2. 内存的生命周期

   JS环境中分配的内存，一般有如下生命周期：

   - 内存分配：当我们声明变量，函数，对象的时候，系统会自动为他们分配内存
   
   - 内存使用：即读写内存，也就是使用变量，函数等
   
   - 内存回收：使用完毕，由垃圾回收自动回收不再使用的内存
   
     **说明**：
   
     1. 全局变量一般不会回收(关闭页面回收)
     2. 一般情况下局部变量的值，不用了，会被自动回收掉
   
     **内存泄露：**程序中分配的内存由于某种原因程序未释放或无法释放叫做内存泄露
   
3. 垃圾回收算法说明
   
   所谓垃圾回收，核心思想就是如何判断内存是否已经不再会被使用了，如果是，就视为垃圾，释放掉下面介绍两种常见的浏览器垃圾回收算法：引用计数法和标记清楚法

   - 引用计数
   
     IE采用的引用计数算法，定义“内存不再使用”的标准很简单，就是看一个对象是否指向它的引用
   
     1. 跟踪记录每个值被引用的次数
     2. 如果这个值的被引用了一次，那么就记录次数1
     3. 多次引用会累加
     4. 如果减少一个引用就减1
     5. 如果引用次数是0，则释放内存
   
     ~~~ javascript
     const person = {
         age: 18,
         name:'nihao'
     }
     const p = person
     person = 1
     p = null
     ~~~
   
     由上面可以看出，引用计数算法是个简单有效的算法
   
     但它却存在一个致命的问题：嵌套引用
   
     如果两个对象相互引用，尽管他们已不再使用，垃圾回收器不会进行回收，导致内存泄露
   
     ~~~ javascript
     function fn(){
         let o1 = {}
         let o2 = {}
         o1.a = o2
         o2.a = o1
         return'引用计数无法回收'
     }
     fn()
     ~~~
   
     因为他们的引用次数永远不会是0，这样的互相引用如果说很大量的存在就会导致大量的内存泄露
   
   - 标记清除法
   
     现代的浏览器已经不再使用引用计数算法了
   
     现代浏览器通用的大多数是基于标记清除算法的某些改进算法，总体思想都是一致的
   
     核心：
   
     1. 标记清除算法将“不再使用的对象”定义为“无法达到的对象”
   
     2. 就是从根部(在JS中就是全局对象)出发定时扫描内存中的对象。凡是能从根部达到的对象，都是还需要使用的
   
     3. 那些无法由根部出发触及到的对象被标记为不再使用。稍后进行回收
   
        ![](D:\桌面\web\JavaScript\JavaScript高级\images\标记引用.png)
        
        ~~~javascript
        function fn() {
            let o1 = {}
            let o2 = {}
            o1.a = o2
            o2.a = o1
            return'引用计数无法回收'
        }
        fn()
        ~~~
        
        根部已经访问不到，所以自动清除

### 5.闭包

概念：一个函数对周围状态的引用捆绑在一起，内存函数中访问到其外层函数的作用域

简单理解：`闭包 = 内层函数 + 外层函数的变量`

~~~ javascript
function outer(){
	const a = 1
    function f() {
        console.log(a)
    }
    f()
}
outer()
~~~

闭包作用：封闭数据，提供操作，外部也可以访问函数内部的变量

闭包可能引起内存泄露问题

闭包的基本格式：

~~~ javascript
function outer() {
	let i = 1
    function fn() {
        console.log(i)
    }
    return fn
}
const fun = outer()
fun() // 1
// 外层函数使用内部函数的变量
`--------------------------------------------------------------`
// 简约写法
function outer() {
    let i = 1
    return function () {
        console.log(i)
    }
}
const fun = outer()
fun() // 调用fun
// 外层函数使用内部函数的变量
~~~

### 6.变量提升

变量提升是JavaScript中比较奇怪的现象，它允许在变量声明之前即被访问(仅存在于`var`声明变量)

注意：

1. 变量在未声明即被访问时会报语法错误
2. 变量在`var`声明之前即被访问，变量的值为undefined、
3. 只提升变量声明，不提升变量赋值
4. `let/const`声明的变量不存在变量提升
5. 变量提升出现在相同作用域中
6. 实际开发中推荐先声明再访问变量
7. JS初学者经常花很多时间才能习惯变量提升，还经常出现一些意想不到的bug，正因为如此，ES6引入了块级作用域，用let或者`const`声明变量，让代码写法更加规范和人性化

## 2.函数进阶

### 1.函数提升

函数提升与变量提升比较类似，是指函数在声明之前即可被调用

~~~ javascript
// 调用函数
foo()
// 声明函数
function foo() {
	console.log('声明之前即被调用...')
}
~~~

>总结：
>
>1. 函数提升能够使函数的声明调用更灵活
>2. 函数表达式不存在提升的现象
>3. 函数提升出现在相同作用域当中

### 2.函数参数

(1).动态参数

arguments是函数内部内置的伪数组变量。它包含了调用函数时传入的所有实参

~~~ javascript
function getSum() {
            // arguments 动态参数 只存在于 函数里面
            // 是伪数组
            // console.log(arguments);
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            };
            // return sum
            console.log(sum);
        }
        // sum = getSum(2, 3, 4);
        getSum(2, 3, 4);
        getSum(2, 3, 4, 2, 3, 4, 5);
        // console.log(sum);
~~~

> 总结：
>
> 1. arguments是一个伪数组，只存在于函数中
> 2. arguments的作用是动态获取函数的实参
> 3. 可以通过for循环依次得到传递过来的实参

(2).剩余参数

剩余参数允许我们将一个不定数量的参数表示为一个数组

~~~ javascript
function getSum(...other) {
            // 得到数组[1,2,3]
            console.log(other);
        }
        getSum(1, 2, 3)
~~~

1.`...`是语法符号，置于最末函数形参之前，用于获取多余的实参

2.借助`...`获取的剩余实参，是一个真数组

(3).展开运算符

展开运算符`(...)`将一个数组进行展开

~~~ javascript
let arr = [1,2,3,4];
console.log(...arr) // 1234
// 不会修改原数组
~~~

展开运算符的运用场景：求数组最大值(最小值),合并数组

~~~ javascript
// 1.求最大值
let arr2 = [1, 2, 3, 4]
console.log(Math.max(...arr2));
// 2.合并数组
let arr3 = [...arr1, ...arr2]
console.log(arr3)
~~~

### 3.箭头函数

目的：引入箭头函数的目的是更简短的函数写法并且不绑定this，箭头函数的语法比函数表达式更简洁

使用场景：箭头函数更使用于那些本来需要匿名函数的地方

1.基本语法

- ~~~ javascript
  const fn = () => {
  	console.log(123);
  }
  fn();
  const fn1 = (x) => {
  	console.log(x);
  }
  fn1(123);
  ~~~

- 只有一个形参的时候，可以省略小括号

  ~~~ javascript
  const fn2 = x => {
  	console.log(x);
  }
  fn2(123);
  ~~~

- 只有一行代码的时候可以省略大括号

  ~~~ javascript
  const fn3 = x => console.log(x)
  fn3(123)
  ~~~

- 只有一行代码的时候可以省略return直接返回值

  ~~~ javascript
  const fn4 = x => console.log(x)
  fn4(123)
  ~~~

- 箭头函数可以直接返回一个对象，对象要写到括号里面

  ~~~ javascript
  const fn5 = (uname) => ({ uname: uname })
  console.log(fn5('刘德华'));
  ~~~

2.箭头函数参数

1. 普通函数有arguments 动态参数

2. 箭头函数没有 arguments 动态参数，但是有 剩余参数 `...arr`

~~~ javascript
const getSum = (...arr) => {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += arr[i]
	}
		return sum
	}
const result = getSum(2, 3)
console.log(result);
~~~

3.箭头函数this

在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的this值， 非常令人讨厌。 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层沿用this

~~~ javascript
 // 以前this的指向：  谁调用的这个函数，this 就指向谁
        // console.log(this)  // window
        // // 普通函数
        // function fn() {
        //   console.log(this)  // window
        // }
        // window.fn()
        // // 对象方法里面的this
        // const obj = {
        //   name: 'andy',
        //   sayHi: function () {
        //     console.log(this)  // obj
        //   }
        // }
        // obj.sayHi()

        // 2. 箭头函数的this  是上一层作用域的this 指向
        // const fn = () => {
        //   console.log(this)  // window
        // }
        // fn()
        // 对象方法箭头函数 this
        // const obj = {
        //   uname: 'pink老师',
        //   sayHi: () => {
        //     console.log(this)  // this 指向谁？ window
        //   }
        // }
        // obj.sayHi()

        const obj = {
            uname: 'pink老师',
            sayHi: function () {
                console.log(this)  // obj
                let i = 10
                const count = () => {
                    console.log(this)  // obj 
                }
                count()
            }
        }
        obj.sayHi()
~~~

在开发中[使用箭头函数前需要考虑函数中this值]，事件回调函数使用箭头函数时，this为全局window，因此DOM事件回调函数为了简便，还是不太推荐使用箭头函数

## 3.解构赋值

### 1.数组解构

数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法

**基本语法：**

1. 赋值运算符 = 左侧的[]用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量

2. 变量的顺序对应数组单元值的位置依次进行赋值操作

   ~~~ javascript
   // 同时将数组单元值100,10,80，依次赋值给变量max,min,avg
   let [max, min, avg] = [100, 10, 80];
   console.log(max);
   console.log(min);
   console.log(avg);
   ~~~

3. 变量多，单元少的问题

   ~~~ javascript
   let [a, b, c, d] = [1, 2, 3]
   console.log(a); // 1
   console.log(b); // 2
   console.log(c); // 3
   console.log(d); // undefined
   // 变量的数量大于单元值数量时，多余的变量将被赋值为undefined
   ~~~

4. 变量少，单元多的问题 最后一个值没有变量接收

   ~~~ javascript
   let [a, b, c] = [1, 2, 3, 4]
   console.log(a); // 1
   console.log(b); // 2
   console.log(c); // 3
   ~~~

5. 利用剩余参数解决变量少，单元多的问题

   ~~~ javascript
   let [a, b, ...arr] = [1, 2, 3, 4];
   console.log(a); // 1
   console.log(b); // 2
   console.log(arr); // [3,4]
   // 剩余参数返回的还是一个数组
   ~~~

6. 防止有undefined传递单元值的情况，可以设置默认值

   ~~~ javascript
   let [a = 0, b = 0,] = [1, 2];
   console.log(a); // 1
   console.log(b); // 2
   // 允许初始化变量的默认值，且只有单元值为 undefined 时默认值才会生效
   ~~~

7. 按需导入赋值

   ~~~ javascript
   const [a, b, , d] = [1, 2, 3, 4]
   console.log(a) // 1
   console.log(b) // 2
   console.log(d) // 4
   ~~~

8. 支持多维数组的结构

   ~~~ javascript
   let [a, b] = [1, [2, 3]];
   console.log(a); // 1
   console.log(b); // [2,3]
   console.log(b[0]); // 2
   console.log(b[1]); // 3
   let [a, b, [c, d]] = [1, 2, [3, 4]]
   console.log(a) // 1
   console.log(b) // 2
   console.log(c) // 3
   console.log(d) // 4
   ~~~

### 2.对象解构

对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法

**基本语法：**

1. 赋值运算符 = 左侧的{}用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量
2. 对象属性的值将被赋值给与属性名相同的变量
3. 注意解构的变量名不要和外面的变量名冲突否则报错
4. 对象中找不到与变量名一致的属性时变量值为undefined

**给新的变量名赋值**

~~~ javascript
// 冒号表示 什么值：赋值给谁
let { uname: username, age } = { uname: 'nihao', age: 18 }
console.log(username);
console.log(age);
~~~

**解构数组对象**

~~~ javascript
let pig = [
{
uname: '佩奇',
age: 18
}
]
let [{ uname, age }] = pig;
console.log(uname);
console.log(age);
~~~

**多级对象解构**

~~~ javascript
let pig = {
	name: 'Hello',
	family: {
	mother: '1',
	father: '1',
	sister: '1'
		}
}
let { name, family: { mother, father, sister } } = pig
console.log(name);
console.log(mother);
console.log(father);
console.log(sister);
~~~

**遍历数组`forEach`方法**

`forEach()`方法用于调用数组的每个元素，并将元素传递给回调函数

语法：

~~~ javascript
被遍历的数组.forEach(function(当前数组元素,当前元素索引号){})
let arr = ['red', 'green', 'blue'];
arr.forEach(function (itme, index) {
      console.log(itme); // 数组元素
      console.log(index); // 数组索引号
   })
~~~

>1. `forEach`主要是遍历数组
>2. 参数当前数组元素是必须要写的，索引号可选

**筛选数组filter方法**

- filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素

- 主要使用场景：筛选数组符合条件的元素，并返回筛选之后元素的新数组

- 语法：

  ~~~ javascript
  被遍历的数组.filter(function (index,item){
      return 筛选条件
  })
// index必须写 item可选
  let str = [10, 20, 30];
  let arr = str.filter(function (index, item) {
      // console.log(index); // 取过来的数值
      // console.log(item); // 索引号
       return index >= 20
   });
   console.log(arr);
  ~~~

- 返回值：返回数组，包含了符合条件的所有元素，如果没有符合条件的元素则返回空数组

- 因为返回新数组，所以不会影响原数组

## 4.深入对象

### 1.创建对象的三种方式

 **利用对象字面量创建对象**

~~~ javascript
const o = {
	name: '你好'
}
~~~

**利用new Object创建对象**

~~~ javascript
const o = new Object({name:'你好'})
console.log(o);
~~~

### 2.构造函数

**利用构造函数创建对象**

- 构造函数：是一种特殊的函数，主要用来初始化对象

- 使用场景：常规的{...}语法允许创建一个对象，比如我们创建了佩奇的对象，继续创建乔治的对象还需要重新写一遍，此时可以通过构造函数来快速创建多个类似的对象

- 构造函数在技术上是常规函数，不过有两个约定：

  1. 它们的命名以大写字母开头
  2. 它们只能由`new`操作符来执行

- 构造函数语法：大写字母开头的函数

- 创建构造函数:

  ~~~ javascript
  function Pig(uname, age) {
        this.uname = uname
        this.age = age
  }
  // new Pig('你好', 6);
  console.log(new Pig('你好', 6));
  // new Pig('OK', 6);
  console.log(new Pig('OK', 6));
  ~~~

  >说明：
  >
  >1. 使用new关键字调用函数的行为被称为实例化
  >2. 实例化构造函数时没有参数时可以省略()
  >3. 构造函数内部无需写return，返回值即为新创建的对象
  >4. 构造函数内部的return返回的值无效，所有不要写return
  >5. new Object() new Date() 也是实例化构造函数

### 3.实例成员&静态成员

**实例成员：**

通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员

~~~ javascript
// 构造函数
function Person() {
    // 构造函数内部的this就是实例对象
    //　实例对象中动态添加属性
    this.name = '小米',
    this.sayHi = function () {
        console.log('你好')
    }
}
// 实例化，p1是实例对象
// p1 实际就是 构造函数内部this
const p1 = new Person()
console.log(p1)
console.log(p1.name) // 访问实例属性
p1.sayHi() // 调用实例方法
~~~

>说明：
>
>1. 实例对象的属性和方法级即为实例成员
>2. 为构造函数传入参数，动态创建结构相同但值不同的对象
>3. 构造函数创建的实例对象彼此独立互不影响

**静态成员：**

构造函数的属性和方法被称为静态成员

~~~ javascript
// 构造函数
function Person(name,age) {
    // 省略实例成员
}
// 静态属性
Person.eyes = 2
Person.arms = 2
// 静态方法
Person.walk = function () {
    console.log('你好')
    // this 指向Person
    console.log(this.eyes)
}
~~~

>说明：
>
>1. 构造函数的属性和方法被称为静态成员
>2. 一般公共特征的属性或方法静态成员设置为静态成员
>3. 静态成员方法中的this指向构造函数本身

## 5.内置构造函数

### 1.Object

学习三个常用静态方法(静态方法就是只有构造函数Object可以调用)

1. `Object.keys`静态方法获取对象中所有属性(键)

   ~~~ javascript
   语法：
   const o = {uname: 'nihao', age: 18}
   console.log(Object.keys(o)); // 返回的是数组
   ~~~

2. `Object.values`静态方法获取对象中所有属性值

   ~~~ javascript
   语法：
   const o = {uname: 'nihao', age: 18}
   console.log(Object.values(o)); // 返回的是数组
   ~~~

3. `Object.assign`静态方法常用于对象拷贝

   ~~~ javascript
   const oo = {}
   Object.assign(oo,o)
   console.log(o) // 把o对象里面的属性和值拷贝给oo
   Object.assign(o, { gender: 'man' }) // 给o对象添加一个新的属性
   console.log(o);
   ~~~

   

### 2.Array

reduce返回函数累计处理的结果，经常用于求和

~~~ javascript
语法：
arr.reduce(function(累计值,当前元素[,索引号][,原数组]){},起始值)
~~~

**累计值参数：**

1. 如果有起始值，则以起始值为准开始累计，累计值 = 起始值
2. 如果没有起始值，则累计值以数组的第一个数组元素作为起始值开始累计
3. 后面每次遍历就会用后面的数组元素，累计到累计值里面(类似求和里面的sum)

**实例方法**

1. 实例方法 join数组元素拼接为字符串，返回字符串

~~~ javascript
let arr = [1, 2, 3]
console.log(arr.join('-'));
~~~

2. 实例方法 `find` 查找数组，返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回undefined

~~~javascript
 let arr1 = [
	{
   		name: '小米',
   		price: 1999
	},
	{
   		name: '华为',
   		price: 1999
	}
	]
~~~

3. 实例方法 `every` 检测数组所有元素是否符合指定条件，如果所有元素都通过检测返回true，否则返回false

    ~~~javascript
    let arr2 = [1, 2, 3]
    let flag = arr2.every(item => item > 0)
    console.log(flag); // true
    ~~~

4. 实例方法 `some` 检测数组中的元素是否满足指定条件，如果数组中有元素满足条件返回true，否则返回false

~~~ javascript
let arr3 = [1, 2, 3]
let flag1 = arr3.some(item => item > 2)
console.log(flag1);
~~~

5.实例方法 `concat` 合并两个数组，返回生成新数组

~~~ javascript
let arr4 = [1, 2, 3]
let arr5 = [4, 5, 6]
let arr6 = arr4.concat(arr5)
console.log(arr6);
~~~

6. 实例方法 `sort` 对原数组单元值排序，按照字母的首字母排序，并返回数组

~~~ javascript
let arr7 = ['ba', 'ac', 'cv', 'da']
console.log(arr7.sort());
~~~

7. 实例方法 `reverse` 反转数组，方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组

~~~ javascript
let arr8 = [6, 5, 4, 3, 2, 1]
console.log(arr8.reverse());
~~~

8. 实例方法 `findIndex`  方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

~~~ javascript
const array1 = [5, 12, 8, 11, 4, 55];
// const array1 = [5, 12, 8];
// const isLargeNumber = (element) => element > 13;
const isLargeNumber = function (element) {
return element > 12
}
console.log(array1.findIndex(isLargeNumber));
// console.log(array1.findIndex(array1));
~~~

**数组常见方法- 伪数组转换为真数组**

~~~ javascript
// 伪数组转换为真数组 Array.from()
let lis = document.querySelectorAll('li')
let liss = Array.from(lis)
liss.pop()
console.log(liss);
~~~

### 3.String

在JavaScript中的字符串，数值，布尔具有对象的使用特征，如具有属性和方法，之所以具有对象特征的原因是字符串，数值，布尔类型数据是JavaScript底层使用Object构造函数‘包装’来的，被称为包装类型

**常见实例方法**

1. 实例属性`length`用来获取字符串的长度(重点)

   ~~~ javascript
   let str = '焦虑且颓废'
   console.log(str.length); // 5
   ~~~

2. 实例方法`split('分隔符')`用来将字符串拆分成数组(重点)

   ~~~ javascript
   let str = 'pink,red'
   let arr = str.split(',')
   console.log(arr); // ['pink','red']
   let str1 = '2023-5-7'
   let arr1 = str1.split('-')
   console.log(arr1); // ['2023','5','7']
   ~~~

3. 实例方法`substring(需要截取的第一个字符的索引[,结束的索引号])`用于字符串截取(重点)

   ~~~ javascript
   let str = '焦虑且颓废'
   console.log(str.substring(3, 5)); // 颓废
   ~~~

4. 实例方法`startsWith(检测字符串[,检测位置索引号])`检测是否以某字符开头(重点)

   ~~~ javascript
   let str = '焦虑且颓废'
   console.log(str.startsWith('焦')); // true
   console.log(str.startsWith('颓', 3)); // true
   ~~~

5. 实例方法`includes(搜索的字符串[,检测位置索引号])`判断一个字符串是否包含在另一个字符串中，根据情况返回true或false(重点)

   ~~~ javascript
   let str = '焦虑且颓废'
   console.log(str.includes('焦虑')); // true
   ~~~

6. 实例方法`toUpperCase`用于将字母转换成大写

   ~~~ javascript
   let str = 'hello world'
   console.log(str.toUpperCase()); // HELLO WORLD
   ~~~

7. 实例方法`toLowerCase`用于将字母转换成小写

   ~~~ javascript
   let str = 'HELLO WORLD'
   console.log(str.toLowerCase()); // hello world
   ~~~

8. 实例方法`indexOf`检测是否包含某字符

   ~~~ javascript
   let str = '焦虑且颓废'
   console.log(str.indexOf('且')); // 返回索引值
   ~~~

9. 实例方法`endsWith`检测是否以某字符结尾

   ~~~ javascript
   let str = '焦虑且颓废'
   console.log(str.endsWith('且')); // false
   console.log(str.endsWith('废')); // true
   ~~~

10. 实例方法`replace`用于替换字符串，支持正则匹配

    ~~~ javascript
    let str = '123124'
    console.log(str.replace('1', '9')); // 923124 只替换第一个匹配到的数字
    ~~~

11. 实例方法`match`用于查找字符串，支持正则匹配

    ~~~ javascript
    let str = '123124'
    console.log(str.match('1'));
    ~~~

### 4.Number

Number是内置的构造函数，用于创建数值

常用方法：

`toFixed()`设置保留小数位的长度
