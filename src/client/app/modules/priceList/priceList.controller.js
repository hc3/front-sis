(function () {
	'use strict';

	angular
		.module('app')
		.controller('PriceListControllerNew', PriceListControllerNew)
		.controller('PriceListControllerList', PriceListControllerList)
		.controller('PriceListControllerEdit', PriceListControllerEdit)
		.controller('PriceListControllerView', PriceListControllerView)
		.controller('PriceListControllerRemove', PriceListControllerRemove)

	PriceListControllerNew.$inject = ['PriceListService', '$state', '$stateParams', '$mdDialog'];
	PriceListControllerList.$inject = ['PriceListService', '$state', '$stateParams', '$mdDialog'];
	PriceListControllerEdit.$inject = ['$mdDialog', 'priceListSelected'];
	PriceListControllerView.$inject = [];
	PriceListControllerRemove.$inject = ['$mdDialog', 'priceListSelected'];


	function PriceListControllerNew(PriceListService, $state, stateParams, $mdDialog) {
		var vm = this;
		vm.priceList = {};
		vm.teste = "testando";
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;

		function insert() {
			console.log('to no insert');
			console.log(vm.priceList);
		};
	};

	function PriceListControllerList(PriceListService, $state, stateParams, $mdDialog) {
		var vm = this;
		/* VARIAVEIS BINDING */
		vm.listPriceList = [];
		vm.selected = [];
		vm.reload = false;
		vm.filter = {
			form: '',
			show: '',
			options: ''
		};
		vm.query = {
			order: 'name',
			limit: 5,
			page: 1
		};
		vm.listAll = listAll();
		vm.cancel = $mdDialog.cancel;
		vm.removeFilter = removeFilter;
		vm.delete = remove;
		vm.insert = insert;
		vm.edit = edit;


		/* FUNÇÕES */
		listAll();

		function listAll() {
			//vm.reload = true; ANTES DO CALLBACK
			vm.listPriceList = PriceListService.listAll();
			//vm.reload = false; DEPOIS DO CALLBACK
			//return vm.listPriceList;
		};

		function removeFilter() {
			vm.filter.show = false;
			vm.query.filter = '';

			if (vm.filter.form.$dirty) {
				vm.filter.form.$setPristine();
			}
		};

		function remove(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'PriceListControllerRemove',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					priceListSelected: vm.selected
				},
				templateUrl: 'app/modules/priceList/templates/delete-dialog.html',
			}).then(vm.listAll);
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'PriceListControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/priceList/templates/priceList_new.html',
			}).then(vm.listAll);
		};

		function edit(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'PriceListControllerEdit',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					priceListSelected: vm.selected
				},
				templateUrl: 'app/modules/priceList/templates/priceList_new.html',
			}).then(vm.listAll);
		};

	};

	function PriceListControllerEdit($mdDialog, priceListSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		vm.priceList = priceListSelected[0];

		function insert() {
			console.log('priceList selected',priceListSelected);
			console.log('priceList',vm.priceList);
		};
	};

	function PriceListControllerView() {
		return
	};

	function PriceListControllerRemove($mdDialog, priceListSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;

		vm.remove = remove;

		function remove() {
			console.log('removendo tabela de preço', priceListSelected[0]);
		}
	};



})();