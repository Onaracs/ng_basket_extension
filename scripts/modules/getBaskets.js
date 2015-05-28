angular.module('getBaskets', [])

.factory('getUsersBaskets', ['$http', function($http) {

  
  return function() {
    var url = 'http://localhost:3000/ng_users_folders';

    var promise = $http({
      url: url,
      method: 'GET'
    }).success(function(response) {

      // console.log(response);
      // array = [
      //  {created_at: "2015-05-16T11:42:44.050-04:00",
      //   id: 2,
      //   name: "Test Basket",
      //   updated_at: "2015-05-16T11:42:44.050-04:00",
      //   user_id: 1}
      // ]

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

      // console.log(response);
      // array = [
      //   {
      //     created_at: "2015-05-16T11:56:50.556-04:00",
      //     description: "Share your videos with friends, family, and the world",
      //     folder_id: 2,
      //     id: 4,
      //     image: null,
      //     message: "Where did he go?",
      //     title: "Hatbox Ghost Reappears in Haunted Mansion | Disneyland Resort - YouTube",
      //     updated_at: "2015-05-16T11:56:50.556-04:00",
      //     url: "https://www.youtube.com/watch?v=oAg3pP-PYok"
      //   }
      ]
      return response;

    }).error(function(response) {

      return {'status':false};

    })

    return promise;

  }

}])