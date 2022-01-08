
# Master Javascript

[Fork,StarThe GITHub link](https://github.com/deenjohn/FullStack-Learning-Resources/edit/master/Javascript.md)

### Fundamentals Javascript Reading:

http://dmitrysoshnikov.com/category/ecmascript/

- **MDN**
https://developer.mozilla.org/bm/docs/Web/JavaScript)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

- **Expressions and operators**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

http://exploringjs.com/impatient-js/ch_syntax.html#statement-vs.expression
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md
https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression


- **Values & Types**

http://speakingjs.com/es5/ch08.html
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#values--types
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md

Primitive Values Versus Objects
http://speakingjs.com/es5/ch01.html#basic_prim_vs_obj

Manually Converting to Boolean
There are three ways any value can be converted to a boolean:


```javascript
1)Boolean(value)

(Invoked as a function, not as a constructor)

2)value ? true : false

3)!!value
https://stackoverflow.com/questions/10467475/double-negation-in-javascript-what-is-the-purpose
var x = "somevalue"
var isNotEmpty = !!x.length;
Let's break it to pieces:

x.length   // 9
!x.length  // false
!!x.length // true
So it's used convert a "truethy" \"falsy" value to a boolean.

```

A single “not” converts to negated boolean; use twice for the nonnegated conversion.

```javascript
var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;

!!a;	// true
!!b;	// true
!!c;	// true

!!d;	// false
!!e;	// false
!!f;	// false
!!g;	// false
```

- **Truthy values**
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
http://speakingjs.com/es5/ch01.html#basic_prim_vs_obj

- **How to check for “undefined” in JavaScript?**

https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript)

https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property)


- **JavaScript data types and data structures**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


- **What is the difference between parseInt() and Number()?**
https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number

Well, they are semantically different, the Number constructor called 
as a function performs type conversion and parseInt performs parsing.

But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.

That’s what parseInt and parseFloat are for.

They “read” a number from a string until they can’t. In case of an error, the gathered number is returned.
The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

```javascript
 alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

- **Master the JavaScript Interview: What is Function Composition?**
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0#.i84zm53fb)

- **How do you check that a number is NaN in JavaScript?**
https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript

http://speakingjs.com/es5/ch11.html#isNaN  best

https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascripthttps://stackoverflow.com/questions/825402/why-does-isnan-equal-falsehttps://stackoverflow.com/questions/8965364/comparing-nan-values-for-equality-in-javascript
https://stackoverflow.com/questions/6736476/how-to-turn-nan-from-parseint-into-0-for-an-empty-string
https://stackoverflow.com/questions/34261938/what-is-the-difference-between-nan-nan-and-nan-nan
https://stackoverflow.com/questions/20534887/break-on-nan-in-javascript
https://stackoverflow.com/questions/26962341/number-isnan-doesnt-exist-in-ie
https://stackoverflow.com/questions/15176076/understanding-underscores-implementation-of-isnan

I would recommend: typeof value === 'number' && !isNaN(value). Because typeof NaN === 'number'.

NaN is the only value that is not equal to itself:

```javascript

> NaN === NaN
false

```
So we can use If you want to check whether a value is NaN, you have to use the global function isNaN():


```javascript
> isNaN(NaN)
true
> isNaN(33)
false


```

But :
 isNaN does not work properly with nonnumbers, because it first converts those to numbers. That conversion can produce NaN and then the function incorrectly returns true:


```javascript

> isNaN('xyz')
true


```

Thus, it is best to combine isNaN with a type check:


```javascript
function myIsNaN(value) {
    return typeof value === 'number' && isNaN(value);
}


```

Alternatively, you can check whether the value is unequal to itself (as NaN is the only value with this trait). But that is less self-explanatory:


```javascript
function myIsNaN(value) {
    return value !== value;
}

```


- **Is Number.IsNaN() more broken than isNaN()**
https://stackoverflow.com/questions/25176459/is-number-isnan-more-broken-than-isnan

isNaN() and Number.isNaN() both test if a value is (or, in the case of isNaN(), can be converted to a number-type value that represents) the NaN value. In other words, "NaN" does not simply mean "this value is not a number", it specifically means "this value is a numeric Not-a-Number value according to IEEE-754".

The reason all your tests above return false is because all of the given values can be converted to a numeric value that is not NaN:

```javascript
Number('')    // 0
Number('   ') // 0
Number(true)  // 1
Number(false) // 0
Number([0])   // 0
```
The reason isNaN() is "broken" is because, ostensibly, type conversions aren't supposed to happen when testing values. That is the issue Number.isNaN() is designed to address. In particular,  Number.isNaN() will only attempt to compare a value to NaN if the value is a number-type value. Any other type will return false, even if they are literally "not a number", because the type of the value NaN is number. See the respective MDN docs for isNaN() and Number.isNaN().

If you simply want to determine whether or not a value is of the number type, even if that value is NaN, use typeof instead:

typeof 'RAWRRR' === 'number' // false


- **null vs undefined**

https://dmitripavlutin.com/7-tips-to-handle-undefined-in-javascript/
https://basarat.gitbooks.io/typescript/docs/javascript/null-undefined.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using

Something hasn't been initialized : undefined.
Something is currently unavailable: null.

- **Why is null an object and what's the difference between null and undefined?**
https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined)
https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript?noredirect=1&lq=1)
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)
https://stackoverflow.com/questions/2559318/how-to-check-for-an-undefined-or-null-variable-in-javascript
https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
https://stackoverflow.com/questions/2647867/how-to-determine-if-variable-is-undefined-or-null
https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property?noredirect=1&lq=1
https://stackoverflow.com/questions/4186906/check-if-object-exists-in-javascript
https://stackoverflow.com/questions/16672743/javascript-null-check
https://stackoverflow.com/questions/5716976/javascript-undefined-vs-void-0
https://stackoverflow.com/questions/385960/javascript-identify-whether-a-property-is-defined-and-set-to-undefined-or-u

- **Test null**
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)

If you want to test for a null value using its type, you need a compound condition:
```javascript
var a = null;

(!a && typeof a === "object"); // true

When you’re trying to identify null, use triple equals so that you can correctly identify the type.
ex : console.log(undefined == null); // true
console.log(undefined === null); // false
```
null is the only primitive value that is "falsy" (aka false-like; see Chapter 4) but that also returns "object" from the typeof check.

Pitfall: typeof null
Unfortunately, typeof null is 'object'. This is considered a bug (null is not a member of the internal type Object), but it can’t be fixed, because doing so would break existing code. You thus have to be wary of null. For example, the following function checks whether value is an object:

function isObject(value) {
    return (value !== null
       && (typeof value === 'object'
           || typeof value === 'function'));



- **Use of null in prototype**
Use null Prototypes to Prevent Prototype Pollution

```javascript

function C() { }
C.prototype = null;
But instantiating this constructor still results in instances of Object:
var o = new C();
Object.getPrototypeOf(o) === null; // false
Object.getPrototypeOf(o) === Object.prototype; // true

```
- **null vs zero**
https://javascript.info/comparison#strange-result-null-vs-0

- **ToBoolean**
https://javascript.info/type-conversions#toboolean

- **parseInt and parseFloat**

Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
alert( +"100px" ); // NaN

There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

 alert( parseInt('a123') ); // NaN, the first symbol stops the process
 
- **Binary Logical Operators**
http://speakingjs.com/es5/ch01.html#basic_prim_vs_obj
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#operators--and-

And (&&)
If the first operand is falsy, return it. Otherwise, return the second operand:

```javascript
> NaN && 'abc'
NaN
> 123 && 'abc'
'abc'
Or (||)
If the first operand is truthy, return it. Otherwise, return the second operand:

> 'abc' || 123
'abc'
> '' || 123
123

var a = 42;
var b = "abc";
var c = null;

a || b;		// 42
a && b;		// "abc"

c || b;		// "abc"
c && b;		// null

a || b;
// roughly equivalent to:
a ? a : b;

a && b;
// roughly equivalent to:
a ? b : a;

```
- **operators**
https://javascript.info/operators


https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md#testing-for-integers
42.3 % 1 is in decimal but 42 % 1 is 0

```javascript
Number.isInteger( 42 );		// true
Number.isInteger( 42.000 );	// true
Number.isInteger( 42.3 );	// false

this behaviour can be use in :  
To polyfill Number.isInteger(..) for pre-ES6:

if (!Number.isInteger) {
	Number.isInteger = function(num) {
		return typeof num == "number" && num % 1 == 0;
	};
}

