angular.module('BasketCtrl', [
  'getBaskets',
  'currentUser',
  'getLinks',
  'saveLinkForm',
  'newBasketButtonDirective',
  'navBar'
])

.controller('BasketCtrl', ['$scope', 'getUsersBaskets', 'getCurrentUser', 'recentlySavedLinks', function(
  $scope,
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

}])