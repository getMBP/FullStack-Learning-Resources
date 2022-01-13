

#  CSS 

https://www.w3.org/TR/
https://way2tutorial.com/css/tutorial.php
https://www.youtube.com/playlist?list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe



**1) Absolute vs Relative vs fixed in depth**
https://www.youtube.com/watch?v=jx5jmI0UlXU

Both the "absolute" and "fixed" value take the element the value is applied to out of the document flow. 
https://webplatform.github.io/docs/tutorials/absolute_and_fixed_positioning/

https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position2
https://www.w3.org/TR/CSS2/visuren.html


**Que : How Would You Make This At The Bottom?Using Relative,Height Of Body**

~~~html
<style>

body{
   height: 100%;
}

div.relative {
  position: relative;
  bottom: 0;
  border: 3px solid #73AD21;
}

or 

div.relative {
  position: absolute;
  bottom: 0;
  border: 3px solid #73AD21;
}

</style>
</head>
<body>


<div class="relative">
This div element has position: relative;
</div>

	
~~~

**2) 4 div in row , swap 3rd and 4th **

**3) diff btw 3 div with relative and 3 div with absolute**


**Absolute 
**
```css

 #box_1 { 
	position: absolute;
	width: 200px;
	height: 200px;
	background: #ee3e64;
    border : 2px solid black
}

#box_2 { 
	position: absolute;
	width: 200px;
	height: 200px;
	background: #44accf;
}

#box_3 { 
	position: absolute;
	width: 200px;
	height: 200px;
	background: #b7d84b;
}


Relative


  #box_1 { 
	position: relative;
	width: 200px;
	height: 200px;
	background: #ee3e64;
    border : 2px solid black
}

#box_2 { 
	position: relative;
	left: 200px;
	width: 200px;
	height: 200px;
	background: #44accf;
}
#box_3 { 
	position: relative;
	width: 200px;
	height: 200px;
	background: #b7d84b;
}

```


**4) explain box model , box sizing **

https://www.bitdegree.org/learn/css-box-sizing#:~:text=Sizing%3A%20Useful%20Tips-,CSS%20Box%2DSizing%3A%20Main%20Tips,by%20using%20the%20resize%20property.
https://www.w3schools.com/css/css3_box-sizing.asp
https://www.w3schools.com/css/css_boxmodel.asp
https://www.w3schools.com/jsref/prop_style_boxsizing.asp
https://learn.javascript.ru/box-sizing


**5) diff between inline and inline-block**

Height and width won't work for display:inline but border,padding are respected
Also, with display: inline, top and bottom margins are not respected, 

and with display: inline-block they are.

https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1
https://www.w3schools.com/cssref/pr_class_display.asp

**6) what is fixed positioning : what happens to width and height if you apply the fixed positioning on some element.**

```html
<body>
        <div class="parent">
            <div class="child-1">Navigation Bar</div>
            <div class="child-2">Background Image</div>
            <div class="child-3">Features</div>
        </div>
    </body>

```

**que : selectors :**

difference btw .class1 .class2 and .class1.class2 


**que : inline vs external,embedded vs internal css 
between external vs embedded css, whichever comes later in html page will overide the css property **

inline wins among all styles

https://www.w3schools.com/css/css_howto.asp
https://www.youtube.com/watch?v=PigxOyVDIQg&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=2
https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_multiple


**que : how to centre a div inside another div**
https://www.youtube.com/watch?v=ZohZS6xLYE4&list=PL7pEw9n3GkoWn5TcqAdmSzXcvC3d_tfAh&index=3
https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute




```html
<div class="parent">This div element has position: relative;
  <div class="child">This div element has position: absolute;</div>
</div>
```

```css

div.parent {
 
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
} 

div.child {
  
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}

```

####  que : semantic html elements and their order 
https://www.w3schools.com/html/html5_semantic_elements.asp

#### que : lazy loading images que : lazy loading images
https://app.pluralsight.com/player?course=responsive-web-design-images-sliders&author=paul-cheney&name=responsive-web-design-images-sliders-m8&clip=0&mode=live


#### css psuedo classes and psuedo elements
https://www.w3schools.com/css/css_pseudo_classes.asp
https://www.w3schools.com/css/css_pseudo_elements.asp

#### que : view port units
https://www.youtube.com/watch?v=_sgF8I-Q1Gs
https://www.youtube.com/watch?v=JANETBQZJ8E


#### que : css visibility vs display none
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility


#### que : what is css reset

