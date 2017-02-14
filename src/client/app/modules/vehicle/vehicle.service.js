(function() {
	'use strict';

	angular
		.module('app')
		.service('ProductService', ProductService);

		ProductService.$inject = ['$http'];

		function ProductService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			var products = []; 

			return service;

			function newData(data) {
				return products.push(data);
			};

			function listOne(id) {
				return
			};

			function listAll() {
				return products;
			};

			function edit(data) {
				return
			};

			function remove(data) {
				return
			};
		}
})();