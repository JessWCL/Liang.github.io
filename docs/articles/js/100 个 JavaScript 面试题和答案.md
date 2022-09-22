# 100 个 JavaScript 面试题和答案

**1、什么是 JavaScript？**

JavaScript 是一种客户端/服务器端编程语言。JavaScript 可以插入到 HTML 中，使网页具有交互性并实现用户参与。

**2、JavaScript 中的提升是什么？**

提升意味着所有的声明都被移动到作用域的顶部。这发生在代码运行之前。

对于函数，这意味着你可以从作用域中的任何位置调用它们，甚至在它们被定义之前。

```js
hello();  // Prints "Hello world! " even though the function is called "before" declaration

function hello(){   
  console.log("Hello world! ");
}
```

对于变量，提升有点不同。它在作用域的顶部将 undefined 分配给它们。

例如，在定义变量之前调用它：

```js
console.log(dog);
var dog = "Spot";
```

结果是：

```js
undefined
```

这可能令人惊讶，因为你可能预计它会导致错误。

如果你声明一个函数或变量，无论你在哪里声明它，它总是被移动到作用域的顶部。

**3、isNan() 函数有什么作用？**

你可以使用 isNan() 函数来检查值的类型是否为数字且是否为 NaN。

（是的， NaN 是数字类型，即使它的名称是“非数字”。这是因为它在底层是数字类型，即使它没有数字值。）

例如：

```js
function toPounds(kilos) {  
  if (isNaN(kilos)) {    
    return 'Not a Number! Cannot be a weight.';  
  }  
  return kilos * 2.2;
}
console.log(toPounds('this is a test'));
console.log(toPounds('100'));
```

输出：

```js
Not a Number! Cannot be a weight.220.00000000000003
```

**4、JavaScript 中的负无穷是什么？**

如果在 JavaScript 中将负数除以零，则会得到负无穷大。

例如：

```js
console.log(-10/0)
```

输出：

```js
-Infinity
```

**5、 什么是未声明变量？一个未定义的变量怎么样？**

程序中根本不存在未声明的变量。如果你的程序尝试读取未声明的变量，则会引发运行时错误。

调用未声明变量的示例显然会导致错误：

```js
console.log(dog);
```

输出：

```js
error: Uncaught ReferenceError: dog is not defined
```

- 未定义的变量。在程序中声明但没有值。如果程序尝试读取未定义的变量，则会返回未定义的值并且应用程序不会崩溃。

未定义变量的一个例子是：

```js
let car;console.log(car);
```

输出：

```js
undefined
```

**6、JavaScript 中有哪些类型的弹出框？**

三种类型的弹出窗口是警报、确认和提示。让我们看看每个的示例使用：

**警报**

例如：

```js
window.alert("Hello, world!");
```

**确认**

例如：

```js
if (window.confirm("Are you sure you want to go?")) {  
  window.open("exit.html", "See you again!");
}
```

**提示**

例如：

```js
let person = window.prompt("Enter your name");
if (person != null) {  
  console.log('Hello', person);
}
```

**7、 == 和 === 有什么区别？**

== 比较值

=== 比较值和类型

例子：

```js
var x = 100;
var y = "100";

(x == y)  // --> true because the value of x and y are the same
(x === y) // --> false because the type of x is "number" and type of y is "string"
```

**8、隐式类型强制有什么作用？举个例子。**

隐式类型强制意味着一个值在幕后从一种类型转换为另一种类型。当表达式的操作数是不同类型时会发生这种情况。

例如，字符串强制意味着在数字上应用运算符 ***+ ，字符串会自动将数字转换为字符串***。

例如：

```js
var x = 1;
var y = "2";
x + y // Returns "12"    "1"  + "2"
```

但是在处理减法时，强制以另一种方式起作用。***- 它将字符串转换为数字***。

例如：

```js
var x = 10;
var y = "10";
x - y // Returns 0   10 - 10
```

**9、JavaScript 是静态类型语言还是动态类型语言？这是什么意思？**

JavaScript 是***动态类型***的。

这意味着在***运行时检查对象的类型***。（在静态类型语言中，在编译时检查类型。）

换句话说，JavaScript 变量与类型无关。这意味着你可以毫无问题地更改数据类型。

```js
var num = 10;
num = "Test";
```

在静态类型语言（例如 C++）中，不可能以这种方式将整数更改为字符串。

**10、JavaScript 中的 NaN 是什么？**

NaN 的意思是“非数字”。这意味着一个值在 JavaScript 中不是正式的数字。

可能令人困惑的是，使用 typeof() 函数对 NaN 进行类型检查的结果是 Number。

```js
console.log(typeof(NaN))
```

输出：

```js
Number
```

为避免混淆，请使用 isNaN() 来检查值的类型是否为 NaN 或不是数字。

**11、 JavaScript 中的展开运算符是什么？**

展开运算符允许将可迭代对象（数组/对象/字符串）扩展为单个参数/元素。让我们举个例子来看看这个行为。

```js
function sum(a, b, c) {  
  return a + b + c;
}
const nums = [15, 25, 35];
console.log(sum(...nums));
```

输出：

```
75
```

**12、 JavaScript 中的闭包是什么？**

JavaScript 中的闭包意味着内部函数可以访问外部函数的变量——即使在外部函数返回之后也是如此。

例如，要创建一个自增 1 的计数器，你可以使用闭包：

```js
function createCounter() {   
  let counter = 0;   
  function increment() {     
    counter++;     
    console.log(counter);   
  }   
  return increment;
}
```

这里 createCounter() 是外部函数， increment() 是内部函数。现在，你可以按如下方式使用它：