```
- **String concatenation, binary + **
https://javascript.info/operators#string-concatenation-binary

- **Chapter 2. Variable Scope**

from book : Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript


This chapter taught me some more hidden things about closures and scopes.

https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch02.html#ch02lev1sec4)


https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
https://stackoverflow.com/questions/592396/what-is-the-purpose-of-a-self-executing-function-in-javascript
https://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript
https://stackoverflow.com/questions/1451009/javascript-infamous-loop-issue


## in vs for ...in

The for-in statement by itself is not a "bad practice", however it can be mis-used, 
for example, to iterate over arrays or array-like objects.

The purpose of the for-in statement is to enumerate over object properties. 
This statement will go up in the prototype chain, also enumerating over inherited properties, a thing that sometimes is not desired.

for..in isn't guaranteed to preserve element ordering

https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)

https://www.w3schools.com/jsref/jsref_forin.asp
https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea

http://adripofjavascript.com/blog/drips/the-problem-with-for-in-and-javascript-arrays.html


## Coercion 

- **Equality comparisons and sameness**

https://dmitripavlutin.com/the-legend-of-javascript-equality-operator/


Coercion 

http://speakingjs.com/es5/ch09.html
http://speakingjs.com/es5/ch10.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
http://ecma-international.org/ecma-262/5.1/#sec-11.9.3)
http://getify.github.io/coercions-grid/)

http://speakingjs.com/es5/ch09.html
Use case: working with numbers in strings
If you are not sure whether a value x is a number or a number-as-a-string, you can use checks such as the following:

```javascript

if (x == 123) ...

```
The preceding checks whether x is either 123 or '123'. Again, this is very compact, and again, it is better to be explicit:

```javascript
if (Number(x) === 123)

```

Use case: comparing wrapper instances with primitives
Lenient equals lets you compare primitives with wrapped primitives:

```javascript

> 'abc' == new String('abc')
true
```

There are three reasons against this approach. First, lenient equality does not work between wrapped primitives:

```javascript
> new String('abc') == new String('abc')
false
Second, you should avoid wrappers anyway. 
Third, if you do use them, it is better to be explicit:

if (wrapped.valueOf() === 'abc') 

```

https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#comparing-strings-to-numbers

```javascript
var a = "42";

// bad (will fail!):
if (a == true) {
	// ..
}

// also bad (will fail!):
if (a === true) {
	// ..
}

// good enough (works implicitly):
if (a) {
	// ..
}

// better (works explicitly):
if (!!a) {
	// ..
}

// also great (works explicitly):
if (Boolean( a )) {
	// ..
}

```



***Object.is***
https://javascript.info/number


***How is this experssion evaluated ? x < y****
The Algorithm (http://speakingjs.com/es5/ch08.html#toprimitive)
https://javascript.info/object-toprimitive

You evaluate a comparison:

```javascript
x < y
```
by taking the following steps:

Ensure that both operands are primitives. Objects obj are converted to primitives via the internal operation ToPrimitive(obj, Number) (refer to Algorithm: ToPrimitive()—Converting a Value to a Primitive), which calls obj.valueOf() and, possibly, obj.toString() to do so.
If both operands are strings, then compare them by lexicographically comparing the 16-bit code units (see Chapter 24) that represent the JavaScript characters of the string.
Otherwise, convert both operands to numbers and compare them numerically.
The other ordering operators are handled similarly


- **Chapter 4: Coercion**
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)
https://stackoverflow.com/questions/154059/how-to-check-empty-undefined-null-string-in-javascript

- **Item 3: Beware of Implicit Coercions**
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch01.html#ch01lev1sec3)

null becomes 0 if coerced to a number:
> Number(null)
0
> 5 + null
5


> Number(undefined)
NaN
> 5 + undefined
NaN

> 3 + ' times'
'3 times'

> String(null)
'null'
> String(123.45)
'123.45'
> String(false)
'false'


> Number({})
NaN ..why ?Algorithm: ToPrimitive()—Converting a Value to a Primitive. http://speakingjs.com/es5/ch08.html


### typeof vs instanceof vs {}.toString
https://javascript.info/instanceof
https://stackoverflow.com/questions/899574/which-is-best-to-use-typeof-or-instanceof)


****typeof : It returns a string describing the “type” of value.****


```javascript
> typeof true
'boolean'
> typeof 'abc'
'string'
> typeof {} // empty object literal
'object'
> typeof [] // empty array literal
'object'

typeof undefined
'undefined'

typeof null
'object'

var a = null;

(!a && typeof a === "object"); // true
null is the only primitive value that is "falsy" 
but that also returns "object" from the typeof check.

```

practical use :
in Jquery https://code.jquery.com/jquery-3.3.1.js

```javascript
function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

```

- **instanceof**

http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/

https://javascript.info/instanceof

instanceof operator essentially checks whether anything from left-hand object’s prototype chain is
the same object as what’s referenced by prototype property of right-hand object.

var arr = [];
arr instanceof Array; // true
This statement returns `true` because Array.prototype (being a prototype property of a right-hand object)
references the same object as an internal [[Prototype]] of left-hand object ([[Prototype]] 
is “visible” via arr.__proto__ in clients that have __proto__ extension). 
An alternative constructor check, which I mentioned earlier, would usually look like:


var arr = [];
arr.constructor == Array; // true


The instanceof operator tests the presence of constructor.prototype i.e Array.prototype in object's prototype chain.

a instanceof Foo; // true

The instanceof operator takes a plain object as its left-hand operand and a function as its right-hand operand. 
The question instanceof answers is: in the entire [[Prototype]] i.e __proto__ chain of a, does the object arbitrarily pointed to by Foo.prototype ever appear?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

http://speakingjs.com/es5/ch01.html#basic_prim_vs_obj
value instanceof Constr
It returns true if value is an object that has been created by the constructor Constr (see Constructors: Factories for Objects). Here are some examples:


```javascript
> var b = new Bar();  // object created by constructor Bar
> b instanceof Bar
true

> {} instanceof Object
true
> [] instanceof Array
true
> [] instanceof Object  // Array is a subconstructor of Object
true

> undefined instanceof Object
false
> null instanceof Object
false

```

**Problem with instanceof**

case1 :

```javascript
function Rabbit() {}
let rabbit = new Rabbit();

// changed the prototype
Rabbit.prototype = {};
rabbit instanceof Rabbit //false
```
That’s one of the reasons to avoid changing prototype. Just to keep safe.

case 2 :
The problems arise when it comes to scripting in multi-frame DOM environments. In a nutshell, Array objects created within one iframe do not share [[Prototype]]’s with arrays created within another iframe. Their constructors are different objects and so both instanceof and constructor checks fail:


```javascript
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Boom!
arr instanceof Array; // false

// Boom!
arr.constructor === Array; // false


```

- **{}.toString**
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md#internal-class

Object toString for the type
// copy toString method into a variable for convenience

```javascript

let objectToString = Object.prototype.toString;

// what type is this?
let arr = [];

alert( objectToString.call(arr) ); // [object Array]

Object.prototype.toString.call( [1,2,3] );
Object.prototype.toString.call( null );			// "[object Null]"
Object.prototype.toString.call( undefined );	// "[object Undefined]"

```
For a number, it will be [object Number]
For a boolean, it will be [object Boolean]
For null: [object Null]
For undefined: [object Undefined]
For arrays: [object Array]
…etc (customizable).

As we can see, {}.toString is technically a “more advanced” typeof.

## functions

#### IIFE

- **Using IIFEs in JavaScript to control variable scope**

http://speakingjs.com/es5/ch01.html#basic_prim_vs_obj
http://speakingjs.com/es5/ch16.html#iife

```javascript
function f() {
    if (condition) {
        var tmp = ...;
        ...
    }
    // tmp still exists here
    // => not what we want
}

```
If you want to introduce a new scope for the then block, you can define a function and immediately invoke it. 
This is a workaround, a simulation of block scoping:

```javascript
function f() {
    if (condition) {
        (function () {  // open block
            var tmp = ...;
            ...
        }());  // close block
    }
}
```

IIFE Variation: An IIFE with Parameters
You can use parameters to define variables for the inside of the IIFE:

```javascript
var x = 23;
(function (twice) {
    console.log(twice);
}(x * 2));
This is similar to:

var x = 23;
(function () {
    var twice = x * 2;
    console.log(twice);
}());
```

IIFE use case: inadvertent sharing via closures
Closures keep their connections to outer variables, which is sometimes not what you want:

```javascript
var result = [];
for (var i=0; i < 5; i++) {
    result.push(function () { return i });  // (1)
}
console.log(result[1]()); // 5 (not 1)
console.log(result[3]()); // 5 (not 3)
The value returned in line (1) is always the current value of i, not the value it had when the function was created. After the loop is finished, i has the value 5, which is why all functions in the array return that value. If you want the function in line (1) to receive a snapshot of the current value of i, you can use an IIFE:

for (var i=0; i < 5; i++) {
    (function () {
        var i2 = i; // copy current i
        result.push(function () { return i2 });
    }());
}

```
How can you correct this function ?


```javascript

var myAlerts = [];

for (var i = 0; i < 5; i++) {
    myAlerts.push(
        function inner() {
            alert(i);
        }
    );
}

myAlerts[0](); // 5
myAlerts[1](); // 5
myAlerts[2](); // 5
myAlerts[3](); // 5
myAlerts[4](); // 5


Answer :

var myAlerts = [];

for (var i = 0; i < 5; i++) {
    myAlerts.push(
       (function iife(){
         var j = i ;
         return function inner() {
            console.log(j);
          }
       })()
        
    );
}
myAlerts[1]()

