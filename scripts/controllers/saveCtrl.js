angular.module('SaveCtrl', [
  'getBaskets',
  'siteInfo'
])

.controller('SaveCtrl', ['$scope', '$http', 'getUsersBaskets', 'getSiteInfo', 'getLinkstoBasket', function(
  $scope,
  $http,
  getUsersBaskets,
  getSiteInfo,
  getLinkstoBasket
) {

  var tabUrl,
      pageInfo;

  // get the current URL
  chrome.tabs.getSelected(null, function(tab) {

      tabUrl = tab.url;

  });

  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {

    $scope.baskets = result.data;

  });

  $scope.showSubmit = function(basket) {

    $scope.selectedBasket = basket;

    $scope.showMessage = true;

    getLinkstoBasket(basket.id).then(function(response) {
      
      $scope.links = response.data;
      console.log($scope.links);

    });

  }

  $scope.saveLink = function(basketID) {

    console.log(basketID);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {

        console.log(response);
        console.log($scope.message);
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
          console.log(response);
          return response;

        }).error(function(response) {

          return {'status': false};

        })
        
      });
    }); // chrome.tabs.query
  }
}])