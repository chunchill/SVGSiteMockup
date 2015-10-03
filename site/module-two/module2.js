/**
 * Created by jasperchiu on 10/3/15.
 */
angular.module('app.module2', [
    'ui.router'
])
    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                //////////////
                // module2 //
                //////////////
                .state('module2', {
                    url: 'module2',
                    templateUrl: 'module-two/module2.html',
                    //templateUrl: 'editor/svg-editor.html',
                    controller: ['$scope', '$state',
                        function ($scope, $state) {

                            //Content in controller

                        }]
                })
        }]
);