```

https://content.myemma.com/emmatech/using-iifes-in-javascript-to-control-variable-scope)
https://stackoverflow.com/questions/2421911/what-is-the-purpose-of-wrapping-whole-javascript-files-in-anonymous-functions-li
https://stackoverflow.com/questions/13341698/javascript-plus-sign-in-front-of-function-name
https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
https://stackoverflow.com/questions/592396/what-is-the-purpose-of-a-self-executing-function-in-javascript


 - **function arguments object**
https://github.com/deenjohn/Javascript-revision/blob/master/General/3-%20function%20arguments%20object%20.md)

http://speakingjs.com/es5/ch01.html#basic_prim_vs_obj
 - ****Too Many or Too Few Arguments****
 ```javascript
function f(x, y) {
    console.log(x, y);
    return toArray(arguments);
}
Additional parameters will be ignored (except by arguments):

> f('a', 'b', 'c')
a b
[ 'a', 'b', 'c' ]

```

 - ****Optional Parameters****
The following is a common pattern for assigning default values to parameters:

```javascript
function pair(x, y) {
    x = x || 0;  // (1)
    y = y || 0;
    return [ x, y ];
}
In line (1), the || operator returns x if it is truthy (not null, undefined, etc.). Otherwise, it returns the second operand:

> pair()
[ 0, 0 ]
> pair(3)
[ 3, 0 ]
> pair(3, 5)
[ 3, 5 ]
```

 - **Function length vs arguments**
https://github.com/deenjohn/Javascript-revision/blob/master/General/Function%20length%20vs%20arguments)
Enforcing an Arity
If you want to enforce an arity (a specific number of parameters), you can check arguments.length:

```javascript
function pair(x, y) {
    if (arguments.length !== 2) {
        throw new Error('Need exactly 2 arguments');
    }
    ...
}
```

-**Functions Inside a Method**

```javascript

var jane = {
    name: 'Jane',
    friends: [ 'Tarzan', 'Cheeta' ],
    logHiToFriends: function () {
        'use strict';
        this.friends.forEach(function (friend) {
            // `this` is undefined here
            console.log(this.name+' says hi to '+friend);
        });
    }
}
Calling logHiToFriends produces an error: why ?

> jane.logHiToFriends()
TypeError: Cannot read property 'name' of undefined

Ans :
 jane.logHiToFriends() runs like 
 
 var callback = function (friend) {
            // `this` is undefined here
            console.log(this.name+' says hi to '+friend);
        }
	
 var jane = {
    name: 'Jane',
    friends: [ 'Tarzan', 'Cheeta' ],
    logHiToFriends: function () {
        'use strict';
        this.friends.forEach(callback);
    }
}

as callback funs like callback() i.e without any context , this points to global object i.e window

```

Let’s look at two ways of fixing this. First, we could store this in a different variable:

```javascript

logHiToFriends: function () {
    'use strict';
    var that = this;
    this.friends.forEach(function (friend) {
        console.log(that.name+' says hi to '+friend);
    });
}
Or, forEach has a second parameter that allows you to provide a value for this:

logHiToFriends: function () {
    'use strict';
    this.friends.forEach(function (friend) {
        console.log(this.name+' says hi to '+friend);
    }, this);
}

```

### Call,Apply,Bind

https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

- **My Notes**
https://github.com/deenjohn/Javascript-revision/blob/master/General/1-%20bind%20call%20apply%20-Borrowing%20method.md)


### Call,Apply,Bind - Learn even more

- **http://davidshariff.com/blog/borrowing-methods-in-javascript/**

var score = Function.prototype.call.bind(scoreCalculator.getScore);  //binding call to scoreCalculator.getScore
score(player1);

is doing this

```javascript
scoreCalculator.getScore.call(player1)

```

and that you can borrowing the `call` method from anywhere, in this case from the Function.prototype, but it doesn’t matter where and binding it to the getScore function.

- **Use call to Call Methods with a Custom Receiver**
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec3)

- **Use apply to Call Functions with Different Numbers of Arguments**
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec4)

- **Use bind to Extract Methods with a Fixed Receiver**
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec9)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

- **How does Function.prototype.call.bind work?**
https://stackoverflow.com/questions/11121586/how-does-function-prototype-call-bind-work/50874883#50874883

Call

use of call :

```javascript
inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	}

```

```javascript
var elems = {
   length: 0,
   add: function(elem){
       Array.prototype.push.call(this, elem);
   },
   gather: function(id){
       this.add(document.getElementById(id));
   }
 };

 elems.gather("first");

 console.log(elems.length == 1 && elems[0].nodeType,
 "Verify that we have an element in our stash");

 elems.gather("second");
 
 console.log(elems.length == 2 && elems[1].nodeType,
 "Verify the other insertion"); 



```

Apply

```javascript

 function smallest(array){
     return Math.min.apply(Math, array);
 }
 function largest(array){
     return Math.max.apply(Math, array);
 }
 
 assert(smallest([0, 1, 2, 3]) == 0,
 "Located the smallest value.");
 
 assert(largest([0, 1, 2, 3]) == 3,
 "Located the largest value."); 
 
```

Bind

Manually simulating an apply() for constructors
We can simulate apply() in two steps.

Step 1
Pass the arguments to Date via a method call (they are not in an array—yet):

```javascript
     new (Date.bind(null, 2011, 11, 24))
     
     or 
     new (Date.bind.call(Date,null, 2011, 11, 24))
     
```

The preceding code uses bind() to create a constructor without parameters and invokes it via new.

Step 2
Use apply() to hand an array to bind(). Because bind() is a method call, we can use apply():

```javascript
new (Function.prototype.bind.apply(
         Date, [null, 2011, 11, 24]))
	
```
	 
The preceding array contains null, followed by the elements of arr. We can use concat() to create it by prepending null to arr:


```javascript
var arr = [2011, 11, 24];
new (Function.prototype.bind.apply(
         Date, [null].concat(arr)))
```

```javascript

'use strict';
var jane = {
    name: 'Jane',

    describe: function () {
        return 'Person named '+this.name;
    }
};

```

We want to extract the method describe from jane, put it into a variable func, and call it. However, that doesn’t work:


```javascript
> var func = jane.describe;
> func()
TypeError: Cannot read property 'name' of undefined
The solution is to use the method bind() that all functions have. It creates a new function whose this always has the given value:

> var func2 = jane.describe.bind(jane);
> func2()
'Person named Jane'


```

- **How to delete a function**

```javascript
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
    this.print = null ;
    delete this.print ;
  }).call(animals[i], i);
}
```

- **function composition**
https://www.youtube.com/watch?v=mth5WpEc4Qs


- **where instanceof fails**

If you have two arbitrary objects, say a and b, and want to find out if the objects are related to each other through a [[Prototype]] chain, instanceof alone can't help.

much cleaner, approach to [[Prototype]] reflection is:

```javascript

      function Foo() {  }

      Foo.prototype = { 
         c :2

       }; // create a new prototype object

      var a1 = new Foo();

      Foo.prototype.isPrototypeOf( a ); // true

```
Notice that in this case, we don't really care about (or even need) Foo, we just need an object (in our case, arbitrarily labeled Foo.prototype) to test against another object. The question isPrototypeOf(..) answers is: in the entire [[Prototype]] chain of a, does Foo.prototype ever appear?

https://github.com/getify/You-Dont-Know-JS/blob/6efd08c9db8e9808a9046204c719c99cb4702c18/this%20%26%20object%20prototypes/ch5.md#L487)

## let,const arrow function
https://github.com/nzakas/understandinges6/blob/master/manuscript/01-Block-Bindings.md
https://www.w3schools.com/js/js_arrow_function.asp

## json.stringify

https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)

### Strict

http://speakingjs.com/es5/ch07.html#strict_mode
https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it)



## This in Object


Chapter 1 :https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md
Chapter 2 : https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md

http://davidshariff.com/blog/javascript-this-keyword/

Effective Javascript : Chapter 4

The scope of this is always determined by its nearest enclosing
function.

```javascript

function CSVReader(separators) {
    this.separators = separators || [","];
    this.regexp =
    new RegExp(this.separators.map(function(sep) {
      return "\\" + sep[0];
       }).join("|"));
}


CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        console.log(this)
       return line.split(this.regexp); // wrong this!
     });
};
var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");

```

[
  [
    "a,b,c"
  ],
  [
    "d,e,f"
  ]
]

```javascript

function CSVReader(separators) {
    this.separators = separators || [","];
    this.regexp =
    new RegExp(this.separators.map(function(sep) {
      return "\\" + sep[0];
       }).join("|"));
}


CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        console.log(this)
       return line.split(this.regexp); // wrong this!
     },this);
};
var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");

