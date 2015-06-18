define([
], function() {
    'use strict';

    console.log('controller out');
    /** 
     * Main Controller for the application.
     **/
    function AppController($scope) {
        console.log('controller in');
        //If we need to dependency inject and Angular service
        console.log($scope);

        //Saving the this reference
        var ap = this;

        //Adding a property to the Controller instance
        ap.place = 'World';
    }

    //Dependency Injection list if needed
    AppController.$inject = ['$scope'];

    return AppController;

});