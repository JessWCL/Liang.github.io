## 32个有用的JavaScript片段

JavaScript 无疑是 Web 开发中最流行的编程语言之一。无论你选择使用 Angular、jQuery、Vue.js 还是 React，JavaScript 在所有这些中都扮演着重要的角色。

由于 JavaScript 的庞大社区，它们拥有大量的内置库来解决你的日常问题。

在本文中，我们将研究 32 个片段，这些技巧可以让你更像 JavaScript 专家一样进行编程。我们将看到一些有趣的代码片段，它们将帮助你解决编程中的日常问题，并且你将学习如何进行通用编程。

其中一些你可能已经知道，但其中大部分都是新的并且很有趣，你可以学习。

## **1、字节大小**

此代码段将显示你的字符串或整数的字节大小。简单来说，它会显示字符串或整数的长度。

```js
const byteSize1 = str => new Blob([str]).size; 
const byteSize2 = int => new Blob([int]).size;
byteSize1("JavaScript") // 10 
byteSize2(101) // 3
```

## **2、转换为数组**

这个简单的代码片段方法会将你的非数组值或数据转换为数组形式。

```js
const convertToArray = val => (Array.isArray(val) ? val : [val]);
convertToArray("Pro") // [Pro] 
convertToArray(101) // [101]
```

## **3、大写**

此代码段方法将以大写形式转换字符串中字符的每个第一个字母。检查下面的代码以了解它是如何工作的。

```js
const capitalize = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
capitalize('code'); //Code
capitalize('javascript programming'); //Javascript Programming
```

## **4、 获取当前网址**

此代码段将有助于获取运行 javascript 的当前 URL。这在前端调试中派上用场。

```js
const currentURL = () => window.location.href;
currentURL() // https://medium.com/@codedev101
```

## **5、数字化**

这个是很棒的片段，它会将你的数字转换为数字数组。查看下面的代码示例。

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
digitize(345) // [3,4,5] 
digitize(123) // [1,2,3] 
digitize(6) // [6]
```

## **6、计数出现次数**

此片段代码将计算数组中某个值的出现次数。当你想知道一个值在大尺寸数组中出现多少次时，这会派上用场。

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([2,4,6,2,5,2], 2) // 3 
countOccurrences([1,4,6,2,5,6], 6) // 2
```

## **7、字谜**

此片段代码用于检查特定字符串是否为字谜。字谜是可以改写成另一个词的词。

```js
const Anagram = (string1, string2) => {  
const normalize = str =>str   
  .toLowerCase()   
  .replace(/[^a-z0-9]/gi, '')  
  .split('')  
  .sort()  
  .join('');  
  return normalize(string1) === normalize(string2);
};
Anagram("race", "care") // true
Anagram("part", "trap") // true
```

## **8、检查浏览器标签焦点**

此片段代码将告诉你当前运行 javaScript 的浏览器选项卡是否处于焦点状态。

```js
const Browser_Tab_Focused = () => !document.hidden;
Browser_Tab_Focused(); // true
```

## **9、检查浏览器**

这段代码会告诉你运行 JavaScript 的环境是浏览器还是非浏览器。众所周知，我们可以在浏览器中运行 JavaScript，node js如果我们可以检查我们在哪个环境中工作，那就太好了。

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');isBrowser() 
// true   if on isBrowserisBrowser() 
// false  if we are on node js or any other environment
```

## **10、检查空**

这段代码将检查变量或值是否为空。

```js
const checkNull = val => val === undefined || val === null;
checkNull() // true
checkNull(234) // false
```

## **11、 isNumber**

这个简单的片段代码将检查值的变量是否为数字。

```js
function isNumeric(num) {   
  return !isNaN(parseFloat(num)) && isFinite(num); 
}
isNumeric(324) //true 
isNumeric("Code") // false
```

## **12、 isString**

此片段代码将检查变量或值是否为字符串。

```js
const isString = val => typeof val === 'string';
isString('hello world'); // true
isString('1234'); // true
isString(345); // false
```

## **13、最大数字**

此代码段方法将返回列表中的最大数字。这是从列表中找到最大数字的最快方法。

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
maxN([3,8,7]) // 8 
maxN([1,5,6,23]) // 23
```

## **14、反转**

此片段代码只是反转字符串。这在你需要反转字符串或检查回文的简短任务中派上用场。

```js
const reverseStr = str => [...str].reverse().join('');
console.log(reverseStr("JavaScript")) // tpircSavaJ 
console.log(reverseStr("123")) // 321
```

## **15、从列表中随机**

此片段代码用于从列表中选择随机数。

