(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider','$locationProvider'];

		function config($stateProvider, $locationProvider, $urlRouterProvider) {

			$stateProvider

				.state('listPeople', {
					url:'/people',
					templateUrl:'app/modules/people/templates/people_list.html',
					controller:'PeopleControllerList',
					controllerAs:'vm'
				})
		}
})();