#### que : what is css flexbox
https://www.w3schools.com/css/css3_flexbox.asp

#### que : css display
https://www.w3schools.com/cssref/playit.asp?filename=playcss_display&preval=table

#### que : display and hidden
https://alistapart.com/article/now-you-see-me/
https://www.w3schools.com/css/css_display_visibility.asp
https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone

#### que : what is css variable 
https://www.youtube.com/watch?v=xeMMAx7hWYQ&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=29

#### Que : Media queries
https://www.w3.org/TR/mediaqueries-4/
https://responsivebreakpoints.com/

are media queries enough to make page responsive 



#### Que : css units
https://www.youtube.com/watch?v=unj9nAeYU1Q

#### Que : how many ways to center a div
https://stackoverflow.com/questions/356809/best-way-to-center-a-div-on-a-page-vertically-and-horizontally


#### visibility:hidden vs display:none vs opacity:0

https://stackoverflow.com/questions/14731049/visibilityhidden-vs-displaynone-vs-opacity0

# HTML5

https://html.spec.whatwg.org/

que : if you use header 5 times, what will happen ?

## quirk mode
https://www.quirksmode.org/css/quirksmode.html


# Javascript

### https://www.ecma-international.org/ecma-262/10.0/index.html#sec-intro (Javascript spec)

```javascript

function findMyType() {
  let a = b = 0;
  a++;
  return a;
}

findMyType();
typeof a; 
typeof b

```
## hoisting 

```js
 console.log(parent());

 function parent() {
    var sample = "I am a variable";

    function sample() {
        return "Im a function";
    }
    return sample(); // "Im a function"
 }
 
```


### what is difference between debounce and throttle 

### write debounce code

###  arrow function

```js

var obj = {
    name : 'deen' , 
    greet: () =>{console.log(this .name) 
}}

obj.greet()

```

### deep compare two objects

```javascript

let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "DD"}, object: 3};


function deepCompare(obj1,obj2){
   let res ;
  Object.keys(obj1).forEach((key)=>{
    if(obj1[key]!==obj2[key] ){
          res = false;
         return ;
       } else if(typeof obj1[key] ==='object' ) {
         
      return deepCompare(obj1[key], obj2[key]);
    } else {
      res = true;
    }
  })
  
  return res;
 
}

console.log(deepCompare(obj,obj));

```

#### All microtasks are completed before any other event handling or rendering or any other macrotask takes place.

### event loop
```javascript

setTimeout(()=>{
    console.log('1')
},4000)

setTimeout(()=>{
    console.log('2')
},1000)

```

### event loop
```javascript

/*

a > end >
  d > h > d > h > d > h > 
    newP > newP >newP
     b > 
       e > c > e >
          g> 
	    f>f>f

*/

console.log('stack [1] a');
setTimeout(() => console.log("macro [2] b"), 0);
setTimeout(() => console.log("macro [3] c"), 1);

const resolvedPromise = Promise.resolve();
for(let i = 0; i < 3; i++) {
    resolvedPromise.then(() => {
        console.log('stack [4] d');
	
	//micro
        new Promise((res,rej)=>{
            res('newP')
        })
        .then((response)=>{
            console.log(response)
        });
	
        setTimeout(() => {
            console.log('stack [5] e') //stack
            setTimeout(() => console.log("macro [5] f"), 0); //macro
            resolvedPromise.then(() => console.log('micro [6] g')); //micro
        }, 0);
	
       console.log("stack [7] h");
  });
}

console.log("macro [8] end")

/*
   stack : a , end 
   [           ] microtask
   [           ] macrotask

*/

```

```js

// output : b , c ,a

setTimeout(()=>{

 console.log('a')

},0)

Promise.resolve('success').then(()=>console.log('b'))

new Promise((res,rej)=>{
    res('c')
})
.then((response)=>{
    console.log(response)
})

```

### for event loop refer

https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

https://developer.ibm.com/languages/node-js/tutorials/learn-nodejs-the-event-loop/



### Promises
https://danlevy.net/javascript-promises-quiz/
https://levelup.gitconnected.com/javascript-interview-questions-promises-400c51805cbe
https://medium.com/javascript-in-plain-english/6-interview-questions-that-combine-promise-and-settimeout-34c430fc297e
https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

### que: Promise all : what would happen if one of promise fail
### can you wrote polyfill for promise all



```javascript

var p = new Promise((resolve, reject) => setTimeout(() => { resolve(1); resolve(2) }, 1000))
p.then((val) => console.log("asynchronous logging has val:",val))

```

