/**
 * Created by jasperchiu on 10/3/15.
 */
angular.module('app.module1', [
    'ui.router'
])
    .config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                //////////////
                // module1 //
                //////////////
                .state('module1', {
                    url: 'module1',
                    templateUrl: 'module-one/module1.html',
                    //templateUrl: 'editor/svg-editor.html',
                    controller: ['$scope', '$state',
                        function ($scope, $state) {

                            //Content in controller
                            $scope.test = function(){
                                alert("test");
                            };

                        }]
                })
        }]
);
