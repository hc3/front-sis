(function() {
	'use strict';

	angular
		.module('app')
		.service('ClientService',ClientService);

		ClientService.$inject = ['$http'];

		function ClientService($http) {

			var service = {
				new: new,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			return service;

			function new(data) {
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