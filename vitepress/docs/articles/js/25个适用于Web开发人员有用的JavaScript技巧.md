# JavaScript简写优化技术

[TOC]

## **1、单行 if-else 语句**

```javascript
const age = 12;
let ageGroup;

// LONG FORM
if (age > 18) {  ageGroup = "An adult";} else {  ageGroup = "A child";}

// SHORTHAND
ageGroup = age > 18 ? "An adult" : "A child";
```

请记住，这种速记旨在使代码更简洁，并在简单的if-else 语句中保存代码行，如上面的语句。不要过度使用它，因为它会降低代码的可读性！

# **2、 空合并**

空合并运算符 ?? ，如果左侧未定义，则返回右侧。如果是，则返回左侧：

```javascript
let maybeSomething;

// LONG FORM
if(maybeSomething){  
  console.log(maybeSomething)
} else {  
  console.log("Nothing found")
}

//SHORTHAND
console.log(maybeSomething ?? "Nothing found")
```

# **3、可选链**

如果你使用运算符访问对象的属性，但未定义该属性，则会引发错误。这是使用可选链接的地方。

如果你使用可选链运算符？，并且属性未定义，返回undefined而不是抛出错误：

```javascript
const student = {  
	name: "Matt",  
  age: 27,  
  address: {   
    state: "New York"  },
};

// LONG FORM
console.log(student && student.address && student.address.ZIPCode); // Doesn't exist - Returns undefined

// SHORTHAND
console.log(student?.address?.ZIPCode); 
 // Doesn't exist - Returns undefined
```

# **4、将任何值转换为布尔值**

使用双感叹号 (!!) 在 JS 中将任何内容转换为布尔值。

```javascript
!!true    // true
!!2       // true
!![]      // true
!!"Test"  // true

!!false   // false
!!0       // false
!!""      // false
```

# **5、扩展运算符**

你可以使用扩展运算符 (...) 将一个数组的元素“扩展”到另一个数组中。例如，让我们连接两个数字数组：

```js
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// LONG FORM
let newArray = nums1.concat(nums2);

// SHORTHAND
newArray = [...nums1, ...nums2];
```

也可以使用此语法代替将值推送到数组：

```js
let numbers = [1, 2, 3];

// LONGER FORM
numbers.push(4);
numbers.push(5);

// SHORTHAND
numbers = [...numbers, 4, 5];
```

# **6、使用扩展运算符进行解构**

你可以使用带有解构的扩展运算符将剩余元素分配给新变量：

```js
const student = {  
  name: "Matt",  
  age: 23,  
  city: "Helsinki",  
  state: "Finland",
};

// LONGER FORM
const name = student.name;
const age = student.age;
const address = { city: student.city, state: student.state };

// SHORTHAND
const { name, age, ...address } = student;
```

在上面的例子中，city和state属性被分配给一个address常量作为剩余部分。

# **7、从数组中删除重复项**

```js
const numbers = [1, 1, 20, 3, 3, 3, 9, 9];
const uniqueNumbers = [...new Set(numbers)]; 
// -> [1, 20, 3, 9]
```

# **8、 使用 && 进行短路评估**

不必用if语句检查某事是否为真，你可以使用&&运算符：

```js
var isReady = true;
function doSomething(){  console.log("Yay!");}

// LONGER FORM
if(isReady){  doSomething();}

// SHORTHAND
isReady && doSomething();
```

# **9、 类固醇的字符串**

你可以通过将字符串包装在反引号内并使用${}来嵌入值来直接将变量嵌入到字符串中：

```js
const age = 41;
const sentence = `I'm ${age} years old`;
// result: I'm 41 years old
```

# **10、Switch-Case 更短的替代方案**

你可以使用具有与键关联的函数名称的对象来替换switch语句：

```js
const num = 3
// LONGER FORM
switch (num) {  
  case 1:    someFunction();    
    break;  
  case 2:    someOtherFunction();    
    break;  
  case 3:    yetAnotherFunction();    
    break;
}

// SHORTHAND
var cases = {  
  1: someFunction,  
  2: someOtherFunction,  
  3: yetAnotherFunction,
};
cases[num]();
```

不，我没有忘记在cases对象中调用函数！

# **11、对象属性分配**

如果你希望对象键与值具有相同的名称，则可以省略对象文字：

```js
const name = "Luis", 
      city = "Paris", 
      age = 43, 
      favoriteFood = "Spaghetti";

