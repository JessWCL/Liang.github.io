# 4种JavaScript中获取HTML元素的方式

### 1、getElementById

**作用：用于获取一个基于唯一的ID的元素**

用法：getelementById(),接受一个你要获取的id参数，如果找到相应的元素则返回该元素，如果找不到就返回null。

代码：

HTML中代码：

```html
<div id =”mydiv”>Hello</div>
```

JavaScript中代码：

```js
var mydiv = document.getElementById(“mydiv”);      //获取<div>元素
```

### **2、getElementsByTagName**

**作用：用于获取对应标签的所有对象**

用法：getElementsByTag(),接受一个你要获取的标签的参数，返回含零或多个元素的NodeList（节点列表，与数组类似）

代码：

HTML中代码：

```html
<p>hello</p>
<p>hi</p>
<p>i am fine</p>
```

JavaScript中代码：

```js
 var array = document.getElementsByTagName(“p”);           
 //获取p的元素节点列表 P[0].style.color =”red”                      
 //”hello”变为红色字体
```

### **3、getElementsByName**

**作用：用于获取对应name名的所有元素**

用法：getElementsByName(),接受一个你要获得name名的参数，返回含零或多个元素的NodeList（节点列表，与数组类似）

代码：

HTML中代码：

```html
 <p name=”lid”>hello</p> <p name=”lid”>hi</p>
```

JavaScript中代码：

```js
 var name = document.getElementsByName(“lid”);  
 //获取name为lid所有元素节点 Name[0];            
 //”hello”
```

### **4、getElementsByClassName**

**作用：用于获取对应class名的所有元素**

用法：getElementsByClassName(),接受一个你要获得class名的参数，返回含零或多个元素的NodeList（节点列表，与数组类似）

HTML中代码：

```html
<p class=”lid”>hello</p><p class=”lid”>hi</p>
```

JavaScript中代码：

```js
var name = document.getElementsByClassName(“lid”);   
//获取name为lid所有元素节点Name[0];            
//”hello”
```