### que : output in below code

```javascript

console.log(10)

setTimeout(()=>{console.log(20)}, 1000)

setTimeout(()=>{console.log(30)}, 10)

console.log(40);

// could be fetch which resolve as per delay

new Promise((res,reject)=>{
  setTimeout(()=> res('done'),25)  // only 25 delay
})
  .then(res => console.log('res ',res))

function delay(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


delay(3000);  // what is the output if we remove the delay

console.log(60);

```

### que : output in below code

```js

function test() {

    console.log(x);
    console.log(y);

  // setTimeout(()=> {
  //   console.log(x);
  //   console.log(y);
  // }, 1000);

  var x = 2;
  let y = 3;
}

test();
```

### que : microtask queue 
https://blog.risingstack.com/writing-a-javascript-framework-execution-timing-beyond-settimeout/


### que :

```javascript
https://javascript.info/async-await


const arrObj = [ { x: 3 }, { x: 9 }, { x: 5 }]



/* should print
wait 2 sec then print ist num then wait 2 sec then print next number in array
3
5
9
*/

const sortAndPrint = async (n, arrObj) => {

var t = n ;

arrObj.sort( (a,b)=>a.x - b.x  );

for(let i =0 ;i< arrObj.length ; i++){
    var promise = new Promise((resolve) => setTimeout(()=>resolve(arrObj[i],t)));
    var res = await promise ;
    console.log(res);
 }
  
}

sortAndPrint(2, arrObj)

```

### Que : Promise in a loop

```javascript
var promises = [];
 //let channels =[];

 [1, 2, 3, 4, 5].forEach((elm, i) => {

   promises.push(new Promise((resolve) => {
     setTimeout(() => { 
       //channels.push(elm); console.log(channels)
       resolve(elm);
     },  5000)  //setimeout is simulating operation like fetch
   }))

 });console.log("done")
 
 Promise.all(promises).then(() =>promises[0].then((x)=> console.log(x))) 
 
 ```

Without fetch like operation

```javascript

var promises = [];

 [1, 2, 3, 4, 5].forEach((elm, i) => {

   promises.push(new Promise((resolve) => {
       resolve(elm);
   }))

 });
 
 console.log("done")
 
 Promise.all(promises).then(() =>promises[0].then((x)=> console.log(x))) 
 ```


#### que1 
// Function to remove two adjacent duplicate characters from a string.
// let str = 'abbbbaca';
// output: 'ca'

#### que 2:
Singleton pattern


#### que 3 :

explain the diff between promise and observable
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

#### que :
 merge two arrays , remove duplicates and all positive ids only and in sorting order
 
 arr1 = [{id:1},{id:4},{id:2},{id:6}]
 arr2 = [{id:7},{id:1},{id:6},{id:3},{id: -1}]

use this : https://reactgo.com/removeduplicateobjects/

#### que : 

flat a nested array 

que :

obj = {
  i = 0 ;
toString:function(){
     obj.i++
   }
}

obj == 1 , obj == 2 , obj ==3

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Flatten_an_array_of_arrays
https://medium.com/dailyjs/flatten-array-using-array-flat-in-javascript-ee4d0b2423e5
https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays


#### que : session storage vs local storage
https://javascript.info/localstorage
https://www.youtube.com/watch?v=MOd5cTJ6kaA


#### que : how to compare two objects

#### que : how does json.stringify works


#### que : cors

https://www.test-cors.org/


udemy lecture javascript-advanced/learn/lecture/4673524#announcements

https://www.youtube.com/watch?v=NzEEIiDytBI
https://www.youtube.com/watch?v=zoSJ3bNGPp0
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://www.youtube.com/watch?v=tcLW5d0KAYE
https://fetch.spec.whatwg.org/#http-cors-protocol

```Javascript


//get request Origin: http://localhost:3000

```js
    fetch("http://localhost:3000/api/person/:1") 
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
     console.log(data)
         })
```
//gives cors error , unless you allow it on server
//Origin: http://localhost:3000

fetch("http://localhost:4000/api/person/:1") //http://localhost:4000/api/person/:1
	.then((resp) => resp.json()) // Transform the data into json
	.then(function(data) {
					
	   console.log(data)

	})
	
//to allow the cors on server
 
 app.get('/api/person/:id', function(req, res) {

    //allow cors
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-Custom-Header,Origin,X-Requested-With,ContentType,Accept')
	// get that data from database
	res.json({ firstname: 'John', lastname: 'Doe' });
});
				
```
```javascript 

// output in what order, after how many sec
 alert('hello')

 setTimeout(()=>{
 console.log('1000')
 },1000)

  setTimeout(()=>{
     console.log('5000')
 },5000)
 
 ```
