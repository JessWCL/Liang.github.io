## 8个JavaScript数组操作

[TOC]

JavaScript 提供了大量不同的处理数组的方法

### **1、 Array.map()**

使用.map() 方法，可以创建一个基于原始数组的修订版数组。.map() 方法接受一个函数，该函数遍历数组中的所有项并进行相应的修改。

当需要更新数组中的所有项并将其存储到一个新数组中时，.map() 方法就可以派上用场了。

例如有一个文章列表的数组，如下：

```js
const articles = [    
  {        
    article_id: "6976209276364652558",        
    title: "如何在 vue 的计算属性中传递参数",        
    views: 1258,    
  },    
  {        
    article_id: "6976113133358153736",        
    title: "Angular数据状态管理框架：NgRx/Store",        
    views: 2258,    
  },    
  {        
    article_id: "6975722363241365534",        
    title: "Angular管道PIPE介绍",        
    views: 1568,    
  },
];
```

现在基于上面文章列表数组，获取所有 title 组成的数组，如下：

```js
const arrayTitles = articles.map((item) => item.title);
console.log(arrayTitles);
```

输出的结果如下：

```js
[  
'如何在 Vue 的计算属性中传递参数',  
'Angular数据状态管理框架：NgRx/Store',  
'Angular管道PIPE介绍'
]
```

当然，只要是数组都可以使用 .map() ，接下来就基于上面标题数组，增加作者信息，如下：

```js
const arrayTitlesWithAuthor = arrayTitles.map(    
  (title) => `《${title}》作者：天行无忌`
);
console.log(arrayTitlesWithAuthor);
```

输出结果如下：

```js
[  
	'《如何在 Vue 的计算属性中传递参数》作者：天行无忌',  
	'《Angular数据状态管理框架：NgRx/Store》作者：天行无忌',  
	'《Angular管道PIPE介绍》作者：天行无忌'
]
```

***.map() 方法是一个用来创建新数组、修改其内容并保持原始数组不变的通用方法。当出现需要修改现有数组的内容并将结果存储为新变量的时候就可以用。\***

### **2、Array.filter()**

从方法名称可以很容易知道其用途，没错用于过滤数组元素。

filter()方法根据特定条件获取数组中的元素，像 .map() 方法一样，它将返回一个新数组，并保持原始数组不变。

基于上面的 articles 数组，分别获取 views 小于 2000 的和大于 2000 的文章列表：

```js
const lessArticles = articles.filter((item) => item.views < 2000);
const muchArticles = articles.filter((item) => item.views > 2000);
console.log(lessArticles);
console.log("\r\n==========================================\r\n");
console.log(muchArticles);
```

输出的结果如下：

```js
[  
{    
  article_id: '6976209276364652558',    
  title: '如何在 Vue 的计算属性中传递参数',    
  views: 1258  
},  
  {    
    article_id: '6975722363241365534',    
    title: 'Angular管道PIPE介绍',    
    views: 1568  }
]


==========================================
  
  
[  
  {    
    article_id: '6976113133358153736',    
    title: 'Angular数据状态管理框架：NgRx/Store',    
    views: 2258  
  }
]
```

***当需要从数组中删除不符合特定条件的元素时，可以使用 .filter() 。\***

### **3、Array.find()**

.find() 方法看起来很像前面介绍的.filter()方法。跟 .filter()方法一样，将匹配的条件的元素返回，区别在于，.find() 将只返回与提供的条件匹配的第一个元素，不是数组。

将上面的 .filter() 方法改为 .find()，如下：

```js
const lessArticle = articles.find((item) => item.views < 2000);
const muchArticle = articles.find((item) => item.views > 2000);
console.log(lessArticle);
console.log("\r\n==========================================\r\n");
console.log(muchArticle);
```

输出结果如下：

```js
{  
  article_id: '6976209276364652558',  
    title: '如何在 Vue 的计算属性中传递参数',  
      views: 1258
}


==========================================
  
  
{  
  article_id: '6976113133358153736',  
  title: 'Angular数据状态管理框架：NgRx/Store',  
  views: 2258
}
```

***\**什么时候使用 Array.find() ？\**当需要获取数组通过定义条件的第一个元素时。\***

### **4、Array.forEach()**

.forEach() 方法的工作方式很像常规的 for 循环，遍历一个数组并在每个元素上执行一个函数。.forEach() 的第一个参数是回调函数，它包含循环数组的当前值和索引。

如下：

```js
articles.forEach((item, index) => {    
  console.log(`文章索引 ${index} 的标题为《${item.title}》`);
});
```

输出结果如下：

```js
文章索引 0 的标题为《如何在 Vue 的计算属性中传递参数》
文章索引 1 的标题为《Angular数据状态管理框架：NgRx/Store》
文章索引 2 的标题为《Angular管道PIPE介绍》
```

*当需要简单地循环遍历数组的每个元素而不需要构建新数组时。*

### **5、for...of**

for...of 是es6推出的迭代器，号称最简洁，可以是用 break，continue和 return 终止循环。跟 .forEach() 不同的是，不提供数组索引。跟 for 语句相比代码少得多，更简洁。

下面代码遍历输出数组，如下：

```js
for (const item of articles) {    
	console.log(item);
}
```

### **6、Array.every()**

.every()方法将检查数组中的每个元素是否都通过提供的条件，如果数组中的所有元素都通过条件，则将返回 true ，如果没有，将返回 false。

例如，检查 articles 数组所有的文章 views 都超过 1000，如下：

```js
const isMoreThan1000 = articles.every((item) => item.views > 1000);
console.log(isMoreThan1000);  
// true
```

检查 articles 数组所有的文章 views 都超过 2000，如下：

```js
const isMoreThan2000 = articles.every((item) => item.views > 2000);
console.log(isMoreThan2000); 
// false
```

***\**什么时候使用 Array.every() ？\**当需要确认数组的每一项都通过定义的条件时。\***

### **7、Array.some()**

.some() 方法和 .every() 方法类似，但验证的结果是相反的，如果数组中的所有元素只要有一个通过条件，则将返回 true ，如果所有的元素都不通过条件，将返回 false。

例如，检查 articles 数组所有的文章 views 是否有 views 超过 2000 的文章，如下：

```js
const isMore2000 = articles.some((item) => item.views > 2000);
console.log(isMore2000); // true
```

检查 articles 数组所有的文章 是否有 views 超过 3000 的文章，如下：

```js
const isMore3000 = articles.some((item) => item.views > 3000);
	console.log(isMore3000);  
// false
```

### **8、Array.reduce()**

.reduce() 方法接受一个回调函数作为其第一个参数，一个可选的初始值作为其第二个参数。

如果没有提供初始值，则使用第一个数组元素作为值。回调函数提供一个累加器 accumulator 和 currentValue 参数，用于执行 reduce 计算。

这里就简单举个例子，对 articles 数组的 views 进行累加求和：

```js
const sumViews = articles.reduce(    
  (accumulator, current) => accumulator + current.views,   
  0
);
console.log(sumViews); 
// 5084
```

使用 .reduce() 方法可以用于展平一个数组，当然已经有很多方法可以做到这一点，这就是其中的方法之一。

```js
const flattened = [    
  [0, 1],    
  [2, 3],    
  [4, 5],
].reduce((accumulator, current) => accumulator.concat(current), []);
console.log(flattened); 
// [ 0, 1, 2, 3, 4, 5 ]
```

***当需要通过操作其值将数组向下转换为单个值时，可以使用 .reduce() 方法\***