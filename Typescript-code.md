
#### resource
https://www.typescriptlang.org/


```tsx

/* session 1 */

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
  // you can also do 
  
  if((x as Hero).heal()) {
     
  }

  if((x as Villain).burn()) {
     
  }
}


/* session 2 */

// ............................. readonly variables
a)
interface User {
 readonly id: number ,
 name: string
}

const user:User =  {
  id: 1,
  name : "deen"
}

user.id++

// ............................. readonly in class

b)
class User2 {

  readonly id: number ;
  name : string;

  constructor(id: number , name: string){

    this.id = id;
    this.name = name;

  }
}

const user2 = new User2(1 , "deen");
user2.id++

c) 

// custom readonly 
interface IPet {
    name: string ;
    age: number;
}

type ReadonlyPet = {
   readonly [K in keyof IPet]: IPet[K];
}

const pet:IPet = { name: "deen" , age: 21 }
const readonlyPet:ReadonlyPet = { name: "john" , age: 20 }


pet.age = 34; // works

readonlyPet.age = 3; // not working as readonly


// ............................. readonly  array

//mutable - can push to array 

const weekdays1 :string[] = [
  "Sunday",
  "Monday"
]

weekdays1 = ["test"];
weekdays1.push("push");
weekdays1[0] = "test";
 weekdays1.concat("joe");


// readonly [n: number]

const weekdays2 :ReadonlyArray<string> = [
  "Sunday",
  "Monday"
]
   weekdays2[0] = "test";
   weekdays2.push("joe");
  weekdays2.concat("joe");

  // use case

function Test(propArray : ReadonlyArray<number> ){
  propArray.reverse();

}


//Readonly - Does not contain mutable methods vs 

// ReadonlyArray : Any variable with a reference to a ReadonlyArray can’t add, remove, or replace any elements of the array.
// ReadonlyArray : Immutable arrays


// utility types 
// https://www.typescriptlang.org/docs/handbook/utility-types.html

//Enums 

enum Direction {
  Up = 1,
  Down, //2
  Left, //3
  Right,
}

console.log(Direction.Down)

// enum ShirtSize {
//     S = "small",
//     M = "medium",
//     L = "large",
//     XL = "xl"
// }

// objects 

const obj  = {}  // empty object type
// obj.  / no auto complete

// obj.foo = "foo" ;  // not allowed

const obj2: any  = {} 
obj2.a = 2

// functions

function foo(){

  return "a";
}

enum ShirtSize {
    S,
    M,
    L,
    XL
}

function assertNever(value: never): never {
    throw Error(`Unexpected value '${value}'`);
}

function prettyPrint(size: ShirtSize) {
    switch (size) {
        case ShirtSize.S: return "small";
        case ShirtSize.M: return "medium";
        case ShirtSize.L: return "large";
       // case ShirtSize.XL: return "extra large";
        default: return assertNever(size);
    }
}

/* session 3 */


// interface 

interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

function feedAnimal(animal: IAnimal) {
  animal.eat();
}

class Animal implements IAnimal {
  age = 0;

  eat() {
    console.log("nom..nom..");
  }

  speak() {
    return "roar";
  }
}
........................
// types and interface ( ram and shyam of typescript) 

//similarity 

a)

// structurally same 

interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
};


b)

interface IDog {}
interface ICat {}

type Pet = IDog | ICat; 


.............................................

c) interoperability

type Pet = {
  pose(): void;
};

interface IFeline {
  nightvision: boolean;
}

interface ICat extends IFeline, Pet {} // interface can extend interface and type

type Cat = IFeline & Pet;


// class can implement both interface and type

class HouseCat implements IFeline, Pet {
  pose(): void {
    throw new Error("Method not implemented.");
  }
  nightvision: boolean;
}


...............................................
d) intersection / differences 
// https://www.youtube.com/watch?v=crjIq7LEAYw

#### types vs interface 

type PetType = IDog | ICat; // types has union 

interface IPet extends PetType {} // error //

class Pet implements PetType {} // error // pet can only be of specific type , not general

interface IDog {}
interface ICat {}



```
e) you can loop over type properties
https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript#:~:text=...%20we%20recommend%20using%20an,than%20creating%20the%20types%20themselves.&text=You%20can%20use%20the%20declaration,to%20an%20already%20declared%20interface%20.

Iterating over union properties in type
type Keys = "firstName" | "lastName";

type Name = {
  [key in Keys]: string;
};

f) interface can be extended 

interface x {
  age : number
}

interface x {
  name : string
}

function test(param: x){
  param.age
  param.name
  }

..............................................................................................................................................
/* session 4 */

// decorators

https://www.youtube.com/watch?v=oF7m5ibwzAw ( best video)

https://codesandbox.io/s/sleepy-wing-dzf2g?file=/src/index.tsx

https://stackoverflow.com/questions/70888122/why-is-the-class-property-not-getting-initialised-via-typescript-decorator

https://www.youtube.com/watch?v=O6A-u_FoEX8

https://www.youtube.com/watch?v=_8wOde1fmEM
