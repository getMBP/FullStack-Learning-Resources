# Master Javascript

[Fork,StarThe GITHub link](https://github.com/deenjohn/FullStack-Learning-Resources/edit/master/Javascript.md)

### Fundamentals Javascript Reading:

- **MDN**
https://developer.mozilla.org/bm/docs/Web/JavaScript)

- **Expressions and operators**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

http://exploringjs.com/impatient-js/ch_syntax.html#statement-vs.expression

- **Borrowing Methods in JavaScript**
http://davidshariff.com/blog/borrowing-methods-in-javascript/#first-article)

- **What is the Execution Context & Stack in JavaScript?**
http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/#first-article)

- **Identifier Resolution, Execution Contexts and scope chains**
http://jibbering.com/faq/notes/closures/#clIRExSc)

- **Identifier Resolution and Closures in the JavaScript Scope Chain**
http://davidshariff.com/blog/javascript-scope-chain-and-closures/)

- **You Don't Know JS: Scope & Closures**
https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

- **Practical use of closure examples

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
    state = reducer(state, action);
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
 assert(ninjas.find("Alex", "Russell", "Jr") == null,
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
- **Chapter 2. Variable Scope**

from book : Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript


This chapter taught me some more hidden things about closures and scopes.

https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch02.html#ch02lev1sec4)


## in vs for ...in

https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)


## Coercion 

- **Equality comparisons and sameness**

Coercion 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
http://ecma-international.org/ecma-262/5.1/#sec-11.9.3)
http://getify.github.io/coercions-grid/)

- **Chapter 4: Coercion**
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)

- **Item 3: Beware of Implicit Coercions**
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch01.html#ch01lev1sec3)


### typeof vs instanceof
https://stackoverflow.com/questions/899574/which-is-best-to-use-typeof-or-instanceof)

- **instanceof**
The instanceof operator tests the presence of constructor.prototype in object's prototype chain.

a instanceof Foo; // true

The instanceof operator takes a plain object as its left-hand operand and a function as its right-hand operand. The question instanceof answers is: in the entire [[Prototype]] chain of a, does the object arbitrarily pointed to by Foo.prototype ever appear?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)




## functions

#### IIFE

- **Using IIFEs in JavaScript to control variable scope**
https://content.myemma.com/emmatech/using-iifes-in-javascript-to-control-variable-scope)

 - **function arguments object**
https://github.com/deenjohn/Javascript-revision/blob/master/General/3-%20function%20arguments%20object%20.md)


 - **Function length vs arguments**
https://github.com/deenjohn/Javascript-revision/blob/master/General/Function%20length%20vs%20arguments)

### Call,Apply,Bind

https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

- **My Notes**
https://github.com/deenjohn/Javascript-revision/blob/master/General/1-%20bind%20call%20apply%20-Borrowing%20method.md)


### Call,Apply,Bind - Learn even more

- **Use call to Call Methods with a Custom Receiver**
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec3)

- **Use apply to Call Functions with Different Numbers of Arguments**
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec4)

- **Use bind to Extract Methods with a Fixed Receiver **
https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec9)

- **How does Function.prototype.call.bind work?
https://stackoverflow.com/questions/11121586/how-does-function-prototype-call-bind-work/50874883#50874883

Call

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


## json.stringify

https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)

### Strict

https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it)

- **How to check for “undefined” in JavaScript?**

https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript)

https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property)


- **JavaScript data types and data structures**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


- **What is the difference between parseInt() and Number()?**
https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number)

- **Master the JavaScript Interview: What is Function Composition?**
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0#.i84zm53fb)

- **How do you check that a number is NaN in JavaScript?**
https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript

- **null vs undefined
https://basarat.gitbooks.io/typescript/docs/javascript/null-undefined.html

Something hasn't been initialized : undefined.
Something is currently unavailable: null.

- **Why is null an object and what's the difference between null and undefined?**
https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined)
https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript?noredirect=1&lq=1)
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)

- **Test null**
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)

If you want to test for a null value using its type, you need a compound condition:
```javascript
var a = null;

(!a && typeof a === "object"); // true

```
null is the only primitive value that is "falsy" (aka false-like; see Chapter 4) but that also returns "object" from the typeof check.


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


## object

