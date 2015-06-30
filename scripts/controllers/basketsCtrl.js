angular.module('BasketCtrl', [
  'getBaskets',
  'currentUser',
  'getLinks',
  'saveLinkForm',
  'newBasketButtonDirective',
  'navBar'
])

.controller('BasketCtrl', ['$scope', '$http', 'getUsersBaskets', 'getCurrentUser', 'recentlySavedLinks', function(
  $scope,
  $http,
  getUsersBaskets,
  getCurrentUser,
  recentlySavedLinks
) {

  // $scope.activeType = 'baskets';
  $scope.showForm = false;

  getCurrentUser().then(function(result) {

    $scope.user = result.data.name;
  })

  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {

    $scope.baskets = result.data;

  });

  recentlySavedLinks().then(function(response) {

    $scope.recentLinks = response.data;

  })

  $scope.createBasket = function() {
    
    var promise = $http({
      url: 'https://mybasketsapp.com/folders',
      dataType: 'json',
      method: 'POST',
      params: {
        name: $scope.newBasketName
      },
      headers: {'Content-Type': 'application/json'}
    }).success(function(response) {
      
      console.log(response);
      $scope.baskets.push(response);
      return $scope.baskets;

    }).error(function(response) {

      return {'status': false};

    })

  }; // createBasket()

}])