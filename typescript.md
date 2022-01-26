

decorators 

https://www.typescriptlang.org/docs/handbook/decorators.html
https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md#enumerable

```javascript
var __decorate = (this && this.__decorate) || function __decorate(decorators, target, key, desc) {
    console.log("desc passed ", desc)
    var c = arguments.length, reflect = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        reflect = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                reflect = (c < 3 ? d(reflect) : c > 3 ? d(target, key, reflect) : d(target, key)) || reflect;
    return c > 3 && reflect && Object.defineProperty(target, key, reflect),
    reflect;
}
;

function enumerable(value) {
    console.log("enumerable")
    return function enumerableReturn(target, propertyKey, descriptor) {
        console.log(".................");
        console.log("target ", target);
        console.log("desc ", descriptor);
        console.log(".................")
        descriptor.enumerable = value;
    }
    ;
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet1 = function () {
        return "Hello greet1, " + this.greeting;
    };
    Greeter.prototype.greet2 = function () {
        return "Hello greet2, " + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeter.prototype, "greet1", null);
    return Greeter;
}());

var res = new Greeter("deen");
Object.getOwnPropertyDescriptor(res.__proto__, "greet1" )
Object.getOwnPropertyDescriptor(res.__proto__, "greet2" );

console.log("enumerate ");

for (var property1 in res.__proto__) {
  console.log(res[property1]);
}

```

//decorators, target, key, desc

## dependency injection
https://levelup.gitconnected.com/dependency-injection-in-typescript-5fd1f6207f2


#### use of decorators
https://indepth.dev/posts/1450/how-to-use-ts-decorators-to-add-caching-logic-to-api-calls

https://www.sitepoint.com/javascript-decorators-what-they-are/
