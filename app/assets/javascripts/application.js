// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require bootstrap-sprockets
//= require angular
//= require angular-animate
//= require angular-route
//= require angular-resource
//= require angular-ui-bootstrap
//= require angular-ui-bootstrap-tpls
//= require turbolinks
//= require_tree .

// app = angular.module('App', ['ui.bootstrap']);

var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'ngRoute', 'ngResource']);

app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'

    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'

    }

  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);

  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

});

// app.config([
//     '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//       $routeProvider.when('/', {
//         controller: 'AccordionDemoCtrl'
//       });
//     }
// ]);
