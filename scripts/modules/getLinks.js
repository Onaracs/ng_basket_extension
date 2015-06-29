angular.module('getLinks', [])

.factory('usersInbox', ['$http', function($http) {

  return function() {
    var url = 'http://mybasketsapp.com/ng_inbox_links'

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

}])

.factory('recentlySavedLinks', ['$http', function($http) {

  return function() {
    // var url = 'http://localhost:3000/ng_inbox_links'
    var url = 'http://mybasketsapp.com/last_saved_links'

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