"use strict";

var app = angular.module("BookApp", ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/guide-list.html',
        controller: 'bookCtrl'
      })
      .otherwise('/');
  }
]);