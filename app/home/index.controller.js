(function () {
    'use strict';

   

    var app = angular.module('app');
    app.controller('Home.IndexController', function($scope, UserService, ShoppingService, ngCart){

        //ngCart.setTaxRate(7.5);
        //ngCart.setShipping(2.99);

        $scope.items = null;

        $scope.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                $scope.user = user;
            });

            ShoppingService.getItems().then(function (items){
                $scope.items = items;
                console.log($scope.items);
            })

        }









    })

})();