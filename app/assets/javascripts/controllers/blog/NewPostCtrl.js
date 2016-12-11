app.controller('NewPostCtrl', function ($scope, Upload, $http) {
    $scope.submit = function () {
        Upload.upload({  url: '/blog'
                      ,  data: { file: $scope.file
                               , content: $scope.newPost.content
                               , title: $scope.newPost.title
                               }
                      , headers: { 'X-Transaction': 'Send new post image'
                                 , 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                                 }
        });
    };
    // var uploader = $scope.uploader = new FileUploader({ url: '/blog'
    //                                                   , headers: { 'X-Transaction': 'Send new post image'
    //                                                              , 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    //                                                              }
    //                                                   });
    // $scope.test = function () {
    //     console.log("hello");
    //     uploader.onAfterAddingFile();
    // };

    // uploader.onAfterAddingFile(function (item) {
    //     console.log("succeed");
    //     item.headers = { content: $scope.newPost.content
    //                    , title: $scope.newPost.title
    //                    };
    // });

    // uploader.onWhenAddingFileFailed(function (item) {
    //     console.error("fail");
    // });

    // uploader.onSuccessItem(function (item, res, status, headers) {
    //     if (status == 201) {
    //         window.location.replace(res);
    //     }
    // });

    $scope.page = 'new-blog-post';
});
