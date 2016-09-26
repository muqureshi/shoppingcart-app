/**
 * Created by fjatori on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('ShoppingService', Service);

    function Service($http, $q) {
        var service = {};

        service.getItems = getItems;

        return service;

        function getItems() {
            return $http.get('/api/shopping').then(handleSuccess, handleError);
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

    })();