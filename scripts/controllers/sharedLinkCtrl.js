angular.module('SharedLinkCtrl', [
  'getLinks'
])

.controller('SharedLinkCtrl', ['$scope', 'usersInbox', function(
  $scope,
  usersInbox
) {

  usersInbox().then(function(response) {

    $scope.sharedLinks = response.data;

  })


}])