```
[
  [
    "a",
    "b",
    "c"
  ],
  [
    "d",
    "e",
    "f"
  ]
]

- **Borrowing Methods in JavaScript**
http://davidshariff.com/blog/borrowing-methods-in-javascript/#first-article)

- **What is the Execution Context & Stack in JavaScript?**
http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/#first-article)

- **Identifier Resolution, Execution Contexts and scope chains**
http://jibbering.com/faq/notes/closures/#clIRExSc)

### Closures

- **Identifier Resolution and Closures in the JavaScript Scope Chain**
http://davidshariff.com/blog/javascript-scope-chain-and-closures/)

Note : 
 scope chain only works for fnctions inside functions and not functions inside object
 
```javascript
      var StartStopCounter = {
          counter : 0,
          start : function(){
                StartStopCounter.stopCounter = setInterval(function(){
                    console.log(StartStopCounter.counter);
                    //que : why only counter won't work ?
                    StartStopCounter.counter=StartStopCounter.counter + 1 ;
                },1000);

          },
          stop : function(){
              clearInterval(StartStopCounter.stopCounter);

          }
      }


```

- **You Don't Know JS: Scope & Closures**

https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#scope
https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

http://javascript.info/closure

- **https://www.amazon.com/Functional-JavaScript-Introducing-Programming-Underscore-js-ebook/dp/B00D624AQO**

Sometimes encapsulation is used to restrict the visibility of
certain elements, and this act is known as data hiding. JavaScript’s object system does
not provide a way to hide data directly, so data is hidden using something called closures.

By using functional techniques involving closures, you can achieve data hiding that is as effective 
as the same capability offered by most object-oriented languages

https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript

- **Practical use of closure examples**

ex1 : Private variables

```javascript

      function Ninja() {                                            //#1

        var feints = 0;                                             //#2

        this.getFeints = function(){                                //#3
          return feints;                                            //#3
        };                                                          //#3

        this.feint = function(){                                    //#4
          feints++;                                                 //#4
        };                                                          //#4
      }

      var ninja = new Ninja();                                      //#5

      ninja.feint();                                                //#6

      assert(ninja.feints === undefined,                            //#7
          "And the private data is inaccessible to us." );          //#7

      assert(ninja.getFeints() == 1,                                //#8
             "We're able to access the internal feint count." );    //#8

```
ex2 :

```javascript

function animateIt(elementId) {

    var elem = document.getElementById(elementId);              //#2
    var tick = 0;                                               //#3

    var timer = setInterval(function(){                         //#4
      if (tick < 100) {
        elem.style.left = elem.style.top = tick + "px";
        tick++;
      }
      else {
        clearInterval(timer);
        assert(tick == 100,                                      //#5
               "Tick accessed via a closure.");
        assert(elem,
               "Element also accessed via a closure.");
        assert(timer,
               "Timer reference also obtained via a closure." );
      }
    }, 10);

  }

  animateIt('box')

```

ex 3 :

const createStore = (reducer) => {
     let state;
     let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({}); // dummy dispatch

  return { getState, dispatch, subscribe };

};


Closure use Example : Overloading functions

```javascript

 var ninjas = {
    values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
 };
 
function addMethod(object, name, fn) {
 var old = object[name];
 object[name] = function(){
   if (fn.length == arguments.length)
      return fn.apply(this, arguments)
   else if (typeof old == 'function')
      return old.apply(this, arguments);
  };
}

 addMethod(ninjas, "find", function(){
          return this.values;
 });
 
 addMethod(ninjas, "find", function(name){
      var ret = [];
      for (var i = 0; i < this.values.length; i++)
      if (this.values[i].indexOf(name) == 0)
      ret.push(this.values[i]);
      return ret;
 });
 
 addMethod(ninjas, "find", function(first, last){
      var ret = [];
      for (var i = 0; i < this.values.length; i++)
      if (this.values[i] == (first + " " + last))
      ret.push(this.values[i]);
      return ret;
 });
 
 assert(ninjas.find().length == 3,
 "Found all ninjas");
 assert(ninjas.find("Sam").length == 1,
 "Found ninja by first name");
 assert(ninjas.find("Dean", "Edwards").length == 1,
 "Found ninja by first and last name");
 assert(ninjas.find("Alex", "Russell", "Jr") == 
 ,
 "Found nothing");

```
example 2 :
CREATING A SELF-CONTAINED SCOPE

Consider the following snippet:

```javascript

(function(){
 var numClicks = 0;
 document.addEventListener("click", function(){
 alert( ++numClicks );
 }, false);
})();

/*
Because the immediate function is executed immediately (hence its name), the click
handler is also bound right away. The important thing to note is that a closure is created
for the handler that includes numClicks, allowing the numClicks variable to persist
along with the handler, and be referenceable by the handler but nowhere else.
 This is one of the most common ways in which immediate functions are used: as
simple, self-contained wrappers for functionality. The variables needed for the unit of
functionality are trapped in the closure, but they aren’t visible anywhere else.
*/
```

## object

http://speakingjs.com/es5/ch17.html
https://stackoverflow.com/questions/tagged/javascript+object

- **MDN : Object**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- **What is the most efficient way to deep clone an object in JavaScript?**
https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript?rq=1)

Copying an Object
To create an identical copy of an object, you need to get two things right:

The copy must have the same prototype (see Layer 2: The Prototype Relationship Between Objects) as the original.
The copy must have the same properties, with the same attributes as the original
The following function performs such a copy:

function copyObject(orig) {
    // 1. copy has same prototype as orig
    var copy = Object.create(Object.getPrototypeOf(orig));

    // 2. copy has all of orig’s properties
    copyOwnPropertiesFrom(copy, orig);

    return copy;
}
The properties are copied from orig to copy via this function:

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source)  // (1)
    .forEach(function(propKey) {  // (2)
        var desc = Object.getOwnPropertyDescriptor(source, propKey); // (3)
        Object.defineProperty(target, propKey, desc);  // (4)
    });
    return target;
};
These are the steps involved:

Get an array with the keys of all own properties of source.
Iterate over those keys.
Retrieve a property descriptor.
Use that property descriptor to create an own property in target


- **Length of a JavaScript object**
https://stackoverflow.com/questions/5223/length-of-a-javascript-object?rq=1)

- **How can I merge properties of two JavaScript objects dynamically?**
https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically?rq=1)

- **Detecting an undefined object property**
https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property?rq=1)

- **How do I remove a property from a JavaScript object?**
https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object?rq=1)

- **How do I remove a property from a JavaScript object?**
https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object)

- **Check if object is array?**
https://stackoverflow.com/questions/4775722/check-if-object-is-array)

- **How do I check if an object has a property in JavaScript?**
https://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-property-in-javascript)

- **How do I check if an object has a key in JavaScript?**
https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript?noredirect=1&lq=1)

https://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript)

- **Checking if a key exists in a JavaScript object?**
https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object)

- **How do I remove a property from a JavaScript object?**
https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object?noredirect=1&lq=1)

If you delete the property, its key is gone, too:

> delete obj.foo
true
> Object.keys(obj)
[ 'bar' ]
delete affects only the direct (“own,” noninherited) properties of an object. Its prototypes are not touched 


- **If you merely set a property to undefined, the property still exists and the object still contains its key**

> var obj = { foo: 'a', bar: 'b' };

> obj.foo = undefined;
> Object.keys(obj)
[ 'foo', 'bar' ]

- **Parse JSON in JavaScript?**
https://stackoverflow.com/questions/4935632/parse-json-in-javascript)

- **Detecting an undefined object property**
https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property?rq=1)

- **Object comparison in JavaScript**
https://stackoverflow.com/questions/1068834/object-comparison-in-javascript)

- **Deleting Objects in JavaScript**
https://stackoverflow.com/questions/742623/deleting-objects-in-javascript)

- **How to get the size of a JavaScript object?**
https://stackoverflow.com/questions/1248302/how-to-get-the-size-of-a-javascript-object)

- **Object property shadowing**

https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)

```javascript

      'use strict';

      const anotherObject = {};

      Object.defineProperty(anotherObject, 'a', {
        value: 2,
        writable: false
      });

      var myObject = Object.create( anotherObject );

      myObject.a = 3;

```

https://medium.freecodecamp.org/lets-explore-objects-in-javascript-4a4ad76af798


- **Object to primitive conversion**
http://javascript.info/object-toprimitive

- **Prototypes**

```javascript

function SuperType(name){
 this.name = name;
 this.colors = ["red","green"];
}

SuperType.prototype.sayName = function(){
 console.log(this.name);
};

function SubType(name, age){

 //inherit properties
 SuperType.call(this, name);

 this.age = age;
}

//inherit methods
SubType.prototype = new SuperType();  // problem as this creates color property on prototype 

SubType.prototype.sayAge = function(){
 console.log(this.age);
};

var instance1 = new SubType("Nicholas", 29);


problems with this :

console.log(instance1) > color property on prototype 

SubType {name: "Nicholas", colors: Array(2), age: 29}
	age: 29
	colors: (2) ["red", "green"]
	name: "Nicholas"
	__proto__: SuperType
		colors: (2) ["red", "green"]
		name: undefined
		sayAge: ƒ ()
		__proto__: Object

