angular.module('BasketCtrl', [
  'getBaskets',
  'siteInfo',
  'currentUser'
])

.controller('BasketCtrl', ['$scope', '$http', 'getUsersBaskets', 'getSiteInfo', 'getLinkstoBasket', 'getCurrentUser', function(
  $scope,
  $http,
  getUsersBaskets,
  getSiteInfo,
  getLinkstoBasket,
  getCurrentUser
) {

  getCurrentUser().then(function(result) {

    $scope.user = result.data.name;

  })

  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {

    $scope.baskets = result.data;

  });


  $scope.createBasket = function() {
    
    var promise = $http({
      url: 'http://localhost:3000/folders',
      dataType: 'json',
      method: 'POST',
      params: {
        name: $scope.newBasketName
      },
      headers: {'Content-Type': 'application/json'}
    }).success(function(response) {
      
      $scope.baskets.push(response);
      return $scope.baskets;

    }).error(function(response) {

      return {'status': false};

    })

  }; // createBasket()

}])