/**
 * Created by lu.kun on 2015/4/16.
 */
'use strict';

angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'myApp.view1'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                otherwise({
                    redirectTo: '#'
                });
        }]);
