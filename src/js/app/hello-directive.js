define([
], function() {
	'use strict';

	/**
	 * Hello directive for displaying Hello World.
	 **/
    return function diHello() {
    	//Directive definition object
		console.log('directive in');
    	return {
    		restrict: 'E',
    		scope: {
    			place: '@'
    		},
    		template: '<h1>Hello {{place}}</h1>'
    	};
    } 

});