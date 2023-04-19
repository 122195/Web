#  JavaScript基础



## 1.变量的基本使用

### 1.1声明变量

想要使用变量，首先需要创建变量

~~~js
语法：let 变量名
~~~

- 声明变量有两部分构成：声明关键字，变量名(标识)
- let即关键字，所谓关键字是系统提供的专门用来声明(定义)变量的词语

~~~javascript
举例：let age;
~~~

- age即变量的名称，也叫标识符

### 1.2 变量赋值

定义了一个变量或，你就能够初始化它(赋值),在变量名之后跟上一个"=",然后是数值

~~~js
let age;
// 赋值，将18这个数据存入了age这个容器中
age = 18;
// 这样age的值就成了18
document.write(age);
~~~

> 注意：是通过变量名来获得变量里面的数据

### 1.3 更新变量

变量赋值后，还可以通过简单的给它一个不同的值来更新它

~~~js
let age = 18;
// 变量里面的数据发生了变化更改为19
age = 19;
// 这样age的值就成了19
console.log(age);
~~~

> 注意：let不允许多次声明一个变量

### 1.4 声明多个变量

变量赋值后，还可以通过简单的给它一个不同的值来更新

~~~js
let age = 19, uname = 'nihao';
~~~

### 1.4变量命名规则与规范

1.规则：

- 不能用关键字：关键字，有特殊含义的字符，JavaScript内置的一些英语词汇，例如：let var if for等
- 只能用下划线，字母，数字，$组成，且数字不能开头
- 字母严格区分大小写，如Age和age是不同的变量

2.规范：

- 起名要有意义
- 遵守小驼峰命名法：第一个单词首字母小写，后面每个单词首字母大写 例如：userName

## 2.数据类型

### 2.1 基本数据类型

#### 2.1.1 数字类型(number)

~~~js
let score = 100; // 正整数
let price = 12.345; // 小数
let temperature = -40; // 负数
JavaScript中的正数，负数，小数等统一称为数字类型
~~~

> 注意事项
>
> js是弱数据类型，变量到底属于哪种类型，只有赋值之后，我们才能确认
>
> java是强数据类型，例如 int a = 3 必须是整数

#### 2.1.2 字符串类型(string)