```js
const add = createCounter();
add();
add();
add();
```

输出：

```js
123
```

这是有效的，因为存储内部函数 increment() 的 add 仍然可以访问 createCounter() 函数的计数器变量。

这是可能的，因为 JavaScript 的闭包特性：即使在外部函数返回之后，内部函数也可以访问外部函数的变量。

**13、 JavaScript 中如何处理异常？**

如果表达式抛出错误，你可以使用 try...catch 语句处理它们。

使用这个结构的想法是尝试运行一个表达式，比如一个带有输入的函数，并捕获可能的错误。

例如：

```js
function weekDay(dayNum) {  
  if (dayNum < 1 || dayNum > 7) {    
    throw 'InvalidDayNumber'  
  } else {    
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][dayNum - 1];  }}
try { // Try to run the following  
  let day = weekDay(8);  
  console.log(day);
}
catch (e) { // catch an error if the above try failed  
  let day = 'unknown';  
  console.log(e);}
```

**14、 什么是网络存储？**

Web 存储是一种 API，它为浏览器提供了一种将键值对存储到用户浏览器本地的方法。使用网络存储使这个过程比使用 cookie 更直观。

Web 存储提供了两种存储数据的方式：

本地存储 - 为客户端存储没有到期日期的数据。

会话存储——只存储一个会话的数据。浏览器关闭时数据消失。

以下是如何从 sessionStorage 保存、访问和删除项目的示例：

```js
// Save data to sessionStorage
sessionStorage.setItem('favoriteColor', 'gray');

// Get the color from the sessionStorage
let data = sessionStorage.getItem('favoriteColor');
console.log(data);

// Remove saved color preset from sessionStorage
sessionStorage.removeItem('favoriteColor');

// Remove ALL the saved data from sessionStorage
sessionStorage.clear();
```

以下是使用 localStorage 执行相同操作的方法：

```js
// Save data to localStorage
localStorage.setItem('favoriteColor', 'gray');

// Get the color from the localStorage
let data = localStorage.getItem('favoriteColor');console.log(data);

// Remove saved color preset from localStorage
localStorage.removeItem('favoriteColor');

// Remove ALL the saved data from localStorage
localStorage.clear();
```

**15、为什么需要网络存储？**

Web 存储（问题 14）可以在本地存储大量数据。关键是它不会影响网站的性能。

使用网络存储，信息不会存储到服务器中。与 cookie 相比，这使其成为更可取的方法。

**16、什么是模块？**

模块是可重用代码的单元。通常，你可以从模块中将有用的函数或构造函数导入到你的项目中。

从模块导入功能可能如下所示：

```js
import { hello } from './modules/helloWorld.js';
```

**17、JavaScript 中的“范围”是什么意思？**

范围定义了“代码的可见性”。

更正式地说，作用域描述了代码中可以访问变量、函数和其他对象的位置。范围是在运行时在你的代码中创建的。

例如，块作用域表示花括号之间的“区域”：

```js
if(true) {   
  let word = "Hello";
}
console.log(word); // ERROR OCCURS
```

在这里，变量 word 不能从其他任何地方访问，但在 if 语句中。

**18、JavaScript 中的高阶函数是什么？**

一个高阶函数对另一个函数进行操作。它要么接受一个函数作为参数，要么返回另一个函数。

例如：

```js
function runThis(inputFunction) {  
  inputFunction();
}
runThis(function() {
  console.log("Hello world")
});
```

输出：

```js
Hello world
```

另外一个示例：

```js
function giveFunction() {  
  return function() {    
    console.log("Hello world")  
  }
}
var action = giveFunction();
action()
```

输出：

```js
Hello world
```

**19、 JavaScript 中的“this”关键字是什么？**

这是指对象本身。

例如：

```js
var student = {    
  name:  "Matt",    
  getName: function(){      
    console.log(this.name);    
  }
}

student.getName();
```

输出：

```
Matt
```

要使 getName() 方法在 student 对象中工作，该对象必须访问自己的属性。这可以通过对象内的 this 关键字实现。

**20、call() 方法有什么作用？**

call() 方法可用于在另一个对象上调用一个对象的方法。

```
obj1.func.call(obj2)
```

例如：

```js
var student = {  
  name: "Matt",  
  getName: function(){    
    console.log(this.name);  
  }
}

var anotherStudent = {  
  name: "Sophie"
};

student.getName.call(anotherStudent);
```

输出：

```
Sofie
```

Call() 方法还可用于通过指定所有者对象来调用函数。

例如：

```js
function sayHi(){  
  console.log("Hello " + this.name);
}
var person = {name: "Matt"};

sayHi.call(person);
```

输出：

```
Hello Matt
```

call() 也可以接受参数。

例如：

```js
function sayHi(adjective){  
  console.log("Hello " + this.name + ", You are " + adjective);
}

var obj = {name: "Matt"};

sayHi.call(obj, "awesome");
```

输出：

```
Hello Matt, you are awesome
```

**21、apply() 方法是什么？**

apply() 方法的作用与 call() 方法相同。不同之处在于 apply() 方法接受作为数组的参数。

例如：

```js
const person = {    
  name: 'John'
}

function greet(greeting, message) {    
  return `${greeting} ${this.name}. ${message}`;
}

let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);
```

输出：

```
Hello John. How are you?
```

在行中：

```
let result = greet.apply(person, ['Hello', 'How are you?']);
```

在greet()函数中，‘Hello’被分配给greeting，‘How are you?’被分配给message。

**22、什么是bind()方法？**

bind() 方法返回一个新函数，其 this 已设置为另一个对象。

