(function() {
	'use strict';

	angular
		.module('app')
		.service('PeopleService',PeopleService);

		PeopleService.$inject = ['$http'];

		function PeopleService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			return service;

			function newData(data) {
				return
			};

			function listOne(id) {
				return
			};

			function listAll() {
				return
			};

			function edit(data) {
				return
			};

			function remove(data) {
				return
			};
		}
})();