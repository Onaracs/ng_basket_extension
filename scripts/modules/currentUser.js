angular.module('currentUser', [])

.factory('getCurrentUser', ['$http', function($http) {

  return function() {

    var url = 'http://localhost:3000/ng_current_user'

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