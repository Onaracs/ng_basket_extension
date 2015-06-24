angular.module('currentUser', [])

.factory('getCurrentUser', ['$http', function($http) {

  return function() {

    var url = 'https://mybaskets.herokuapp.com/ng_current_user'

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