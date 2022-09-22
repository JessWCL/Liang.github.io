## 127个javascript代码片段

[TOC]



# **1、all**

如果谓词函数对集合中的所有元素返回 true，则此代码段返回 true，否则返回 false。 如果你想使用布尔值作为默认值，你可以省略第二个参数 fn。

```js
const all = (arr, fn = Boolean) => arr.every(fn);
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

# **2、 allEqual**

此代码段检查数组的所有元素是否相等。

```js
const allEqual = arr => arr.every(val => val === arr[0]);
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

# **3、approximatelyEqual**

此代码段检查两个数字是否彼此近似相等，差异很小。

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```

# **4、arrayToCSV**

此代码段将没有逗号或双引号的元素转换为具有逗号分隔值的字符串。

```js
const arrayToCSV = (arr, delimiter = ',') =>  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
```

# **5、arrayToHtmlList**

此代码段将数组元素转换为<li>标签，并将它们附加到给定 ID 的列表中。

```js
const arrayToHtmlList = (arr, listID) =>  (el => (    
  (el = document.querySelector('#' + listID)),    
  (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))  
))();
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```

# **6、attempt**

此代码段执行一个函数，返回结果或捕获的错误对象。

```js
const attempt = (fn, ...args) => {  
  try {    
    return fn(...args);  
  } catch (e) {    
    return e instanceof Error ? e : new Error(e);  
  }};
var elements = attempt(function(selector) {  
    return document.querySelectorAll(selector);
}, '>_>');if (elements instanceof Error) elements = []; // elements = []
```

# **7、average**

此代码段返回两个或多个数值的平均值。

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

# **8、averageBy**

此代码段在最初使用给定函数将每个元素映射到值后返回数组的平均值。

```js
const averageBy = (arr, fn) =>  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /  arr.length;
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

# **9、bifurcate**

此代码段将值分成两组，然后将过滤器的真实元素放入第一组，否则放入第二组。

你可以使用 Array.prototype.reduce() 和 Array.prototype.push() 根据过滤器将元素添加到组中。

```js
const bifurcate = (arr, filter) =>  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

# **10、bifurcateBy**

此代码段根据谓词函数将值分为两组。 如果谓词函数返回一个真值，则该元素将被放置在第一组中。 否则，它将被放置在第二组中。

你可以使用 Array.prototype.reduce() 和 Array.prototype.push() 根据 fn 为每个元素返回的值将元素添加到组中。

```js
const bifurcateBy = (arr, fn) =>  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

# **11、bottomVisible**

此代码段检查页面底部是否可见。

```js
const bottomVisible = () =>  document.documentElement.clientHeight + window.scrollY >=  (document.documentElement.scrollHeight || document.documentElement.clientHeight);
bottomVisible(); // true
```

# **12、byteSize**

此代码段以字节为单位返回字符串的长度。

```js
const byteSize = str => new Blob([str]).size;
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```

# **13、capitalize**

此代码段将字符串的第一个字母大写。

```js
const capitalize = ([first, ...rest]) =>  first.toUpperCase() + rest.join('');
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'FooBar'
```

# **14、capitalizeEveryWord**

此代码段将给定字符串中每个单词的第一个字母大写。

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
capitalizeEveryWord('hello world!'); // 'Hello World!'
```

# **15、castArray**

此代码段将非数组值转换为数组。

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
castArray('foo'); // ['foo']
castArray([1]); // [1]
```

# **16、compact**

此代码段从数组中删除错误值。

```js
const compact = arr => arr.filter(Boolean);
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```

# **17、countOccurrences**

此代码段计算数组中某个值的出现次数。

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

# **18、Create Directory**

此代码段用于existsSync()检查目录是否存在，mkdirSync()如果不存在则创建它。

```js
const fs = require('fs');const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
```

# **19、currentURL**

此代码段返回当前URL。

```js
const currentURL = () => window.location.href;
currentURL(); // 'https://medium.com/@fatosmorina'
```

# **20、dayOfYear**

此代码段从Date 对象中获取一年中的哪一天。

```js
const dayOfYear = date =>  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date()); // 272
```

# **21、decapitalize**

此代码段将字符串的第一个字母转换为小写。

```js
const decapitalize = ([first, ...rest]) =>  first.toLowerCase() + rest.join('')
decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```

# **22、deepFlatten**

此代码段递归地展平数组。

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

# **23、defaults**

此代码段为对象中未定义的所有属性分配默认值。

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```

# **24、defer**

此代码段会延迟函数的执行，直到清除当前调用堆栈。

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```