// LONGER FORM
const person = {  name: name,  city: city,  age: age,  favoriteFood: favoriteFood};

// SHORTHAND
const person = { name, city, age, favoriteFood };
```

# **12、箭头函数**

与使用function关键字声明函数不同，使用箭头函数语法会更清晰：

```js
// LONGER FORM
function greetLong(name) {  
  console.log(`Hi, ${name}`);
}
// SHORTHAND
const greetShort = name => console.log(`Hi, ${name}`);
```

注意：在本例中，由于函数中只有一个表达式，你可以省略大括号 ( {})。但是，如果表达式需要多于一行，则需要使用大括号！

# **13、不带返回关键字返回**

使用箭头函数时，如果return函数中只有一个表达式，则可以省略关键字和函数的花括号：

```js
// LONGER FORM
function toPoundsLong(kilos) {  
  return kilos * 2.205;
}
// SHORTHAND
const toPoundsShort = kilos => kilos * 2.205;
```

# **14、更短的 for 循环**

for有时你可能希望使用内置forEach()方法更简洁地循环，而不是在集合上使用循环：

```js
const numbers = [1, 2, 3, 4, 5];
// LONGER FORM
for(let i = 0; i < numbers.length; i++){  
  console.log(numbers[i]);
}
// SHORTHAND
numbers.forEach(number => console.log(number));
```

# **15、 函数参数的默认值**

在 JavaScript 中，你可以为函数参数提供默认值，以便可以带或不带参数调用函数：

```js
// LONG FORM
function pickUp(fruit) {  
  if(fruit === undefined){    
    console.log("I picked up a Banana");  
  } else {    
    console.log(`I picked up a ${fruit}`);  
  }
}

// SHORTHAND
function pickUp(fruit = "Banana") {  
  console.log(`I picked up a ${fruit}`)
}
pickUp("Mango"); // -> I picked up a Mango
pickUp();        // -> I picked up a Banana
```

顺便说一句，你还可以使用箭头函数使其更短！

```js
const pick = (fruit = "Banana") => console.log(`I picked up a ${fruit}`)
```

# **16、声明变量**

你可以像这样巧妙地将变量声明组合成一行：

```js
// LONGER FORM
let name;
let age;
let favoriteFood = "Pizza";
// SHORTHAND
let name, age, favoriteFood = "Pizza";
```

# **17、 将值放入数组**

你可以使用Object.values()获取对象的值并将它们放入数组而不是循环：

```js
const info = { name: "Matt", country: "Finland", age: 35 };
// LONGER FORM
let data = [];
for (let key in info) {  
	data.push(info[key]);
}
// SHORTHAND
const data = Object.values(info);
```

# **18、在数组中查找元素**

使用数组的内置find()方法查找与特定条件匹配的元素，而不是使用冗长的循环：

```js
const fruits = [  
  { type: "Banana", color: "Yellow" },  
  { type: "Apple", color: "Green" }
];
// LONGER FORM
let yellowFruit;
for (let i = 0; i < fruits.length; ++i) {  
  if (fruits[i].color === "Yellow") {   
    yellowFruit = fruits[i];  
  }
}
// SHORTHAND
yellowFruit = fruits.find((fruit) => fruit.color === "Yellow");
```

# **19、检查一个项目是否在数组中**

你可以使用 includes() 方法，而不是使用 indexOf() 方法来检查元素是否在数组中。

```js
let numbers = [1, 2, 3];
// LONGER FORM
const hasNumber1 = numbers.indexOf(1) > -1 // -> True
// SHORTHAND/CLEANER APPROACH
const hasNumber1 = numbers.includes(1)     // -> True
```

# **20、检查多个条件**

避免长|| 检查多个条件链时，你可以使用你刚刚在上一个技巧中学到的东西——即，使用 includes() 方法：

```js
const num = 1;
// LONGER FORM
if(num == 1 || num == 2 || num == 3){  
  console.log("Yay");
}
// SHORTHAND
if([1,2,3].includes(num)){  
  console.log("Yay");
}
```

# **21、使用一行分配多个值**

你可以使用解构来一次性分配多个值：

```js
let num1, num2;

// LONGER FORM
num1 = 10;
num2 = 100;