与 apply() 和 call() 不同，bind() 不会立即执行函数。相反，它返回一个新版本的函数，其 this 被设置为另一个值。

让我们看一个例子：

```js 
let person = {    
  name: 'John',    
  getName: function() {        
    console.log(this.name);    
  }
};

window.setTimeout(person.getName, 1000);
```

这不会打印名称“John”，而是打印 undefined。要理解为什么会发生这种情况，请以等效的方式重写最后一行：

```js
let func = person.getName;
setTimeout(func, 1000);
```

setTimeout() 与 person 对象分开接收函数，但没有 person 的名字。因此，当 setTimeout() 调用 person.getName 时，名称是未定义的。

要解决此问题，你需要将 getName() 方法绑定到 person 对象：

- 
- 

```
let func = person.getName.bind(person);setTimeout(func, 1000);
```

输出：

- 

```
John
```

让我们检查一下这种方法是如何工作的：

person.getName 方法绑定到 person 对象。

绑定函数 func 现在将此值设置为 person 对象。当你将这个新绑定函数传递给 setTimeout() 函数时，它知道如何获取此人的姓名。

**23、什么是柯里化？**

柯里化意味着将具有 n 个参数的函数转换为具有一个或更少参数的 n 个函数。

例如，假设你有一个将两个数字相加的函数 add()：

- 
- 
- 

```
function add(a, b) {    return a + b;}
```

你可以通过以下方式调用此函数：

- 

```
add(2,3)
```

然后让我们咖喱函数：

- 
- 
- 
- 
- 

```
function add(a) {  return function(b) {    return a + b;  }}
```

现在你可以通过以下方式调用这个柯里化函数：

- 

```
add(2)(3)
```

柯里化不会改变函数的行为。它改变了它的调用方式。

**24、JavaScript 中的 promise 是什么？**

承诺是一个可能在未来产生价值的对象。

承诺始终处于可能的状态之一：已完成、拒绝或未决。

创建一个承诺看起来像这样：

- 
- 
- 

```
const promise = new Promise(function(resolve, reject) {    // implement the promise here})
```

例如，让我们创建一个在被调用后两秒解析的承诺。

- 
- 
- 
- 
- 

```
const promise = new Promise(resolve => {  setTimeout(() => {    resolve("Hello, world!");  }, 2000);}, reject => {});
```

现在 promises 的关键是你可以在使用 .then() 方法解析 promise 后立即执行代码：

- 

```
promise.then(result => console.log(result));
```

输出：

- 

```
Hello, world!
```