# **25、degreesToRads**

此代码片段可用于将值从度数转换为弧度。

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;
degreesToRads(90.0); // ~1.5708
```

# **26、difference**

此代码段查找两个数组之间的差异。

```js
const difference = (a, b) => {  const s = new Set(b);  return a.filter(x => !s.has(x));};
difference([1, 2, 3], [1, 2, 4]); // [3]
```

# **27、differenceBy**

在将给定函数应用于两个列表的每个元素之后，此方法返回两个数组之间的差异。

```js
const differenceBy = (a, b, fn) => {  const s = new Set(b.map(fn));  return a.filter(x => !s.has(fn(x)));};
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```

# **28、differenceWith**

此代码段删除了比较器函数返回的值false。

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
```

# **29、digitize**

此代码段获取一个数字作为输入并返回其数字数组。

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
digitize(431); // [4, 3, 1]
```

# **30、distance**

此代码段通过计算距离返回两点之间的距离。

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
distance(1, 1, 2, 3); // 2.23606797749979
```

# **31、drop Elements**

此代码段返回一个从左侧删除了 n 个元素的新数组。

```js
const drop = (arr, n = 1) => arr.slice(n);
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```

# **32、dropRight**

此代码段返回一个从右侧删除了 n 个元素的新数组。

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```

# **33、dropRightWhile**

此代码段从数组的右侧删除元素，直到传递的函数返回 true。

```js
const dropRightWhile = (arr, func) => {  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);  return arr;};
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```

# **34、dropWhile**

此代码段从数组中删除元素，直到传递的函数返回true。

```js
const dropWhile = (arr, func) => {  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);  return arr;};
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```

# **35、elementContains**

此代码段检查父元素是否包含子元素。

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```

# **36、过滤重复元素**

此代码段删除数组中的重复值。

```js
const filterNonUnique = arr => [ …new Set(arr)];
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```

# **37、findKey**

此代码段返回满足给定函数的第一个键值。

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));
findKey(  
  {    
    barney: { age: 36, active: true },    
    fred: { age: 40, active: false },    
    pebbles: { age: 1, active: true }  
  },  
 o => o['active']); // 'barney'
```

# **38、findLast**

此代码段返回给定函数返回真值的最后一个元素。

```js
const findLast = (arr, fn) => arr.filter(fn).pop();
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```

# **39、flatten**

此代码段使用递归将数组展平到指定的深度。

```js
const flatten = (arr, depth = 1) =>  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```

# **40、forEachRight**

此代码段从数组的最后一个元素开始，为数组的每个元素执行一个函数。

```js
const forEachRight = (arr, callback) =>  arr    
.slice(0)    
.reverse()    
.forEach(callback);
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```

# **41、forOwn**

此代码段迭代对象的每个属性，并分别为每个属性迭代一个回调。

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```

# **42、functionName**

此代码段将函数的名称打印到控制台中。

```js
const functionName = fn => (console.debug(fn.name), fn);
functionName(Math.max); // max (logged in debug channel of console)
```

# **43、从日期获取时间**

此代码段可用于以Date 字符串形式从对象中获取时间。

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
getColonTimeFromDate(new Date()); // "08:38:00"
```

# **44、获取日期之间的天数**

此代码段可用于查找两个日期之间的天数差异。

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>  (dateFinal - dateInitial) / (1000 * 3600 * 24);
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```

# **45、getStyle**

此代码段可用于获取特定元素的 CSS 规则值。

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```

# **46、getType** 

此代码段可用于获取值的类型。

```js
const getType = v =>  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
getType(new Set([1, 2, 3])); // 'set'
```

# **47、hasClassi**

此代码段检查元素是否具有特定类。

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```

# **48、head**

此代码段返回head列表的 。

```js
const head = arr => arr[0];
head([1, 2, 3]); // 1
```

# **49、hide**

此代码段可用于隐藏指定的所有元素。

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));
hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```

# **50、httpsRedirect**

此代码段可用于在特定域中从 HTTP 重定向到 HTTPS。

```js
const httpsRedirect = () => {  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);};
httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```

# **51、indexOfAll**

此代码段可用于获取数组中某个值的所有索引，如果该值未包含在其中，则返回一个空数组。

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```



# **52、initial**

此代码段返回数组中除最后一个元素之外的所有元素。

```js
const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
const initial = arr => arr.slice(0, -1);initial([1, 2, 3]); // [1,2]
```

# **53、insertAfter**

此代码段可用于在特定元素的末尾插入 HTML 字符串。

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```

# **54、insertBefore**

此代码段可用于在特定元素之前插入 HTML 字符串。

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```