// SHORTHAND
[num1, num2] = [10, 100];
```

这也可以在处理对象时使用：

```js
student = {  name: "Matt",  age: 29,};
// LONGER FORM
let name = student.name;
let age = student.age;

// SHORTHAND
let { name, age } = student;
```

# **22、在没有第三个变量的情况下交换两个变量**

在 JavaScript 中，您可以使用解构从数组中提取值。这也可用于在没有第三个帮助程序的情况下交换两个变量：

```js
let x = 1;
let y = 2;

// LONGER FORM
let temp = x;
	x = y;
	y = temp;
// SHORTHAND
[x, y] = [y, x];
```

**23、指数运算符**

你可以使用 ** 运算符，而不是使用 Math.pow() 函数来将数字求幂：

```js
// LONGER FORM
Math.pow(4,2); // 16
Math.pow(2,3); // 8
// SHORTHAND
4**2 // 16
2**3 // 8
```

**24、舍入数字时 Math.floor 的简写**

你可以使用 ~~ 运算符，而不是使用 Math.floor() 函数来向下舍入数字：

```js
// LONG FORM
Math.floor(5.25) // -> 5.0
// SHORTHAND
~~5.25 // -> 5.0
```

# **25、将字符串转换为数字**

你可以使用一元运算符 ( +) 将字符串转换为数字：

```js
// LONGER FORM
const num = parseInt("1000");
// SHORTHAND
const num = +"1000";
```

## 篇目二



### 1.如果有多个条件

我们可以在数组中存储多个值，并且可以使用数组 `includes` 方法。

```js
//Longhand
if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {
  //logic
}

//Shorthand
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
  //logic
}
```

## 2.如果为真…否则简写

这对于我们有 `if-else` 条件，里面不包含更大的逻辑时，是一个较大的捷径。我们可以简单的使用三元运算符来实现这个简写。

```js
// Longhand
let test: boolean;
if (x > 100) {
  test = true;
} else {
  test = false;
}

// Shorthand
let test = (x > 10) ? true : false;

//or we can use directly
let test = x > 10;
console.log(test);
```

当我们有嵌套条件时，我们可以采用这种方式。

```js
let x = 300,
test2 = (x > 100) ? 'greater 100' : (x < 50) ? 'less 50' : 'between 50 and 100';
console.log(test2); // "greater than 100"
```

## 3.声明变量

当我们要声明两个具有共同值或共同类型的变量时，可以使用此简写形式。

```js
//Longhand
let test1;
let test2 = 1;

//Shorthand
let test1, test2 = 1;
```

## 4.Null, Undefined，空检查

当我们创建新的变量时，有时我们想检查我们引用的变量的值是否为空或 undefined。JavaScript 确实有一个非常好的简写工具来实现这些功能。

```js
// Longhand
if (test1 !== null || test1 !== undefined || test1 !== '') {
    let test2 = test1;
}

// Shorthand
let test2 = test1 || '';
```

## 5.null 值检查和分配默认值

```js
let test1 = null,
    test2 = test1 || '';

console.log("null check", test2); // output will be ""
```

## 6.undefined 值检查和分配默认值

```js
let test1 = undefined,
    test2 = test1 || '';

console.log("undefined check", test2); // output will be ""
```

正常值检查

```js
let test1 = 'test',
    test2 = test1 || '';

console.log(test2); // output: 'test'
```

## 7.将值分配给多个变量

当我们处理多个变量并希望将不同的值分配给不同的变量时，此简写技术非常有用。

```js
//Longhand
let test1, test2, test3;
test1 = 1;
test2 = 2;
test3 = 3;

//Shorthand
let [test1, test2, test3] = [1, 2, 3];
```

## 8.赋值运算符简写

我们在编程中处理很多算术运算符，这是将运算符分配给 JavaScript 变量的有用技术之一。

```js
// Longhand
test1 = test1 + 1;
test2 = test2 - 1;
test3 = test3 * 20;

// Shorthand
test1++;
test2--;
test3 *= 20;
```

## 9.如果存在简写

这是我们大家都在使用的常用简写之一，但仍然值得一提。

```js
// Longhand
if (test1 === true) or if (test1 !== "") or if (test1 !== null)