```

https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)
https://stackoverflow.com/questions/310870/use-of-prototype-vs-this-in-javascript
https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch6.md
https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript
https://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction
https://stackoverflow.com/questions/4508313/advantages-of-using-prototype-vs-defining-methods-straight-in-the-constructor
https://stackoverflow.com/questions/10430279/extending-an-object-in-javascript
https://stackoverflow.com/questions/3781373/javascript-what-are-extend-and-prototype-used-for
https://stackoverflow.com/questions/14034180/why-is-extending-native-objects-a-bad-practice
https://stackoverflow.com/questions/4740806/native-way-to-merge-objects-in-javascript
https://stackoverflow.com/questions/8859828/javascript-what-dangers-are-in-extending-array-prototype

Use hasOwnProperty to Protect Against Prototype Pollution

```javascript
var dict = {};
"alice" in dict; // false
"bob" in dict; // false
"chris" in dict; // false
"toString" in dict; // true
"valueOf" in dict; // true
Luckily, Object.prototype provides the hasOwnProperty method, which
is just the tool we need to avoid prototype pollution when testing for
dictionary entries:
dict.hasOwnProperty("alice"); // false
dict.hasOwnProperty("toString"); // false
dict.hasOwnProperty("valueOf"); // false

```

***Getting all properties***

https://javascript.info/getting-all-properties
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

The Object.values() method returns an array of a given object's own enumerable property values, 
in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates
properties in the prototype chain as well).

Object.keys(obj) / Object.values(obj) / Object.entries(obj) 
These methods only list enumerable properties, and those that have strings as keys.
1)Object.keys(Object.prototype)

[]
The Object.keys() method returns an array of a given object's own property names, 
in the same order as we get with a normal loop.

2)Object.getOwnPropertyNames(Object.prototype)
– returns an array of all own string property names
If we want non-enumerable properties:

	(12) ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "__proto__", "toLocaleString"]


3)Reflect.ownKeys(Object.prototype)
(12) ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "__proto__", "toLocaleString"]


https://stackoverflow.com/questions/15283720/why-are-for-in-faster-than-for-loops-when-looping-through-an-array
A for loop will search for properties on the [[Prototype]] chain too if they aren't found on the array. E.g. a for loop over [0,,2] will search for 1 all the way to Object.prototype[[Prototype]]

don't use for..in to loop arrays. Not. Ever

**Manually simulating an apply() for constructors**

1) Pass the arguments to Date via a method call (they are not in an array—yet):

new (Date.bind(null, 2011, 11, 24))

The preceding code uses bind() to create a constructor without parameters and invokes it via new.

2)
Use apply() to hand an array to bind(). Because bind() is a method call, we can use apply():

new (Function.prototype.bind.apply(
         Date, [null, 2011, 11, 24]))
The preceding array contains null, followed by the elements of arr. We can use concat() to create it by prepending null to arr:

var arr = [2011, 11, 24];
new (Function.prototype.bind.apply(
         Date, [null].concat(arr)))

Effective Javascript - chapter 4 


***Problem with using default constructor***

http://raganwald.com/2014/07/09/javascript-constructor-problem.html

https://javascript.info/function-prototype

```javascript

function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

```

```javascript

function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true

```

…JavaScript itself does not ensure the right "constructor" value.

Yes, it exists in the default "prototype" for functions, but that’s all. What happens with it later – is totally on us.

In particular, if we replace the default prototype as a whole, then there will be no "constructor" in it.

For instance:

```javascript
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

```

So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:


```javascript
function Rabbit() {}
```

// Not overwrite Rabbit.prototype totally
// just add to it

```javascript
Rabbit.prototype.jumps = true
```

// the default Rabbit.prototype.constructor is preserved
Or, alternatively, recreate the constructor property manually:

```javascript
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};
```
// now constructor is also correct, because we added it


```javascript
	function Person(){

	}

	var friend = new Person();

	Person.prototype = {
	 name : "Nicholas",
	 age : 29,
	 job : "Software Engineer",
	 sayName : function () {
	    console.log(this.name);
	   }
	};


Constructor is Object Constructor
(new Person()).constructor
ƒ Object() { [native code] }

```


## Arrays 

https://javascript.info/array-methods
http://speakingjs.com/es5/ch18.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://stackoverflow.com/questions/tagged/arrays+javascript

***Splice***
https://javascript.info/array-methods#splice
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

```javascript

array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) //deletecount is no of element to delete

1)
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

2)
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]

3)
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```

- **Remove duplicates from an array of objects in JavaScript**
https://stackoverflow.com/questions/tagged/javascript+arrays)

- **arraylike vs array**

https://github.com/deenjohn/Javascript-revision/blob/master/General/arraylike%20vs%20array.md)

what exactly makes an object “array-like”? The basic contract of
an array object amounts to two simple rules.
 ■ It has an integer length property in the range 0...232 – 1.
 ■ The length property is greater than the largest index of the object.
An index is an integer in the range 0...232 – 2 whose string representation is the key of a property of the object

This is all the behavior an object needs to implement to be compatible
with any of the methods of Array.prototype. Even a simple object literal can be used to create an array-like object:

```javascript

var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
var result = Array.prototype.map.call(arrayLike, function(s) {
return s.toUpperCase();
}); // ["A", "B", "C"]


function toArray(arrayLikeObject) {
    return Array.prototype.slice.call(arrayLikeObject);
}

```
Strings act like immutable arrays, too, since they can be indexed
and their length can be accessed as a length property. So the
Array.prototype methods that do not modify their array work with
strings:

```javascript
var result = Array.prototype.map.call("abc", function(s) {
return s.toUpperCase();
}); // ["A", "B", "C"]


```

There is just one Array method that is not fully generic: the array concatenation method concat. This method can be called on any arraylike receiver, but it tests the [[Class]] of its arguments. If an argument
is a true array, its contents are concatenated to the result; otherwise,
the argument is added as a single element. This means, for example,
that we can’t simply concatenate an array with the contents of an
arguments object:


```javascript

function namesColumn() {
  return ["Names"].concat(arguments);
}
namesColumn("Alice", "Bob", "Chris");
// ["Names", { 0: "Alice", 1: "Bob", 2: "Chris" }]


```

In order to convince concat to treat an array-like object as a true
array, we have to convert it ourselves. A popular and concise idiom
for doing this conversion is to call the slice method on the array-like
object:


```javascript

function namesColumn() {
   return ["Names"].concat([].slice.call(arguments));
}
namesColumn("Alice", "Bob", "Chris");
// ["Names", "Alice", "Bob", "Chris"]


```

https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript


- **How do I remove a particular element from an array in JavaScript?**
https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript)

- **How do I check if an array includes an object in JavaScript?**
https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-an-object-in-javascript)


- **Check if object is array?**
https://stackoverflow.com/questions/4775722/check-if-object-is-array)

- **Why is using “for…in” with array iteration a bad idea?**
https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea)

- **How can I concatenate two arrays in Java?**
https://stackoverflow.com/questions/80476/how-can-i-concatenate-two-arrays-in-java)

- **Remove duplicate values from JS array**
https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array)

- **Merge/flatten an array of arrays in JavaScript?**
https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript)

- **What is the most efficient method to groupby on a JavaScript array of objects?
https://stackoverflow.com/questions/14446511/what-is-the-most-efficient-method-to-groupby-on-a-javascript-array-of-objects)

- **Remove duplicates from an array of objects in JavaScript
https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript)

- **Remove duplicate values from JS array
https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates?noredirect=1&lq=1

## DOM

- **Uncovering the Native DOM API**
https://ponyfoo.com/articles/uncovering-the-native-dom-api)

- **DOM Tips and Techniques: Parent, Child, and Siblings**
https://www.sitepoint.com/dom-tips-techniques-parent-child-siblings/)

Que :http://javascript.info/task/select-diagonal-cells
Ans :

```javascript
    
    var tr = Array.from(document.querySelectorAll('tr'));
    for(var i =0 ;i<tr.length ;i++){
       for(var j =0 ;j<tr.length ;j++){
         if(i ==j){
           console.log("i ",i ,j);
           console.log((Array.from(tr[i].querySelectorAll('td'))[i]).style.background ='red');
           console.log('.......')
         }      
       }
    }

    // your code
    
 ```
 
 - **Live collections**
 
 All methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document 
 and “auto-update” when it changes
 
http://javascript.info/searching-elements-dom#live-collections

- **The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery)**
https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/)

- **An Introduction To DOM Events — Smashing Magazine**
https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)
https://eloquentjavascript.net/15_event.html

- **CSS Layout - The display Property**
https://www.w3schools.com/css/css_display_visibility.asp
https://javascript.info/styles-and-classes

- **JavaScript Events - w3school**
https://www.w3schools.com/js/js_events.asp)


good for quick look at all events in javascript

https://www.w3schools.com/jsref/obj_event.asp

https://www.w3.org/TR/uievents/#widl-MouseEvent-relatedTarget

- **The Event() constructor**
https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)


- **The Event interface**
https://developer.mozilla.org/en-US/docs/Web/API/Event)


https://www.w3schools.com/js/js_events.asp)

- **Introduction to events**
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

https://www.w3schools.com/jsref/event_cancelable.asp

https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html

- **What is the difference between targetTouches, touches, and changedTouches in TouchEvent?**
https://segmentfault.com/q/1010000002870710

https://github.com/krasimir/EventBus
https://stackoverflow.com/questions/2863547/javascript-scroll-event-for-iphone-ipad

- **Differentiate click vs mousedown/mouseup**
https://stackoverflow.com/questions/12572644/differentiate-click-vs-mousedown-mouseup?noredirect=1&lq=1

- **HTML DOM Events**
https://www.w3schools.com/jsref/dom_obj_event.asp
https://www.w3schools.com/jsref/obj_events.asp

http://javascriptkit.com/javatutors/touchevents.shtml

https://stackoverflow.com/questions/31865416/what-is-the-difference-between-event-target-event-toelement-and-event-srcelemen

- **Create your own long press event in JS** 
https://stackoverflow.com/questions/2625210/long-press-in-javascript
https://github.com/john-doherty/long-press-event/blob/master/src/long-press-event.js

var pressTimer;
document.getElementById("demo").addEventListener("mousedown", mouseDown);
document.getElementById("demo").addEventListener("mouseup", mouseUp);

function mouseDown() {
  pressTimer = window.setTimeout(function() { 
     document.getElementById("demo").innerHTML = "The mouse button is held down.";
  },1000);
  
}

function mouseUp() {
   clearTimeout(pressTimer);
}

- **What is the difference between visibility:hidden and display:none?**
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone

https://javascript.info/task/sliding-tree

```javascript

