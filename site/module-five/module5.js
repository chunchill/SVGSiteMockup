/**
 * Created by carlos on 10/7/15.
 */
angular.module('app.module5', [
    'ui.router'
])
    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                //////////////
                // module5 //
                //////////////
                .state('module5', {
                    url: 'module5',
                    templateUrl: 'module-five/module5.html',
                    //templateUrl: 'editor/svg-editor.html',
                    controller: ['$scope', '$state',
                        function ($scope, $state) {

                            //Content in controller

                        }]
                })
        }]
);
