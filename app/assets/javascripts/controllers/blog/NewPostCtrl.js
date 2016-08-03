app.controller('NewPostCtrl', function ($scope, $http) {
    $scope.submitPost = function () {
        $http.post( '/blog/'
                  , { content: $scope.newPost.content }
                  , { headers: { 'X-Transaction': 'Delete current user session'
                               , 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                               }
                    }).success(function (data, status) {
                        if (status == 201) { window.location.replace(data); }
                    });
    };
    $scope.page = 'new-blog-post';
});
