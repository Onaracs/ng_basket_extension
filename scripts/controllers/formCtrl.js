angular.module('FormCtrl', [])

.controller('FormCtrl', ['$scope', '$state', '$http', function(
  $scope,
  $state,
  $http
) {

  $scope.createBasket = function() {
    
    var name = $scope.newBasketName;
    console.log(name);

    var promise = $http({
      url: 'https://mybaskets.herokuapp.com/folders',
      // url: 'http://localhost:3000/folders',
      dataType: 'json',
      method: 'POST',
      params: {
        name: name
      },
      headers: {'Content-Type': 'application/json'}
    }).success(function(response) {
      
      $scope.baskets.push(response);
      $state.go('basket.save', {'basketName': response.name,
                                'basketID': response.id});
      return $scope.baskets;

    }).error(function(response) {

      return {'status': false};

    })

  }; // createBasket()


}])