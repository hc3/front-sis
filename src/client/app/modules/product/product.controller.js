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
	ProductControllerView.$inject = [];
	ProductControllerEdit.$inject = ['$mdDialog', 'productSelected','ProductService', '$state'];
	ProductControllerRemove.$inject = ['$mdDialog', 'productSelected','ProductService', '$state'];


	function cleanForm(form) {
        if(form) {
            product = {};
            form.$setPristine();
            form.$setUntouched();
        }
	};

	function ProductControllerNew(ProductService, $state, stateParams, $mdDialog) {
		var vm = this;
		vm.reload = false;
		vm.product = {};
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;

		function insert(form) {
			return ProductService.new(vm.product)
				.then(function(data) {
					cleanForm(form);
					vm.cancel();
					$state.reload();
				})
				.catch(function(error) {
					console.log(error);
				});
		};
	};

	function ProductControllerEdit($mdDialog, productSelected, ProductService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		productSelected.map(function(data) {
			vm.product = angular.copy(data)
		});

		function insert(form) {
			return ProductService.edit(vm.product)
				.then(function(data) {
					console.log(data);
					cleanForm(form);
					vm.cancel();
					$state.reload();
				})
				.catch(function(error) {
					console.log(error);
				})
		};
	};

	function ProductControllerView() {
		return
	};

	function ProductControllerRemove($mdDialog, productSelected, ProductService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.remove = remove;

		function remove() {
			return ProductService.remove(productSelected[0]._id)
				.then(function(data) {
					vm.cancel();
					$state.reload();
				})
				.catch(function(error) {
					console.log(error);
				})
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
		/* -------------------- */

		/* FUNÇÕES */
		listAll();

		function listAll() {
			vm.reload = true
			return ProductService.listAll()
				.then(function(data) {
					vm.listProduct = data.data;
					vm.reload = false;
				})
				.catch(function(error) {
					console.log(error);
				});
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
			})
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'ProductControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/product/templates/product_new.html',
			})
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
			})
		};

	};

})();