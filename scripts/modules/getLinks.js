angular.module('getLinks', [])

.factory('usersInbox', ['$http', function($http) {

  return function() {
    var url = 'http://localhost:3000/ng_inbox_links'

    var promise = $http({
      url: url,
      method: 'GET'
    }).success(function(response) {

      return response;

    }).error(function(response) {

      return {'status': false};

    })

    return promise
  }

}]);