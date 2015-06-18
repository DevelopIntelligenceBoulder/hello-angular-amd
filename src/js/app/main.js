define([
    "angular",
    "app/hello-module",
    "app/application-controller"
], function(angular, hello, AppController) {
    'use strict';

    //Angular 1.x
    //Creating Hello Angular application
    var app = angular.module('app', ['hello']);

    app.controller('AppController', AppController);

    //Application manually needs to bootstrap angular
    //  Can only be bootstrap after RequireJS has loaded all its modules
    angular.bootstrap(document, ['app']);

});
