angular.module('showLinksButton', [])
.directive('showLinksButton', ['$http', '$state', '$stateParams', function (
  $http,
  $state,
  $stateParams
) {

  return {
    restrict: 'EA',
    scope: {

    },
    templateUrl: '/components/show-links-button/show-links-button.html',
    link: function( scope, $ele, $attrs ) {
      

    } // link

  } // return

}]) 