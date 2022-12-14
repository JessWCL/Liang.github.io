# 5个Vue高级实战技巧

### 自动注册组件

我们平时可能这样引入注册组件。每次都得需要在头部引入，然后注册，最后在模板上使用。

```vue
<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

那么，有没有更加方便快捷的方法呢？我们不妨这样。

创建一个名为`globalRC.js`文件，假设我们这里与组件平级，即存放在组件文件夹中。

目录结构如：

```js
-src
--components
---component1.vue
---globalRC.js
```

`globalRC.js`:

```js
import Vue from 'vue'

function changeStr (str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const requireComponent = require.context('./',false,/\.vue$/); // './'操作对象为当前目录

requireComponent.keys().forEach(element => {
    const config = requireComponent(element);

    const componentName = changeStr(
        element.replace(/^\.\//,'').replace(/\.\w+$/,'')
    )
    
    Vue.component(componentName, config.default || config)
});
```

然后，我们需要在`main.js`文件中引入。

```js
import './components/globalRC.js'
```

最后，我们只需要在模板直接使用就可以了。

```vue
<template>
  <div id="app">
    <Component1 />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```

> 注意，require.context是webpack的一个API，所以，需要基于webpack环境才可以使用。

### 自动注册路由

这是我们之前注册路由的方式。如果路由文件多了，会显得特别臃肿。

```js
import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
import home from "../views/home.vue";
import about from "../views/about.vue";
 
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);
 
const routes = [
    {
        path:"/",
        component: home
    },
    {
        path: "/about",
        component: about
    }
]
 
var router =  new VueRouter({
    routes
})

export default router;
```

我们可以这样优化一下。

在路由文件夹下，这里假设是名为`router`文件夹下，创建一个`routeModule.js`文件。

目录结构如：

```
-src
--router
---index.js
---login.module.js
---routeModule.js
```

`routeModule.js`:

```js
const routerList = [];

function importAll(r){
    r.keys().forEach(element => {
        routerList.push(r(element).default);
    });
}

importAll(require.context('./',true,/\.module\.js/));// 这里自定义为.module.js 结尾的文件
export default routerList
```

然后，我们只需要创建对应的路由文件，如：`login.module.js`。

```js
export default {
    path:'/login',
    name:'login',
    component:()=>import('../views/login.vue')
}
```

最后，在路由配置文件`index.js`中引入`routeModule.js`文件即可，

```js
import Vue from "vue";
import VueRouter from "vue-router";
import routerList from './routeModule.js'
 
Vue.use(VueRouter);
  
var router =  new VueRouter({
    routerList
})

export default router;
```

> 注意，require.context是webpack的一个API，所以，需要基于webpack环境才可以使用。

### 权限自定义指令

平常，我们可能会遇到按钮级别或者页面内操作权限的需求，我们可以写一个全局自定义指令。首先，可以在入口文件`main.js`文件中。

```js
import Vue from 'vue'
import App from './App.vue'

function checkArray(key){
    let arr = [1,2,3,4]; // 自定义权限列表
    let index = arr.indexOf(key);
    if(index>-1){
        return true
    }else{
        return false
    }
}

Vue.directive('auth-key',{
  inserted(el,binding){
    let displayKey = binding.value;
    if(displayKey){
      let hasPermission = checkArray(displayKey);
      if(!hasPermission){
        el.parentNode && el.parentNode.removeChild(el);
      }
      else{
        throw new Error('需要key')
      }
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
```

在页面中使用。

```js
<button v-auth-key="8">btn</button> 
```

### render渲染函数

我们首先来看下这样一个例子，你会看到模板上特别多的条件判断。

```js
<template>
    <div>
        <h1 v-if="level === 1"></h1>
        <h2 v-else-if="level === 2"></h2>
        <h3 v-else-if="level === 3"></h3>
        <h4 v-else-if="level === 4"></h4>
    </div>
</template>
```

怎么才能优化呢？接下来，我们可以使用render渲染函数。

```js
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

### 局部引入第三方UI框架优化

我们经常使用UI框架，如果我们使用按需加载的话，需要每次都要注册使用一下。就像下面这样：

```js
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

我们可以这样优化一下，创建一个`uIcompontents.js`文件。

```js
// 每次只需要在这添加组件即可
import { Button, Select } from 'element-ui';

const components = { Button, Select };

function install(Vue){
    Object.keys(components).forEach(key => Vue.use(components[key]))
}

export default { install }
```

然后，在`main.js`文件中引入。

```js
import Vue from 'vue'
import App from './App.vue';

import uIcompontents from "./uIcompontents.js";
Vue.use(uIcompontents);

new Vue({
  el: '#app',
  render: h => h(App)
});
```