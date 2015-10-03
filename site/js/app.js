/**
 * Created by jasperchiu on 10/3/15.
 */
angular.module('app', [
    'app.module1',
    'app.module2',
    'ui.router',
    'ngAnimate'
])
    .run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]);
