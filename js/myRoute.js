//路由
define(["app"],function(app){
	return app.config(["$routeProvider",function($routeProvider){
		$routeProvider
		  .when('/', {
		  	templateUrl: 'views/index_list.html',
		  	controller: 'indexCtrl'
		  })
		  .when('/details', {
		  	templateUrl: 'views/details.html',
		  	controller: 'detailsCtrl'
		  })
		  .otherwise({ redirectTo: '/' });
	}]);
});