// Shorthand //it will check empty string,null and undefined too
if (test1)
```

注意：如果 test1 有任何值，它将在 if 循环后进入逻辑，该运算符主要用于 `null` 或 `undefined` 的检查。

## 10.多个条件的 AND（&&）运算符

如果仅在变量为 `true` 的情况下才调用函数，则可以使用 `&&` 运算符。

```js
//Longhand
if (test1) {
 callMethod();
}

//Shorthand
test1 && callMethod();
```

## 11.foreach 循环简写

这是迭代的常用简写技术之一。

```js
// Longhand
for (var i = 0; i < testData.length; i++)

// Shorthand
for (let i in testData)   
  or  
for (let i of testData)
```

每个变量的数组

```js
function testData(element, index, array) {
  console.log('test[' + index + '] = ' + element);
}

[11, 24, 32].forEach(testData);
// logs: test[0] = 11, test[1] = 24, test[2] = 32
```

## 12.return 中比较

我们也可以在 return 语句中使用比较。它将避免我们的 5 行代码，并将它们减少到 1 行。

```js
// Longhand
let test;
function checkReturn() {
  if (!(test === undefined)) {
    return test;
  } else {
    return callMe('test');
  }
}
var data = checkReturn();
console.log(data); //output test
function callMe(val) {
    console.log(val);
}

// Shorthand
function checkReturn() {
    return test || callMe('test');
}
```

## 13.箭头函数

```js
//Longhand
function add(a, b) {
   return a + b;
}

//Shorthand
const add = (a, b) => a + b;
```

更多示例。

```js
function callMe(name) {
  console.log('Hello', name);
}
callMe = name => console.log('Hello', name);
```

## 14.短函数调用

我们可以使用三元运算符来实现这些功能。

```js
// Longhand
function test1() {
  console.log('test1');
};
function test2() {
  console.log('test2');
};
var test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}

// Shorthand
(test3 === 1? test1:test2)();
```

## 15. Switch 简写

我们可以将条件保存在键值对象中，并可以根据条件使用。

```js
// Longhand
switch (data) {
  case 1:
    test1();
  break;

  case 2:
    test2();
  break;

  case 3:
    test();
  break;
  // And so on...
}

// Shorthand
var data = {
  1: test1,
  2: test2,
  3: test
};

data[something] && data[something]();
```

## 16.隐式返回简写

使用箭头函数，我们可以直接返回值，而不必编写 return 语句。

```js
//longhand
function calculate(diameter) {
  return Math.PI * diameter
}

//shorthand
calculate = diameter => (
  Math.PI * diameter;
)
```

## 17.小数基数指数

```js
// Longhand
for (var i = 0; i < 10000; i++) { ... }

// Shorthand
for (var i = 0; i < 1e4; i++) {
```

## 18.默认参数值

```js
//Longhand
function add(test1, test2) {
  if (test1 === undefined)
    test1 = 1;
  if (test2 === undefined)
    test2 = 2;
  return test1 + test2;
}

//shorthand
add = (test1 = 1, test2 = 2) => (test1 + test2);
add() //output: 3
```

## 19.扩展运算符简写

```js
//longhand

// joining arrays using concat
const data = [1, 2, 3];
const test = [4 ,5 , 6].concat(data);

//shorthand

// joining arrays
const data = [1, 2, 3];
const test = [4 ,5 , 6, ...data];
console.log(test); // [ 4, 5, 6, 1, 2, 3]
```

对于克隆，我们也可以使用扩展运算符。

```js
//longhand

// cloning arrays
const test1 = [1, 2, 3];
const test2 = test1.slice()

//shorthand

// cloning arrays
const test1 = [1, 2, 3];
const test2 = [...test1];
```

## 20.模板文字

如果您厌倦了在单个字符串中使用 `+` 来连接多个变量，那么这种简写可以消除您的头痛。

```js
//longhand
const welcome = 'Hi ' + test1 + ' ' + test2 + '.'

//shorthand
const welcome = `Hi ${test1} ${test2}`;
```

## 21.多行字符串简写

当我们在代码中处理多行字符串时，可以使用以下功能：

```js
//longhand
const data = 'abc abc abc abc abc abc\n\t'
    + 'test test,test test test test\n\t'

//shorthand
const data = `abc abc abc abc abc abc
         test test,test test test test`
```

## 22.对象属性分配

```js
let test1 = 'a';
let test2 = 'b';

//Longhand
let obj = {test1: test1, test2: test2};

//Shorthand
let obj = {test1, test2};
```

## 23.将字符串转换成数字

```js
//Longhand
let test1 = parseInt('123');
let test2 = parseFloat('12.3');

//Shorthand
let test1 = +'123';
let test2 = +'12.3';
```

## 24.用解构简写

```js
//longhand
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;

//shorthand
const { test1, test2, test3 } = this.data;
```

## 25.用 Array.find 简写

当我们确实有一个对象数组并且我们想要根据对象属性查找特定对象时，find 方法确实很有用。

```js
const data = [
  {
    type: 'test1',
    name: 'abc'
  },
  {
    type: 'test2',
    name: 'cde'
  },
  {
    type: 'test1',
    name: 'fgh'
  },
]
function findtest1(name) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].type === 'test1' && data[i].name === name) {
      return data[i];
    }
  }
}

