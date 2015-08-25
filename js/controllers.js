app.controller('Home', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams, Settings){
	
	// In this controller we have nothing to do.

	$('.nav li').removeAttr('class');
	$rootScope.activeHome = 'active';
	
	$rootScope.pageDetail = 'This is a static home.html file in templates folder';
}])
.controller('AboutMe', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
	
	// In about controller we have nothing to do.

	$('.nav li').removeAttr('class');
	$rootScope.activeAbout = 'active';
	
	$rootScope.pageDetail = 'This is a static about-me.html file in templates folder';
}])
.controller('Services', ['$scope', '$rootScope', '$routeParams', 'Services', 'LocalFunction', function($scope, $rootScope, $routeParams, Services, LocalFunction){

	// In services controller we will load list of services from database and show them using ng-repeat.

	$('.nav li').removeAttr('class');
	$rootScope.activeService = 'active';

	LocalFunction.showLoader(1);
	
	$rootScope.pageDetail = 'This is a dynamc services.html file in templates folder. It is loading services in json format with angular resources and displaying them in ng-repeat. First enable htaccess in api folder.';

	var ServicesList = Services.get({id:'all'}, function(){
		$scope.services = ServicesList;
		LocalFunction.showLoader(0);
	});
}])
.controller('ServiceDetail', ['$scope', '$rootScope', '$routeParams', 'Services', 'LocalFunction', function($scope, $rootScope, $routeParams, Services, LocalFunction){
	
	// In service detail control we will load detail of selected services on the basis of serivce id

	$('.nav li').removeAttr('class');
	$rootScope.activeService = 'active';

	LocalFunction.showLoader(1);
	
	$rootScope.pageDetail = 'This is a dynamic service-detail.html file in templates folder. It is loading selected service detail in json format using angular resources and displaying them in ng-bind. First enable htaccess in api folder.';

	var ServicesList = Services.get({id:$routeParams.serviceID}, function(){
		$scope.serviceTitle = ServicesList.Title;
		$scope.serviceDescription = ServicesList.LongDesc;

		LocalFunction.showLoader(0	);
	});
}]).controller('ContactUs', ['$scope', '$rootScope', '$routeParams', 'Settings', '$http', function($scope, $rootScope, $routeParams, Settings, $http){
	
	// In this controller we will get from values and submit them to server. Server will send them to specific email

	$('.nav li').removeAttr('class');
	$rootScope.activeContact = 'active';

	var urlToSubmit = Settings.baseApiURL + 'send.php';

	$scope.form = {};

	$scope.submitForm = function(){
		$('input, textarea').prop('disabled', 'true');

		$http({
			method  : 'POST',
			url     : urlToSubmit,
			data    : $scope.form, //forms user object
			headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
		})
		.success(function(data) {
			if(data.Error==0)
				$scope.MsgClass='bg-success';
			else
			{
				$scope.MsgClass='bg-danger';
				$('input, textarea').prop('disabled', 'false');
			}
			$scope.returnMsg = data.Msg;
		});

		return false;
	};
	
	$rootScope.pageDetail = 'This is a static contact-us.html file in templates folder. This page will get form values and submit them to server. Server will send them to specific email';
}]);