#### fetch api
https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

#### que : http headers
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers


#### que :async vs defer
https://www.youtube.com/watch?v=IrHmpdORLu8&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=11

#### que : can we return a closure from closure 


#### que : types in javascript and how to test them

#### Que :InstanceOf
https://javascript.info/instanceof

obj instanceOf Class checks whether Class.prototype equals to one of prototypes in the obj prototype chain.
In other words, compare one after another:

```Javascript
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?

```

#### Problem with instanceof

```Javascript
function Rabbit() {}
let rabbit = new Rabbit();

// changed the prototype
Rabbit.prototype = {};

// ...not a rabbit any more!
alert( rabbit instanceof Rabbit ); // false

```

#### Que : types and typeof
https://javascript.info/types

#### Que :currying (advance currying)
https://javascript.info/currying-partials

```js
// "use strict"

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args); //what if i pass null or undefined in this case , what if i use "use strict"
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}



```

### que : check for NaN and undefined value in javascript
https://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript
https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript

```js

var a =10;
if(true){

let a = 20;
}
const a = 30;
console.log(a);

````

#### que : sort in javascript and how it works internally

The sort() method sorts the elements of an array in place and returns the sorted array. 
The default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code units values

https://dev.to/banesag/sorting-arrays-of-strings-in-javascript-2g11
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

```javascript

arr = [5,3,7,1,4]

arr.sort((a,b)=> { console.log(`a is ${a} , b is ${b} `) ;return a-b})
VM817:1 a is 3 , b is 5 
VM817:1 a is 7 , b is 3 
VM817:1 a is 7 , b is 5 
VM817:1 a is 1 , b is 5 
VM817:1 a is 1 , b is 3 
VM817:1 a is 4 , b is 5 
VM817:1 a is 4 , b is 3 

```

If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).

If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, 
but sorted with respect to all different elements. Note: the ECMAscript standard does not 
guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.

If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).



 
#### que : how to merge two objects 
https://flaviocopes.com/how-to-merge-objects-javascript/
https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically

#### que : shallow merge vs deep merge 
https://dmitripavlutin.com/how-to-compare-objects-in-javascript/


shallow
```javascript

var obj = { name : "deen" , address : ["delhi"] }
var obj2 = { name : "deen2" , address : ["delhi2"] }

var res = Object.assign({} , obj,obj2 ); //shallow merge 
obj2.address[0] = "new city"

res is also changed. This is the problem with shallow merge

```

deep

```javascript

var obj = { name : "deen" , address : ["delhi"] }
var obj2 = { name : "deen2" , address : ["delhi2"] }

var res = Object.assign({} , JSON.parse(JSON.stringify(obj)),JSON.parse(JSON.stringify(obj2)) )

obj2.address[0] = "new city"

res is not changed

```

***problem with json.stringify for clone (paytm interview)***
https://medium.com/@pmzubar/why-json-parse-json-stringify-is-a-bad-practice-to-clone-an-object-in-javascript-b28ac5e36521

https://abdulapopoola.com/2017/02/27/what-you-didnt-know-about-json-stringify/

The JSON.stringify(..) utility will automatically omit undefined, function, and symbol values when it comes across them. If such a value is found in an array, that value is replaced by null (so that the array position information isn't altered). If found as a property of an object, that property will simply be excluded.

#### que : types of error in Javascript


#### que : how persistent is local storage 
https://stackoverflow.com/questions/9948284/how-persistent-is-localstorage


#### que : describe prototypal inheritance 
https://javascript.info/prototype-inheritance
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create


#### que : types of javascript errors 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error


#### que : Inheritance in Javascript
https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/

#### public vs private field
https://tylermcginnis.com/javascript-private-and-public-class-fields/

#### how to fetch data correctly using proise or async await

```javascript

var planetsURL = 'https://swapi.co/api/planets';

 var getDetails = async name => {
    const res = await fetch(`${planetsURL}/?search=${name}`)
    const { results = [] } = await res.json();
    console.log(results)
    return results ;
  }


   function test(){
     const res =  getDetails("Tatooine");
     res.then((x)=>{
         console.log(x)
     })
  }

  test()
  
  //test version 2
  
     async function test(){
        const res =  await getDetails("Tatooine");
        console.log(res);    
  }

  test()
  
  //wrong version
  
     function test(){
     const res =  getDetails("Tatooine");  //remember ,async function always resturns a promise
    console.log(res)
  }

  test()

