(function () {
    'use strict';
    angular.module('lockingandpricingadj').config(config);
    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider.state('loanCenter.loan.lockingandpricingadj', {
            url: '/lockingandpricingadj',
            views: {
                'lockingandpricingadj': {
                    templateUrl: '/angular/lockingandpricingadj/lockingandpricingadj.html',
                    controller: 'lockingandpricingController as lockingpricingCtrl'
                }
            },
        });
    }
})();
//# sourceMappingURL=lockingandpricingadj.routes.js.map