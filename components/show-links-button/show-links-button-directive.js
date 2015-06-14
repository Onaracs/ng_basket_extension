angular.module('showLinksButton', [])
.directive('showLinksButton', ['$http', '$state', '$stateParams', function (
  $http,
  $state,
  $stateParams
) {

  return {
    restrict: 'EA',
    scope: {
      basketName: '=',
      basketId: '='
    },
    templateUrl: '/components/show-links-button/show-links-button.html'
  } // return

}]) 