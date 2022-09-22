## 8个简单的JavaScript字符串方法

[TOC]

# **1、length**

length属性返回字符串中包含空格的字符数。

```js
const str = "Hello World";
str.length
//Returns 11
```

# **2、Slice**

slice（）方法提取字符串的一部分，并将提取的部分返回到新字符串中。它有两个参数。这类似于切一条面包，然后在其中切成薄片。但是请记住，索引从零开始。

```js
const str = "Hello World";
str.slice(2 , 5);
//Returns llo
```

在上面的示例中，我们可以想象在位置2和5处进行切割，然后返回其之间的部分（llo）。

# **3、Replace**

replace（）方法将指定的值替换为字符串中的另一个值。

```js
const str = 'YouAreAwesome';
str.replace('Awesome', 'Beautiful');
//returns 'YouAreBeautiful" because you are :)
```

# **4、改变大小写**

toUpperCase（）和toLowerCase（）是用于将字符串转换为大写或小写的方法。这有助于我们实现大写姓名的首字母。

```js
const name = 'Shelby';
name.toUpperCase();
	//SHELBY
name.toLowerCase();
	//shelby
```

# **5、Concat**

concat（）方法用于连接两个或多个字符串。当你有一个人的名字并想向他们打招呼时，这将很方便。

```js
const str = 'Tim';
str.concat('IsAwesome');
//TimIsAwesome
```

# **6、Trim**

trim（）方法用于删除字符串两侧的空白。

```js
const str = '    JavaScriptIsHard    ';
str.trim();
//JavaScriptIsHard
```

# **7、Charat**

charAt（）方法返回字符串中指定索引处的字符。

```js
const best = 'JavaScript';
best.charAt(6);
// returns r
```

# **8、Split**

split（）方法将字符串转换为数组。你必须传递一个字符，例如逗号（，）或空格，以告知在何处分割字符串。如果未传递任何内容，则在每个字符之间分割字符串。

```js
const msg = 'Eight,Methods,Are,Done';
msg.split(',');
// returns the array ["Eight", "Methods", "Are", "Done"]
```