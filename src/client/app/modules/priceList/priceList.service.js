(function() {
	'use strict';

	angular
		.module('app')
		.service('PriceListService', PriceListService);

		PriceListService.$inject = ['$http'];

		function PriceListService($http) {

			var service = {
				new: newData,
				listOne: listOne,
				listAll: listAll,
				edit: edit,
				remove: remove
			};

			var priceList = [{
				id:1,
				codeInterno:1,
				descricao:"promoção 001",
				ano:"2017",
				versao:"001",
				produto:{
					id:1,
					codeIterno:1,
					descricao:"PRODUTO 001",
					peso:250,
					embalagem:"und"
				},
				valor:260.00,
				ativa:true
			},{
				id:2,
				codeInterno:2,
				descricao:"promoção 001",
				ano:"2017",
				versao:"002",
				produto:{
					id:1,
					codeIterno:1,
					descricao:"PRODUTO 001",
					peso:250,
					embalagem:"und"
				},
				valor:660.00,
				ativa:false
			},{
				id:3,
				codeInterno:3,
				descricao:"promoção 001",
				ano:"2017",
				versao:"001",
				produto:{
					id:1,
					codeIterno:1,
					descricao:"PRODUTO 001",
					peso:250,
					embalagem:"und"
				},
				valor:60.00,
				ativa:true
			}];

			return service;

			function newData(data) {
				return priceList.push(data);
			};

			function listOne(id) {
				return
			};

			function listAll() {
				return priceList;
			};

			function edit(data) {
				return
			};

			function remove(data) {
				return
			};
		}
})();