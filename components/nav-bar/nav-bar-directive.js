angular.module('navBar', [])
  .directive('navBar', function() {

    return {
      restrict: 'EA',
      scope: true,
      templateUrl: '/components/nav-bar/nav-bar.html'

    }

  })