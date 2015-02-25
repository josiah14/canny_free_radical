//= require jquery/dist/jquery.min
//= require bootstrap-sass-official/assets/javascripts/bootstrap-sprockets
//= require angular/angular.min
//= require angular-animate/angular-animate.min
//= require angular-route/angular-route.min
//= require angular-resource/angular-resource.min
//= require angular-bootstrap/ui-bootstrap.min
//= require angular-bootstrap/ui-bootstrap-tpls.min
//= require turbolinks
//= require_tree .

var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'ngRoute', 'ngResource']);

app.controller('AccordionDemoCtrl', ['$scope', function ($scope) {
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

}]);

