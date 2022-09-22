## 4个未听说过的强大JavaScript操作符

#### 1. ?? 操作符

在JavaScript中，??运算符被称为nullish coalescing运算符(零合并操作符)。如果第一个参数不是null/undefined，这个运算符将返回第一个参数，否则，它将返回第二个参数。我们来看一个例子。

```js
null ?? 5 // => 5 
3 ?? 5 // => 3
```

当为一个变量分配默认值时，JavaScript开发人员传统上依赖逻辑OR运算符，比如这样。

```js
var prevMoney = 1
var currMoney = 0
var noAccount = null
var futureMoney = -1
function moneyAmount(money) {  
	return money || `You currently do not own an account in the bank`
}

console.log(moneyAmount(prevMoney)) // => 1
console.log(moneyAmount(currMoney)) // => `You currently do not own an account in the bank`
console.log(moneyAmount(noAccount)) // => `You currently do not own an account in the bank`
console.log(moneyAmount(futureMoney))//  => -1
```

上面我们创建了一个函数moneyAmount，负责返回用户的当前余额。我们使用了||操作符来识别没有账户的用户。然而，当一个用户没有账户时是什么意思呢？更准确的做法是将无账户视为null，而不是0，因为银行账户可以存在无（或负）钱的情况。在上面的例子中，||操作符将0视为一个假值，因此没有登记我们的用户有一个0美元的账户。让我们通过使用nullish coalescing操作符来解决这个问题。

```js
var currMoney = 0
var noAccount = null
function moneyAmount(money) {  
	return money ?? `You currently do not own an account in the bank`
} 
moneyAmount(currMoney) // => 0 
moneyAmount(noAccount) // => `You currently do not own an account in the bank`
```

概括地说，??运算符允许我们分配默认值，同时忽略0和空字符串等错误值。

#### 2. ??=操作符

??=又被称为逻辑空值赋值运算符，与我们之前学习的内容密切相关。我们来看看它们是如何联系在一起的。

```js
var x = null
var y = 5
console.log(x ??= y) // => 5
console.log(x = (x ?? y)) // => 5
```

这个赋值操作符只有在当前值为空或未定义的情况下才会赋一个新的值。上面的例子强调了这个操作符本质上是空值赋值的语法糖。接下来，让我们看看这个操作符与默认参数有何不同。

```js
function gameSettingsWithNullish(options) {  
    options.gameSpeed ??= 1  
    options.gameDiff ??= 'easy'  
    return options
 }

function gameSettingsWithDefaultParams(gameSpeed=1, gameDiff='easy') {  
	return {gameSpeed, gameDiff}  
}
gameSettingsWithNullish({gameSpeed: null, gameDiff: null}) // => { gameSpeed: 1, gameDiff: 'easy' }
gameSettingsWithDefaultParams(null, null) // => { gameSpeed: null, gameDiff: null }
```

上述函数在处理空值时有一个值得注意的区别。默认参数将覆盖默认值与null参数，nullish赋值操作符不会。默认参数和nullish赋值都不会覆盖未定义的值。在这里阅读更多内容。

#### 3. ?. 操作符

可选的链式操作符?. 允许开发人员读取深嵌在对象链中的属性值，而不必显式验证每个引用。当一个引用为空时，表达式停止计算并返回一个未定义的值。让我们来看看一个例子。

```js
var travelPlans  = {  
	destination: 'DC', 
	monday: {    
		location: 'National Mall',    
		budget: 200  
	}
};

const tuesdayPlans = travelPlans.tuesday?.location;
console.log(tuesdayPlans) // => undefined
```

现在，让我们把到目前为止学到的一切都纳入到新的旅行计划中去吧!

```js
function addPlansWhenUndefined(plans, location, budget) {  
	if (plans.tuesday?.location == undefined) {    
		var newPlans = {      
			plans,      
			tuesday: { location: location ?? "Park", budget: budget ?? 200 },    
		};  
	} else {   
		newPlans ??= plans; //will only override if newPlans is undefined    
		console.log("Plans have already been added!");  
	}  
	return newPlans;
}
var newPlans = addPlansWhenUndefined(travelPlans, "Ford Theatre", null);
console.log(newPlans) // => { plans:                  
	//{ destination: 'DC',                  
	// monday: { location: 'National Mall', budget: 200 } },                 
    // tuesday: { location: 'Ford Theatre', budget: 200 } }
newPlans = addPlansWhenUndefined(newPlans, null, null) // logs => Plans have already been added!                                                      // returns => newPlans object
```

我们现在创建了一个函数，将plans添加到一个当前没有嵌套属性 tuesday.location 的对象中。我们还使用了nullish运算符来提供默认值。这个函数将接受'0'这样的虚值作为有效参数。这意味着我们的预算可以被设置为0，而不会出现任何错误。

#### 4. ? 操作符

三元运算符 ? : 需要三个操作数，一个条件为真时要执行的表达式，以及一个条件为假时要执行的表达式。让我们来看看它的操作。

```js
function checkCharge(charge) {     
	return (charge > 0) ? 'Ready for use' : 'Needs to charge' 
}
console.log(checkCharge(20)) // => 'Ready for use'
console.log(checkCharge(0)) // => 'Needs to charge'
```

如果你在JavaScript上花了一些时间，你可能已经看到了三元操作符。然而，你知道三元运算符可以用于变量赋值吗？

```js
var budget = 0
var transportion = (budget > 0) ? 'Train' : 'Walking' 
console.log(transportion) // => 'Walking'
```

我们甚至可以用它来复制nullish赋值的行为。

```js
var x = 6
var x = (x !== null || x !== undefined) ? x : 3
console.log(x) // => 6
```

现在让我们通过创建一个函数来概括这种行为!

```js
function nullishAssignment(x,y) {  
	return (x == null || x == undefined) ? y : x
}
var x = nullishAssignment(null, 8) // => 8
var y = nullishAssignment(4,8) // => 4
```

在收尾之前，让我们使用三元运算符重构前面例子中的函数。

```js
function addPlansWhenUndefined(plans, location, budget) {  
	var newPlans =    
		plans.tuesday?.location == undefined      
		? {          
			plans,          
			tuesday: { location: location ?? "Park", budget: budget ?? 200 },        
		}      
		: console.log("Plans have already been added!"); 
     newPlans ??= plans;  
     return newPlans;
   }
```