通过单引号('')，双引号("")或反引号(`)包裹的数据都叫字符串，单引号和双引号没有本质上的区别推荐使用单引号

~~~js
let user_name = '小明'; // 使用单引号
let gender = "男"; // 使用双引号
let str = '123'; // 看上去是数字，但是用引用号包裹了就成了字符串了
let str1 = ''; // 这种情况叫空字符串
~~~

> 注意事项：
>
> 1. 无论单引号或是双引号必须成对使用
> 2. 单引号/双引号可以互相嵌套，但是不以自己嵌套自己
> 3. 必要时可以使用转义符\，输出单引号或双引号

##### (1)字符串拼接

~~~js
// 利用 +　做拼接
document.write('你'+'好'); // 你好
let uname = '你';
let song = '好';
document.write(uname+song); // 你好
~~~

##### (2)模板字符串

~~~js
符号``
let name = '你好';
let age = '18'；
document.write(`我叫${name},今年${age}岁`);
// 里面可以写算数表达式
document.write(`我叫${name},今年${age - 1}岁`);
// 反引号里面可以换行写，双引号和单引号不可以
document.write(`
<div>123</div>
<p>asd</p>
`)
~~~

#### 2.1.3 布尔型(boolean)，未定义类型(undefined)，null(空类型)

##### (1)布尔型(boolean)

表示肯定或否定时在计算机中对应的是布尔类型数据

它有两个固定的值true和false，表示肯定的数据用true(真)，表示否定的数据用false(假)

~~~js
console.log(true);
console.log(false);
~~~

##### (2)未定义类型(undefined)

未定义是比较特殊的类型，只有一个值undefined

什么情况出现未定义类型？

只声明变量，不赋值的情况下，变量的默认值为undefined，一般很少直接为某个变量赋值为undefined
~~~js
let age // 声明变量但是未赋值
console.log(age); // 输出 undefined
~~~

使用场景：

开发中经常声明一个变量，等待传送过来的数据
如果我们不知道这个数据是否传递过来，此时我们可以通过检测这个变量是不是undefined，就判断用户是否有数据传递过来

##### (3)null(空类型)

null 表示值为空
~~~js
let obj = null;
console.log(obj); // null
~~~

null和undefined区别：

1. undefined表示没有赋值
2. null表示赋值了，但是内容为空

使用场景：

官方解释：把null作为尚未创建的对象

白话：将来有个变量里面存放的是一个对象，但是对象还没有创建好，可以先给个null

#### 2.1.4 检测数据类型

通过typeof关键字检测数据类型

~~~js
let age = 18;
let uname = '你好';
let flag = false;
let buy;
console.log(typeof age); // number 数字类型
console.log(typeof uname); // string 字符串类型
console.log(typeof flag); // boolean
console.log(typeof buy); // undefined
console.log(typeof null); // object 对象
~~~

#### 2.1.5 数据类型转换

##### (1)隐式转换

某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换

规则：

~~~js
// 1. +号两边只要有一个是字符串，都会把另外一个转成字符串
console.log(18 + '你好'); // 字符型
// 2. 除了+以外的算术运算符比如- * / 等都会把数据转成数字类型
console.log(18 - '18'); // 数字型
console.log(18 * '18'); // 数字型
console.log(18 / '18'); // 数字型
~~~

缺点：

转换类型不明确，靠经验才能总结

小技巧：

+号作为正号解析可以转换成Number

~~~js
let num = '10';
console.log(num); // 字符型
console.log(+num); // 数字型
~~~

##### (2)显示转换

编写程序时过渡依靠系统内部的隐式转换时不严谨的，因为隐式转换规律并不清晰，大多是靠经验总结的规律，为了避免因隐式转换带来的问题，通常跟逻辑需要对数据进行显示转换

概念：
自己写代码告诉系统该转成什么类型

转换为数字型

1. Number(数据)

转成数字类型

~~~js
console.log(Number('10')); // 数字型
~~~

2. parseInt(数据)

~~~js
转换为数字型，只保留整数，没有四舍五入
console.log(parseInt('10')); // 10
console.log(parseInt('10.111')); // 10
~~~



3. parseFloat(数据)

~~~js
转换为数字型，可以保留小数
console.log(parseFloat('10.999')); // 10.999
~~~

区别：

1. Number() 只能放数字类型的字符，不能放abc这种的

   ~~~js
   console.log(Number('10.10abc')); // NaN也是number类型的数据，代表非数字  not a number
   ~~~

2. parseFloat和parseInt 可以过滤里面的字符

   ~~~js
   console.log(parseFloat('10.10abc')); // 10.10
   console.log(parseInt('10.10abc')); // 10.10
   ~~~


转换为字符型(String)

~~~js
console.log(String(10)); // 字符型
let age = 18;
console.log(age.toString()); // 字符型
括号里面如果是2就是转换为二进制
console.log(age.toString(2)); // 转换为二进制
~~~

## 3.运算符

### 3.1 算数运算符

算数运算符主要包括加，减，乘，除，取余(求模)

+：求和

~~~js
console.log(1+1);
~~~



-：求差

~~~js
console.log(1-1);
~~~



*：求积

~~~js
console.log(1*1);
~~~



/：求商

~~~js
console.log(1/1);
~~~



%：取模(取余数)

~~~js
console.log(5%8);
~~~



- 开发中经常作为某个数字是否被整除

优先级

js中优先级越高越先被执行，优先级相同时以数从左向右执行

1. 乘，除，取余优先级相同
2. 加，减优先级相同
3. 乘，除，取余优先级大于加，减
4. 使用()可以提升优先级
5. 总结：先乘除后加减，有括号先算括号里面的

### 3.2 赋值运算符

将等号右边的值赋予给左边，要求左边必须是一个容器

1. +=

   ~~~js
   let num = 1;
   num += 1;
   console.log(num); // 2
   ~~~

   

2. -=

3. *=

4. /=

5. %=

### 3.3 一元运算符

- 自增：

  1. 符号：++

  2. 作用：让变量的值+1

     ~~~js
     let num = 1;
     ++num; // 前置自增让num的值加1变2
     num++; // 后置自增让num的值加1变2
     ~~~

     每次执行1次，当前变量数值加1

     其作用相当于num+=1

- 自减：

  1. 符号：--
  2. 作用：让变量的值-1

使用场景：经常用于计数来使用，比如进行10次操作，用它来计算进行了多少次

前置自增和后置自增区别：

~~~javascript
// 前置自增
// 先自加 再使用
let i = 1;
console.log(++i + 2); // 4
// 后置自增
// 先使用 后自加
let i = 1;
console.log(i++ + 2); // 3
~~~

### 3.4 比较运算符

比较运算符的使用

~~~javascript
> : 左边是否大于右边
console.log(3 > 5); // false
< : 右边是否小于右边
> = : 左边是否大于或等于右边
console.log(5 >= 5); // true
< = : 左边是否小于或等于右边
== : 左右两边是否相等 只要值一样就是true 不管数据类型
= = = : 左右两边是否类型和值都相等 要求值和数据类型完全一样
! == : 左右两边是否不全等
比较结果为boolean类型，即只会得到true或false
~~~

> NaN不等于任何值，包括它本身
>
> 尽量不要比较小数，因为小数有精度问题
>
> 不同类型之间比较会发生隐式转换
>
> - 最终把数据隐式转换转成number类型再比较

### 3.5 逻辑运算符

~~~javascript
&& 逻辑与 并且 符号两边都为true结果才为true 一假则假
console.log(true && true); // true
console.log(false && true); // false
|| 逻辑或 或者 符号两边有一个true就为true 一真则真
console.log(false || true); // true
console.log(false || false); // false
!  逻辑非 取反 true变false false变true 真变假，假变真
console.log(!true); // false
console.log(!false); // true
~~~

逻辑运算符里面的短路

~~~js
短路：只存在于&&和||中，当满足一定条件会让右边代码不执行
(1)&& 左边为false就短路
console.log(false && 20); // false
console.log(5 < 3 && 20); // false
console.log(undefined && 20); // undefined 在布尔里面就是假的false
console.log(null && 20); // null在布尔里面就是假的false
console.log(0 && 20); // 0
console.log(10 && 20); // 20

// 有五个值是当false来看的(false 0 '' undefined null)
1. false
2. 数字0是假的 除了数字0之外的数字都是真的包括(负数，小数)
3. 空字符串是假的 ''  其余的是真的
4. undefined
5. null

(2)|| 左边为true就短路
console.log(false || 20); // 20
console.log(5 < 3 || 20); // 20
console.log(undefined || 20); // 20
console.log(null || 20); // 20
console.log(0 || 20); // 20
console.log(10 || 20); // 10
~~~

原因：通过左边能得到整个式子的结果，因此没必要再判断右边

运算结果：无论 && 还是 || 运算结果都还是最后被执行的表达式值，一般用在变量赋值

### 3.6运算符优先级

| 优先级 |   运算符   |      顺序      |
| :----: | :--------: | :------------: |
|   1    |   小括号   |       ()       |
|   2    | 一元运算符 |    ++ -- !     |
|   3    | 算数运算符 | 先* / % 后 + - |
|   4    | 关系运算符 |   > >= > <=    |
|   5    | 相等运算符 | == != === !==  |
|   6    | 逻辑运算符 |  先&& 后\|\|   |
|   7    | 赋值运算符 |       =        |
|   8    | 逗号运算符 |       ,        |

> 一元运算符里面的逻辑非优先级很高
>
> 逻辑与比逻辑或优先级高 

## 4.语句

### 4.1 表达式和语句

1. 表达式：表达式是一组代码的集合，JavaScript解释器会将其计算出的一个结果

~~~javascript
x = 7
3 + 4
num++
~~~

2. 语句：js整句或命令，js语句是以分号结束

   比如：if语句 for循环语句

> 区别：
>
> 表达式计算出一个值，但语句用来自行以使某件事发生(做什么事)
>
> - 表达式 `3+4`
>
> - 语句 `alert()`弹出对话框
>
>   其实某些情况，也可以把表达式理解为语句，因为它是在计算结果，也是做事

### 4.2 分支语句

#### (1)if语句

- if语句有三种使用：单分支，双分支，多分支

  单分支：

  ~~~js
  if (条件) {
  	满足条件要执行的代码
  }
  括号内的条件为true时，进入大括号里执行代码
  小括号内的结果若不是布尔型时，会发生隐式转换转为布尔型
  ~~~

  双分支if语法：

  ~~~javascript
  if (条件) {
  	满足条件要执行的代码
  } else {
  	不满足条件执行的代码
  }
  ~~~

  多分支if语句:

  ~~~javascript
  if (条件1) {
  	代码1
  } else if (条件2) {
      代码2
  } else if (条件3) {
      代码3
  } else {
      代码n
  }
  释义：
  先判断条件1，若满足条件1就执行代码1，其他不执行
  若不满足则向下判断条件2，满足条件2执行代码2，其他不执行
  若依然不满足继续往下判断，依次类推
  若以上条件都不满足，执行else里的代码n
  注：可以写N个条件，但这里演示只写2个
  ~~~


#### (2)三元运算符

- 其实是比if双分支更简单的写法，有时候也叫做三元表达式

  ~~~javascript
  语法：条件 ? 满足条件执行的代码 : 不满足条件执行的代码
  3 > 5 ? alert('第一个') : alert('第二个');
  ~~~

- 一般用来取值

#### (3)switch语句

释义：

- 找到跟小括号里数据全等的case值，并执行里面对应的代码
- 若没有全等===的则执行default里的代码

~~~javascript
switch (1) {
    case 1:
        alert(1)
        break
    case 2:
        alert(2)
        break
    case 3:
        alert(3)
        break
    default:
        alert('没有数据')
}
~~~

> 注意事项
>
> 1. switch case语句一般用于等值判断，不适合于区间判断
> 2. suitch case一般需要配合break关键字使用 没有break会使用case穿透

### 4.3 循环语句

#### (1)while循环

循环：重复执行某段代码，而while：在...期间

循环的本质就是以某个变量为起始值，然后不断产生变化量，慢慢靠近终止条件的过程

~~~javascript
循环三要素：
let i = 1 // 1.变量起始值
while (i <= 3) { // 2.终止条件(没有终止条件，循环会一直执行，造成死循环)
    console.log('循环三次')
    i++; // 3.变量变化量(用自增或者自减)
}
~~~

#### (2)循环退出(continue和break)

循环结束：

- continue：结束本次循环，继续下次循环
- break：跳出所在的循环

## 5.for循环

### 5.1 循环基本使用

(1).for循环语法

~~~javascript
for (声明记录循环次数的变量; 循环条件; 变化值){
    循环体
}
for (i = 1; i <= 10; i++) {
	console.log(i);
}
~~~

(2).for循环嵌套

~~~javascript
// 一个循环里再套一个循环，一般用在for循环里
// 外面循环执行一次，里面循环执行全部
for (外部声明记录循环次数的变量; 循环条件; 变化值) {
    for (内部声明记录循环次数的变量; 循环条件; 变化值) {
        循环体
    }
}
~~~

## 6.数组

数组(Array)是一种可以按顺序保存数据的数据类型

### (1) 声明语法

~~~javascript
let 数据名 = [数据1，数据2，数据3];
let names = ['小明','小刚','小红'];
~~~

- 数组是按顺序保存，所有每个数据都有自己的编号
- 计算机中的编号从0开始，所以小明的编号为0，小刚编号为1，以此类推
- 在数组中，数据的编号也叫索引或下标
- 数据可以存储任意类型的数据

### (2) 取值语法

~~~javascript
数组名[下标]
let names = ['小明','小刚','小红']
names[0] // 小明
names[1] // 小刚
~~~

### (3) 一些术语

1. 元素：数组中保存的每个数据都叫数组元素
2. 下标：数组中数据的编号
3. 长度：数组中数据的个数，通过数组的length属性获得

~~~javascript
let names = ['小明','小刚','小红']
console.log(names[0]) // 小明
console.log(names[1]) // 小刚
console.log(names.length) // 3
~~~

### (4) 遍历数组

用循环把数组中每个元素都访问到，一般会用for循环遍历

~~~ javascript
// 语法
for (let i = 0; i < 数组名.length; i++) {
	数组名[i]
}
let nums = [10,20,30,40,50]
for (let i = 0; i < nums.length; i++) {
    document.write(nums[i])
}
~~~

### (5) 数组操作

#### 数组后面增加元素push

1.数组增加新的数据

数组.push()方法将一个或多个元素添加到数组的`末尾`，并返回该数组的新长度

~~~ javascript
语法：
arr.push(元素1，元素2...)
let arr = ['red','green']
arr.push('pink')
console.log(arr) // ['red','green','pink']
~~~

#### 数组前面面增加元素unshift

数组.push()方法将一个或多个元素添加到数组的`开头`，并返回该数组的新长度

~~~ javascript
语法：
arr.push(元素1，元素2...)
let arr = ['red','green']
arr.unshift('pink')
console.log(arr) // ['pink','red','green']
~~~

#### 数组删除元素pop/shift

数组.pop()方法从数组中删除`最后`一个元素，并返回该元素的值

数组.shift()方法从数组中删除`前面`一个元素，并返回该元素的值

~~~ javascript
语法：
arr.pop()
let arr = ['red','green']
arr.pop()
arr.shift()
console.log(arr) // ['red']
~~~

#### 数组删除指定元素splice

数组.splice()方法删除指定元素

~~~ javascript
语法：
arr.splice(start,deleteCount)
arr.splice(起始位置，删除几个元素)
let arr = ['red','green','blue','pink']
arr.splice(1,2)
console.log(arr)
~~~



## 7.函数

### (1)函数使用

函数：function，是被设计为执行特定任务的代码块

说明：函数可以把具有相同或相似逻辑的代码包裹起来，通过函数调用执行这些被包裹的代码逻辑，这么做的优势是有利于精简代码方便复用

- 函数的声明语法

  ~~~ javascript
  function 函数名() {
      函数体
  }
  function sayHi() {
      document.write('hai~~')
  }
  sayHi() // 函数调用
  // 函数代用，这些函数体内的代码逻辑会被执行
  `函数名()`
  ~~~

函数命名规范

- 和变量命名基本一致
- 尽量小驼峰式命名法
- 前缀应该为动词
- 命名建议：常用动词约定

函数体：

函数体是函数的构成部分，它负责将相同或相似代码包裹起来，直到函数调用是函数体内的代码才会被执行，函数的功能代码都要写在函数体当中

> 注意：声明(定义)的函数必须调用才会真正被执行，使用()调用函数

### (2) 函数传参

1. 声明语法

   ~~~ javascript
   参数列表：
   1. 传入数据列表
   2. 声明这个函数需要传入几个数据
   3. 多个数据用逗号隔开
   function 函数名 (参数列表) {
       函数体
   }
   function getSum(num1,num2){
       document.write(num1 + num2)
   }
   ~~~

2. 调用语法

   ~~~ javascript
   函数i名(传递的参数列表)
   getSum(10,20)
   调用函数时，需要传入几个数据就写几个，用逗号隔开
   ~~~

3. 形参和实参

   ~~~ javascript
   function getSum(形参,形参){
       document.write()
   }
   getSum(实参,实参)
   ~~~

   - 形参：声明函数时写在函数名右边小括号里的叫形参(形式上的参数)
   - 实参：调用函数时写在函数名右边小括号里的叫实参(实际上的参数)
   - 形参可以理解为是在这个函数内声明的变量(比如 num1=10)实参可以理解为是给这个变量赋值
   - 开发中尽量保持形参和实参个数一致

### (3) 函数返回值

1. 当函数需要返回数据出去时，用return关键字

   ~~~ javascript
   return 数据
   return 20
   function getSum(x,y){
       return x + y
   }
   let num = getSum(10,20)
   document.write(num)
   ~~~

   > 注意：
   >
   > - 在函数体中使用return关键字能将内部的执行结果交给函数外部使用
   >
   > - 函数内部只能出现一次return，并且return后面代码不会再被执行，所有`return后面的数据不要换行写`
   > - return会立即结束当前函数
   > - 函数可以没有return，这种情况函数默认返回值为undefined


## 8.作用域

通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域，作用域的当使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突

### (1)全局作用域

作用于所有代码执行的环境(整个script标签内部)或者一个独立的js文件

### (2)局部作用域

作用于函数内的代码环境，就是局部作用域，因为跟函数有关系，所以也称为函数作用域

### (3)块级作用域

块作用域由{}包括，if语句和for语句里面的{}等，{}内有效

### (4)变量的作用域

在JavaScript中，根据作用域的不同，变量可以分为，全局变量，局部变量，块级变量

#### (4.1)全局变量

函数外部let的变量，全局变量在任何区域都可以访问和修改

#### (4.2)局部变量

函数内部let的变量，局部变量只能在当前函数内部访问和修改

#### (4.3)块级变量

{}内部的let变量，let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问

> 注意：
>
> 如果函数内部或者块级作用域内部，变量没有声明，直接赋值，也当全局变量看，但是强烈不推荐
>
> 但是有一种情况，函数内部的形参可以看做是局部变量

## 9.匿名函数

~~~ javascript
将匿名函数赋值给一个变量，并且通过变量名称进行调用我们将这个称为函数表达式
语法：
let fn = function () {
    // 函数体
}
调用：
fn() // 函数名
let fn1 = function(x,y) {
    console.log(x + y)
}
fn1(1,2)
~~~

### (1)立即执行函数

使用：避免全局变量之间的污染

~~~ javascript
语法：
方式1
(function () {
    console.log.(11)
})();
方式2
(function (){
    console.log(11)
}());
~~~

> 注意：多个立即执行函数要用`;`隔开，不然会报错

## 10.对象

### (1)什么是对象

- 对象(object)：JavaScript里的一种数据类型
- 可以理解为是一种无序的数据集合
- 用来描述某个事物，例如描述一个人
  1. 人有姓名，年龄，性别等信息，还有吃饭睡觉打代码等功能
  2. 如果用多个变量保存则比较散，用对象比较统一
- 比如描述班主任信息：
  1. 静态特征(姓名，年龄，身高，性别，爱好)=>可以使用数字，字符串，数组，布尔类型等表示
  2. 动态行为(点名，唱，跳)=>使用函数表示

### (2)对象使用

1.对象声明语法

~~~ javascript
let 对象名 = {}
let person = {} // 声明了一个person对象
~~~

2.对象有属性和方法组成

- 属性：信息或叫特征(名词)

- 方法：功能或叫行为(动词)

  ~~~ javascript
  let 对象名 = {
      属性名：属性值,
      方法名：函数
  }
  ~~~

3.属性

数据描述性的信息称为属性，如人的姓名，身高，年龄，性别等，一般是名词性的

- 属性都是成对出现的，包括属性名和值，它们之间使用英文`:`分隔

- 多个属性之间使用英文`,`分隔

- 属性就是依附在对象上的变量(外面是变量，对象内是属性)

- 属性名可以使用`""`或`''`，一般情况下省略，除非名称遇到特殊符号如空格，中横线等

  ~~~ javascript
  let person = {
      uname: 'andy',
      age: 18,
      sex: '男'
  }
  ~~~

4.属性访问

声明对象， 并添加了若干属性后，可以使用`.`或`[]`获得对象中属性对应的值，称之为属性访问，简单理解就是获得对象里面的属性值

~~~ javascript
第一种获取方式：
let person = {
    name:'andy',
    age:18,
    sex:'男'
}
console.log(person.name)
console.log(person.age)
第二种获取方式：
let person = {
    name:'andy',
    age:18,
    sex:'男'
}
console.log(person['name'])
console.log(person['age'])
~~~

5.对象中的方法

数据行为性的信息称为方法，如跑步，唱歌等，一般是动词性的，其本质是函数

- 方法是由方法名和函数两部分构成，它们之间使用`:`分隔

- 多个属性之间使用英文`,`分隔

- 方法是依附在对象中的函数

- 方法名可以使用`""`或`''`，一般情况下省略，除非名称遇到特殊符号如空格，中横线等

  ~~~ javascript
  let person = {
      name:'andy',
      sayHi:function() { // 括号里面可以书写形参
          document.write('hi~~~')
      }
  }
  ~~~

6.对象中的方法访问

声明对象，并添加了若干方法后，可以使用`.`调用对象中函数，称之为方法调用

~~~ javascript
person.sayHi()
person.sayHi() // 括号里面可以书写实参
~~~

### (3)操作对象

1. 查询对象：

   对象.属性或者对象['属性']，对象.方法()

2. 重新赋值：

   对象.属性 = 值

   对象.方法 = function() {}

3. 对象添加新的数据：

   对象名.新属性名 = 新值

4. 删除对象中属性：

   delete对象名.属性名

### (4)遍历对象

~~~ javascript
let obj = {
            uname: '小明',
            age: 18,
            sex: '男'
        }
        // 语法：
        // for (let k in 对象名) {}
        // k 是变量
for (let k in obj) {
      console.log(k); // 获取过来的是obj的属性名
      console.log(obj[k]); // 属性值
      // k === 'unmae' k里面存的是字符串的属性名
}
~~~

- 一定要记住：`k`是获得对象的`属性名`，`对象名[k]`是获得属性值

## 11.内置对象

JavaScript内部提供的对象，包含各种属性和方法给开发者用

### (1)Math对象

~~~ javascript
方法有：
console.log(Math.PI) // 圆周率
console.log(Math.random()) //生成0~1之间的随机数(包含0不包含1),能得到0，但是得不到1
console.log(Math.ceil()) //向上取整，返回的是整数
console.log(Math.floor()) //向下取整，返回的是整数
console.log(Math.round()) // 就近取整，四舍五入
console.log(Math.max()) //找最大数
console.log(Math.min()) //找最小数
console.log(Math.pow()) //幂运算
console.log(Math.abs()) //绝对值
~~~