# Promise 可以链接在一起，这样一个已解决的 Promise 会返回一个新的 Promise。下面是一个 promise 的流程图，它也说明了如何链接它们：![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcYIEPGRLYo1KoLiaqxGicIHtu2P7DVdClpyGJTFibpyKKiaUm78icW37AppqORH2tV2ZkjthicZF3vPicWAA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)**25、为什么要使用承诺？**在 JavaScript 中，promise 对异步操作很有用。过去，必须使用回调来处理异步操作，即在操作完成后立即执行的函数。这导致了“回调地狱”，一种带有嵌套回调的金字塔形代码。![图片](https://mmbiz.qpic.cn/mmbiz_png/eXCSRjyNYcYIEPGRLYo1KoLiaqxGicIHtuq80DXCEkhBhKxnmOP0asJKeJSMkpPQ3kjRRMfnrFiaaEYAiam6HPvZKg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)Promises 通过减少回调地狱和编写更干净的代码为回调提供了另一种方法。这是可能的，因为 Promise 可以按以下方式链接：![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)**26、JavaScript 中的回调函数是什么？**回调函数是作为参数传递给另一个函数的函数。该函数在传递给它的函数内部执行，以在某些操作完成时“回调”。让我们看一个例子：`function greetName(name) {  console.log('Hello ' + name);}function askName(callback) {  let name = prompt('Enter your name.');  callback(name);}askName(greetName);`这段代码会提示你一个名字，当你输入名字时，它会对该名字说“你好”。因此回调函数（在本例中为 greetName）仅在您输入名称后执行。**27、为什么在 JavaScript 中使用回调？**回调很有用，因为 JavaScript 是一种事件驱动的语言。换句话说，它不是等待响应，而是在侦听其他事件的同时继续执行。上面的例子演示了 JavaScript 中回调的用处：`function greetName(name) {  console.log('Hello ' + name);}function askName(callback) {  let name = prompt('Enter your name.');  callback(name);}askName(greetName);`**28、JavaScript 中的严格模式是什么？**严格模式允许你设置程序在严格的上下文中运行。这可以防止执行某些操作。此外，还会引发更多异常。表达“严格使用”；告诉浏览器启用严格模式。例如：`"use strict";number = 1000;`这会导致错误，因为严格模式会阻止您为未声明的变量赋值。**29、 什么是立即调用函数？**立即调用函数 (IIFE) 在定义后立即运行。例如：`(function(){   // action here})();`要了解 IIFE 的工作原理，请查看它周围的括号：当 JavaScript 看到关键字 function 时，它假设有一个函数声明即将到来。但是上面的声明是无效的，因为函数没有名字。为了解决这个问题，使用了声明周围的第一组括号。这告诉解释器它是一个函数表达式，而不是一个声明。`(function (){   // action here;})`然后，要调用该函数，需要在函数声明的末尾添加另一组括号。这类似于调用任何其他函数：`(function (){  // action here})();`**30、什么是cookie？**cookie 是存储在你计算机上的一个小数据包。例如，网站可以在访问者的浏览器上放置 cookie，以便在用户下次访问该页面时记住登录凭据。在幕后，cookie 是带有键值对的文本文件。要创建、读取或删除 cookie，请使用 document.cookie 属性。例如，让我们创建一个保存用户名的 cookie：`document.cookie = "username=foobar123";`**31、为什么在 JavaScript 中使用严格模式？**严格模式有助于编写“安全”的 JavaScript 代码。这意味着糟糕的语法实践会转化为真正的错误。例如，严格模式阻止创建全局变量。要声明严格模式，请添加“use strict”；在要在严格模式下的语句之前的语句：`'use strict';const sentence = "Hello, this is very strict";`**32、双感叹号有什么作用？**双感叹号将 JavaScript 中的任何内容转换为布尔值。`!!true    // true!!2       // true!![]      // true!!"Test"  // true!!false   // false!!0       // false!!""      // false`这是有效的，因为 JavaScript 中的任何东西本质上都是“真实的”或“虚假的”。**33、如何删除属性及其值？**你可以使用 delete 关键字从对象中删除属性及其值。让我们看一个例子：`var student = {name: "John", age:20};delete student.age;console.log(student);`输出： `{name: "John"}`**34、如何在 JavaScript 中检查变量的类型？**使用 typeof 运算符。`typeof "John Abraham"  // Returns "string"typeof 100             // Returns "number"`**35、JavaScript 中的 null 是什么？**null 表示没有值。它突出显示变量不指向任何对象。null 的类型是一个对象：`var name = null;console.log(typeof(name))`**36、Null vs undefined？****null：**是一个值，指示变量不指向任何对象。是对象类型。表示 null、null或不存在的引用。表示没有变量值。使用原始操作转换为 0。**undefined：**是表示已声明但没有值的变量的值是未定义的类型。表示没有变量。使用原始操作转换为 NaN。**37、你能用 JavaScript 访问历史吗？**对的，这是可能的。你可以通过包含浏览器历史记录的 window.history 访问历史记录。要检索上一个和下一个 URL，请使用以下方法：`window.history.back()window.history.forward()`**38、什么是全局变量？**全局变量在代码中随处可见。要创建全局变量，请省略 var 关键字：`x = 100; // Creates a global variable.`此外，如果你在任何函数之外使用 var 创建变量，你也将创建一个全局变量。**39、 JavaScript 与 Java 有关系吗？**不。它们是两种不同的编程语言，彼此无关。**40、什么是 JavaScript 事件？**事件是发生在 HTML 元素上的事情。在 HTML 页面中使用 JavaScript 时，它可以对事件做出反应，例如按钮单击。让我们创建一个 HTML 页面，其中有一个按钮，当单击该按钮时，会显示一个警报：`<!doctype html><html> <head>   <script>     function sayHi() {       alert('Hi, how are you?');     }</script> </head> <body>   <button type="button" onclick="sayHi()">Click here</button> </body></html>`**41、preventDefault() 方法有什么作用？**preventDefault() 取消一个方法。名称 preventDefault 很好地描述了行为。它可以防止事件采取默认行为。例如，你可以在单击提交按钮时阻止表单提交：`document.getElementById("link").addEventListener("click", function(event){  event.preventDefault()});`**42、setTimeout() 方法是什么？**setTimeout() 方法在指定的毫秒数后调用函数（一次）。例如，让我们在一秒（1000 毫秒）后记录一条消息：`setTimeout(function() {    console.log("Good day");}, 1000);`**43、setInterval() 方法是什么？**setInterval() 方法以自定义间隔定期调用函数。例如，让我们每隔一秒定期记录一条消息：`setInterval(function() {    console.log("Good day");}, 1000);`**44、什么是ECMAScript？**ECMAScript 是构成 JavaScript 基础的脚本语言。ECMAScript 由 ECMA 国际标准组织标准化（查看 ECMA-262 和 ECMA-402 规范）。**45、什么是JSON？**JSON（JavaScript Object Notation）是一种用于交换数据的轻量级数据格式。例如，这是一个 JSON 对象：`{    'name': 'Matt',    'address': 'Imaginary Road 22',    'age': 32,    'married': false,    'hobbies': ['Jogging', 'Tennis', 'Padel']}`JSON 的语法规则是：数据以键值对的形式存在。数据以逗号分隔。花括号定义一个对象。方括号定义了一个数组。**46、 JSON 用在什么地方？**当向服务器发送数据时，反之亦然，数据必须是文本格式。JSON 是一种纯文本格式，允许将数据发送到服务器，并将数据从服务器发送到浏览器。几乎所有编程语言都支持 JSON，因此它也可以与其他语言一起使用。**47、为什么要使用 JSON 字符串化？**当你向服务器发送数据时，它必须是一个字符串。要将 JavaScript 对象转换为字符串，你可以使用 JSON.stringify() 方法。`var dataJSON = {name: "Matt", age: 51};var dataString = JSON.stringify(dataJSON);console.log(dataString);`输出： `'{"name":"Matt","age":51}'`**48、 如何将 JSON 字符串转换为 JSON 对象？**当你从服务器接收数据时，它始终是字符串格式。要将 JSON 字符串转换为 JavaScript 对象，请使用 JSON.parse() 方法。`var data = '{"name":"Matt", "age":51}';var dataJSON = JSON.parse(data);console.log(dataJSON);`输出： `{    name:"Matt",    age:51}`**49、如何为变量分配默认值？**使用逻辑运算符 || 在赋值中提供一个默认值。`const a = b || c;`这样一来，如果 b 为假，那么 c 将被分配给 a。 （Falsy 表示 null、false、undefined、0、空字符串或 NaN。)**50、 你能为函数定义属性吗？**是的，因为函数也是对象。让我们看一个例子：`let func = function(x) {};func.property1 = "Hello there";console.log(func.property1);`输出： `Hello there`

