(function () {
    'use strict';


    var app = angular.module('app');
    app.controller('Account.IndexController', function($scope, $window, UserService, FlashService){


        //var vm = this;

        //vm.user = null;
        $scope.user = null;
        //vm.saveUser = saveUser;
        $scope.user = saveUser;
        //vm.deleteUser = deleteUser;
        $scope.deleteUser = deleteUser;
        
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                //vm.user = user;
                $scope.user = user
            });
        }

        function saveUser() {
            UserService.Update($scope.user)
                .then(function () {
                    FlashService.Success('User updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function deleteUser() {
            UserService.Delete($scope.user._id)
                .then(function () {
                    // log user out
                    $window.location = '/login';
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }
    })

})();