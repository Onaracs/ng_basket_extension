angular.module('saveLinkForm', ['siteInfo', 'showLinksButton'])
.directive('saveLinkForm', ['$http', '$state', '$stateParams', 'getSiteInfo', function(
  $http,
  $state,
  $stateParams,
  getSiteInfo
) {

  return {
    restrict: 'EA',
    scope: {
      basket: '='
    },
    templateUrl: '/components/save-link-form/save-link-form.html',
    link: function( scope, $ele, $attrs ) {

      console.log($stateParams);
      console.log(scope);
 
      scope.basketName = $stateParams.basketName;
      scope.basketID = $stateParams.basketID;

      getSiteInfo().then(function(response) {

        scope.url = response.url;
        scope.title = response.title;
        scope.image = response.favIconUrl;

      }) // getSiteInfo()

      scope.saveLink = function(basketID) {

        var promise = $http({
          url: 'https://mybaskets.herokuapp.com/new_link',
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