angular.module('newBasketButtonDirective', [])
  .directive('newBasketButton', [function() {

    return {
      restrict: 'EA',
      scope: {
        showForm: '='
      },
      templateUrl: '/components/new-basket-button/new-basket-button.html'
    }

  }])