```


### Que : multiple inheritance in Javscript


### Que : decide which one is the winner i.e which color got max votes 

```javascript


Given array :
var arr = ['red','green','red','green','yellow','red','green','yellow','red','blue','red','blue'];

Solution 

var max = -1 ;
var winner = null ;

function reducer(acc, c){

    if(!acc[c]){
        acc[c] = 1 ;
    }else{
        acc[c] = acc[c] +1 ;
    }
    
    if(acc[c] > max){
        max = acc[c];
        winner = c ;
    }
    
  return acc ;
}

var res = arr.reduce(reducer , {});
console.log(winner);

// var max = -1 ;
// var winner = null ;

// for (p in res){
//     if(res[p] > max){
//         max = res[p];
//         winner = p ;
//     } 
// }

```
### object equality 
https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects


### que : times internet

#### tui calendar 
https://github.com/nhn/tui.calendar

### Jwt
https://www.youtube.com/watch?v=soGRyl9ztjI
https://www.youtube.com/watch?v=DPrhem174Ws
https://www.youtube.com/watch?v=7Q17ubqLfaM&t=2s


### Javascript Codepen ( to code ) 
https://codepen.io/collection/Dggdem

Frontend Interview Questions 2019
https://www.youtube.com/watch?v=Zo-6_qx8uxg&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0

https://www.youtube.com/playlist?list=PL7pEw9n3GkoWn5TcqAdmSzXcvC3d_tfAh

# React


 ### for product base companies :
 
 1)Read how browser rendering works
 
 2)How react improve this critical path issue
 
 3) Read react reconcilliation
 
benefits of styled components
 
### browser rendering - how ot works
https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/

https://kentcdodds.com/blog/?q=react
https://github.com/sudheerj/reactjs-interview-questions

### https://codepen.io/collection/nMJEKN?grid_type=list


### que 1 : https://codepen.io/deen_john/pen/qeoGLN?editors=0010
  // API - https://jsonplaceholder.typicode.com/users
// API - https://jsonplaceholder.typicode.com/posts


### que : What is a valid return from react render function?
false , string , number 
https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored


### que : is redux unidirectional or bidirectional

### que mount vs shallow in jest
https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913

### que : lazy loading in Javascript
https://www.youtube.com/watch?v=vx5-fQ67yDA

### que : diff between function and class components 

### que : how to pass child reference to parent  


### que : how to change parent state from child  

### que : React lifecycles
Till react < version 16 : https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d
                          https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/introduction.html
                          https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/post_mount_with_component_did_mount.html

React > v16              https://www.w3schools.com/react/react_lifecycle.asp
https://reactjs.org/docs/react-component.html#componentdidupdate

### que : in what order console statements are printed 

```jsx

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 5
    };
    console.log("HI");
  }

  componentDidMount() {
    console.log("p ->  ", this.state.x);

    this.setState(
      {
        x: 7
      },
      () => {
        console.log("q ->  ", this.state.x);
        this.setState(
          {
            x: 6
          },
          () => {
            console.log("b ->  ", this.state.x);
          }
        );
      }
    );
  }
  render() {
    console.log("a -> ", this.state.x);
    return <div className="App">{this.state.x}</div>;
  }
}

export default App;

```

### Lifecycle visualizer https://github.com/Oblosys/react-lifecycle-visualizer#readme

### render and didMount order 
https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/birth/post_mount_with_component_did_mount.html

### getDerivedStateFromProps()
if one of state depends on props , like state "direction" up or down based on some props , then this method can be used
another ex : https://twitter.com/dan_abramov/status/953612246634188800?lang=en

```jsx
getDerivedStateFromProps(props, state) {
  const { currentRowIndex } = props;
  const { lastRowIndex } = state;
  if (currentRowIndex === lastRowIndex) {
    return null;
  }
  return {
    lastRowIndex: currentRowIndex,
    isScrollingDown: lastRowIndex > currentRowIndex
  };
}

