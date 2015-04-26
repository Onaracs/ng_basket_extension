angular.module('ShareCtrl', [
  'getFriends'
])

.controller('ShareCtrl', ['$scope', 'getUsersFriends', function(
  $scope,
  getUsersFriends
) {

  getUsersFriends().then(function(response) {
    $scope.friends = response.data;
  })

  //SEND LINK TO FRIEND THROUGH THE ID

}])