```js
const random = arr => arr[Math.floor(Math.random() * arr.length)];
console.log(random([1,4,5,6])) // 6 
console.log(random([1,4,0,6])) // 1
```

## **16、重定向到网址**

这个片段是我最喜欢的片段，它会将你重定向到 URL。当你重定向到网站时，这在 Web 开发中会派上用场。当用户执行任何操作时。

```js
const redirect = (url, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url);
redirect('https://medium.com/')
redirect('https://codedev101.medium.com/')
```

## **17、列表的头部元素**

这段代码将展示如何快速获取任何列表的第一个元素。

```js
const head = arr => arr[0];
head([1,2,3]) // 1 
head(["JavaScript", "Python", "C++"]) // JavaScript
```

## **18、List的尾部元素**

这段代码将展示如何以简单快捷的方式获取任何列表的尾部元素。

```js
const tail = arr => arr[arr.length - 1];
console.log(tail([1,2,3])); // 3
console.log(tail(["JavaScript", "Python", "C++"])); // C++
```

## **19、最小数量**

这段代码将快速返回列表中最小的数字。

```js
const minimum = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
console.log(minimum([2,4,6,1]))   // 1
console.log(minimum([22, 55, 66, 77, 11, 19]))  // 11
```

## **20、 isUpper Case**

当你想检查 String 是否为大写时，此片段代码将很有用。

```js
const isUpperCase = str => str === str.toUpperCase();
isUpperCase("Code") //false 
isUpperCase("PROGRAMMING") //true 
isUpperCase("aB") //false
```

## **21、 isLower Case**

我们看到的这个大写片段代码将检查字符串是否为小写。

```js
const isLowerCase = str => str === str.toLowerCase();
isLowerCase("code") //true
isLowerCase("PROGRAMMING") //false
```

## **22、范围生成器中的整数数组**

这段代码将向你展示如何生成一个带有n数字且在一个范围内的随机整数数组。检查下面的代码以了解它是如何工作的。

```js
const randomIntArrayInRange = (min, max, n = 1) =>   
	Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(randomIntArrayInRange(10, 15, 5)); // [ 14, 11, 15, 10, 13 ]
```

## **23、 范围生成器中的随机整数**

此片段代码用于生成给定范围内的随机整数。

```js
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInteger(1,10)) // 6 
console.log(randomInteger(1,20)) // 8
```

## **24、 获取类型**

此片段代码可用于检查 JavaScript 中任何变量或值的类型。

```js
const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
getType([3,4,5]) //array
getType("JavaScript")  //string
getType(true)  //boolean
```

## **25、 从数组中删除重复项**

这段代码是从数组中删除重复项的一种快速简便的方法。

```js
const filterNonUnique = arr => [...new Set(arr)];
console.log(filterNonUnique([2,2,5,5,7,7,8])) // [ 2,5,7,8 ] 
console.log(filterNonUnique([1,2,3,2,3] ,6])) // [1,2,3,6]
```

## **26、半径的度数**

此片段代码将向你展示如何以快速简便的方式将度数转换为半径。

```js
const degreeToRad = deg => (deg * Math.PI) / 180.0;
degreeToRad(80.0) // 1.3962634015954636 
degreeToRad(360.0) // 6.283185307179586
```

## **27、 一年中的一天**

此代码段将返回一年中的哪一天。

```js
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date()) // 140
```

## **28、从列表中删除 False 元素**

此代码段方法将从列表中删除 false 元素，如 null、false、0 或空元素。

```js
const compactJs = arr => arr.filter(Boolean);
compactJs([2,4,false,NaN,5,"",0]) //[2,4,5]
```

## **29、 检查所有相等**

此代码段将检查数组的所有元素是否相等。

```js
const AllEqual = arr => arr.every(val => val === arr[0]);AllEqual([1, 2, 3]); // false
AllEqual([1, 2, 2]); // false
AllEqual([2, 2, 2]); // true
```

## **30、删除元素**

这段代码是从左侧的列表中删除元素。

```js
const drop = (arr, n = 1) => arr.slice(n);
console.log(drop([2, 4, 6])) // [4, 6] 
console.log(drop([2, 4, 6], 2)) //[6]
```

## **31、争取时间**

此片段代码将以字符串格式从数据对象返回当前时间。

```js
const getTime = date => date.toTimeString().slice(0, 8);
getTime(new Date()) // "10:45:12"
```

## **32、 读取文件行**

此片段代码将读取文件并将其行以数组格式存储。

```js
const fs = require('fs');
const readFileLines = filename =>fs  
  .readFileSync(filename)  
  .toString('UTF8')  
  .split('\n');
let arr = readFileLines('test.txt');
console.log(arr); // ['line 1', 'line 2', 'line 3' ,'line 4]
```