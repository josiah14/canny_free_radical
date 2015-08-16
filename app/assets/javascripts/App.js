var app = angular.module('canny-free-radical', ['ui.bootstrap', 'hc.marked', 'ngResource', 'ngAnimate']);

app.config(['markedProvider', function (markedProvider) {
    markedProvider.setOptions({
        gfm: true
    });
    hljs.configure({
        tabReplace: '  '
    });
}]);
