angular.module('getBaskets', [])

.factory('getUsersBaskets', ['$http', function($http) {

  
  return function() {
    var url = 'http://localhost:3000/ng_users_folders';

    var promise = $http({
      url: url,
      method: 'GET'
    }).success(function(response) {

      return response;

    }).error(function(response) {

      return {'status': false};

    })

    return promise;
  }

}])

.factory('getLinkstoBasket', ['$http', function($http) {
  var url = 'http://localhost:3000/ng_basket_links'

  return function(basketID) {

    var promise = $http({
      url: url,
      params: {basketID: basketID},
      method: 'GET'
    }).success(function(response) {

      return response;

    }).error(function(response) {

      return {'status':false};

    })

    return promise;

  }

}])