
## all css properties
https://www.w3.org/Style/CSS/all-properties.en.html


### Basics

https://css-tricks.com/almanac/

https://www.csssolid.com/css-structural-pseudo-class.html

https://www.udemy.com/css-the-complete-guide-incl-flexbox-grid-sass/
https://www.w3.org/TR/CSS2/visuren.html


#### box model
https://www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel_width

### em vs rem 

practical example :
https://github.com/CSSInDepth/css-in-depth/blob/master/ch02/listing-2.3.html

https://web.dev/learn/css/sizing/

#### Inheritance

  ##### width and height are inherited but can be overiden by % or px
  
   height(https://css-tricks.com/almanac/properties/h/height/) of a block level elem is its height + children's like a <section> element may have its children
 block level elements takes full height by default.
  
  ##### box sizing :
  Include padding and border in the element's total width and height:
  
 http://blog.teamtreehouse.com/box-sizing-secret-simple-css-layouts
 
 https://www.w3schools.com/cssref/css3_pr_box-sizing.asp
 
 https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing (best)
 
 https://css-tricks.com/box-sizing/
 
 https://codepen.io/deen_john/pen/LrwOgV
 
 
#### Selectors :

 https://www.w3schools.com/cssref/css_selectors.asp
 https://www.w3schools.com/cssref/trysel.asp
https://www.safaribooksonline.com/library/view/css-the-definitive/9781449325053/ch02.html#selectors_comma_specificity_comma_an
https://css-tricks.com/child-and-sibling-selectors/

#### Box model:
  
  ### body default margin :
     to prevent this, add margin : 0  , in body element
     
  ### margin collapse
     
   ##### There, three base cases are described:
     

      Adjacent siblings which both have margins
      A parent which holds one or more child elements where the first and/ or last (or the only) child has margins
      An element without content, padding, border and height
      Let's explore these cases:

      1. Adjacent Siblings

      In this case, the first element might have a margin of 10px  (on all sides let's say) and the second one has 5px  (or 20px  - the values don't matter).

      CSS will collapse the margins and only add the bigger one between the elements. So if we got margins of 10px  and 5px , a 10px  margin would be added between the elements?

      2. A parent with children that have a margin

      To be precise, the first and/ or last or the only child has to have margins (top and/ or bottom). In that case, the parent elements margin will collapse with the child element(s)' margins. Again, the bigger margin wins and will be applied to the parent element.

      If the parent element has padding, inline content (other than the child elements) or a border, this behavior should not occur, the child margin will instead be added to the content of the wrapping parent element.

      3. An empty element with margins

      This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into one single margin. Again, the bigger one wins.


#### Text Align
https://css-tricks.com/almanac/properties/t/text-align/
  
#### practical use of transform and translate
https://www.w3schools.com/howto/howto_css_overlay.asp

#### Cascade and Inheritance
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance


- **Introduction to CSS**
https://app.pluralsight.com/library/courses/css-intro/table-of-contents

- **Inspired CSS: Styling for a Beautiful Web**
https://www.safaribooksonline.com/library/view/inspired-css-styling/9780321563767/

- **Designing with CSS for a Beautiful Web, Video**
https://www.safaribooksonline.com/library/view/designing-with-css/9780321668660/

- **Build Responsive Real World Websites with HTML5 and CSS3**
https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/


### positioning

position absolute takes the element out from its container and the height of container collapse

## css psuedo elements and classes 
https://www.freecodecamp.org/news/explained-css-pseudo-classes-cef3c3177361/
	
### Advance


- **Advanced CSS and Sass: Take Your CSS to the Next Level!**
https://www.udemy.com/advanced-css-and-sass/


- **Learning CSS Transitions**
https://www.safaribooksonline.com/library/view/learning-css-transitions/9781491994771/

- **Learning CSS Animations**
https://www.safaribooksonline.com/library/view/learning-css-animations/9781491994795/


- **Designing Web Accessibility for a Beautiful Web, Video**
https://www.safaribooksonline.com/library/view/designing-web-accessibility/9780321668622/


### CSS Grid

- **CSS Grid Changes EVERYTHING**
https://www.youtube.com/watch?v=7kVeCqQCxlk&feature=youtu.be

- **WesBos CSS Grid**
https://cssgrid.io/

- **CSS Grid Jen simmons**
https://www.youtube.com/watch?v=FEnRpy9Xfes&list=PLbSquHt1VCf18lllS0C5quAaOcsuMAC70
https://www.youtube.com/watch?v=Gn3JOE6qMuE



## css challenges
https://codepen.io/collection/wakvmZ?sort_by=item_created_at&grid_type=grid&cursor=ZD0xJm89MSZwPTEmdj0yMDIxLTA2LTE2KzE4JTNBMDglM0EyMCtVVEM=



### CSS Flexbox
https://medium.com/@js_tut/the-complete-css-flex-box-tutorial-d17971950bdc

### CSS reference
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

### Event reference
https://developer.mozilla.org/en-US/docs/Web/Events

### SCSS

https://github.com/livingstyleguide/livingstyleguide


### Extras

https://www.sitepoint.com/twenty-top-advanced-css-tutorials/


http://www.barelyfitz.com/screencast/html-training/css/positioning/



## Libraries source code to learn css

https://daneden.github.io/animate.css/
https://github.com/daneden/animate.css
http://bouncejs.com/
https://github.com/elrumordelaluz/csshake
http://ianlunn.github.io/Hover/




## SCSS 
https://css-tricks.com/the-sass-ampersand/


## css examples 
  https://www.w3schools.com/css/css_examples.asp

## css based components 
https://css-components.felipefialho.com/#component-tooltip

## extras 
  
 ## css channel
  https://www.youtube.com/kepowob
  
  
  ## css problems 
  
  
  
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
  
  
 
**6) what is fixed positioning : what happens to width and height if you apply the fixed positioning on some element.**

element with position:fixed are always relative to the initial containing block.
	
just adding position fixed on child 2 takes it out of natural flow and then you can use top / bottom to place it respective to view port
	
	
```html
<body>
        <div class="parent">
            <div class="child-1">Navigation Bar</div>
            <div class="child-2">Background Image</div> 
            <div class="child-3">Features</div>
        </div>
    </body>

```
  
**que : inline vs external,embedded vs internal css 
between external vs embedded css, whichever comes later in html page will overide the css property **

inline wins among all styles
  
  
  
#### css psuedo classes and psuedo elements
https://www.w3schools.com/css/css_pseudo_classes.asp
https://www.w3schools.com/css/css_pseudo_elements.asp

#### que : view port units
https://www.youtube.com/watch?v=_sgF8I-Q1Gs
https://www.youtube.com/watch?v=JANETBQZJ8E
  
  
  #### Que : Media queries
https://www.w3.org/TR/mediaqueries-4/
https://responsivebreakpoints.com/

are media queries enough to make page responsive 

  
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
  
  
#### css only toggle button
	
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
	
#### visibility hidden vs opacity vs opacity
https://stackoverflow.com/questions/14731049/visibilityhidden-vs-displaynone-vs-opacity0
	

	
## good links 
https://www.interviewbit.com/css-interview-questions/
	
#### websites to learn css from page by R/D
https://millipixels.com/
	

