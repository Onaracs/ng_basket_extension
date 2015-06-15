angular.module('shareLinkForm', ['siteInfo'])
.directive('shareLinkForm', ['$http', '$state', '$stateParams', 'getSiteInfo', function(
  $http,
  $state,
  $stateParams,
  getSiteInfo
) {

  return {
    restrict: 'EA',
    scope: {},
    templateUrl: '/components/save-link-form/save-link-form.html',
    link: function( scope, $ele, $attrs ) {

      scope.basketID = $stateParams.basketID;
      scope.basketName = $stateParams.basketName;

      getSiteInfo().then(function(response) {

        scope.url = response.url;
        scope.title = response.title;
        scope.image = response.favIconUrl;

      }) // getSiteInfo()

      scope.shareLink = function(basketID) {

        var promise = $http({
          url: 'http://localhost:3000/new_link',
          dataType: 'json',
          method: 'POST',
          params: {
            url: scope.url,
            title: scope.title,
            message: scope.message,
            description: '',
            image: scope.image,
            uniqueId: basketID
          },
          headers: {'Content-Type': 'application/json'}
        }).success(function(response) {

          $state.go('basket.links', { 
            'basketName': scope.basketName, 
            'basketID': scope.basketID
          })

        }).error(function(response) {

          return {'status': false};

        })
        
      } // saveLink()

    } // link

  } // return

}]) 