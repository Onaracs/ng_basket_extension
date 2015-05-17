angular.module('BasketCtrl', [
  'getBaskets',
  'siteInfo',
  'currentUser'
])

.controller('BasketCtrl', ['$scope', '$http', 'getUsersBaskets', 'getSiteInfo', 'getLinkstoBasket', 'getCurrentUser', function(
  $scope,
  $http,
  getUsersBaskets,
  getSiteInfo,
  getLinkstoBasket,
  getCurrentUser
) {

  var tabUrl,
      pageInfo;

  // get the current URL
  chrome.tabs.getSelected(null, function(tab) {

      tabUrl = tab.url;

  });

  getCurrentUser().then(function(result) {

    $scope.user = result.data.name;

  })

  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {

    $scope.baskets = result.data;

  });


  $scope.createBasket = function() {
    
    var promise = $http({
      url: 'http://localhost:3000/folders',
      dataType: 'json',
      method: 'POST',
      params: {
        name: $scope.newBasketName
      },
      headers: {'Content-Type': 'application/json'}
    }).success(function(response) {
      
      $scope.baskets.push(response);
      return $scope.baskets;

    }).error(function(response) {

      return {'status': false};

    })

  }; // createBasket()

  $scope.showSubmit = function(basket) {

    $scope.selectedBasket = basket;

    $scope.showMessage = true;

    getLinkstoBasket(basket.id).then(function(response) {
      
      $scope.links = response.data;

    });

  }

  $scope.saveLink = function(basketID) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {

        pageInfo = response.page_info;

        var promise = $http({
          url: 'http://localhost:3000/new_link',
          dataType: 'json',
          method: 'POST',
          params: {
            url: tabUrl,
            title: pageInfo.title,
            message: $scope.message,
            description: pageInfo.description,
            image: pageInfo.info,
            uniqueId: basketID
          },
          headers: {'Content-Type': 'application/json'}
        }).success(function(response) {
          
          return response;

        }).error(function(response) {

          return {'status': false};

        })
        
      });
    }); // chrome.tabs.query
  }
}])