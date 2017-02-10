(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		config.$inject = ['$stateProvider','$locationProvider'];

		function config($stateProvider, $locationProvider, $urlRouterProvider) {

			$stateProvider

				.state('newPeople', {
					url:'/people/new',
					templateUrl:'app/modules/people/templates/people_new',
					controller:'PeopleControllerNew',
					controllerAs:'vm'
				})

				.state('listPeople', {
					url:'/people',
					templateUrl:'app/modules/people/templates/people_list',
					controller:'PeopleControllerList',
					controllerAs:'vm'
				})

				.state('editPeople', {
					url:'/people/:id/edit',
					templateUrl:'app/modules/people/templates/people_edit',
					controller:'PeopleControllerEdit',
					controllerAs:'vm'
				})

				.state('viewPeople', {
					url:'/people/:id/view',
					templateUrl:'app/modules/people/templates/people_view',
					controller:'PeopleControllerView',
					controllerAs:'vm'
				});

		}
})();