

https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511


https://channel9.msdn.com/Series/Rx-Workshop/Rx-Workshop-Introduction

http://reactivex.io/documentation/observable.html
https://github.com/tc39/proposal-observable


https://medium.com/@luukgruijs/understanding-rxjs-subjects-339428a1815b
https://github.com/Reactive-Extensions/RxJS/blob/master/dist/rx.all.js


https://egghead.io/lessons/rxjs-an-observable-execution-may-only-have-one-observer
 subject is both an observer and observable
 
 so 
 
 
  streams  > Observables >  Observer,Observer 2
  
  Observers subscribes to an observables by :
  
  Observables.subscribe((data) => {
  console.log(data); // 0.24957144215097515 (random number)
});


 streams  > Observables > Subject > Observer1 , Observer 2
 
 
courses 

https://app.pluralsight.com/library/courses/rxjs-big-picture/table-of-contents

https://app.pluralsight.com/library/courses/rxjs-getting-started/table-of-contents
