# Master Javascript

[Fork,StarThe GITHub link](https://github.com/deenjohn/FullStack-Learning-Resources/edit/master/Javascript.md)

### Fundamentals Javascript Reading:

- **MDN**
[ClickThisLink](https://developer.mozilla.org/bm/docs/Web/JavaScript)

- **Expressions and operators**
[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

- **Borrowing Methods in JavaScript**
[ClickThisLink](http://davidshariff.com/blog/borrowing-methods-in-javascript/#first-article)

- **What is the Execution Context & Stack in JavaScript?**
[ClickThisLink](http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/#first-article)

- **Identifier Resolution, Execution Contexts and scope chains**
[ClickThisLink](http://jibbering.com/faq/notes/closures/#clIRExSc)

- **Identifier Resolution and Closures in the JavaScript Scope Chain**
[ClickThisLink](http://davidshariff.com/blog/javascript-scope-chain-and-closures/)

- **You Don't Know JS: Scope & Closures**
[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

- **Chapter 2. Variable Scope**

from book : Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript


This chapter taught me some more hidden things about closures and scopes.

[ClickThisLink](https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch02.html#ch02lev1sec4)



## in vs for ...in
[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)


## Coercion 

- **Equality comparisons and sameness**
Coercion 

[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
[ClickThisLink](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3)
[ClickThisLink](http://getify.github.io/coercions-grid/)

- **Chapter 4: Coercion**
[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)

- **Item 3: Beware of Implicit Coercions**
[ClickThisLink](https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch01.html#ch01lev1sec3)


### typeof vs instanceof
[ClickThisLink](https://stackoverflow.com/questions/899574/which-is-best-to-use-typeof-or-instanceof)

- **instanceof**
The instanceof operator tests the presence of constructor.prototype in object's prototype chain.

a instanceof Foo; // true

The instanceof operator takes a plain object as its left-hand operand and a function as its right-hand operand. The question instanceof answers is: in the entire [[Prototype]] chain of a, does the object arbitrarily pointed to by Foo.prototype ever appear?

[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)


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

[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/6efd08c9db8e9808a9046204c719c99cb4702c18/this%20%26%20object%20prototypes/ch5.md#L487)

## object

- **MDN : Object**
[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- **What is the most efficient way to deep clone an object in JavaScript?**
[ClickThisLink](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript?rq=1)

- **Length of a JavaScript object**
[ClickThisLink](https://stackoverflow.com/questions/5223/length-of-a-javascript-object?rq=1)

- **How can I merge properties of two JavaScript objects dynamically?**
[ClickThisLink](https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically?rq=1)

- **Detecting an undefined object property**
[ClickThisLink](https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property?rq=1)

- **How do I remove a property from a JavaScript object?**
[ClickThisLink](https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object?rq=1)

- **How do I remove a property from a JavaScript object?**
[ClickThisLink](https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object)

- **Check if object is array?**
[ClickThisLink](https://stackoverflow.com/questions/4775722/check-if-object-is-array)

- **How do I check if an object has a property in JavaScript?**
[ClickThisLink](https://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-property-in-javascript)

- **How do I check if an object has a key in JavaScript?**
[ClickThisLink](https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript?noredirect=1&lq=1)

[ClickThisLink](https://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript)

- **Checking if a key exists in a JavaScript object?**
[ClickThisLink](https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object)

- **How do I remove a property from a JavaScript object?**
[ClickThisLink](https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object?noredirect=1&lq=1)

- **Parse JSON in JavaScript?**
[ClickThisLink](https://stackoverflow.com/questions/4935632/parse-json-in-javascript)

- **Detecting an undefined object property**
[ClickThisLink](https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property?rq=1)

- **Object comparison in JavaScript**
[ClickThisLink](https://stackoverflow.com/questions/1068834/object-comparison-in-javascript)

- **Deleting Objects in JavaScript**
[ClickThisLink](https://stackoverflow.com/questions/742623/deleting-objects-in-javascript)

- **How to get the size of a JavaScript object?**
[ClickThisLink](https://stackoverflow.com/questions/1248302/how-to-get-the-size-of-a-javascript-object)

- **Object property shadowing**

[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch5.md)

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

## Arrays 

- **arraylike vs array**
[ClickThisLink](https://github.com/deenjohn/Javascript-revision/blob/master/General/arraylike%20vs%20array.md)

- **How do I remove a particular element from an array in JavaScript?**
[ClickThisLink](https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript)

- **How do I check if an array includes an object in JavaScript?**
[ClickThisLink](https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-an-object-in-javascript)


- **Check if object is array?**
[ClickThisLink](https://stackoverflow.com/questions/4775722/check-if-object-is-array)

- **Why is using “for…in” with array iteration a bad idea?**
[ClickThisLink](https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea)

- **How can I concatenate two arrays in Java?**
[ClickThisLink](https://stackoverflow.com/questions/80476/how-can-i-concatenate-two-arrays-in-java)

- **Remove duplicate values from JS array**
[ClickThisLink](https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array)

- **Merge/flatten an array of arrays in JavaScript?**
[ClickThisLink](https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript)

GeekForGeeks
[ClickThisLink](https://www.geeksforgeeks.org/tag/javascript-array/)

## json.stringify

[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md)

### Strict

[ClickThisLink](https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it)

- **How to check for “undefined” in JavaScript?**

[ClickThisLink](https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript)

[ClickThisLink](https://stackoverflow.com/questions/27509/detecting-an-undefined-object-property)


- **JavaScript data types and data structures**
[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)


- **What is the difference between parseInt() and Number()?**
[ClickThisLink](https://stackoverflow.com/questions/4090518/what-is-the-difference-between-parseint-and-number)

- **Master the JavaScript Interview: What is Function Composition?**
[ClickThisLink](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0#.i84zm53fb)

- **Why is null an object and what's the difference between null and undefined?**
[ClickThisLink](https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined)
[ClickThisLink](https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript?noredirect=1&lq=1)
[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)

- **Test null**
[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)

If you want to test for a null value using its type, you need a compound condition:
```javascript
var a = null;

(!a && typeof a === "object"); // true

```
null is the only primitive value that is "falsy" (aka false-like; see Chapter 4) but that also returns "object" from the typeof check.


## functions

#### IIFE

- **Using IIFEs in JavaScript to control variable scope**
[ClickThisLink](https://content.myemma.com/emmatech/using-iifes-in-javascript-to-control-variable-scope)

 - **function arguments object**
[ClickThisLink](https://github.com/deenjohn/Javascript-revision/blob/master/General/3-%20function%20arguments%20object%20.md)


 - **Function length vs arguments**
[ClickThisLink](https://github.com/deenjohn/Javascript-revision/blob/master/General/Function%20length%20vs%20arguments)

### Call,Apply,Bind

[ClickThisLink](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)

[ClickThisLink](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)

- **My Notes**
[ClickThisLink](https://github.com/deenjohn/Javascript-revision/blob/master/General/1-%20bind%20call%20apply%20-Borrowing%20method.md)


### Call,Apply,Bind - Learn even more

- **Use call to Call Methods with a Custom Receiver**
[ClickThisLink](https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec3)

- **Use apply to Call Functions with Different Numbers of Arguments**
[ClickThisLink](https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec4)

- **Use bind to Extract Methods with a Fixed Receiver **
[ClickThisLink](https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch03.html#ch03lev1sec9)


## DOM

- **Uncovering the Native DOM API**
[ClickThisLink](https://ponyfoo.com/articles/uncovering-the-native-dom-api)

- **DOM Tips and Techniques: Parent, Child, and Siblings**
[ClickThisLink](https://www.sitepoint.com/dom-tips-techniques-parent-child-siblings/)

- **The Basics of DOM Manipulation in Vanilla JavaScript (No jQuery)**
[ClickThisLink](https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/)

- **An Introduction To DOM Events — Smashing Magazine**
[ClickThisLink](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)


- **JavaScript Events - w3school **
good for quick look at all events in javascript


- **The Event() constructor**
[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)


- **The Event interface**
[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/API/Event)


[ClickThisLink](https://www.w3schools.com/js/js_events.asp)

- **Introduction to events**
[ClickThisLink](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)


- **DOM in depth -1 -MyNotes**
[ClickThisLink](https://github.com/deenjohn/Javascript-revision/tree/master/DOM%20in%20depth%20-1)

[ClickThisLink](https://know-it-all.io/)

[ClickThisLink](https://codepen.io/collection/Dapaqx/)

[ClickThisLink](http://domenlightenment.com/)



## ES6 ,functional


- **Annotated Underscore.js source code**
[ClickThisLink](http://underscorejs.org/docs/underscore.html)
[ClickThisLink](https://github.com/deenjohn/Javascript-revision/blob/master/General/underscore%20notes)

- **MDN : Array API **
[ClickThisLink](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


https://github.com/deenjohn/functional-javascript

- **Functional Programming**
[ClickThisLink](https://codepen.io/collection/nWRKrb/)

- **JavaScript hacks for ES6 hipsters**
[ClickThisLink](https://hackernoon.com/javascript-hacks-for-es6-hipsters-67d633ce8ace?source=placement_card_footer_grid---------2-60)


- **Creating an ES6ish Compose in Javascript**

  Creating an ES6ish Compose in Javascript – Drew Tipson – Medium

  Let’s Make a Monad – Drew Tipson – Medium

  Currying versus partial application (with JavaScript code)

- **The event loop and the rise of Async programming + 5 ways to better coding with async/await**

[ClickThisLink](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)


### Async-Await /Promises

- **Promises and Asynchronous Programming**
[ClickThisLink](https://github.com/nzakas/understandinges6/blob/master/manuscript/11-Promises.md)

- **Understand promises before you start using async/await**
[ClickThisLink](https://medium.com/@bluepnume/learn-about-promises-before-you-start-using-async-await-eb148164a9c8)

- **Master the JavaScript Interview: What is a Promise?**
[ClickThisLink](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

- **Even with async/await, raw promises are still key to writing optimal concurrent javascript**
[ClickThisLink](https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161)


## Event Loop 

### Level 1
 
- **Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014**
[ClickThisLink](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

### ### Level 2

- **Understanding the Node.js Event Loop**
[ClickThisLink](https://blog.risingstack.com/node-js-at-scale-understanding-node-js-event-loop/)


- **Jake Archibald: In The Loop**
[ClickThisLink](https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=8s)


### Level 3 : master level  

- **lesson : The Internals of Node**
[ClickThisLink](https://www.udemy.com/advanced-node-for-developers/)


## Concurrency :

[ClickThisLink](https://www.safaribooksonline.com/library/view/effective-javascript-68/9780132902281/ch07.html)


## V8

- **How JavaScript works: an overview of the engine, the runtime, and the call stack**

[ClickThisLink](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)


- **How JavaScript works: tracking changes in the DOM using MutationObser**

[ClickThisLink](https://blog.sessionstack.com/how-javascript-works-tracking-changes-in-the-dom-using-mutationobserver-86adc7446401)

- **How JavaScript works: The building blocks of Web Workers + 5 cases when you should use them**

[ClickThisLink](https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a)

- **An overview of the engine, the runtime, and the call stack**

[ClickThisLink](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf?source=collection_home---2------1----------------)



- **How JavaScript works: Deep dive into WebSockets and HTTP/2 with SSE + how to pick the right path**

[ClickThisLink](https://blog.sessionstack.com/how-javascript-works-deep-dive-into-websockets-and-http-2-with-sse-how-to-pick-the-right-path-584e6b8e3bf7)

- **How JavaScript works: memory management + how to handle 4 common memory leaks**
[ClickThisLink](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec?source=user_profile---------8----------------)

- **How JavaScript works: the rendering engine and tips to optimize its performance**

[ClickThisLink](https://blog.sessionstack.com/how-javascript-works-the-rendering-engine-and-tips-to-optimize-its-performance-7b95553baeda)


- **How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code**

[ClickThisLink](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)

- **How Modern Web Browsers Accelerate Performance: The Networking Layer**

[ClickThisLink](https://blog.sessionstack.com/how-modern-web-browsers-accelerate-performance-the-networking-layer-f6efaf7bfcf4)



# Books :
(only mentioning the books i read & found helpful)


### For Core Javascript

- **Professional JavaScript for Web Developers**

The only book that covers events & HTML Form inner details in depth.

An awesome coverage on Objects,prototypes,all the inheritance patterns


- **You Don't Know JS series: 
[ClickThisLink](https://github.com/getify/You-Dont-Know-JS)


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

[ClickThisLink](http://exploringjs.com/es6.html)
  
best book
 
 
- **ES6 Katas**
[ClickThisLink](http://es6katas.org/)

- **ES6 Modules in Depth**
[ClickThisLink](https://ponyfoo.com/articles/es6-modules-in-depth)

## Functional JS Reading


### books :

- **Introducing functional programming with Underscore.js**

- **Functional-Light JavaScript: Pragmatic, Balanced FP in JavaScript**

- **http://reactivex.io/learnrx/**

- **Functional Programming in JavaScript Luis Atencio**

[ClickThisLink](https://github.com/mjavascript/mastering-modular-javascript)

[ClickThisLink](https://github.com/mjavascript/practical-modern-javascript)



## Regex


- **Breaking the Ice With Regular Expressions**
[ClickThisLink](https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions)

The only REGEX course that really taught me Regex , it's free too


- **Regular Expressions Demystified: RegEx isn’t as hard as it looks**

[ClickThisLink](https://medium.freecodecamp.org/regular-expressions-demystified-regex-isnt-as-
hard-as-it-looks-617b55cf787)


# Video Courses :


## Fundamentals Javascript Course

- **JavaScript: Understanding the Weird Parts**

[ClickThisLink](https://www.udemy.com/understand-javascript/)

A great course which gives you a rock solid foundation but even more, you start loving javascript


- **Deep JavaScript Foundations**

[ClickThisLink](https://frontendmasters.com/courses/javascript-foundations/)

taught by Kyle Simpson .... enough said


- **JavaScript: Events**
[ClickThisLink](https://www.lynda.com/JavaScript-tutorials/JavaScript-Events/140780-2.html)


- **JavaScript: Enhancing the DOM**
[ClickThisLink](https://www.lynda.com/HTML-tutorials/JavaScript-Enhancing-DOM/122462-2.html)

- **JavaScript Objects and Prototypes**
[ClickThisLink](https://app.pluralsight.com/library/courses/javascript-objects-prototypes)

- **Reduce Data with Javascript Array#reduce**
[ClickThisLink](https://egghead.io/courses/reduce-data-with-javascript)

- **Understand Javascript arrays**
[ClickThisLink](https://egghead.io/courses/understand-javascript-arrays)

[ClickThisLink](https://github.com/deenjohn/Javascript-revision)
[ClickThisLink](https://github.com/deenjohn/functional-javascript)
[ClickThisLink](https://github.com/deenjohn/You-Dont-Need-JavaScript)

- **Advanced Javascript**

[ClickThisLink](https://www.udemy.com/top-javascript-interview-questions-and-answers/)
(good course- covers CORS,JSONP)

- **JavaScript 30 — Build 30 things with vanilla JS in 30 days**
[ClickThisLink](https://javascript30.com/)


- **The Complete JavaScript Course: Build a Real-World Project*

[ClickThisLink](https://www.udemy.com/the-complete-javascript-course/)


- **JavaScript: Getting Started**
[ClickThisLink](https://app.pluralsight.com/library/courses/javascript-getting-started/table-of-contents)


- **jQuery-free JavaScript**
[ClickThisLink](https://app.pluralsight.com/library/courses/jquery-free-javascript)
(awesome course -teaches you DOM in depth)


- **JavaScript: The Hard Parts**
[ClickThisLink](https://frontendmasters.com/courses/javascript-hard-parts/)

- **Modern Asynchronous JavaScript**
[ClickThisLink](https://app.pluralsight.com/library/courses/javascript-asynchronous-modern/table-of-contentsnts)

- **Reasoning About Asynchronous JavaScript**
[ClickThisLink](https://app.pluralsight.com/library/courses/asynchronous-javascript-reasoning/table-of-contents)

- **Asynchronous Programming: The End of The Loop**
[ClickThisLink](https://egghead.io/courses/asynchronous-programming-the-end-of-the-loop)


- **Asynchronous Programming in JavaScript (with Rx.js Observables)**
[ClickThisLink](https://frontendmasters.com/courses/asynchronous-javascript/)

- **Advanced Asynchronous JavaScript**
[ClickThisLink](https://frontendmasters.com/courses/advanced-async-js/)


## ES6 Course	

- **Rapid ES6 Training**
[ClickThisLink](https://app.pluralsight.com/library/courses/rapid-es6-training/table-of-contents)

Most in-depth of all course on ES6 , complement the Exploring ES6
by Dr. Axel Rauschmayer book well

- **ES6: The Right Parts**
[ClickThisLink](https://frontendmasters.com/courses/es6-right-parts/)


- **ES6 for Everyone! | Wes Bos**
[ClickThisLink](http://wesbos.com/es6-for-everyone/)


- **ES6 in Motion**
[ClickThisLink](https://www.safaribooksonline.com/library/view/es6-in-motion/10000MNLV201701/)

(good to learn es6 class in depth )


## Functional JS course

- **Functional-Lite JavaScript**
[ClickThisLink](https://frontendmasters.com/courses/functional-javascript-v2/)

- **Deep Dive into Functional JavaScript [Video] | PACKT Books**
[ClickThisLink](https://www.packtpub.com/web-development/deep-dive-functional-javascript-video)

- **Mastering Functional JavaScript Libraries**

[ClickThisLink](https://www.packtpub.com/web-development/mastering-functional-javascript-libraries-video)

## Debugging course

- **Debugging and Fixing Common JavaScript Errors**
[ClickThisLink](https://frontendmasters.com/courses/debugging-javascript/)

- **Fixing Common JavaScript Bugs**  
[ClickThisLink](https://app.pluralsight.com/library/courses/fixing-common-javascript-bugs/table-of-contents)



### Testing 


- **Testing Clientside JavaScript**
[ClickThisLink](https://app.pluralsight.com/library/courses/testing-javascript)

- **Testing JavaScript Applications (feat. React and Redux)**
[ClickThisLink](https://frontendmasters.com/courses/testing-javascript/)

- **Front-End First: Testing and Prototyping JavaScript Apps**
[ClickThisLink](https://app.pluralsight.com/library/courses/testing-and-prototyping-javascript-apps/table-of-contents)

- **Testing JavaScript for Node.js with Mocha**
[ClickThisLink](https://app.pluralsight.com/library/courses/mocha-javascript-testing-nodejs/table-of-contents)

- **Unit Testing with Node.js**
[ClickThisLink](https://app.pluralsight.com/library/courses/unit-testing-nodejs/table-of-contents)

- **Building a JavaScript Development Environment**
[ClickThisLink](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)

- **Understanding Jest Mocks**
[ClickThisLink](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)

[ClickThisLink](https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d?source=bookmarks---------19----------------)

[ClickThisLink](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)


[ClickThisLink](https://github.com/deenjohn/Testing-In-Depth/blob/master/jest2.js)


[ClickThisLink](https://medium.com/@mbaranovski/quick-guide-to-tdd-in-react-81888be67c64)

[ClickThisLink](https://medium.com/@7ynk3r/react-testing-done-right-24fdb4ef43d8)

 

## Interview Preparation - mocks

- **Answering Tricky JS Interview Questions**
[ClickThisLink](https://www.youtube.com/watch?v=MY0UBGX2FtA)

[ClickThisLink](https://www.youtube.com/watch?v=057Rs6CgJnY)


### Talks

- **https://github.com/AllThingsSmitty/must-watch-javascript
   
 A list of important javascript talks
  
- **How Browsers Work_ Behind the scenes of modern web browsers**
     [ClickThisLink](https://vimeo.com/44182484)
 
 How Browsers Work_ Behind the scenes of modern web browsers - HTML5 Rocks



## Extras

[ClickThisLink](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)

[ClickThisLink](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations)

[ClickThisLink](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_parsing_algorithm)

[ClickThisLink](https://github.com/WebKit/webkit/blob/fde57e46b1f8d7dde4b2006aaf7ebe5a09a6984b/Source/WebCore/rendering/RenderObject.h)

[ClickThisLink](https://codeburst.io/the-ultimate-guide-to-learning-full-stack-web-development-in-6-months-for-30-72b3854a7458)

[ClickThisLink](https://www.reddit.com/r/cscareerquestions/comments/5gnmkj/what_are_some_of_the_best_resu%D0%BCe_formats_youve/)

[ClickThisLink](https://github.com/thlorenz/v8-perf)

[ClickThisLink](http://benediktmeurer.de/2017/10/05/connecting-the-dots/)

[ClickThisLink](https://github.com/thlorenz/async-await-box)

[ClickThisLink](https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-roro-be01e7669cbd)

[ClickThisLink](https://codeburst.io/javascript-null-vs-undefined-20f955215a2?source=placement_card_footer_grid---------2-60)

[ClickThisLink](https://google.github.io/styleguide/jsguide.html)

[ClickThisLink](https://github.com/airbnb/javascript)








