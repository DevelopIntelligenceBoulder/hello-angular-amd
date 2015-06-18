define([
    "angular",
    "app/hello-directive"
], function(angular, diHello) {
    'use strict';

    /**
     * Hello module holding all architectural pieces surrounding hello functionality
     *   - at this point it will only be the hello directive.
     **/
    return angular
        .module('hello', [])
        .directive('diHello', diHello);

});