app.controller('BlogCtrl', ['$scope', function($scope) {
    var $slySlidee = $('#posts-list > .slidee'),
        getPostImageUrl = function ($el) {
            return $el.children('img').first().attr('src');
        },
        getPostTitle = function ($el) {
            return $el.children('.title').first().text();
        },
        activateLatestPost = function () {
            var $latestPost = $slySlidee.children('li').first();
            $scope.activePost = {
                image_url: getPostImageUrl($latestPost),
                title: getPostTitle($latestPost)
            };
        },
        SlyCtrl = function () {
            var slyOptions = { horizontal: true
                             , itemNav: 'forceCentered'
                             , mouseDragging: true
                             , touchDragging: true
                             , releaseSwing: true
                             , elasticBounds: true
                             , activateOn: 'click'
                             , prev: '#blog-later'
                             , next: '#blog-earlier'
                               , smart: true
                               , speed: 1000
                             },
                activatePost = function () {
                    var $activePost = $slySlidee.children('.active').first();
                    $scope.activePost = {
                        image_url: getPostImageUrl($activePost),
                        title: getPostTitle($activePost)
                    };
                    $scope.$apply();
                },
                slyEvents = { active: activatePost },
                postsListSly = new Sly("#posts-list", slyOptions, slyEvents).init();

            return {
                resetPostsList: function () {
                    var activeItem = postsListSly.rel.activeItem || 0
                      , $postsListFrame = $('#posts-list').remove();

                    $('#posts-list-wrapper').append($postsListFrame);
                    if (postsListSly) {
                        postsListSly.destroy();
                    };
                    setTimeout(function () {
                        postsListSly = new Sly("#posts-list", slyOptions, slyEvents).init();
                        postsListSly.activate(activeItem);
                    }, 500);
                }
            };
        },
        slyCtrl = new SlyCtrl();

    $scope.page = "blog";
    activateLatestPost();
    slyCtrl.resetPostsList();

    // The items don't refresh properly on orientation change by default.  The postsList needs to be
    // throttled and refreshed manually for the posts list to display as expected on orientation
    // change and browser resize.
    window.addEventListener('orientationchange', slyCtrl.resetPostsList);
    window.addEventListener('resize', slyCtrl.resetPostsList);
}]);