var el = document.getElementById('tree');
console.log(el);
el.addEventListener("click", handler);

function handler(e){
  if(e.target.children.length == 1){
    e.target.children[0].hidden = !e.target.children[0].hidden;
  }
}
  
```

- **mouseleave**
https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave

mouseleave vs mouseover
https://codepen.io/deen_john/pen/jONJwJz?editors=0010
https://www.youtube.com/watch?v=pzT4hAY82q4

- **preventDefault**
https://javascript.info/default-browser-action
https://bugzilla.mozilla.org/show_bug.cgi?id=653009
https://stackoverflow.com/questions/30426523/why-does-preventdefault-on-checkbox-click-event-returns-true-for-the-checked-att
https://technet.microsoft.com/en-us/windows/ff974940(v=vs.60)

Safari 4, Android 2.2 WebKit, and Opera Mobile 11 all have the following behavior:

1) preventDefault on the touchstart event prevents scrolling, double-tap zooming, and mouseup/mousedown/click events.

2) preventDefault on the touchmove event prevents scrolling.

3) preventDefault on the touchend event does NOT prevent scrolling or mouse events.

4) None of these will prevent pinch zooming.  Safari implements a separate "gesturechange" event that is fired for pinch gestures and can be used to prevent zooming.  This event is not implemented by Android or Opera.

Example :

```html

<!DOCTYPE html>
<html>
<body>

<h1>Show checkboxes:</h1>

<form action="/action_page.php">
  <input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
  <input type="checkbox" name="vehicle2" value="Car"> I have a car<br>
  <input type="checkbox" name="vehicle3" value="Boat" checked> I have a boat<br><br>
  <input type="submit" value="Submit">
</form>

<script>
var fe = document.querySelector('form');

fe.addEventListener("mousedown", function(e){
  console.log(e);
  e.preventDefault()
});

fe.addEventListener("mouseup", function(e){
e.preventDefault()
  console.log(e)
});

fe.addEventListener("click", function(e){
e.preventDefault()
  console.log(e)
});


</script>
</body>
</html>

```

```html

<body>

<p>This example uses the addEventListener() method to attach a "mousedown" and "mouseup" event to a p element.</p>

<p id="demo">Click me.</p>

<script>
document.getElementById("demo").addEventListener("mousedown", mouseDown);
document.getElementById("demo").addEventListener("mouseup", mouseUp);

function mouseDown(e) {
e.preventDefault();
//return false ;
 // document.getElementById("demo").innerHTML = "The mouse button is held down.";
}

function mouseUp(e) {
e.preventDefault();
//return false
  //document.getElementById("demo").innerHTML = "You released the mouse button.";
}
</script>

</body>

```


In above example , events order is mousedown > mouseup > click 
preventdefault only works on click



passive handler
https://javascript.info/default-browser-action#the-passive-handler-option


- **Stopping Event Propagation**
https://css-tricks.com/dangers-stopping-event-propagation/
http://jsfiddle.net/tedp/aL7Xe/1/

Element.closest()

```javascript

$(document).on('click', function(event) {
  if (!$(event.target).closest('#menucontainer').length) {
    // Hide the menus.
  }
});

```
The above handler listens for clicks on the document and checks to see if the event target 
is #menucontainer or has #menucontainer as a parent. If it doesn't, you know the click originated
from outside of #menucontainer, and thus you can hide the menus if they're visible.

https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

cancelbubble
if the bubbles attribute is set to false, the bubble phase will be skipped


```html

<body>

<p>Click the button to find out if the onclick event is a bubbling event.</p>

<button id ='button'>Try it</button>

<p id="demo"></p>

<script>

document.addEventListener("click", myFunction1);
button.addEventListener("click", myFunction1);
button.addEventListener("click", myFunction2);

function myFunction1() {
  console.log(event.cancelBubble);
  console.log('event ',  event.currentTarget)
  event.cancelBubble=true;
  document.getElementById("demo").innerHTML = event.cancelBubble;
}

function myFunction2(event) { 

  console.log('event ',  event.currentTarget)
  console.log(event.cancelBubble);
  
  document.getElementById("demo").innerHTML = event.cancelBubble;
}
</script>

</body>

```

- **Disabling the context menu on long taps on Android**
https://stackoverflow.com/questions/3413683/disabling-the-context-menu-on-long-taps-on-android?noredirect=1&lq=1

- **clientX vs PageX vs ScreenX**
https://heeestorys.tistory.com/778
https://stackoverflow.com/questions/9262741/what-is-the-difference-between-pagex-y-clientx-y-screenx-y-in-javascript/17705548
https://blog.csdn.net/lzding/article/details/45437707
https://heeestorys.tistory.com/778
https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
https://o7planning.org/en/12293/javascript-mouseevent-tutorial

- **order of events**
events orders :

https://www.html5rocks.com/en/mobile/touchandmouse/
https://www.w3.org/TR/uievents/#events-mouseevent-event-order
https://www.w3.org/TR/uievents

Focus event :
Before Focus event is fired , mousedown event is fired.let
Mousedown > Focus 

- **MOUSEOUT VS MOUSELEAVE**
https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener
https://www.w3.org/TR/uievents

- **creating your own visibilitychangeEvent**
https://www.html5rocks.com/en/tutorials/pagevisibility/intro/

- **Pointer events IE**
https://msdn.microsoft.com/en-us/windows/dn304886(v=vs.71)

- **What is a viewport ?**
https://www.kirupa.com/html5/viewport_device_document_size.htm

- **DOM in depth -1 -MyNotes**
https://github.com/deenjohn/Javascript-revision/tree/master/DOM%20in%20depth%20-1)

- **innerText vs innerHTML vs textContent**
https://www.w3schools.com/jsref/prop_node_textcontent.asp

textContent gets the content of all elements, including <script> and <style> elements, innerText does not

innerText is aware of style and will not return the text of hidden elements, whereas textContent will.

https://know-it-all.io/)

https://codepen.io/collection/Dapaqx/)

http://domenlightenment.com/)

https://stackoverflow.com/questions/26496176/when-logging-an-event-object-currenttarget-is-null-but-when-logging-event-curr

https://stackoverflow.com/questions/5921413/difference-between-e-target-and-e-currenttarget?noredirect=1&lq=1

https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y


## ES6 ,functional


- **Decorators**
https://www.youtube.com/watch?v=_8wOde1fmEM

- **Annotated Underscore.js source code**
http://underscorejs.org/docs/underscore.html)
https://github.com/deenjohn/Javascript-revision/blob/master/General/underscore%20notes)

- **MDN : Array API **
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


https://github.com/deenjohn/functional-javascript

- **Functional Programming**
https://codepen.io/collection/nWRKrb/)

- **JavaScript hacks for ES6 hipsters**
https://hackernoon.com/javascript-hacks-for-es6-hipsters-67d633ce8ace?source=placement_card_footer_grid---------2-60)


- **Creating an ES6ish Compose in Javascript**

  Creating an ES6ish Compose in Javascript – Drew Tipson – Medium

  Let’s Make a Monad – Drew Tipson – Medium

 ****Currying versus partial application (with JavaScript code)***
  
http://2ality.com/2011/09/currying-vs-part-eval.html
https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8
https://javascript.info/currying-partials

### Mixin

```javascript

function mix(BaseClass, ...Mixins) {
return Mixins.reduce((accumulator, current) => current(accumulator), BaseClass);
}
class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}

``
example from secrets of Javascript book -ed1 , chapter 5

```javascript

Function.prototype.curry = function() {
  var fn = this, args = Array.prototype.slice.call(arguments,0,1);  //only the first argument
  return function() {
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments)));
  };
};

function test(x,y){
  return x+y
}

var add10 = test.curry(10,2); //only 10 is bind , 2 is ignored , like test.curry(10)

add10(3)

```

Partial function


