app.controller('BlogCtrl', ['$scope', function($scope) {
    $scope.page = "blog";

    var options = { horizontal: true
                  , itemNav: 'centered'
                  , mouseDragging: true
                  , touchDragging: true
                  , releaseSwing: true
                  },
        $postsList = new Sly("#posts-list", options).init();

}]);
