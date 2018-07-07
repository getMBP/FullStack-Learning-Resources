

### Basics

https://www.udemy.com/css-the-complete-guide-incl-flexbox-grid-sass/

#### Inheritance

  ##### width and height are inherited but can be overiden by % or px
  
   height(https://css-tricks.com/almanac/properties/h/height/) of a block level elem is its height + children's like a <section> element may have its children
  
  ##### box sizing :
  
  
  
  
  block level elements takes full geight by default.
  

#### Selectors :

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

  





- **Introduction to CSS**
https://app.pluralsight.com/library/courses/css-intro/table-of-contents

- **Inspired CSS: Styling for a Beautiful Web**
https://www.safaribooksonline.com/library/view/inspired-css-styling/9780321563767/

- **Designing with CSS for a Beautiful Web, Video**
https://www.safaribooksonline.com/library/view/designing-with-css/9780321668660/

- **Build Responsive Real World Websites with HTML5 and CSS3**
https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/


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








### CSS Flexbox




### Extras

https://www.sitepoint.com/twenty-top-advanced-css-tutorials/


http://www.barelyfitz.com/screencast/html-training/css/positioning/



Libraries source code to learn css

https://daneden.github.io/animate.css/
https://github.com/daneden/animate.css
http://bouncejs.com/
https://github.com/elrumordelaluz/csshake
http://ianlunn.github.io/Hover/










