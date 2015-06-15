angular.module('FriendCtrl', [
  'getFriends',
  'shareLinkForm'
])

.controller('FriendCtrl', ['$scope', '$http', 'getUsersFriends', function(
  $scope,
  $http,
  getUsersFriends
) {

  getUsersFriends().then(function(response) {

    $scope.friends = response.data;

  })

  //SEND LINK TO FRIEND THROUGH THE ID
  $scope.showSubmit = function(friend) {

    $scope.selectedFriend = friend;

  }

}])