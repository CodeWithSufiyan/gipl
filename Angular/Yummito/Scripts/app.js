// constructor: validate

(function ($) {

    var oApp = angular.module('Yummito', []);
    oApp.controller('YummitoController', function ($scope) {
        var arrFood = ['wada-pav', 'bhaji', 'tea', 'missal', 'pohe'];
        $scope.arrFood = arrFood;
        $scope.addItem = function () {
            if (!$scope.txtItem) {
                return;
            }
            $scope.arrFood.push($scope.txtItem);
            $scope.txtItem = "";
        }

        $scope.removeItem = function ($index) {
            $scope.arrFood.splice($index, 1);
        }

        $scope.prepareOrder = function(el){
            console.log(el) 
            $scope.order = el
        }
    });

})(jQuery);