**51、promise中的race方法是什么意思？**

Promise.race() 方法返回首先解决或拒绝的承诺。

让我们通过一个例子来证明这一点，其中第二个承诺比第一个更快解决：

- 
- 
- 
- 
- 
- 
- 
- 
- 

```
let p1 = new Promise(function(resolve, reject) {    setTimeout(resolve, 500, 'the first promise');});let p2 = new Promise(function(resolve, reject) {    setTimeout(resolve, 100, 'the second promise');});Promise.race([p1, p2]).then(function(value) {console.log(value, 'was faster');});
```

输出：

- 

```
the second promise was faster
```

**52、 promise.all() 方法有什么作用？**

Promise.all 是一个将一系列承诺作为输入的承诺。它在以下情况下得到解决：

要么所有的输入承诺都得到解决。

或者他们中的任何一个被拒绝。

例如， promise.all 等待所有这三个 promise 完成：

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
var prom1 = new Promise((resolve, reject) => {  setTimeout(() => {    resolve("Yay!");  }, 1000);});var prom2 = Promise.resolve(10);var prom3 = 100;Promise.all([prom1, prom2, prom3]).then(values => {console.log(values);});
```

一秒后输出：

- 

```
["Yay", 10, 100]
```

**53、 eval() 函数是什么？**

eval() 函数计算字符串中的代码。要计算的字符串可以是表达式、变量、语句或语句序列。

例如：

- 

```
console.log(eval("5+10"));
```

输出：

- 

```
15
```

**54、什么是事件冒泡？**

在事件冒泡中，事件通过最里面的元素运行事件处理程序开始。然后它触发父母的事件处理程序，直到它到达最外面的元素。

看到这一点的最佳方法是创建一个在 div 中包含 div 的 HTML 文档：

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
<style>body * {margin: 20px;border: 1px solid blue;  }</style><div onclick="alert('Outer layer')">Outer layer<div onclick="alert('Middle layer')">Middle layer<div onclick="alert('Inner layer')">Inner layer</div></div></div>
```

在每个 div 中，都有一个 JavaScript 警报，当单击该 div 时会触发该警报。

结果页面如下所示：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

如果你现在单击内层，它会触发分配给该 div 的警报，并触发父 div 的警报。

**55、 什么是时间死区？**

时间死区意味着变量不可达，即使它已经在范围内。

让我们首先看看，当你尝试将未初始化的变量记录到控制台时会发生什么：

- 
- 

```
console.log(x);var x = "Yay";
```

输出：

- 

```
undefined
```

你可能希望这会导致错误，但它会打印 undefined。

发生这种情况是因为所有声明都被移到了作用域的顶部。由于提升，上面的代码在引擎盖下的行为如下：

- 
- 
- 

```
var x;console.log(x);x = "Yay";
```

这里 undefined 被自动分配给顶部的变量。这使得在定义它之前使用它成为可能。

但是让我们看看当我们使用 let 而不是 var 做同样的事情时会发生什么：

- 
- 

```
console.log(x);let x = 10;
```

输出：

- 

```
error: Uncaught ReferenceError: Cannot access 'x' before initialization
```

发生这种情况是因为 let 的提升方式与 var 不同。当一个 let 变量被提升时，它不会变成未定义的。相反，它是无法访问的，或者在被分配值之前处于时间死区。

**56、什么是URI？**

URI 或统一资源标识符是一组区分资源的字符。URI 允许互联网协议在资源之间执行操作。

URI 可能如下所示：

- 

```
hello://example.com:8042/there?name=jack#sumthing
```

**57、什么是DOM？**

当网页加载完毕后，浏览器会为该页面创建一个 DOM。这使 JavaScript 能够创建动态 HTML。

DOM 或文档对象模型充当 HTML 文档的 API。它定义了文档的结构。它还指定如何访问和修改文档。

**58、文档加载还是 DOMContentLoaded？**

DOMContentLoaded 事件在 HTML 文档被加载和解析后被触发。它不会等待资产（例如样式表和图像）。

文档加载事件仅在整个页面加载后触发，包括所有资产。

例如，以下是如何使用 DOMContentLoaded 在 DOM 已完全加载时发出通知：

- 
- 
- 

```
window.addEventListener('DOMContentLoaded', (event) => {console.log('DOM is now loaded!');});
```

这是一个如何为特定页面加载时添加侦听器的示例：

- 
- 
- 

```
window.addEventListener('load', (event) => {console.log('The page is now loaded!');});
```

**59、HTML 属性 vs DOM 属性？**

当你编写 HTML 时，你可以在 HTML 元素上定义属性。然后，当你使用浏览器打开页面时，你的 HTML 代码将被解析。

至此，一个DOM节点就创建好了。这个 DOM 节点对应于你刚刚编写的 HTML 文档。这个 DOM 节点是一个具有属性的对象。

例如，这个 HTML 元素：

- 

```
<input id="my-input" type="text" value="Name:">
```

具有三个属性，id、type 和 value。

当浏览器解析这个 HTML 元素时。

它接受这个输入字段并从中烘焙一个 HTMLInputElement 对象。

这个对象有几十个属性，比如accept、accesKey、align。

它还将一些原始 HTML 属性转换为属性，例如 id 和类型。但是例如， value 属性不引用 value 属性。

**60、什么是同源政策？**

同源策略是一种有价值的安全机制。它可以防止 JavaScript 跨越域边界发出请求。

