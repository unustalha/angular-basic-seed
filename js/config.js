var app = angular.module('myBoilerPlate', ['ngRoute', 'ngResource']);
app.constant('Settings', {
    baseApiURL: 'http://www.younustalha.com/angular-boilerplate/api/'
}).run(function(){
	// nothing to initiate right now
});