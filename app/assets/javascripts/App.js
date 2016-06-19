var app = angular.module('canny-free-radical', [ 'ui.bootstrap'
                                               , 'hc.marked'
                                               , 'ngResource'
                                               , 'ngAnimate'
                                               , 'ui.layout'
                                               ]);

app.config(['markedProvider', function (markedProvider) {
    markedProvider.setOptions({
        gfm: true,
        highlight: function (code) {
            return hljs.highlightAuto(code, [
                'ruby',
                'javascript',
                'haskell',
                'bash',
                'cpp',
                'cmake',
                'ant',
                'xml',
                'html',
                'css',
                'clojure',
                'coffeescript',
                'dart',
                'django',
                'python',
                'elm',
                'erb',
                'elixir',
                'nix',
                'objectivec',
                'json',
                'haml',
                'handlebars',
                'http',
                'java',
                'scala',
                'lisp',
                'go',
                'gradle',
                'dockerfile',
                'less',
                'scss',
                'swift',
                'vim',
                'sql',
                'prolog',
                'dns',
                'clojure-repl',
                'makefile',
                'markdown',
                'mercury',
                'scheme',
                'rust',
                'r',
                'q',
                'ocaml',
                'sml'
            ]).value;
        }
    });
    hljs.configure({
        tabReplace: '  '
    });
}]);
