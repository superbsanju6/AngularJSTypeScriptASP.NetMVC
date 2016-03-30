﻿(function () {
    'use strict';
    angular.module('loanCenter',
        [
         'blockUI',
         'loan.calculator',
         'loan.events',
         'http.ui.status',
         'loanCenter.core',
         'loanDetails',
         'loanApplication',         
         'contextualBar',         
         'docVault',
         'costDetails',
         'queue',
         'loanScenario',
         'aus',
         //'stipsandconditions',
         'uploadFiles',
         'PricingResults',
         'encompassModule',
         'complianceEase',
         'lockingandpricingadj',
         'stipsandconditionsOld',
         'impoundCalculator',
         'assignments',
         'digitaldocModule',
         'compliancecenter',
         'preapprovalletters',
         'integrations.common',
         'documents',
         'mailroom',
         'fhaCenter',
         'signalrModule',
         'vaCenter',
         'copyLoan',
         'util',
         'copyLoan',
         'ntbCenter',
         'integrations',
         'ui.tinymce',
         'secureLinkEmail',
         'modal-directive',
         'usdaCenter'
        ]);
})();