angular.module("app", []);
angular
    .module("app")
    .controller("table", table);


    function table($http) {
        var vm=this;

        vm.place = [];

        $http.get('topspots.json').then(function (response) {
            vm.place = response.data;
          });

    }