```javascript
Function.prototype.partial = function() {
 var fn = this, args = Array.prototype.slice.call(arguments);
 return function() {
     var arg = 0;
     for (var i = 0; i < args.length && arg < arguments.length; i++) {
             if (args[i] === undefined) {
                    args[i] = arguments[arg++];
              }
          }
        return fn.apply(this, args);
    };
};

var delay = setTimeout.partial(undefined, 10);

delay(function(){
 assert(true,
 "A call to this function will be delayed 10 ms.");
});

var bindClick = document.body.addEventListener
 .partial("click", undefined, false);
 
bindClick(function(){
 assert(true, "Click event bound via curried function.");
});

```


- **The event loop and the rise of Async programming + 5 ways to better coding with async/await**

#### How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await
https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5

https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)

https://youtu.be/u1kqx6AenYw?list=PL37ZVnwpeshG2YXJkun_lyNTtM-Qb3MKa
https://blog.risingstack.com/writing-a-javascript-framework-execution-timing-beyond-settimeout/

https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/
http://sculove.github.io/blog/2018/01/18/javascriptflow/
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
http://bazyd.com/event-queue-in-browser/
https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec

https://gitissue.com/issues/5b764a6f725e4a4219fbf874
https://itw01.com/NR6AE4C.html

### Promises

https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
https://danlevy.net/javascript-promises-quiz/
https://github.com/mariusschulz/egghead-javascript-promises

### Async-Await /Promises /OBSERVABLES
https://github.com/jawache/async-javascript-workshop


https://www.youtube.com/watch?v=jgWnccjXR4I&t=959s
Callbacks vs Promises vs RxJs Observables vs async/ await


- **Promises and Asynchronous Programming**
https://github.com/nzakas/understandinges6/blob/master/manuscript/11-Promises.md)

- **Understand promises before you start using async/await**
https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)

- **Master the JavaScript Interview: What is a Promise?**
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

- **Even with async/await, raw promises are still key to writing optimal concurrent javascript**
https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161)

#### interators and generators

https://blog.sessionstack.com/how-javascript-works-iterators-tips-on-gaining-advanced-control-over-generators-41dc3eb3bc20
	
	

## Event Loop 

### Level 1
 
 https://thetechsolo.wordpress.com/2016/02/29/scalable-io-events-vs-multithreading-based/
 
- **Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014**
https://www.youtube.com/watch?v=8aGhZQkoFbQ)
https://blog.risingstack.com/writing-a-javascript-framework-execution-timing-beyond-settimeout/

### ### Level 2

- **Understanding the Node.js Event Loop**
https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/)
https://html.spec.whatwg.org/multipage/webappapis.html#task-queue


- **Jake Archibald: In The Loop**
https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=8s)
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

### Level 3 : master level  

- **lesson : The Internals of Node**
https://www.udemy.com/advanced-node-for-developers/)
http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/

## Concurrency :

https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch07.html)


## V8

- **The Journey of JavaScript: from Downloading Scripts to Execution - Part II**
https://www.telerik.com/blogs/journey-of-javascript-downloading-scripts-to-execution-part-i
https://www.telerik.com/blogs/journey-of-javascript-downloading-scripts-to-execution-part-ii

- **How JavaScript works: an overview of the engine, the runtime, and the call stack**

https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)


- **How JavaScript works: tracking changes in the DOM using MutationObser**

https://blog.sessionstack.com/how-javascript-works-tracking-changes-in-the-dom-using-mutationobserver-86adc7446401)

- **How JavaScript works: The building blocks of Web Workers + 5 cases when you should use them**

https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a)

- **An overview of the engine, the runtime, and the call stack**

https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf?source=collection_home---2------1----------------)



- **How JavaScript works: Deep dive into WebSockets and HTTP/2 with SSE + how to pick the right path**

https://blog.sessionstack.com/how-javascript-works-deep-dive-into-websockets-and-http-2-with-sse-how-to-pick-the-right-path-584e6b8e3bf7)

- **How JavaScript works: memory management + how to handle 4 common memory leaks**
https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec?source=user_profile---------8----------------)

- **How JavaScript works: the rendering engine and tips to optimize its performance**

https://blog.sessionstack.com/how-javascript-works-the-rendering-engine-and-tips-to-optimize-its-performance-7b95553baeda)


- **How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code**

https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)

- **How Modern Web Browsers Accelerate Performance: The Networking Layer**

https://blog.sessionstack.com/how-modern-web-browsers-accelerate-performance-the-networking-layer-f6efaf7bfcf4)

## Performance 

### Repaints and Reflows: Manipulating the DOM responsibly
https://sites.google.com/site/getsnippet/javascript/dom/repaints-and-reflows-manipulating-the-dom-responsibly

### Lazy Loading vs Eager Loading

https://www.youtube.com/watch?v=U8wffcXm-TM

https://engineering.linkedin.com/blog/2019/03/feature-highlight--scaling-autoplay-videos-for-hundreds-of-milli

### Preloading and Prefetching

https://www.youtube.com/watch?v=R_D0rL094F4

## Design Patterns

https://github.com/deenjohn/Design-Patterns

- **Dependency injection in JavaScript**
http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript

- **The MVC Design Pattern in Vanilla JavaScript**
https://www.sitepoint.com/mvc-design-pattern-javascript/

- **Observer pattern**
https://github.com/deenjohn/Design-Patterns/tree/master/Observer%20Pattern

- **The Comprehensive Guide to JavaScript Design Patterns**
https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns

https://enmascript.com/articles/2019/03/09/diving-into-the-great-observer-pattern-in-javascript
https://enmascript.com/articles/2018/10/05/javascript-factory-pattern

## Browsers inner working

https://developers.google.com/web/updates/2018/09/inside-browser-part1
https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y/edit#slide=id.g60f92a5151_40_0
https://blog.sessionstack.com/how-modern-web-browsers-accelerate-performance-the-networking-layer-f6efaf7bfcf4)

# Books :
(only mentioning the books i read & found helpful)


### For Core Javascript

- **Professional JavaScript for Web Developers**

The only book that covers events & HTML Form inner details in depth.

An awesome coverage on Objects,prototypes,all the inheritance patterns


- **You Don't Know JS series**: 
https://github.com/getify/You-Dont-Know-JS)


- **You Don't Know JS: Types & Grammar**

- **You Don't Know JS:Scope & Closures**

- **You Don't Know JS: this & Object Prototypes**



All the above 3 books by Kyle Simpson are must read , word by word



- **DOM Enlightenment**

Best book ever written on DOM



- **Effective javascript** 
Polish your skills , learn more hidden gems on JS


- **Secrets of the JavaScript Ninja**


- **JavaScript Allongé: A strong cup of functions, objects, combinators, and decorators**

This book will change the way you think in Javascript


- **Learning JavaScript Design Patterns Addy Osmani**

- **High Performance JavaScript - Nicholas C. Zakas**

## ES6 Reading 

- **exploringjs.com**

http://exploringjs.com/es6.html)
  
best book
 
 
- **ES6 Katas**
http://es6katas.org/)

- **ES6 Modules in Depth**
https://ponyfoo.com/articles/es6-modules-in-depth)

## Functional JS Reading


### books :

- **Introducing functional programming with Underscore.js**

- **Functional-Light JavaScript: Pragmatic, Balanced FP in JavaScript**

- **http://reactivex.io/learnrx/**

- **Functional Programming in JavaScript Luis Atencio**

https://github.com/mjavascript/mastering-modular-javascript)

https://github.com/mjavascript/practical-modern-javascript)

http://exploringjs.com/impatient-js/toc.html

https://javascript.info/

## Regex


- **Breaking the Ice With Regular Expressions**
https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions)

The only REGEX course that really taught me Regex , it's free too


- **Regular Expressions Demystified: RegEx isn’t as hard as it looks**

https://medium.freecodecamp.org/regular-expressions-demystified-regex-isnt-as-
hard-as-it-looks-617b55cf787)

# You dont need a framework
https://medium.freecodecamp.org/do-we-still-need-javascript-frameworks-42576735949b




# Video Courses :


## Fundamentals Javascript Course

- **JavaScript: Understanding the Weird Parts**

https://www.udemy.com/understand-javascript/)

A great course which gives you a rock solid foundation but even more, you start loving javascript


- **Deep JavaScript Foundations**

https://frontendmasters.com/courses/javascript-foundations/)

taught by Kyle Simpson .... enough said


- **JavaScript: Events**
https://www.lynda.com/JavaScript-tutorials/JavaScript-Events/140780-2.html)
https://www.sitepoint.com/javascript-custom-events/

- **JavaScript: Enhancing the DOM**
https://www.lynda.com/HTML-tutorials/JavaScript-Enhancing-DOM/122462-2.html)

- **JavaScript Objects and Prototypes**
https://app.pluralsight.com/library/courses/javascript-objects-prototypes)

- **Reduce Data with Javascript Array#reduce**
https://egghead.io/courses/reduce-data-with-javascript)

- **Understand Javascript arrays**
https://egghead.io/courses/understand-javascript-arrays)

https://github.com/deenjohn/Javascript-revision)
https://github.com/deenjohn/functional-javascript)
https://github.com/deenjohn/You-Dont-Need-JavaScript)