源是指 URI 方案、主机名和端口号。同源策略使得一个页面上的脚本无法访问另一页面上的敏感数据。

**61、JavaScript 是编译型语言还是解释型语言？**

JavaScript 是一种解释型语言。

浏览器中的解释器读取 JavaScript 代码，解释每一行，然后运行它。

**62、JavaScript 是区分大小写的语言吗？**

JavaScript 是一种区分大小写的语言。

关键字、变量、函数名等需要大写一致。

为了演示，这段代码有效

- 
- 
- 
- 
- 

```
let i = 1;while(i < 2) {  console.log(i);  i++;}
```

但这不是，因为 while 是大写的，即使它不应该。

- 
- 
- 
- 
- 

```
let i = 1;WHILE(i < 2) {console.log(i);  i++;}
```

**63、JavaScript 有多少个线程？**

JavaScript 使用单个线程。它不允许编写解释器可以在多个线程或进程中并行运行的代码。

这意味着它按顺序执行代码，并且必须先执行完一段代码，然后才能转到下一段代码。

看到这一点的一个很好的例子是当你在网页上显示警报时。警报弹出后，在警报关闭之前，你无法与页面交互。

- 

```
alert("Hello there!");
```

**64、 “break”语句有什么作用？**

break 语句跳出循环并继续执行循环外的代码。

例如，此循环在遇到数字 5 后终止：

- 
- 
- 
- 
- 
- 
- 

```
for (var i = 0; i < 100; i++) {if (i === 5) {break;  }console.log('Number is ', i);}console.log('Yay');
```

- 
- 
- 
- 
- 
- 

```
Number is 0Number is 1Number is 2Number is 3Number is 4Yay
```

**65、 “continue”语句的作用是什么？**

continue 语句跳过一轮循环。

例如，这个循环跳过数字 2 和 3：

- 
- 
- 
- 
- 
- 

```
for (var i = 0; i < 5; i++) {  if (i === 2 || i === 3) {    continue;  }  console.log('Number is ', i);}
```

输出：

- 
- 
- 

```
014
```

**66、什么是正则表达式？**

正则表达式，也称为 regex 或 regexp，是形成搜索模式的一组字符。它是一种常用于 JavaScript 和其他编程语言的模式匹配工具。

例如，让我们使用正则表达式从字符串中查找任何数字：

- 
- 
- 
- 

```
var regex = /\d+/g;var string = "You have 100 seconds time to run";var matches = string.match(regex);console.log(matches);
```

输出是所有匹配项的数组：

- 

```
[100]
```

例如，正则表达式可用于在大型文本文件中搜索电子邮件或电话号码。

67、调试代码时断点的目的是什么？

断点允许你查找 JavaScript 代码中的错误。

当执行调试器语句并出现调试器窗口时，你可以在代码中设置断点。

在断点处，JavaScript 停止执行并让你检查值和范围以解决可能的问题。

**68、什么是条件运算符？**

条件运算符是编写 if-else 语句的简写。条件运算符有时称为三元运算符。

例如：

- 
- 
- 
- 
- 
- 
- 
- 
- 

```
// Regular if-else expression:const age = 10;if(age < 18){console.log("Minor");} else {console.log("Adult");}// Conditional operator shorthand for the above if-elseage < 18 ? console.log("Minor") : console.log("Adult");
```

69、你能链接条件运算符吗？

对的，这是可能的。有时它很有用，因为它可以使代码更易于理解。

