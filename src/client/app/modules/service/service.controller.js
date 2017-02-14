(function () {
	'use strict';

	angular
		.module('app')
		.controller('ProductControllerNew', ProductControllerNew)
		.controller('ProductControllerList', ProductControllerList)
		.controller('ProductControllerEdit', ProductControllerEdit)
		.controller('ProductControllerView', ProductControllerView)
		.controller('ProductControllerRemove', ProductControllerRemove)

	ProductControllerNew.$inject = ['ProductService', '$state', '$stateParams', '$mdDialog'];
	ProductControllerList.$inject = ['ProductService', '$state', '$stateParams', '$mdDialog'];
	ProductControllerEdit.$inject = ['$mdDialog', 'productSelected'];
	ProductControllerView.$inject = [];
	ProductControllerRemove.$inject = ['$mdDialog', 'productSelected'];


	function ProductControllerNew(ProductService, $state, stateParams, $mdDialog) {
		var vm = this;
		vm.product = {};
		vm.teste = "testando";
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;

		function insert() {
			console.log('to no insert');
			console.log(vm.product);
			//return ProductService.newData(vm.product);
		};
	};

	function ProductControllerList(ProductService, $state, stateParams, $mdDialog) {
		var vm = this;
		/* VARIAVEIS BINDING */
		vm.listProduct = [];
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
			vm.listProduct = ProductService.listAll();
			//vm.reload = false; DEPOIS DO CALLBACK
			//return vm.listProduct;
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
				controller: 'ProductControllerRemove',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					productSelected: vm.selected
				},
				templateUrl: 'app/modules/product/templates/delete-dialog.html',
			}).then(vm.listAll);
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'ProductControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/product/templates/product_new.html',
			}).then(vm.listAll);
		};

		function edit(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'ProductControllerEdit',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					productSelected: vm.selected
				},
				templateUrl: 'app/modules/product/templates/product_new.html',
			}).then(vm.listAll);
		};

	};

	function ProductControllerEdit($mdDialog, productSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		vm.product = productSelected[0];

		function insert() {
			console.log('product selected',productSelected);
			console.log('product',vm.product);
		};
	};

	function ProductControllerView() {
		return
	};

	function ProductControllerRemove($mdDialog, productSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;

		vm.remove = remove;

		function remove() {
			console.log('removendo produto', productSelected[0]);
		}
		//console.log('MDDIALOG',product);
	};



})();