- **Advanced Javascript**

https://www.udemy.com/top-javascript-interview-questions-and-answers/)
(good course- covers CORS,JSONP)

- **JavaScript 30 — Build 30 things with vanilla JS in 30 days**
https://javascript30.com/)


- **The Complete JavaScript Course: Build a Real-World Project*

https://www.udemy.com/the-complete-javascript-course/)


- **JavaScript: Getting Started**
https://app.pluralsight.com/library/courses/javascript-getting-started/table-of-contents)


- **jQuery-free JavaScript**
https://app.pluralsight.com/library/courses/jquery-free-javascript)
(awesome course -teaches you DOM in depth)


- **JavaScript: The Hard Parts**
https://frontendmasters.com/courses/javascript-hard-parts/)

- **Modern Asynchronous JavaScript**
https://app.pluralsight.com/library/courses/javascript-asynchronous-modern/table-of-contentsnts)

- **Reasoning About Asynchronous JavaScript**
https://app.pluralsight.com/library/courses/asynchronous-javascript-reasoning/table-of-contents)

- **Asynchronous Programming: The End of The Loop**
https://egghead.io/courses/asynchronous-programming-the-end-of-the-loop)


- **Asynchronous Programming in JavaScript (with Rx.js Observables)**
https://frontendmasters.com/courses/asynchronous-javascript/)

- **Advanced Asynchronous JavaScript**
https://frontendmasters.com/courses/advanced-async-js/)


- **style.cssText**

http://javascript.info/styles-and-classes
we can set special style flags like "important" here


## ES6 Course	

- **Rapid ES6 Training**
https://app.pluralsight.com/library/courses/rapid-es6-training/table-of-contents)

Most in-depth of all course on ES6 , complement the Exploring ES6
by Dr. Axel Rauschmayer book well

- **ES6: The Right Parts**
https://frontendmasters.com/courses/es6-right-parts/)


- **ES6 for Everyone! | Wes Bos**
http://wesbos.com/es6-for-everyone/)


- **ES6 in Motion**
https://www.safaribooksonline.com/library/view/es6-in-motion/10000MNLV201701/)

(good to learn es6 class in depth )


## Functional JS course

- **Functional-Lite JavaScript**
https://frontendmasters.com/courses/functional-javascript-v2/)

- **Deep Dive into Functional JavaScript [Video] | PACKT Books**
https://www.packtpub.com/web-development/deep-dive-functional-javascript-video)

- **Mastering Functional JavaScript Libraries**

https://www.packtpub.com/web-development/mastering-functional-javascript-libraries-video)

## Debugging course

- **Debugging and Fixing Common JavaScript Errors**
https://frontendmasters.com/courses/debugging-javascript/)

- **Fixing Common JavaScript Bugs**  
https://app.pluralsight.com/library/courses/fixing-common-javascript-bugs/table-of-contents)

Performance
https://james-priest.github.io/udacity-nanodegree-mws/course-notes/browser-rendering-optimization.html


### Testing 


- **Testing Clientside JavaScript**
https://app.pluralsight.com/library/courses/testing-javascript)

- **Testing JavaScript Applications (feat. React and Redux)**
https://frontendmasters.com/courses/testing-javascript/)

- **Front-End First: Testing and Prototyping JavaScript Apps**
https://app.pluralsight.com/library/courses/testing-and-prototyping-javascript-apps/table-of-contents)

- **Testing JavaScript for Node.js with Mocha**
https://app.pluralsight.com/library/courses/mocha-javascript-testing-nodejs/table-of-contents)

- **Unit Testing with Node.js**
https://app.pluralsight.com/library/courses/unit-testing-nodejs/table-of-contents)

- **Building a JavaScript Development Environment**
https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)

- **Understanding Jest Mocks**
https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)

https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d?source=bookmarks---------19----------------)

https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)


https://github.com/deenjohn/Testing-In-Depth/blob/master/jest2.js)


https://medium.com/@mbaranovski/quick-guide-to-tdd-in-react-81888be67c64)

https://medium.com/@7ynk3r/react-testing-done-right-24fdb4ef43d8)

 

## Interview Preparation - mocks

- **Answering Tricky JS Interview Questions**
https://www.youtube.com/watch?v=MY0UBGX2FtA)

https://www.youtube.com/watch?v=057Rs6CgJnY)


### Talks

- **https://github.com/AllThingsSmitty/must-watch-javascript
   A list of important javascript talks
  
- **How Browsers Work_ Behind the scenes of modern web browsers**
  https://vimeo.com/44182484)
 
 How Browsers Work_ Behind the scenes of modern web browsers - HTML5 Rocks

- **JavaScript engine fundamentals: Shapes and Inline Caches
https://mathiasbynens.be/notes/shapes-ics


## RXJS 

https://github.com/ichpuchtli/awesome-rxjs

https://medium.com/google-developer-experts/angular-introduction-to-reactive-extensions-rxjs-a86a7430a61f

https://toddmotto.com/rxjs-observables-observers-operators


## Performance 

https://developers.google.com/web/fundamentals/performance/get-started/
https://csstriggers.com/align-content

The Only 2 CSS Properties You Should Animate
https://www.youtube.com/watch?v=N5EW4HnF6FU




## Jquery Annotated source
https://robflaherty.github.io/jquery-annotated-source/



## CSS
https://www.inmotionhosting.com/support/edu/website-design/using-css/linking-your-css-to-your-website

https://www.w3schools.com/cssref/css_selectors.asp

## Mobile

1)Detecting which mobile
https://www.w3schools.com/jsref/prop_nav_useragent.asp
https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Multi-touch_interaction

https://stackoverflow.com/questions/42929323/touchevent-touches-length-returns-always-1-on-android

https://javascript.info/bubbling-and-capturing
https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html

http://qu.edu.iq/wp-content/uploads/2017/09/HTML5-APPLICATIONS-DEVELOPMENT-MANUAL-2017.pdf

https://github.com/john-doherty/long-press/blob/master/src/long-press.js

https://developer.mozilla.org/en-US/docs/Web/API/Touch_events

https://patrickhlauke.github.io/getting-touchy-presentation/
https://blog.mobiscroll.com/working-with-touch-events/

https://www.html5rocks.com/en/mobile/touchandmouse/

https://docs.sencha.com/extreact/6.5.3/guides/gestures.html

https://www.davrous.com/2015/08/10/unifying-touch-and-mouse-how-pointer-events-will-make-cross-browsers-touch-support-easy/

https://developer.tizen.org/dev-guide/2.4/org.tizen.tutorials/html/web/w3c/device/task_touch_paint_mw.htm
https://codepen.io/deen_john/pen/PyeXyP
https://medium.com/@jh3y/implementing-touch-support-in-javascript-b8e43f267a16
https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
https://www.youtube.com/watch?v=_3b1rvuFCJY
http://www.thatsoftwaredude.com/content/8579/javascript-touch-events
https://eloquentjavascript.net/15_event.html

https://www.sitepen.com/blog/2011/12/07/touching-and-gesturing-on-iphone-android-and-more/
https://davidwalsh.name/mootools-touch

https://www.youtube.com/watch?v=Rwc4fHUnGuU

https://www.youtube.com/watch?v=ga_SLzsUdTY
https://segmentfault.com/q/1010000002870710

 What is the difference between targetTouches, touches, and changedTouches in TouchEvent?https://segmentfault.com/q/1010000002870710


## Interview prep
http://davidshariff.com/blog/preparing-for-a-front-end-web-development-interview-in-2017/

## Extras
https://html.spec.whatwg.org/

https://awesometalks.party/

https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)

https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)

https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_parsing_algorithm)

https://github.com/WebKit/webkit/blob/fde57e46b1f8d7dde4b2006aaf7ebe5a09a6984b/Source/WebCore/rendering/RenderObject.h)

https://codeburst.io/the-ultimate-guide-to-learning-full-stack-web-development-in-6-months-for-30-72b3854a7458)

https://www.reddit.com/r/cscareerquestions/comments/5gnmkj/what_are_some_of_the_best_resu%D0%BCe_formats_youve/)

https://github.com/thlorenz/v8-perf)

http://benediktmeurer.de/2017/10/05/connecting-the-dots/)

https://github.com/thlorenz/async-await-box)

https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-roro-be01e7669cbd)

https://codeburst.io/javascript-null-vs-undefined-20f955215a2?source=placement_card_footer_grid---------2-60)

https://google.github.io/styleguide/jsguide.html)

https://github.com/airbnb/javascript)

https://www.sitepoint.com/mvc-design-pattern-javascript/


https://legacy.gitbook.com/book/basarat/typescript/details
https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone


http://dfsq.info/site/read/writing-your-own-jquery
https://learnquery.infinum.co/

SPA :https://www.youtube.com/watch?v=F_BYg2QGsC0
https://www.youtube.com/watch?v=qvHecQOiu8g
How Single Page Applications WorkHow Single Page Applications Work

https://www.youtube.com/watch?v=xN9QxPtK2LM&list=PLw5h0DiJ-9PAY1hpmbkRkV7dYA5RpL9LT&index=2&t=0s

