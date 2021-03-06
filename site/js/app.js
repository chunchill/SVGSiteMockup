/**
 * Created by jasperchiu on 10/3/15.
 */
angular.module('app', [
    'app.module1',
    'app.module2',
    'app.module4',
    'app.module3',
    'app.module5',
    'ui.router',
    'ngAnimate'
])
    .run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ])

    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {


            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                .otherwise('/');

            //////////////////////////
            // State Configurations //
            //////////////////////////

            // Use $stateProvider to configure your states.
            $stateProvider

                //////////
                // Home //
                //////////

                .state("home", {

                    // Use a url of "/" to set a state as the "index".
                    url: "/",

                    // Example of an inline template string. By default, templates
                    // will populate the ui-view within the parent state's template.
                    // For top level states, like this one, the parent template is
                    // the index.html file. So this template will be inserted into the
                    // ui-view within index.html.
                    templateUrl: 'module-index/module-index.html'

                })


        }
    ]
);
