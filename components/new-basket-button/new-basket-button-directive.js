angular.module('newBasketButtonDirective', [])
  .directive('newBasketButton', [function() {

    return {
      restrict: 'EA',
      scope: {
        showForm: '='
      },
      templateUrl: 'ng-app/components/new-basket-button/new-basket-button.html'
    }

  }])