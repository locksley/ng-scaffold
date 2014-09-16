angular.module('scaffoldApp').config(function($locationProvider) {
	$locationProvider
		.html5Mode(true)
		.hashPrefix("!")
});
