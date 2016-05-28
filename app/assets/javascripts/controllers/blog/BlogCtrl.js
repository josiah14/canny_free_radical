app.controller('BlogCtrl', function ($scope, $http) {
    var updateUrlParameter = function (preQueryStringUri, queryString, hash, key, value) {
            if (!(preQueryStringUri && key && value)) {
                console.error("Url parameters cannot be updated without a valid Uri, Key, and Value");
                return null;
            }

            var newQueryString = '',
                regexp = new RegExp("([?&])" + key + "=.*?(&|$)", "i"),
                separator = queryString.startsWith('?') ? '&' : '?';

            hash = hash || '';
            queryString = queryString || '';

            queryString.match(regexp) ? newQueryString = queryString.replace(regexp, '$1' + key + '=' + value + '$2')
                                      : newQueryString = queryString + separator + key + '=' + value;

            return preQueryStringUri + newQueryString + hash;
        },

        queryString = function () { return window.location.search; },

        preQueryStringUri = window.location.protocol + '//' + window.location.host + window.location.pathname,

        updateUrl = function (newUrl) {
            window.history.pushState(window.history.state, window.document.title, newUrl);
        },

        getQueryParam = function (queryString, name) {
            var regexp = new RegExp(name + "(=([^&#]*)|&|#|$)"),
                result = regexp.exec(queryString);

            return result ? (result[2] ? result[2] : null) : null;
        },

        $slySlidee = $('#posts-list > .slidee'),

        activatePost = function ($el) {
            updateUrl(updateUrlParameter(preQueryStringUri, queryString(), window.location.hash, 'post', $el.attr('post')));
            $el.addClass('active');

            $http.get('blog/' + $el.attr('post')).then(function (res) {
                $scope.activePost = {
                    image_url: res.data.image,
                    content: res.data.content,
                    title: $el.children('.title').first().text()
                };

                $scope.comments = [];

                var comment;
                for (var i = 0; i < res.data.comments.length; i++) {
                    comment = res.data.comments[i];
                    $scope.comments.push({
                        userName: comment.email,
                        text: comment.content,
                        createdDate: comment.created_at,
                        editDate: comment.updated_at
                    });
                }
            }, function (err) {
                console.log(err);
            });
        },

        activateLatestPost = function () {
            activatePost($slySlidee.children('li').first());
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
                             , swingSpeed: 0.08
                             , easing: 'swing'
                             },
                slyEvents = { active: function () { activatePost($slySlidee.children('.active').first()); } },
                postsListSly = new Sly('#posts-list', slyOptions, slyEvents).init();

            return {
                resetPostsList: function () {
                    var activeItem = postsListSly.rel.activeItem || 0,
                        $postsListFrame = $('#posts-list').remove();

                    $('#posts-list-wrapper').append($postsListFrame);
                    if (postsListSly) {
                        postsListSly.destroy();
                    };
                    setTimeout(function () {
                        postsListSly = new Sly("#posts-list", slyOptions, slyEvents).init();
                        postsListSly.activate(activeItem);
                    }, 1000);
                },
                slyObj: postsListSly
            };
        },

        slyCtrl = new SlyCtrl(),

        switchToText = function () {
            $('#blog-main').css('margin-left', '-100vw');
        },

        slideInText = function () {
            updateUrl(updateUrlParameter(preQueryStringUri, queryString(), window.location.hash, 'page', '1'));

            $('#blog-main')
                .animate({'margin-left':'-=1vw'}, 50, 'linear')
                .animate({'margin-left':'-=99vw'}, 450, 'linear');

            // If I don't do this, the button doesn't show up unless you resize
            // the screen or change the orientation of the device
            setTimeout(function () {
                $('.bottom-bar').hide().fadeIn('fast');
            }, 600);
        },

        backToCover = function () {
            updateUrl(updateUrlParameter(preQueryStringUri, queryString(), window.location.hash, 'page', '0'));

            $('#blog-main')
                .animate({'margin-left':'+=1vw'}, 50, 'linear')
                .animate({'margin-left':'+=99vw'}, 450, 'linear');

            // If you don't fade-out the entire bar, it overlaps the posts-list and prevents scrolling
            $('.bottom-bar').fadeOut('fast');
        },

        refreshBackButton = function () { $('.back').hide().show(); },

        getUsername = function () { return $('#email').val(); },

        getPassword = function () { return $('#password').val(); },

        register = function (username, password) {
            $.ajax({ url: '/users'
                   , method: 'POST'
                   , headers: { 'X-Transaction': 'POST Example'
                              , 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                              }
                   , data: { user: { email: username
                                   , password: password
                                   }
                           }
                   }).success(function (data, y, x) { if (x.status === 201) { location.reload(); }});
        },

        performLogin = function (username, password) {
            $.ajax({ url: '/users/sign_in'
                    , method: 'POST'
                    , headers: { 'X-Transaction': 'Create New User Session'
                                , 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                                }
                    , data: { user: { email: username
                                    , password: password
                                    }
                            }
                    }).success(function (data, y, x) { if (x.status === 200) { location.reload(); }});
        },

        login = function () { performLogin(getUsername(), getPassword()); },

        logout = function () {
            $.ajax({ url: '/users/sign_out'
                   , method: 'DELETE'
                   , headers: { 'X-Transaction': 'Delete current user session'
                              , 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                              }
                   }).success(function () { location.reload(); });
        },

        sendNewComment = function () {
            $.ajax({ url: '/blog/' + activePost + '/comments'
                   , method: 'POST'
                   , headers: { 'X-Transaction': 'Create new comment'
                              , 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                              }
                     , data: { content: $scope.newComment.content }
                   }).success(function (data, y, x) {
                       if (x.status === 201) {
                           $scope.comments.unshift({
                               userName: $('#logged-in-email').text(),
                               text: data.content,
                               createdDate: data.created_at,
                               editDate: data.updated_at
                           });
                           $('textarea.comments')[0].value = '';
                       }
                   });
        },

        activePost = getQueryParam(queryString(), 'post');

    $scope.page = "blog";
    $scope.newComment = {
        content: "",
        email: $('#logged-in-email').text,
        createdDate: Date().toString(),
        editDate: Date().toString()
    };
    if (activePost) {
        var slyItems = $slySlidee.children("li"),
            numItems = slyItems.length,
            activeItemLocation = numItems - parseInt(activePost) - 1,
            $activeItem = $slySlidee.children("li[post='" + parseInt(activePost) + "']").first();

        $activeItem.addClass('active');
        slyCtrl.slyObj.rel.activeItem = activeItemLocation,
        activatePost($activeItem);
    } else {
        activateLatestPost();
    }
    slyCtrl.resetPostsList();
    if (getQueryParam(queryString(), "page") === "1") { switchToText(); }

    // The items don't refresh properly on orientation change by default.  The postsList needs to be
    // throttled and refreshed manually for the posts list to display as expected on orientation
    // change and browser resize.
    $(window).on('orientationchange', slyCtrl.resetPostsList);
    $(window).on('resize', slyCtrl.resetPostsList);
    $('.btn.read').on('click touch', slideInText);
    $('.btn.back').on('click touch', backToCover);
    $('#add-comment').on('click touch', sendNewComment);
    // If you don't refresh the button while scrolling, it 'sticks' on mobile devices.
    $('#blog-main').on('scroll', refreshBackButton);
    $('.hard').on('touchmove', function (e) {
        console.log('moved');
    });
    $('#login').on('click', login);
    $('#logout').on('click', logout);
    $('#register').on('click', function () { register(getUsername(), getPassword()); });
});