# **55、intersection**

此代码段可用于获取包含在其他两个数组中的元素的数组。

```js
const intersection = (a, b) => {  const s = new Set(b);  return a.filter(x => s.has(x));};
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```

# **56、intersectionBy**

在对两个数组的每个元素执行特定函数后，此代码段可用于返回存在于两个数组中的元素列表。

```js
const intersectionBy = (a, b, fn) => {  
  const s = new Set(b.map(fn));  
    return a.filter(x => s.has(fn(x)));
};
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```

# **57、intersectionWith**

此代码段可用于通过使用比较器函数返回存在于两个数组中的元素列表。

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```

# **58、is**

此代码段可用于检查值是否属于特定类型。

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```

# **59、isAfterDate**

此代码段可用于检查某个日期是否在另一个日期之后。

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```

# **60、 isAnagram**

此代码段可用于检查特定字符串是否是另一个字符串的字谜。

```js
const isAnagram = (str1, str2) => {  
  const normalize = str =>    
  str      
  .toLowerCase()      
  .replace(/[^a-z0-9]/gi, '')      
  .split('')      
  .sort()      
  .join('');  
  return normalize(str1) === normalize(str2);
};
isAnagram('iceman', 'cinema'); // true
```

# **61、isArrayLike**

此代码段可用于检查提供的参数是否像数组一样可迭代。

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```

# **62、 isBeforeDate**

此代码段可用于检查某个日期是否在另一个日期之前。

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```

# **63、isBoolean**

此代码段可用于检查参数是否为布尔值。

```js
const isBoolean = val => typeof val === 'boolean';
isBoolean(null); // false
isBoolean(false); // true
```

# **64、 isBrowser**

此代码段可用于确定当前运行时环境是否为浏览器。这有助于避免在服务器（节点）上运行前端模块时出错。

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```

# **65、 isBrowserTabFocused**

此代码段可用于确定浏览器选项卡是否获得焦点。

```js
const isBrowserTabFocused = () => !document.hidden;
isBrowserTabFocused(); // true
```

# **66、 isLowerCase**

此代码段可用于确定字符串是否为小写。

```js
const isLowerCase = str => str === str.toLowerCase();
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```

# **67、 isNil**

此代码段可用于检查值是否为null或undefined。

```js
const isNil = val => val === undefined || val === null;
isNil(null); // true
isNil(undefined); // true
```

# **68、 isNull**

此代码段可用于检查值是否为null。

```js
const isNull = val => val === null;
isNull(null); // true
```

# **69、 isNumber**

此代码段可用于检查提供的值是否为数字。

```js
function isNumber(n) {    
  return !isNaN(parseFloat(n)) && isFinite(n);
}
isNumber('1'); // false
isNumber(1); // true
```

# **70、 isObject**

此代码段可用于检查提供的值是否为对象。它使用 Object 构造函数为给定值创建对象包装器。

如果它已经是一个对象，则将返回与给定值对应的对象类型。否则，将返回一个新对象。

```js
const isObject = obj => obj === Object(obj);
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```

# **71、 isObjectLike**

此代码段可用于检查值是否不为 null ，以及其 typeof 是否为“对象”。

```js
const isObjectLike = val => val !== null && typeof val === 'object';
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```

# **72、 isPlainObject**

