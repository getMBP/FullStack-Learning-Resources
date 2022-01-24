
```tsx
let myName = "Alice";
myName = 12;

let num = 3 ;


//objects 
let obj: {x: number} = { x: 0 };
obj.y = "12"



type Obj = {
    name: string,

}
let obj2:Obj = {name: "deen"}

let numArray:number[] = [1, 2, 3];


// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());

});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());

});

// Optional Properties

let newObj:{ first: string; last?: string } = {first: "first" };

// generics 

function test<unknownType>(x:number , y:unknownType):unknownType[] {
 
 return [y];

}

test(1,"4");

let userName = (a:number,b:string) => a+b;
userName(1,2);

// union types 


interface Hero {
    powers : string[],
    heal : () => string ;
}

interface Villain {
    powers : string[];
    burn:() => string ;
}


function test( x : Hero , y:Villain ) {
   console.log(x.powers[0])
   console.log(y.powers[0])

   console.log(x.burn())
   console.log(y.heal())

}

let x:Hero = {
   powers:["x-ray","flight","healing"],
   heal(){ return "heal"}
}

let y:Villain = {
   powers:["burning",""],
   burn(){ return "burn"}
}

test(x ,y)

function testUnion(x : Hero | Villain) {
  x.burn()

  if((x as Hero).heal()) {
     
  }

  if((x as Villain).burn()) {
     
  }
}

```