```

### ComponentWillUpdate (deprecated in react 16)
https://stackoverflow.com/questions/33075063/what-is-the-exact-usage-of-componentwillupdate-in-reactjs/33075514#33075514

### shouldComponentUpdate()
https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/update/using_should_component_update.html
what is equivalent of shouldComponentUpdate in hooks

### ComponenetDidUpdate
to perform a side effect (for example, data fetching or an animation) in response to a change in props

### Controlled and uncontrolled form
https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/

### Testing :
https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
https://stackoverflow.com/questions/38710309/when-should-you-use-render-and-shallow-in-enzyme-react-tests


### que : callback refs
https://stackoverflow.com/questions/41467146/what-is-the-different-between-the-ref-callback-and-the-ref-myinput-in-reac

### HOC
https://www.robinwieruch.de/react-higher-order-components

### hooks

https://codesandbox.io/s/z3ow32rk43

https://reactjs.org/docs/hooks-reference.html
https://dmitripavlutin.com/use-react-memo-wisely/

#### use ref 
https://www.codebeast.dev/usestate-vs-useref-re-render-or-not/
https://www.codebeast.dev/react-memoize-hooks-useRef-useCallback-useMemo/

#### forwardRefs 
https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/
https://vijayt.com/post/react-forwardref-example-and-why-it-should-not-be-part-of-react-api/

### useEffect
https://overreacted.io/a-complete-guide-to-useeffect/
https://codepen.io/deen_john/pen/eYmNdMy?editors=0011

### pure component
https://www.codebeast.dev/react-memoize-hooks-useRef-useCallback-useMemo/

### Que : what is the equivalent of shouldComponentUpdate() in hooks 

#### que : inline images
https://developers.google.com/speed/pagespeed/service/InlineSmallResources#InlineImages

 - **problem with pure component**
 https://reacttraining.com/blog/react-inline-functions-and-performance/


#### que : where to fetch data and why ####
https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/


#### when should you use state ,when to choose redux

####  PAYTM interview :

- ** Create a deep clone** 
problem with json.parse(json.stringify(obj))

- ** create a OTP input , complete below code**

```jsx
class App extends Component {
  state = { otp: '' };

  handleChange = otp => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
    );
  }
}

```
## write reusable buttons
https://codesandbox.io/s/beautiful-frog-hvlrc?file=/src/App.js

#### authorization vs authentication
https://www.geeksforgeeks.org/difference-between-authentication-and-authorization/

## how do you encode password 
## https://stackoverflow.com/questions/549/the-definitive-guide-to-form-based-website-authentication
#### que : how many redux store object can you have 

#### que : how browser loads , how does it render css and how many times it will re-render

#### controlled vs uncontrolled 


#### React events
https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6

#### que : context vs Redux .When to choose which and why ?

#### Pure Component
https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541

Class components can be pure too as long as their props and state are immutable. If you have a component with a 'deep' immutable set of props and state, React API has something called PureComponent. React.PureComponent is similar to React.Component, but it implements the ShouldComponentUpdate() method a bit differently. ShouldComponentUpdate() is invoked before something is rerendered. The default behaviour is that it returns true so that any change to the state or the props rerenders the component.

```jsx
shouldComponentUpdate(nextProps, nextState) {
  return true;
}

