# hello-angular-amd
A simple example of writing Hello World utilizing (Angular)[https://angularjs.org/] and AMD (i.e. Asynchronous Module Definition) via [RequireJS](http://requirejs.org/)

# What is this?
This example shows how to utilize Angular and AMD via RequireJS for application modularization. RequireJS will load modules. Angular will handle dependency injections. This will allow the application to have a simplified index.html, because RequireJS will load of the the JavaScript files.

## Do this first
Before looking at Angular with AMD via RequireJS take a look at how to achieve this in [AMD and RequireJS](https://github.com/DevelopIntelligenceBoulder/hello-amd) and in [Angular 1.x](https://github.com/DevelopIntelligenceBoulder/hello-angular-1) .

## Angular
To allow RequireJS and Angular to work together, the application will need to manually be bootstrapped. 

### Within the js/app/main.js
The Angular application is manually bootstrapped after the modules have been loaded and the controller has been added. The hello module is also dependency injected into the Angular application.

### Within the js/app/application-controller.js
This is now just a constructor function that is returned to be attached later to the angular application. It also shows how to handle dependency injection of services if need be. 

### Within the js/app/hello-directive.js
The directive function is returned to be attached later to the hello module.

### Within the js/app/hello-module.js
A separate module to handle all things Hello World. In this case it is simply the `diHello` directive defined within hello-directive.js.  

## RequireJS
RequireJS needs a configuration to know how to load the application modules.

### Within the js/app.js
The RequireJS configuration for the application. Angular needs to be shimmed in order for it to function as an AMD module.

### Within the index.html
The index.html only contains one JavaScript `<script>` element. This element allows the browser to know where the RequireJS module loader resides (i.e. js/lib/require.js). The `<script>` element also notifies RequireJS where the application configuration resides (i.e. `data-main="js/app"`). The application configuration is just another JavaScript file (i.e. js/app.js).

## Instructions to run plain RequireJS application
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. RequireJS, Angular & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on Angular and JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript). Check out the the [AngularJS Boot Camp](http://www.developintelligence.com/catalog/web-development-training/angularjs/angularjs-boot-camp) or the [Advanced JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript/advanced-javascript) to get your team up to speed.