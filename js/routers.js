app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/about-me', {
		templateUrl: 'templates/about-me.html',
		controller: 'AboutMe'
	})
	.when('/services', {
		templateUrl: 'templates/services.html',
		controller: 'Services'
	})
	.when('/service-detail/:serviceID', {
		templateUrl: 'templates/service-detail.html',
		controller: 'ServiceDetail'
	})
	.when('/contact-us', {
		templateUrl: 'templates/contact-us.html',
		controller: 'ContactUs'
	})
	.otherwise({
		templateUrl: 'templates/home.html',
		controller: 'Home'
	})
}]);