让我们看一个例子：

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
function example() {if (condition1) { return value1; }else if (condition2) { return value2; }else if (condition3) { return value3; }else { return value4; }}// Shorthand for the above functionfunction example() {return condition1 ? value1         : condition2 ? value2         : condition3 ? value3         : value4;}
```

**70、 freeze() 方法有什么作用？**

freeze() 方法冻结一个对象。它使对象不可变。

冻结对象后，无法向其添加新属性。

例如：

- 
- 
- 

```
const item = { name: "test" };Object.freeze(item);item.name = "Something else"; // Error
```

**71、如何获取对象的键列表？**

使用 Object.keys() 方法。

例如：

- 
- 
- 
- 
- 
- 

```
const student = {  name: 'Mike',  gender: 'male',  age: 23};console.log(Object.keys(student));
```

输出：

- 

```
["name", "gender", "age"]
```

**72、JavaScript 的原始数据类型是什么？**

原始数据类型具有原始值。JavaScript 中有七种不同的原始数据类型：

- string——单词。例如“约翰”。
- number — 数值。例如12。
- boolean — 真或假。例如真。
- null — 没有值。例如让 x = null;
- undefined — 声明变量但没有值的类型。例如，当以这种方式创建变量 x 时，让 x; , x 变为未定义。
- bigint — 表示大于 2^53-1 的整数的对象。例如 BigInt(121031393454720292)
- symbol — 用于创建独特符号的内置对象。例如 let sym1 = Symbol(‘test’)

**73、有哪些方法可以访问对象的属性？**

共有三种访问属性的方法。

**点符号。**

例如：

- 

```
obj.property
```

**方括号表示法。**

例如：

- 

```
obj["property"]
```

**表达式符号。**

例如：

- 

```
obj[expression]
```

**74、页面加载后如何执行JavaScript代码？**

你可以通过三种方式执行此操作：

**将属性 window.onload 设置为在页面加载后执行的函数：**

- 

```
window.onload = function ...
```

**将属性 document.onload 设置为在页面加载后执行的函数：**

- 

```
document.onload = function ...
```

**将 HTML 属性的 onload 属性设置为 JS 函数：**

- 

```
<body onload="script();">
```

**75、什么是错误对象？**

错误对象是一个内置对象，如果发生错误，它会为你提供详细的错误信息。

错误对象有两个属性：

- name
- message

例如，假设 sayHi() 函数抛出错误。发生这种情况时，catch 块会为你提供一个错误对象，例如，你可以将其打印到控制台。

- 
- 
- 
- 
- 
- 

```
try {  sayHi("Welcome");}catch(error) {console.log(error.name + "\n" + error.message);}
```

**76、NoScript 标签有什么作用？**

Noscript 标签用于检测和响应禁用 JavaScript 的浏览器。

你可以使用 noscript 标签来执行一段通知用户的代码。

例如，你的 HTML 页面可以有一个像这样的 noscript 标签：

- 
- 
- 
- 
- 
- 

```
<script>document.write("Hello World!");</script><noscript>  Your browser does not support JavaScript!</noscript>
```

**77、 什么是入口控制循环？**

在入口控制循环中，条件在进入循环体之前进行测试。

例如，for 循环和 while 循环就属于这一类：

- 
- 
- 
- 

```
let nums = [1,2,3];for (let num of nums) {console.log(num);}
```

输出：

- 
- 
- 

```
123
```

**78、什么是出口控制循环？**

在退出控制循环中，在循环结束时评估条件。这意味着无论条件为真还是假，循环体至少执行一次。

例如，do-while 循环就属于这一类：

- 
- 
- 
- 

```
const i = 0;do {console.log('The number is', i);} while (i !== 0);
```

输出：

- 

```
The number is 0
```

**79、什么是匿名函数？**

匿名函数是没有名字的函数。

匿名函数通常分配给变量名称或用作回调函数。

这是一个带有名称供参考的函数：

- 
- 
- 

```
function example(params) {// do something}
```

这是一个分配给变量的匿名函数：

- 
- 
- 

```
const myFunction = function() {// do something};
```

这是一个用作回调的匿名函数：

- 
- 
- 

```
[1, 2, 3].map(function(element) { // do something});
```

**80、什么是迭代器？**

迭代器协议使对象生成一系列值成为可能。

迭代器必须实现 next() 方法来获取序列中的下一个值。此方法返回一个对象

- value - 迭代序列中的下一个值
- done - 如果此值是序列中的最后一个，则为真。如果不是，那就是假的。

这是创建和使用迭代器的示例。这个函数实现了一个可以被 rangeIter(1,5) 调用的范围迭代器，并打印值 1 2 3 4。

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
// define a function that returns an iterator function rangeIter(start = 0, end = Infinity, step = 1) {let nextIndex = start;let count = 0;// create the actual iterator objectconst iterator = {// create the next() method that knows how to get the next value in the sequence       next: function() {let result;if (nextIndex < end) {// Return the value and set done 'false' because the iteration is not completed               result = { value: nextIndex, done: false }               nextIndex += step;               count++;return result;           }// set done 'true' when the end has been reachedreturn { value: count, done: true }       }    };// return an iterator objectreturn iterator;}// Using the iteratorconst it = rangeIter(1, 5);let result = it.next();while (!result.done) { // prints 1 2 3 4console.log(result.value);     result = it.next();}
```

**81、什么是可迭代对象？**

可迭代协议意味着一个对象可以被迭代，因此实现了迭代器协议（问题 80。）

换句话说，你可以在任何可迭代对象上使用 for...of 循环来循环遍历它生成的值序列。

例如，Array 或 Map 在 JavaScript 中是可迭代的，但 Object 不是。

下面是一个在数组上应用 for...of 循环的例子，它本质上是可迭代的：

- 
- 
- 
- 

```
const nums = [1,2,3];for (let num of nums) {console.log(num);}
```

输出：

- 
- 
- 

```
123
```

**82、 什么是生成器？**

生成器是迭代器的替代品。你可以编写具有非连续执行的迭代代码。换句话说，可以暂停生成器函数的执行。

生成器是使用 function* 语法定义的。它们不是返回值，而是产生值。

创建时，生成器不执行其代码。相反，它们返回一个 Generator 对象，它本质上是一个迭代器。当你对生成器对象调用 next() 时，它会运行代码直到遇到 yield 语句，然后停止。

例如，这是一个与上面迭代器部分中的迭代器完全相同的生成器：

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
// Create a generator function that returns an iteratorfunction* rangeIter(start = 0, end = Infinity, step = 1) {let count = 0;for (let i = start; i < end; i += step) {        count++;yield i;    }return count;}// Create a generator objectconst it = rangeIter(1, 5);// Use the generator exactly how you'd use an iteratorlet result = it.next();while (!result.done) { // prints 1 2 3 4console.log(result.value);     result = it.next();}
```

rangeIter 函数比迭代器示例中的 rangeIter 更容易阅读。然而，两者都做完全相同的事情。

**83、什么是 for of 循环？**

For...of 循环可用于在 JavaScript 中迭代可迭代对象。

例如，你可以使用 for...of 循环打印数组的内容：

- 
- 
- 
- 

```
const nums = [1,2,3];for (const num of nums) {    console.log(num);}
```

输出：

- 
- 
- 

```
123
```

**84、什么是nodejs？**

Node.js 建立在 Chrome 的 JS 运行时之上。它是一个以可扩展方式构建网络应用程序的平台。

**85、什么是事件循环？**

事件循环是一个回调函数队列。它处理所有异步回调。

当异步函数执行时，回调函数被推入队列。JavaScript 引擎不会在异步任务完成之前触发事件循环。

例如，事件循环的结构可能如下所示：

- 
- 
- 

```
while (queue.waitForMessage()) {    queue.processNextMessage();}
```

**86、什么是一元运算符？**

一元 运算符+用于将变量转换为数字。

如果变量无法转换，则转换为 NaN（这是数字的特殊情况，因此类型仍然是数字）。

例如：

- 
- 
- 
- 
- 
- 

```
let str = "10";let num = +str;console.log(typeof str, typeof num);let word = "Hello";let n = +word;console.log(typeof word, typeof n, n);
```

输出：

- 
- 

```
string, numberstring, number, NaN
```

**87、如何对数组的元素进行排序？**

使用 sort() 对数组的项进行排序。这不会创建新数组，而是“就地”对原始数组进行排序，即直接修改它。

- 
- 
- 

```
let months = ["Adam", "Sam", "Jack", "Bill"];months.sort();console.log(months);
```

输出：

- 

```
["Adam", "Bill", "Jack", "Sam"]
```

**88、什么是TypeScript ？**

TypeScript 是带有类型的 JavaScript。它是由 Microsoft 创建的 JavaScript 超集。

TypeScript 在普通 JavaScript 中添加了诸如可选类型、类、async/await 等类型。

这是 TypeScript 函数的一个简单示例：

- 
- 
- 
- 

```
function greet(name: string): string {return "Hello, " + name;}console.log(greet("Michael"));
```

**89、 JavaScript 中的构造函数是什么？**

构造函数是用于创建和初始化类对象的方法。当你从一个类中实例化一个新对象时，它就会被执行。

例如：

- 
- 
- 
- 
- 
- 
- 

```
class Student {constructor() {this.name = "Mike";  }}let student = new Student();console.log(student.name);
```

输出：

- 

```
Mike
```

**90、什么是ES6？**

ES6 (ECMAScript 6) 是 JavaScript 编程语言的第六个版本。它于2015年6月发布。

**91、什么是模板字面量？**

模板文字允许你直接在字符串中嵌入表达式。

使用模板文字时，不要用引号声明字符串，而是使用反引号 (`)。

要将变量或表达式嵌入到字符串中，需要在 ${} 之间添加

例如：

- 

```
console.log(`This is the ${10 * 10}th time`)
```

输出：

- 

```
This is the 100th time
```

**92、如何在没有第三个变量的情况下交换两个变量？**

使用解构从数组中提取值。这也可用于在没有第三个帮助程序的情况下交换两个变量：

- 
- 
- 
- 

```
let a = 1;let b = 2;[a, b] = [b, a];console.log(a, b)
```

输出：

- 

```
2 1
```

**93、什么是 ArrayBuffer？**

ArrayBuffer 是通用且固定长度的二进制数据缓冲区。

- 
- 

```
let buffer = new ArrayBuffer(16);console.log(buffer.byteLength)
```

输出：

- 

```
16
```

**94、什么是原型？**

所有 JavaScript 对象都从原型继承属性。

例如：

- Math 对象从 Math 原型继承属性
- 数组对象从数组原型继承属性。

原型是对象的特征。它描述了与之相关的属性。它充当对象的蓝图。

例如，你可以访问对象的原型以向对象构造函数添加新属性，例如：

- 
- 
- 
- 
- 

```
function Fruit(name, weight) {  this.name = name;  this.weight = weight;}Fruit.prototype.description = "Yum!";
```

**95、什么是箭头函数？**

箭头函数提供了在 JavaScript 中创建函数的简写。

你只能在函数表达式中使用箭头函数。

这是常规函数和箭头函数的比较：

- 
- 
- 
- 
- 
- 

```
// Traditional functionvar sum = function(a,b){return a + b;}// Arrow Functionvar sum = (a,b) => a + b;
```

箭头函数是在没有 function 关键字的情况下声明的。

如果只有一个（返回）表达式，则不需要使用 return 关键字。

在上面，也缺少花括号。这仅在箭头函数仅由一个表达式组成时才有可能。如果还有更多，则需要在箭头后添加花括号。

**96、 dir()方法有什么用？**

console.dir() 将 JavaScript 对象的属性的交互式列表显示为 JSON。

例如：

- 
- 

```
const student = { "name":"Mike", "id": 132123, "city": "New York"};console.dir(student);
```

在控制台中产生以下交互式列表：

![图片](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)

**97、如何禁用网页上的右键单击？**

你可以通过从 body 元素的 oncontextmenu 属性返回 false 来禁用网页上的右键单击。

- 

```
<body oncontextmenu="return false;">
```

**98、什么是一元函数？**

一元函数是只接受一个参数的函数。

例如：

- 
- 
- 

```
function greet(name){    console.log('Hello', name);}
```

**99、什么是纯函数？**

纯函数是一个函数，无论何时何地调用它，都返回具有相同参数的相同结果。如果函数不依赖于状态或程序执行期间的数据更改，则该函数是纯函数。

例如，计算圆面积的函数是纯函数：

- 
- 
- 

```
function circleArea(radius) {  return Math.PI * Math.pow(radius, 2);}
```

**100、什么是对象解构？**

对象解构是一种从对象（或数组）中提取属性的方法。

在 ES6 之前，你需要这样做来提取对象的属性：

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
const PersonDetails = {  name: "Matty",  age: 42,  married: false}
const name = PersonDetails.name;const age = PersonDetails.age;const married = PersonDetails.married;
console.log(name);console.log(age);console.log(married);
```

但是从 ES6 开始，你可以通过使用对象解构用一行代码来做到这一点：

- 
- 
- 
- 
- 
- 
- 
- 
- 

```
const PersonDetails = {  name: "Matty",  age: 42,  married: false}const {name, age, married} = PersonDetails;console.log(name);console.log(age);console.log(married);
```