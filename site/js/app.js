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
    ]);