```

However, with PureComponent, it performs a shallow comparison of objects.

	## react theme

### React Rendering performance and how can you improve it 

### what image format is best

### lazy load a function / file

### http vs http2


### react Codepen links 
1) https://codepen.io/collection/nMJEKN  (Egghead begineer React)
2) https://codepen.io/collection/XdNJVb   (Random react)
3) https://codepen.io/collection/DzeGvW   (React Router 4)
4) https://codepen.io/collection/nRpWYd    (React patterns)
5) https://codepen.io/collection/nxEPJx    (React projects)
6) https://codepen.io/collection/nqzamv    (Redux )

# Angular



# Node
https://github.com/azat-co/node-advanced

# Backend architecture
https://www.youtube.com/watch?v=G_VMsORzbls



### Testing
https://kentcdodds.com/blog/how-to-know-what-to-test

for testing wes bos has videos in his course : Full Stack Advanced React + GraphQL

# To learn : 

### React testing 
### HTTP https://developer.mozilla.org/en-US/docs/Web/HTTP

browser caching

browser loading 

headers details

more on how request is sent and read

## security issues

## authenticate vs authorize
	
## JWT  https://auth0.com/learn/json-web-tokens/
     https://github.com/dwyl/learn-json-web-tokens
     https://www.youtube.com/watch?v=mbsmsi7l3r4
     
     
### CI CD https://www.youtube.com/watch?v=HjXTSbXG1k8
      https://derivco.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10485288#overview
      https://derivco.udemy.com/course/docker-and-kubernetes-the-complete-guide/learn/lecture/11436632#overview
      

### AWS

### DS-ALGO

https://github.com/jwasham/coding-interview-university


### React native

### SQL 


### HTTP / HTTP2
https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a

POST VS GET VS PUT


How to check if a request to page is using http2 ?

## Lead Role questions

soap vs rest
POST VS PUT
server side - why ? client side only -why ?
CORS
context vs redux vs local state
node vs java
system design : youtube , dropbox
scrum , agile etc

SRUM https://www.youtube.com/watch?v=oTZd2vo3FQU
Agile https://www.youtube.com/watch?v=NpCEjtKAa20


SOAP https://www.youtube.com/watch?v=mKjvKPlb1rA&list=PLqq-6Pq4lTTZTYpk_1DOowOGWJMIH5T39

SOAP vs Rest https://www.youtube.com/watch?v=PbIT0yppvW8

Rest  https://www.youtube.com/watch?v=qVTAB8Z2VmA

### How do you do code reviews .What steps you follow 



## To read 

### Frontend questions
https://www.glassdoor.co.in/Interview/front-end-developer-interview-questions-SRCH_KO0,19.htm


## High Paying product companies in NCR

1 mg
goibiobo
amazon
Microsoft
Chegg
Expedia
Wallmart
Swiggy
Zomato
Zeta 
Hike
Adobe
Informatica
Thoughtworks
Paytm
Zomato
Myntra
MakeMyTrip
TRC (Tower Research Capital)
American Express
Policy Bazar
airtel
TSYCS
FERNS N PETALS


High paying remote companies

1) Sangam (shaadi.com)
2) VM Ware


## High paying service companies in NCR

Nagaaro
Sapient
Xebia
.........................................................



MMT
Yatra
Healthcart
fiserv
markit
digismart

fis
bank of america
macquarie bank

commdel

limeroad
reliance jio
polaris
snapdeal/freecharge
mobikwik
shuttle
hughe systique

aricent
nextag
ixigo

proptiger

grey orange
earnst young
rivigo
accenture
indiabull
Sprinklr
indifi



## Sapient questions

Make a React based ATM machine 
https://github.com/awiles808/react-atm/tree/master/src

Make a chess board in React




## MakeMyTrip React job desc

https://careers.makemytrip.com/opportunity/18841/react-js

XORIANT
// *****************************//

 React Question & JavaScript
 1. What is difference between state and props.
 2. How do you come to wether setState is async or not?
 3. Which lifecylce method will be called first and method calling sequence.
 4. What is memonization in react.
 5. What is Pure Component and where exactly it is required.
 6. Where do you fetch api in class component method.
 7. What is stopPropogation.
 8. What is preventDefault.
 9. What is Router and it's Syntax.
 10. How to submit a form.
 11. What is switch.
 12. What is Hooks.
 13. What bootstrap, do we won't need any media queries in bootstrap, does that solves all the problems.
 14. How can we make things more responsive.
 15. What is getDerivedStateFromProps()
 
 
 var x = {
    a: { 
        b: { c: 10, d: [1,2,3,4], e: 'Hello' }
       },
    f: [ 'World', { g: 10, [10,2,4] } ]
}

16. Write a function which fill return all primitive values

### learn from react libraries open source code
  React-Bootstrap
  https://github.com/chenglou/react-treeview
  https://github.com/brillout/awesome-react-components
  https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/collections/Form/Form.js
  https://github.com/ianwitherow/react-filterable-table
  https://github.com/Autodesk/react-base-table
  https://github.com/glittershark/reactable
  https://github.com/atkawa7/rb-datepicker
  https://github.com/andreypopp/react-textarea-autosize/blob/master/src/index.js
  https://react-bootstrap.github.io/components/alerts/
  
  ### To learn how to config babel
  https://github.com/Semantic-Org/Semantic-UI-React/blob/master/.babel-preset.js
  

## Create a function that is restricted to invoking passed function only once.
 ### Repeated calls to the function should return the first time invokation value (i.e. cached value)

   ```js
	const times10 = (n) => n*10; 

function memoizeOnce(fn) {
   // add code here
let cb = fn;
let cacheValue = null;
  
return (c) =>{
 if(!c){
  return 'Please send a number'
 }
  
  
  if(cacheValue){
     return cacheValue
    }else {
      cacheValue=  fn.call(c);
     return cacheValue;
    }
  
  }
}