- **MDN : Object**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- **What is the most efficient way to deep clone an object in JavaScript?**
https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript?rq=1)

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


## Arrays 

- **Remove duplicates from an array of objects in JavaScript**
https://stackoverflow.com/questions/tagged/javascript+arrays)

- **arraylike vs array**
https://github.com/deenjohn/Javascript-revision/blob/master/General/arraylike%20vs%20array.md)


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

What is the most efficient method to groupby on a JavaScript array of objects?
https://stackoverflow.com/questions/14446511/what-is-the-most-efficient-method-to-groupby-on-a-javascript-array-of-objects)

Remove duplicates from an array of objects in JavaScript
https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript)


## DOM

- **Uncovering the Native DOM API**
https://ponyfoo.com/articles/uncovering-the-native-dom-api)

- **DOM Tips and Techniques: Parent, Child, and Siblings**
https://www.sitepoint.com/dom-tips-techniques-parent-child-siblings/)

- **The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery)**
https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/)

- **An Introduction To DOM Events — Smashing Magazine**
https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)


- **JavaScript Events - w3school**
https://www.w3schools.com/js/js_events.asp)


good for quick look at all events in javascript


- **The Event() constructor**
https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)


- **The Event interface**
https://developer.mozilla.org/en-US/docs/Web/API/Event)


https://www.w3schools.com/js/js_events.asp)

- **Introduction to events**
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)


- **DOM in depth -1 -MyNotes**
https://github.com/deenjohn/Javascript-revision/tree/master/DOM%20in%20depth%20-1)

- **innerText vs innerHTML vs textContent
https://www.w3schools.com/jsref/prop_node_textcontent.asp

textContent gets the content of all elements, including <script> and <style> elements, innerText does not

innerText is aware of style and will not return the text of hidden elements, whereas textContent will.




https://know-it-all.io/)

https://codepen.io/collection/Dapaqx/)

http://domenlightenment.com/)



## ES6 ,functional


- **Decorators **
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

  Currying versus partial application (with JavaScript code)
http://2ality.com/2011/09/currying-vs-part-eval.html
https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8

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

https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)


### Async-Await /Promises

- **Promises and Asynchronous Programming**
https://github.com/nzakas/understandinges6/blob/master/manuscript/11-Promises.md)

- **Understand promises before you start using async/await**
https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)

- **Master the JavaScript Interview: What is a Promise?**
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

- **Even with async/await, raw promises are still key to writing optimal concurrent javascript**
https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161)


## Event Loop 

### Level 1
 
- **Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014**
https://www.youtube.com/watch?v=8aGhZQkoFbQ)

### ### Level 2

- **Understanding the Node.js Event Loop**
https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/)


- **Jake Archibald: In The Loop**
https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=8s)


### Level 3 : master level  

- **lesson : The Internals of Node**
https://www.udemy.com/advanced-node-for-developers/)


## Concurrency :

https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch07.html)


## V8

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

## Design Patterns

https://github.com/deenjohn/Design-Patterns

- **Dependency injection in JavaScript
http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript

- **The MVC Design Pattern in Vanilla JavaScript
https://www.sitepoint.com/mvc-design-pattern-javascript/

- **Observer pattern
https://github.com/deenjohn/Design-Patterns/tree/master/Observer%20Pattern



# Books :
(only mentioning the books i read & found helpful)


### For Core Javascript

- **Professional JavaScript for Web Developers**

The only book that covers events & HTML Form inner details in depth.

An awesome coverage on Objects,prototypes,all the inheritance patterns


- **You Don't Know JS series: 
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

- **High Performance JavaScript - Nicholas C. Zakas **

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


## Regex


- **Breaking the Ice With Regular Expressions**
https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions)

The only REGEX course that really taught me Regex , it's free too


- **Regular Expressions Demystified: RegEx isn’t as hard as it looks**

https://medium.freecodecamp.org/regular-expressions-demystified-regex-isnt-as-
hard-as-it-looks-617b55cf787)


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


## Jquery Annotated source
https://robflaherty.github.io/jquery-annotated-source/


## CSS
https://www.inmotionhosting.com/support/edu/website-design/using-css/linking-your-css-to-your-website

https://www.w3schools.com/cssref/css_selectors.asp


## Extras

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

