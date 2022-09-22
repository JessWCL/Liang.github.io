## 7个有用的JavaScript高阶函数

[TOC]



JavaScript是一种功能强大的编程语言，尤其是在Web开发中。在过去的几年中，它有了很大的改进，并且由于其新的一些功能而变得更加易于编写。

这些功能之一是高阶函数，这些函数将其他函数作为参数或将返回函数作为结果。它们提供了JavaScript中清晰易懂的语法。这将帮助你以更少的代码来实现更多目标。

### 1、forEach()

forEach()接受另一个函数作为参数。它用于以一种简单的方式循环遍历数组项。它可以接受三个类型的参数（元素，值和索引）。

请看下面的示例：

```js
var arr = [1, 2, 3, 4, 5];
// Using ES5.
arr.forEach(function(item){
	if(item > 3){
		console.log(item); // Returns 4 and 5.
	}
});

// Using ES6.
arr.forEach(item =>{
	if(item > 3){
		console.log(item); // Returns 4 and 5.
	}
});
```

如你所见，我们使用该方法forEach()在数字数组上循环并仅返回大于3的数字，代码比使用for循环更干净。

### 2、Map()

Map()返回一个数组，该数组的长度与调用该数组的长度相同。只要它的回调函数没有改变，它也不会改变原始数组。它也可以采用三个类型参数（元素，值和索引）。

请看下面的示例：

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names); //Returns: [ 'John', 'Amy', 'camperCat' ]
```

如上所示，我们map在users数组上使用了方法，以返回仅包含用户名称作为元素的新数组。为简单起见，该示例仅使用callback（element）的第一个参数。

### 3、filter()

filter()在数组的每个元素上调用一个函数，并返回一个仅包含该函数返回的元素的新数组true。换句话说，它根据传递给它的函数过滤数组。就像map方法一样，但是它不需要修改原始数组就可以完成工作。

请看下面的示例：

```js
const arr = [1, 2, 3, 4, 5];
// Using ES5 syntax.
var filtered = arr.filter(function(item){
	return item < 3;
});
console.log(filtered);
// Returns: [1, 2]


// Using ES6 syntax.
const filtered = arr.filter(item => item < 3);
console.log(filtered); 
// Returns: [1, 2]
```

在上面的示例中，我们仅过滤了给定数组中小于3的数字。回调函数接受三个参数。第一个参数是当前正在处理的元素；第二个是该元素的索引；第三个是在其上filter调用该方法的数组。但是在此示例中，我们仅使用了一个参数。

### 4、reduce

reduce()允许使用更通用的数组处理形式，并且filter与map可以作为特殊应用派生出reduce。它遍历数组中的每个项目并返回一个值。这是通过将其作为参数回调来实现的。

该函数reduce有两个位置参数，第一个是累加器，另一个是迭代值，它返回累加值。

请参见下面的示例，在用户数组上使用，以返回所有用户年龄的总和。

```js
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); //Returns: 64.
```

注意，该示例仅在回调中使用第一个和第二个参数。

### 5、sort

sort()对数组的项目进行排序。排序顺序可以是字母或数字，也可以是升序或降序。看下面的例子：

以升序对数组中的数字进行排序：

```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b}); // [1,5,10,25,40,100].
```

以降序对数组中的数字进行排序：

```js
// Using ES6.
const points = [40, 100, 1, 5, 25, 10];
points.sort((a,b)=> b - a); // [100,40,25,10,5,1].
```

你还可以使用该方法执行其他操作sort()，例如按字母顺序对数组进行排序或获取数组中的最小值，等等。

### 6、every

every()检查数组中的每个元素是否通过特定测试。它返回一个布尔值（true / false）。

功能类似于some，但要求每一个元素都符合条件才返回true。

请看下面的示例：

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {  
	return currentValue < 10;});
// Returns false
```

上面的示例检查数组中的每个元素numbers是否小于10。

### 7、some

some()有点类似于该方法every()，它检查数组中的任何元素是否通过特定测试。它还返回一个布尔值（true / false）。

当数组中有一个符合条件，则返回true，否则返回false。

请看下面的示例：

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {  
	return currentValue < 10;});
// Returns true
```

上面的示例检查数组中的任何元素numbers是否小于10。

### 8、 find

类似于filter方法，但返回第一个符合条件的元素。filter返回一个数组，find返回一个object。

```js
//返回name长度为4的第一个对象
const foundedOne = students.find(stu=>stu.name.length === 4);
console.log(foundedOne);
结果：
	
{ name: 'Elon', score: 40 }
```

