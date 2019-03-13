

decorators 

https://www.typescriptlang.org/docs/handbook/decorators.html

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
var Greeter = /** @class */
(function() {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function() {
        return "Hello, " + this.greeting;
    }
    ;
    __decorate([enumerable(false)], Greeter.prototype, "greet", null);
    return Greeter;
}());
new Greeter("deen");

```

//decorators, target, key, desc
