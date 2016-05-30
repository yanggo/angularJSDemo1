define(["app","geoFactory"],function(app,geoFactory){
	return app.controller('indexCtrl',["$scope","$rootScope","$http","geoFactory",function($scope,$rootScope,$http,geoFactory){
		$rootScope.headTitle = $rootScope.title = "首页";
		$rootScope.favBol = false;
		$rootScope.backBol = false;
		$scope.getMore = function(){
			angular.element('.list-box ul').append('<p>已添加一条数据！</p>');
		}
		$http.get('./json/index.json').success(function(data){
			$scope.branchs = data.branchs;
		})
	}]);
});