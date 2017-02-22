(function () {
	'use strict';

	angular
		.module('app')
		.controller('ServiceControllerNew', ServiceControllerNew)
		.controller('ServiceControllerList', ServiceControllerList)
		.controller('ServiceControllerEdit', ServiceControllerEdit)
		.controller('ServiceControllerView', ServiceControllerView)
		.controller('ServiceControllerRemove', ServiceControllerRemove)

	ServiceControllerNew.$inject = ['ServiceService', '$state', '$stateParams', '$mdDialog'];
	ServiceControllerList.$inject = ['ServiceService', '$state', '$stateParams', '$mdDialog'];
	ServiceControllerView.$inject = [];
	ServiceControllerEdit.$inject = ['$mdDialog', 'serviceSelected','ServiceService', '$state'];
	ServiceControllerRemove.$inject = ['$mdDialog', 'serviceSelected','ServiceService', '$state'];

	function cleanForm(form) {
        if(form) {
            service = {};
            form.$setPristine();
            form.$setUntouched();
        }
	};

	function ServiceControllerNew(ServiceService, $state, stateParams, $mdDialog) {
		var vm = this;
		vm.reload = false;
		vm.service = {};
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;

		function insert(form) {
			return ServiceService.new(vm.service)
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

	function ServiceControllerEdit($mdDialog, serviceSelected, ServiceService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		//vm.service = 
		serviceSelected.map(function(data) {
			vm.service = angular.copy(data)
		});

		function insert(form) {
			return ServiceService.edit(vm.service)
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

	function ServiceControllerView() {
		return
	};

	function ServiceControllerRemove($mdDialog, serviceSelected, ServiceService, $state) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.remove = remove;

		function remove() {
			return ServiceService.remove(serviceSelected[0]._id)
				.then(function(data) {
					console.log(data);
					vm.cancel();
					$state.reload();
				})
				.catch(function(error) {
					console.log(error);
				})
		};
	};

	function ServiceControllerList(ServiceService, $state, stateParams, $mdDialog) {
		var vm = this;
		/* VARIAVEIS BINDING */
		vm.listService = [];
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
			return ServiceService.listAll()
				.then(function(data) {
					vm.listService = data.data;
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
				controller: 'ServiceControllerRemove',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					serviceSelected: vm.selected
				},
				templateUrl: 'app/modules/service/templates/delete-dialog.html',
			})
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'ServiceControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/service/templates/service_new.html',
			})
		};

		function edit(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'ServiceControllerEdit',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				locals: {
					serviceSelected: vm.selected
				},
				templateUrl: 'app/modules/service/templates/service_new.html',
			})
		};

	};

})();