angular.module('SaveCtrl', [
  'saveShareLinkForm'
])

.controller('SaveCtrl', ['$scope', '$state', '$http', '$stateParams', function(
  $scope,
  $state,
  $http,
  $stateParams
) {

  $scope.basketID = $stateParams.basketID;
  $scope.basketName = $stateParams.basketName;



}])