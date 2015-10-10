/**
 * Created by jasperchiu on 10/3/15.
 */
angular.module('app.module4', [
    'ui.router'
])
    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                //////////////
                // module2 //
                //////////////
                .state('module4', {
                    url: '/module4',
                    templateUrl: 'module-four/module4.html',
                    //templateUrl: 'editor/svg-editor.html',
                    controller: ['$scope', '$state',
                        function ($scope, $state) {

                            //Content in controller

                        }]
                })
        }]
);
