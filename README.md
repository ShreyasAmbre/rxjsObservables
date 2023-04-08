# --------------------------------------------  Concepts  --------------------------------------------  
1. Promises
-> It is use when we want to execute some line of code but required data is yet to com from API response 
-> In this scenario below code will wait until API function is completed and data is present to provide to below code


2. ASYNC / AWAIT
-> Works similar as promise ASYNC function always return promise 
-> AWAIT is used only inside ASYN Function and it is used only on promise created outside 
-> that AWAIT keyword wait for PROMISE to get resolve only then below code will run

3. fromEvent Observables
-> It is an inbuild Observables in RxJS
-> fromEvent keep listening for DOM Element EventLister
-> it accept two parameters, => reference of ELEMENT and EVENT NAME
-> now we can subscribe to that observales and detect when event is triggerent from DOM element
-> On alternative side we can also use HostListner, mapp any event directly on element but limitation of this is we cant user operator chain like we cant map .pipe .filter .debounce inbuilt observables but we can map to fromEvent Observables 

4. of and from Observables
-> of Observables is used to convert the Object into Stream 
-> from Observables is used to convert Array into Single Single Stream

5. toArray() Observables
-> toArray() Observables is used to convert Single Single Stream into Array 
-> In our code we have also use take() rxjs operator to terminate the interval after 5 second
    so that array can container 1 to 5 second number in array  
    -> Basically it is used to terminate the main Observables after number mention in take() is completed


6. Custom Observables 
-> Here we have demostrated Manual Observables and Automatoc Observables get (trigger using interval)
-> Manual Observable get trigger on OnInIt()
-> Automatic Observable get trigger on OnInIt() and get calls after every  interval and get UnSubscribe when btn is click on component destroy


7. Map Observable
-> Map Operator is used to transform the data as per our need and then passed that transformed data to component
-> Ex:- We call api for some data to backend and we get a response in return but we can't use as it is data inside a component
we have to modify certain data then we have to passed that to component inside in this scenario we use Map Operator   
-> Ex:- In this example 2 we have call the api and in res we get Array of Obj we pass that into from() operator as we know
from() operator convert array into single single stream that single stream is pass to map() operator inside map we modify the property (name) of single object and then pass to component using observer.next(res) and that single single response get push in array and that array is integrated with Modifies name suing NgFor in View file (html)   


8. Pluck Operator
-> Pluck operator is used to modify the property of object similar like map operator but this is SHORTHAND on map() operator but her we can not modify the data 
-> Ex:- In this example we call api in response we get User response we had used to convert that response into single stream using from() and after that passed to pluck operator() extract that property and pass it toArray() operator to convert single stream into array and then it get pass to component using observer.next(res) to display in view file (html)


NOTE :- Till now we have seen inbuilt observales and custom observables (operator) like map(), pluck(), filter  are used when we are performing custom observables we make use of inbuilt observables (opeartor) like of(), from(), toArray(),

9. Filter Operator
-> filter() operaotr works similary like filter() method in js
-> It filter out the data based on condition given if condition return true it return that data 


10. Tap Operator
-> Tap operator is mainly used to perform any task between two different operator some times it also use for debudding to know what data is passed from previous operator and what data is going to to pass to next operator 
-> We can perform any code like validation if else condition , console.log() or any other thing.


11. Take Operator
-> From the oberservable stream we can take data which are required this is use of take() operator
-> We have take(), takeLast(), takeUntil() operator
-> take() :- Operator takes count as a parameter and only that much count of stream is passed further after that it get unsubscribe automatically to its source observables (previous observable)
-> takeLast() :- Operator takes count as a parameter and return count of last streams of observables (previous streams skipped) and  last are passed in.
-> takeUntil() :- Operator takes observable or a subject as a paramter untill that observables get subscribe streams are passed once
that observables is subscribe its stops the stream for passin inside.



12. Retry 


13. DebounceTime, DistinctUntilChange() Operator
-> debountTime() :-  Here we have use debounceTim() operator which wait for few time given by us and then execute the code below
-> distinctUntilChanged() :- This operator used after debounceTime() it trigger after few time it also check wether the value is change or not only then the execute the below code.


14. Subject and BehaviourSubject Observable
-> Subject() 
    :-  It is mostly used for data cross communication between component
    :-  It is special type of observable generally we have 
        In Observable we use Pipe, Operator & Subscribe
        In Observer we use next(), error(), complete()
    :-  It is special type because subject is Observable and Observer at same time. It meanse we can subscribe and also 
        we can emit data using observer.next().





 

























# --------------------------------------------  Project Details --------------------------------------------  

# RxjsObservables

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
