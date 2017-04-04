/// <reference path="angular.js" />

var app = angular.module("repos", [])
                .controller("reposController", function ($scope, $http, $log) {
                    $scope.inputValue = null;
                    $scope.getUser = function () {

                        var successCallBack = function (response) {
                            $scope.repos = response.data;
                        };

                        var errorCallBack = function (response) {
                            $scope.error = response.data;
                        };

                        $http({
                            method: 'GET',
                            url: 'https://api.github.com/users/' + $scope.inputValue + '/repos'
                        })
                        .then(successCallBack, errorCallBack);
                    };
                });