angular.module('LinkCtrl', [])

.controller('LinkCtrl', ['$scope', '$stateParams', function(
  $scope,
  $stateParams
) {

  console.log($scope);
  console.log($stateParams);

}])