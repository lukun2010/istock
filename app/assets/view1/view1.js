/**
 * Created by lu.kun on 2015/4/16.
 */
'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: "/assets/view1/view1.html",
            controller: 'view1Ctl'
        });
    }])
    .controller('view1Ctl', function($scope, $log) {

    })