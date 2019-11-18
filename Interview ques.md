

# CSS 

https://www.w3.org/TR/
https://way2tutorial.com/css/tutorial.php
https://www.youtube.com/playlist?list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe


1) Absolute vs Relative vs fixed in depth

Both the "absolute" and "fixed" value take the element the value is applied to out of the document flow. 
https://webplatform.github.io/docs/tutorials/absolute_and_fixed_positioning/


https://www.w3schools.com/cssref/tryit.asp?filename=trycss_position2
https://www.w3.org/TR/CSS2/visuren.html


que : how would you make this at the bottom?using relative,height of body

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

2) 4 div in row , swap 3rd and 4th 

3) diff btw 3 div with relative and 3 div with absolute


Absolute 

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


4) explain box model , box sizing 
https://www.w3schools.com/css/css3_box-sizing.asp
https://www.w3schools.com/css/css_boxmodel.asp
https://www.w3schools.com/jsref/prop_style_boxsizing.asp
https://learn.javascript.ru/box-sizing

<div> <div>
	
div {

}
	


5) diff between inline and inline-block

Height and width won't work for inlin but border is respected
Also, with display: inline, top and bottom margins & paddings are not respected, 

and with display: inline-block they are.

https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1
https://www.w3schools.com/cssref/pr_class_display.asp

6) what is fixed positioning : what happens to width and height if you apply the fixed positioning on some element.

```html
<body>
        <div class="parent">
            <div class="child-1">Navigation Bar</div>
            <div class="child-2">Background Image</div>
            <div class="child-3">Features</div>
        </div>
    </body>

```

que : selectors :

difference btw .class1 .class2 and .class1.class2 


que : inline vs external,embedded vs internal css 
between external vs embedded css, whichever comes later in html page will overide the css property 

inline wins among all styles

https://www.w3schools.com/css/css_howto.asp
https://www.youtube.com/watch?v=PigxOyVDIQg&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=2
https://www.w3schools.com/css/tryit.asp?filename=trycss_howto_multiple


que : how to centre a div inside another div
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

### que : semantic html elements and their order 
https://www.w3schools.com/html/html5_semantic_elements.asp

### que : lazy loading images
https://app.pluralsight.com/player?course=responsive-web-design-images-sliders&author=paul-cheney&name=responsive-web-design-images-sliders-m8&clip=0&mode=live


### css psuedo elements
https://www.w3schools.com/css/css_pseudo_elements.asp

### que : view port units
https://www.youtube.com/watch?v=_sgF8I-Q1Gs
https://www.youtube.com/watch?v=JANETBQZJ8E


### que : css visibility vs display none
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility


### que : what is css reset

### que : what is css flexbox
https://www.w3schools.com/css/css3_flexbox.asp

### que : css display
https://www.w3schools.com/cssref/playit.asp?filename=playcss_display&preval=table

## que : display and hidden
https://alistapart.com/article/now-you-see-me/
https://www.w3schools.com/css/css_display_visibility.asp
https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone

### que : what is css variable 
https://www.youtube.com/watch?v=xeMMAx7hWYQ&list=PLyuRouwmQCjl4wTSNbb8RTKZuyMhoIxBe&index=29

### Que : Media queries
https://www.w3.org/TR/mediaqueries-4/


### Que : css units
https://www.youtube.com/watch?v=unj9nAeYU1Q

# JS

que1 
// Function to remove two adjacent duplicate characters from a string.
// let str = 'abbbbaca';
// output: 'ca'

### que 2:
Singleton pattern


### que 3 :

explain the diff between promise and observable
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

### que :
 merge two arrays , remove duplicates and all positive ids only and in sorting order
 
 arr1 = [{id:1},{id:4},{id:2},{id:6}]
 arr2 = [{id:7},{id:1},{id:6},{id:3},{id: -1}]

use this : https://reactgo.com/removeduplicateobjects/

### que : 

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


### que : session storage vs local storage
https://javascript.info/localstorage
https://www.youtube.com/watch?v=MOd5cTJ6kaA


### que : how to compare two objects

### que : how does json.stringify works


### que : cors

https://www.test-cors.org/


udemy lecture javascript-advanced/learn/lecture/4673524#announcements

https://www.youtube.com/watch?v=NzEEIiDytBI
https://www.youtube.com/watch?v=zoSJ3bNGPp0
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://www.youtube.com/watch?v=tcLW5d0KAYE
https://fetch.spec.whatwg.org/#http-cors-protocol

```Javascript


//get request Origin: http://localhost:3000

fetch("http://localhost:3000/api/person/:1") 
	.then((resp) => resp.json()) // Transform the data into json
	.then(function(data) {
					
	   console.log(data)

        })

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

### fetch api
https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

### que : http headers
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers


### que :async vs defer
https://www.youtube.com/watch?v=IrHmpdORLu8&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=11


### que : types in javascript and how to test them

### Que :InstanceOf
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

### Que : types and typeof
https://javascript.info/types

### Que :currying
https://javascript.info/currying-partials

### que : check for NaN and undefined value in javascript
https://stackoverflow.com/questions/3390396/how-to-check-for-undefined-in-javascript
https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript



### que : sort in javascript and how it works internally
https://dev.to/banesag/sorting-arrays-of-strings-in-javascript-2g11

### que : microtask queue 
https://blog.risingstack.com/writing-a-javascript-framework-execution-timing-beyond-settimeout/


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


que :

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


### que : how to merge two objects 
https://flaviocopes.com/how-to-merge-objects-javascript/

### que : types of error in Javascript

# React

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


### que : how to pass child reference to parent  


### que : React lifecycles
Till react < version 16 : https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d
                         https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/introduction.html


React > v16              https://www.w3schools.com/react/react_lifecycle.asp
https://reactjs.org/docs/react-component.html#componentdidupdate

### ComponentWillUpdate
https://stackoverflow.com/questions/33075063/what-is-the-exact-usage-of-componentwillupdate-in-reactjs/33075514#33075514


### Testing :
https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
https://stackoverflow.com/questions/38710309/when-should-you-use-render-and-shallow-in-enzyme-react-tests


### que : callback refs
https://stackoverflow.com/questions/41467146/what-is-the-different-between-the-ref-callback-and-the-ref-myinput-in-reac

#### forwardRefs 
https://vijayt.com/post/react-forwardref-example-and-why-it-should-not-be-part-of-react-api/

#### que : inline images
https://developers.google.com/speed/pagespeed/service/InlineSmallResources#InlineImages

 - **problem with pure component**
 https://reacttraining.com/blog/react-inline-functions-and-performance/


# Angular



# Node


# Backend architecture
https://www.youtube.com/watch?v=G_VMsORzbls



# To learn : 

React testing 
HTTP https://developer.mozilla.org/en-US/docs/Web/HTTP


JWT  https://auth0.com/learn/json-web-tokens/
     https://github.com/dwyl/learn-json-web-tokens
     
     
     
CI CD https://www.youtube.com/watch?v=HjXTSbXG1k8
      https://derivco.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10485288#overview
      https://derivco.udemy.com/course/docker-and-kubernetes-the-complete-guide/learn/lecture/11436632#overview
      

AWS

DS-ALGO


https://github.com/jwasham/coding-interview-university