此代码段检查值是否由 Object 构造函数创建的对象。

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```

# **73、 isPromiseLike**

此代码段检查对象是否看起来像Promise.

```js
const isPromiseLike = obj =>  obj !== null &&  (typeof obj === 'object' || typeof obj === 'function') &&  typeof obj.then === 'function';
isPromiseLike({  
  then: function() {    
    return '';  
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```

# **74、isSameDate**

此代码段可用于检查两个日期是否相等。

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```

# **75、 isString**

此代码段可用于检查参数是否为字符串。

```js
const isString = val => typeof val === 'string';
isString('10'); // true
```

# **76、 isSymbol**

此代码段可用于检查参数是否为符号。

```js
const isSymbol = val => typeof val === 'symbol';
isSymbol(Symbol('x')); // true
```

# **77、 isUndefined**

此代码段可用于检查值是否为undefined。

```js
const isUndefined = val => val === undefined;
isUndefined(undefined); // true
```

# **78、isUpperCase**

此代码段可用于检查字符串是否为大写。

```js
const isUpperCase = str => str === str.toUpperCase();
isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```

# **79、 isValidJSON**

此代码段可用于检查字符串是否为有效的 JSON。

```js
const isValidJSON = str => {  
  try {    
    JSON.parse(str);    
    return true;  
  } catch (e) {    
    return false;  
  }
};
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

# **80、last**

此代码段返回数组的最后一个元素。

```js
const last = arr => arr[arr.length - 1];
last([1, 2, 3]); // 3
```

# **81、matches**

此代码段比较两个对象以确定第一个对象是否包含与第二个对象相同的属性值。

```js
const matches = (obj, source) =>  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```

# **82、maxDate**

此代码段可用于获取最新日期。

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));
const array = [  
  new Date(2017, 4, 13),  
  new Date(2018, 2, 12),  
  new Date(2016, 0, 10),  
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```

# **83、maxN**

此代码段返回n列表中最大的元素。如果n大于或等于列表的长度，则返回原始列表（按降序排序）。

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```

# **84、minDate**

此代码段可用于获取最早日期。

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));
const array = [  
  new Date(2017, 4, 13),  
  new Date(2018, 2, 12),  
  new Date(2016, 0, 10),  
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```

# **85、minN**

此代码段返回n列表中的最小元素。如果n大于或等于列表的长度，则返回原始列表（按升序排序）。

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
minN([1, 2, 3]); // [1]minN([1, 2, 3], 2); // [1,2]
```

# **86、negate** 

此代码段可用于将 not 运算符 ( !) 应用于带有参数的谓词函数。

```js
const negate = func => (...args) => !func(...args);
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```

# **87、 nodeListToArray**

此代码段可用于将 nodeList 转换为数组。

```js
const nodeListToArray = nodeList => [...nodeList];
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```

# **88、pad**

如果字符串短于指定长度，则此代码段可用于在字符串的两侧填充指定字符。

```js
const pad = (str, length, char = ' ') =>  str.padStart((str.length + length) / 2, char).padEnd(length, char);
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```

# **89、 radsToDegrees**

此代码段可用于将角度从弧度转换为度数。

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;
radsToDegrees(Math.PI / 2); // 90
```

# **90、随机生成十六进制颜色代码**

此代码段可用于生成随机的十六进制颜色代码。

```js
const randomHexColorCode = () => {  let n = (Math.random() * 0xfffff * 1000000).toString(16);  return '#' + n.slice(0, 6);};
randomHexColorCode(); // "#e34155"
```

# **91、 randomIntArrayInRange**

此代码段可用于生成具有n指定范围内的随机整数的数组。

```js
const randomIntArrayInRange = (min, max, n = 1) =>  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```

# **92、randomIntegerInRange**

此代码段可用于生成指定范围内的随机整数。

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomIntegerInRange(0, 5); // 3
```

# **93、RandomNumberInRange**

此代码段可用于返回指定范围内的随机数。

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
randomNumberInRange(2, 10); // 6.0211363285087005
```

# **94、ReadFileLines**

此代码段可用于通过从文件中获取行数组来读取文件。

```js
const fs = require('fs');const readFileLines = filename =>  fs    
  .readFileSync(filename)    
  .toString('UTF8')    
  .split('\n');
let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```

# **95、 重定向到一个 URL**

此代码段可用于重定向到指定的 URL。

```js
const redirect = (url, asLink = true) =>  asLink ? (window.location.href = url) : window.location.replace(url);
redirect('https://google.com');
```

# **96、反转字符串**

此代码段可用于反转字符串。

```js
const reverseString = str => [...str].reverse().join('');
reverseString('foobar'); // 'raboof'
```

# **97、round**

此代码段可用于将数字四舍五入到指定的位数。

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
round(1.005, 2); // 1.01
```

# **98、runPromisesInSeries**

此代码段可用于连续运行一系列 Promise。

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```

# **99、sample**

此代码段可用于从数组中获取随机数。

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
sample([3, 7, 9, 11]); // 9
```

# **100、sampleSize**

此代码段可用于从数组中的唯一位置获取 n 个随机元素，直至数组的大小。 使用 Fisher-Yates 算法对数组中的元素进行混洗。

```js
const sampleSize = ([...arr], n = 1) => {  let m = arr.length;  while (m) {    
  const i = Math.floor(Math.random() * m--);    
  [arr[m], arr[i]] = [arr[i], arr[m]];  
	}  
    return arr.slice(0, n);
 };
sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```

# **101、scrollToTop**

此代码段可用于平滑滚动到当前页面的顶部。



```js
const scrollToTop = () => {  const c = document.documentElement.scrollTop || document.body.scrollTop;  if (c > 0) {    
  window.requestAnimationFrame(scrollToTop);    
  window.scrollTo(0, c - c / 8);  
	}
};
scrollToTop();
```

# **102、serializeCookie**

此代码段可用于将 cookie 名称-值对序列化为 Set-Cookie 标头字符串。

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
serializeCookie('foo', 'bar'); // 'foo=bar'
```

# **103、setStyle**

此代码段可用于为特定元素设置 CSS 规则的值。

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
setStyle(document.querySelector('p'), 'font-size', '20px');// The first <p> element on the page will have a font-size of 20px
```

# **104、shallowClone**

此代码段可用于创建对象的浅层克隆。

```js
const shallowClone = obj => Object.assign({}, obj);
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```

# **105、Show**

此代码段可用于显示指定的所有元素。

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));
show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```

# **106、shuffle**

此代码段可用于使用Fisher-Yates 算法随机排序数组的元素。

```js
const shuffle = ([...arr]) => {  
  let m = arr.length;  
  while (m) {    
    const i = Math.floor(Math.random() * m--);    
    [arr[m], arr[i]] = [arr[i], arr[m]];  
  }  
  return arr;
};
const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```

# **107、similarity**

此代码段可用于返回出现在两个数组中的元素数组。

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```

# **108、sleep**

此代码段可用于通过将异步函数置于睡眠状态来延迟其执行。

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function sleepyWork() {  console.log("I'm going to sleep for 1 second.");  await sleep(1000);  console.log('I woke up after 1 second.');}
```

# **109、smoothScroll**

此代码段可用于将调用它的元素平滑地滚动到浏览器窗口的可见区域。

```js
const smoothScroll = element =>  document.querySelector(element).scrollIntoView({    behavior: 'smooth'  });
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```

# **110、 sortCharactersInString**

此代码段可用于按字母顺序对字符串中的字符进行排序。

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
sortCharactersInString('cabbage'); // 'aabbceg'
```

# **111、splitLines**

此代码段可用于将多行字符串拆分为行数组。

```js
const splitLines = str => str.split(/\r?\n/);
splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```

# **112、stripHTMLTags**

此代码段可用于从字符串中删除 HTML/XML 标记。

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```

# **113、sum**

此代码段可用于查找两个或多个数字或数组的总和。

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```

# **114、tail**

此代码段可用于获取包含数组中除第一个元素之外的所有元素的数组。如果数组只有一个元素，那么将返回具有该元素的数组。

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```

# **115、take**

此代码段可用于获取从开头删除 n 个元素的数组。

```js
const take = (arr, n = 1) => arr.slice(0, n);
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```

# **116、takeRight**

此代码段可用于获取n 从末尾删除元素的数组。

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```

# **117、timeTaken**

此代码段可用于找出执行函数所需的时间。

```js
const timeTaken = callback => {  
  console.time('timeTaken');  
  const r = callback();  
  console.timeEnd('timeTaken');  
  return r;
};
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```

# **118、times**

此代码段可用于迭代回调n 时间。

```js
const times = (n, fn, context = undefined) => {  
  let i = 0;  
  while (fn.call(context, i) !== false && ++i < n) {}
};
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```

# **119、 toCurrency**

此代码段可用于格式化数字（如货币）。

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```

# **120、 toDecimalMark**

此代码段使用toLocaleString() 函数将浮点运算转换为小数点形式，方法是使用数字生成逗号分隔的字符串。

```js
const toDecimalMark = num => num.toLocaleString('en-US');
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```

# **121、toggleClass**

此代码段可用于切换元素的类。

```js
const toggleClass = (el, className) => el.classList.toggle(className);
toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```

# **122、tomorrow**

此代码段可用于获取明天日期的字符串表示。

```js
const tomorrow = () => {  let t = new Date();  t.setDate(t.getDate() + 1);  return t.toISOString().split('T')[0];};
tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```

# **123、unfold**

此代码段可用于使用迭代器函数和初始种子值构建数组。

```js
const unfold = (fn, seed) => {  
  let result = [],    
      val = [null, seed];  
  while ((val = fn(val[1]))) result.push(val[0]);  
  return result;
};
var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```

# **124、union**

此代码段可用于查找两个数组的并集，从而生成一个包含来自两个数组但不重复的元素的数组。

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```

# **125、uniqueElements**

这段代码使用 ES6 Set 和 ...rest 运算符来只获取每个元素一次。

```js
const uniqueElements = arr => [...new Set(arr)];
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```

# **126、validateNumber**

此代码段可用于检查值是否为数字。

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
validateNumber('10'); // true
```

# **127、words**

此代码段将字符串转换为单词数组。

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```