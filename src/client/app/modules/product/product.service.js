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

			var products = [{
				id:1,
				codeIterno:1,
				descricao:"PRODUTO 001",
				peso:250,
				embalagem:"und"
			},{
				id:2,
				codeIterno:2,
				descricao:"PRODUTO 002",
				peso:50,
				embalagem:"caixa"
			},{
				id:3,
				codeIterno:3,
				descricao:"PRODUTO 003",
				peso:20,
				embalagem:"und"
			},{
				id:4,
				codeIterno:4,
				descricao:"PRODUTO 004",
				peso:28,
				embalagem:"caixa"
			},{
				id:5,
				codeIterno:5,
				descricao:"PRODUTO 005",
				peso:2,
				embalagem:"und"
			},{
				id:6,
				codeIterno:6,
				descricao:"PRODUTO 006",
				peso:80,
				embalagem:"und"
			},]; 

			return service;

			function newData(data) {
				return $http.post('/api/products',data);
			};

			function listOne(id) {
				return $http.get('/api/products',{params:id});
			};

			function listAll() {
				return $http.get('/api/products');
			};

			function edit(data) {
				return $http.put('/api/products/'+data._id,data,{params:data});
			};

			function remove(data) {
				return $http.delete('/api/products/'+data,{params:data});
			};
		}
})();