const memoizeOnceTimes10 = memoizeOnce(times10);
 console.log(memoizeOnceTimes10(undefined)) // 100
console.log(memoizeOnceTimes10(20)) // 100
 console.log(memoizeOnceTimes10(30)) // 100

const person = {
name: 'Ankit',
introduce: function() {
return `Hi this is ${this.name}`;
 }
};

let personIntroduce = memoizeOnce(person.introduce)

console.log(personIntroduce.call(person)) // 100
console.log(personIntroduce.call(person)) // 100
console.log(personIntroduce.call(person)) // 100
	
	
```


 ---------------

## Implement the function that can be called in the following manner (last parameter to be passed as null/undefined indicating there are no more calls)
## sum(1)(2)(3)(4)() // expected o/p - 10

```js
	
function sum() {
  let sumResult = null;

 const innerSum = ()=>{
  
 }
return sumResult;
  
  
 }

 console.log(sum(1)(2)(3)(4)());
```


 ---------------------

// Promisify functions that accept the last argument as the callback fn.

```js
	
	function sumThree (a,b,c, callback) {
setTimeout(()=>{
 callback(null, a+b+c)
},1000)
}

function promisify(func) {
//   add code here
  
 return (...ar){
 return new Promise((res,rej){
      
 let result = func(...ar);
  if(result)
   })
  }
 }

 const sumThreePromisifed = promisify(sumThree);

 sumThreePromisifed(1, 2, 3)
  .then((sum) => console.log(' sum is ', sum))
   .catch((err) => console.log(' err is', err));

	
	
```
	
	


----------

## How would you place an icon on the top-right corner of a container 
## such that the center of the icon is coinciding with the corner of the container

	https://i.stack.imgur.com/AY8ka.png
						        |-----|
--------------------|     |
|     						  |-----|
|							         |
|							         |
|							         |
|______________________|

.rectangle {
  position: relative;
  z-index: 0;
}
.icon {
  position: absolute;
  top: 0;
   right: 0;
  z-index: 1;
  transform: translateX(50%);
  transform: translateY(-50%);
  
}

<rectangle>
  <icon/>
  ...
</rectangle>


## react

how would you implement a modal from scratch , what would be the props
https://github.com/reactjs/react-modal/blob/master/src/components/ModalPortal.js

## how would you write a two way binding in vanilla js


## integrating react with other library


## design patterns in javascript

## class 

## write a emitter class
https://codesandbox.io/s/romantic-forest-rpdkd?file=/src/index.js

https://stackoverflow.com/questions/62502954/how-to-create-reusable-custom-modal-component-in-react


``js

input = [4,1,2,7,5,8,9,10,3,6]
expected output = [
  [9, 10],
  [7, 8],
  [5, 6],
  [3, 4],
  [1, 2],
]

input.sort((x,y)=> x-y)
const res = []

for(let i =0;i<input.length ; i=i+2){
  res.push([input[i+1],input[i]])
}

console.log(res)

 
``
  
 ### nofoolow vs Noreferrer
 
 "nofollow" is used by Google, to specify that the Google search spider should not follow that link 
 
 "Noreferrer": Specifies that the browser should not send a HTTP referrer header if the user follows the hyperlink
  
  
 ### how to make browser not store cookie
 https://html.com/resources/cookies-ultimate-guide/
 https://www.valentinog.com/blog/cookies/
 
 https://blog.bitsrc.io/web-authentication-cookies-vs-tokens-8e47d5a96d34
 
 https://owasp.org/www-community/HttpOnly
 
 https://www.bestproxyreviews.com/http-cookies/
 
 
 
 ## how to measure application performance of a live app for every user
 
 
  
  
  
  ### HTML Spec :
  
  https://html.spec.whatwg.org/multipage/rendering.html#introduction-16
  
  #### css only toggle button
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch


  #### what happen to your ajax call ifyou refresh page after making server request
```md
Assume your ajax request takes 2mins to get response while your refresh event happens in 1mins.

Ajax request and Refresh event both will be happening at the same time even though its triggered one after another.

Responce from the refresh event will disconnect all the http request for the session and load the fresh page. Also the server where the ajax is being made will check the client connection periodically . At some point the server where the ajax call being made will come to know that the client is listening no more(Response from the refresh event reloaded the page) and drop the request. At that time Ajax functionality in the server may or may not be completed. Hence its not good to call refresh event before finishing all your http requests(in your case it is Ajax).

```
#### what-will-happen-when-i-refresh-transaction-page

