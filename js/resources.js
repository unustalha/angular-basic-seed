app.factory('Services', ['$resource', 'Settings', function($resource, Settings) {
	return $resource(Settings.baseApiURL + ':id', { id: '@id'});
}]);