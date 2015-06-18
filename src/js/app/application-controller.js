define([
], function() {
    'use strict';

    /** 
     * Main Controller for the application.
     **/
    function AppController($scope) {

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