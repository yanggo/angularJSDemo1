//入口文件
require.config({
	baseUrl: "js/",
	paths: {
		"angular": "builds/angular.min",
		"angular-route": "builds/angular-route.min",
		"angular-sanitize": "builds/angular-sanitize.min",
		"blocksit": "builds/blocksit",
		"fastclick": "builds/fastclick.min",
		"idTabs": "builds/idTabs",
		"jquery203": "builds/jquery203.min",
		"stickUp": "builds/stickUp",
		"jquery": "builds/jquery203",
		"indexCtrl": "controllers/indexCtrl",
		"route": "myRoute",
		"app": "app",
	},
	shim: {
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			deps: ["angular"],
			exports: "angular-route"
		},
		"angular-sanitize": {
			deps: ["angular"],
			exports: "angular-sanitize"
		},
		"blocksit": {
			deps: ["angular"],
			exports: "blocksit"
		},
		"idTabs": {
			deps: ["jquery"],
			exports: "idTabs"
		},
		"stickUp": {
			deps: ["jquery"],
			exports: "stickUp"
		}
	}
});

require(['jquery','angular','angular-route','angular-sanitize','blocksit','idTabs','stickUp','app','route','indexCtrl'],function($,angular){
	$(function(){
		angular.bootstrap(document,["myApp"]);
	});
});
