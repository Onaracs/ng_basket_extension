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
      
      console.log(scope);

      getSiteInfo().then(function(response) {

        scope.url = response.url;
        scope.title = response.title;
        scope.image = response.favIconUrl;
        console.log(scope);

      }) // getSiteInfo()

      scope.saveLink = function(basketID) {

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

          console.log(response);
          $state.go('basket.links', { 
            'basketName': response.name, 
            'basketID': response.id
          })

        }).error(function(response) {

          return {'status': false};

        })
        
      } // saveLink()

    } // link

  } // return

}]) 