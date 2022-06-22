# --------------------------------------------  Concepts  --------------------------------------------  
1. Promises
-> It is use when we want to execute some line of code but reuired data is yet to com from API response 
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
