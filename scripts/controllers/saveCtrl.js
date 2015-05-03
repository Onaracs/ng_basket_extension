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
        pageInfo = response.page_info;
        
        console.log(pageInfo);
        var pageInfoJSON =  JSON.stringify({
          url: tabUrl,
          uniqueId: basketID,
          pageInfo: pageInfo
        });

        console.log(pageInfoJSON);

        var promise = $http({
          url: 'http://localhost:3000/new_link',
          method: 'POST',
          params: pageInfoJSON,
          headers: {'Content-Type': 'application/json'}
        }).success(function(response) {
          console.log(response);
          return response;

        }).error(function(response) {

          return {'status': false};

        })
        
      });
    }); // chrome.tabs.query


    // getSiteInfo().then(function(result) {
    //   console.log(result);
    // })
  }
}])