//Shorthand
filteredData = data.find(data => data.type === 'test1' && data.name === 'fgh');
console.log(filteredData); // { type: 'test1', name: 'fgh' }
```

## 26.查找条件简写

如果我们有代码来检查类型，根据类型需要调用不同的方法，我们可以选择使用多个 else ifs 或者 switch，但是如果我们有比这更好的简写方法呢？

```js
// Longhand
if (type === 'test1') {
  test1();
}
else if (type === 'test2') {
  test2();
}
else if (type === 'test3') {
  test3();
}
else if (type === 'test4') {
  test4();
} else {
  throw new Error('Invalid value ' + type);
}

// Shorthand
var types = {
  test1: test1,
  test2: test2,
  test3: test3,
  test4: test4
};

var func = types[type];
(!func) && throw new Error('Invalid value ' + type); func();
```

## 27.按位索引简写

当我们遍历数组以查找特定值时，我们确实使用 `indexOf()` 方法，如果找到更好的方法该怎么办？让我们看看这个例子。

```js
//longhand
if(arr.indexOf(item) > -1) { // item found
}
if(arr.indexOf(item) === -1) { // item not found
}

//shorthand
if(~arr.indexOf(item)) { // item found
}
if(!~arr.indexOf(item)) { // item not found
}
```

按位（`〜`）运算符将返回除-1 以外的任何值的真实值。否定它就像做 `~~` 一样简单。另外，我们也可以使用 `include()` 函数：

```js
if (arr.includes(item)) {
    // true         if the item found
}
```

## 28.Object.entries()

此函数有助于将对象转换为对象数组。

```js
const data = { test1: 'abc', test2: 'cde', test3: 'efg' };
const arr = Object.entries(data);
console.log(arr);
/** Output:
[ [ 'test1', 'abc' ],
  [ 'test2', 'cde' ],
  [ 'test3', 'efg' ]
]
**/
```

## 29.Object.values()

这也是 ES8 中引入的一项新功能，该功能执行与 `Object.entries()` 类似的功能，但没有关键部分：

```js
const data = { test1: 'abc', test2: 'cde' };
const arr = Object.values(data);
console.log(arr);
/** Output:
[ 'abc', 'cde']
**/
```

## 30.双按位简写

双重 NOT 按位运算符方法仅适用于 32 位整数）

```js
// Longhand
Math.floor(1.9) === 1 // true

// Shorthand
~~1.9 === 1 // true
```

## 31.重复一个字符串多次

要一次又一次地重复相同的字符，我们可以使用 for 循环并将它们添加到同一循环中，但是如果我们有一个简写方法呢？

```js
//longhand
let test = '';
for(let i = 0; i < 5; i ++) {
  test += 'test ';
}
console.log(str); // test test test test test

//shorthand
'test '.repeat(5);
```

## 32.在数组中查找最大值和最小值

```js
const arr = [1, 2, 3];
Math.max(…arr); // 3
Math.min(…arr); // 1
```

## 33.从字符串中获取字符

```js
let str = 'abc';

//Longhand
str.charAt(2); // c

//Shorthand
Note: If we know the index of the array then we can directly use index insted of character.If we are not sure about index it can throw undefined
str[2]; // c
```

## 34.数学指数幂函数的简写

```js
//longhand
Math.pow(2,3); // 8

//shorthand
2**3 // 8
```
