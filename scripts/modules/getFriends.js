angular.module('getFriends', [])

.factory('getUsersFriends', ['$http', function($http) {

  return function() {
    var url = 'https://mybaskets.herokuapp.com/ng_users_friends'

    var promise = $http({
      url: url,
      method: 'GET'
    }).success(function(response) {

      return response;

    }).error(function(response) {

      return {'status':false};

    })

    return promise;
  }

}])