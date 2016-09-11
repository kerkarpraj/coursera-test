(function() {
    'use strict'

    angular.module('lunchChecker', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.checkLunchItems = function() {

            $scope.textColor = "#008000";

            if ($scope.items === undefined || $scope.items.trim() == "") {
                $scope.textColor = "#FF0000";
                $scope.message = "Please enter data first";
            } else if (($scope.items.trim().split(',')).length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    };
})();
