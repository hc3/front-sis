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
	ServiceControllerEdit.$inject = ['$mdDialog', 'serviceSelected'];
	ServiceControllerView.$inject = [];
	ServiceControllerRemove.$inject = ['$mdDialog', 'serviceSelected'];


	function ServiceControllerNew(ServiceService, $state, stateParams, $mdDialog) {
		var vm = this;
		vm.service = {};
		vm.teste = "testando";
		vm.insert = insert;
		vm.cancel = $mdDialog.cancel;

		function insert() {
			console.log('to no insert');
			console.log(vm.service);
			//return ServiceService.newData(vm.service);
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


		/* FUNÇÕES */
		listAll();

		function listAll() {
			//vm.reload = true; ANTES DO CALLBACK
			vm.listService = ServiceService.listAll();
			//vm.reload = false; DEPOIS DO CALLBACK
			//return vm.listService;
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
			}).then(vm.listAll);
		};

		function insert(event) {
			$mdDialog.show({
				clickOutsideToClose: true,
				controller: 'ServiceControllerNew',
				controllerAs: 'vm',
				focusOnOpen: false,
				targetEvent: event,
				templateUrl: 'app/modules/service/templates/service_new.html',
			}).then(vm.listAll);
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
			}).then(vm.listAll);
		};

	};

	function ServiceControllerEdit($mdDialog, serviceSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;
		vm.insert = insert;
		vm.service = serviceSelected[0];

		function insert() {
			console.log('service selected',serviceSelected);
			console.log('service',vm.service);
		};
	};

	function ServiceControllerView() {
		return
	};

	function ServiceControllerRemove($mdDialog, serviceSelected) {
		var vm = this;
		vm.cancel = $mdDialog.cancel;

		vm.remove = remove;

		function remove() {
			console.log('removendo produto', serviceSelected[0]);
		}
		//console.log('MDDIALOG',service);
	};



})();