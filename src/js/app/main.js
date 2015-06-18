define([
    "angular",
    "app/hello-module",
    "app/application-controller"
], function(angular, hello, AppController) {
    'use strict';

    //Angular 1.x
    angular
        //Creating Angular application and injection the hello module
        .module('app', ['hello'])

        //Attaching the application controller to the main angular application
        .controller('AppController', AppController);

    //Application manually needs to bootstrap angular
    //  Can only be bootstrap after RequireJS has loaded all its modules
    angular.bootstrap(document, ['app']);

});
