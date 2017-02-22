(function() {
	'use strict';

	angular
		.module('app')
		.service('ServiceService', ServiceService);

		ServiceService.$inject = ['$http'];

		function ServiceService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			var services = [{
				id:1,
				codeInterno:1,
				descricao:"Troca de bateria",
				valor:250.00
			},
			{
				id:2,
				codeInterno:2,
				descricao:"Troca de lanterna",
				valor:150.00
			},
			{
				id:3,
				codeInterno:3,
				descricao:"Troca de luminaria",
				valor:50.00
			},
			{
				id:4,
				codeInterno:4,
				descricao:"Troca de memoria ram",
				valor:80.00
			}];

			return service;

			function newData(data) {
				return $http.post('/api/services',data);
			};

			function listOne(id) {
				return $http.get('/api/services',{params:id});
			};

			function listAll() {
				return $http.get('/api/services');
			};

			function edit(data) {
				return $http.put('/api/services/'+data._id,{params:data});
			};

			function remove(data) {
				return $http.delete('/api/services/'+data,{params:data});
			};
		}
})();