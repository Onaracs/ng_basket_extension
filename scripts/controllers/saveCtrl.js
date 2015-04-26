angular.module('SaveCtrl', [
  'getBaskets'
])

.controller('SaveCtrl', ['$scope', 'getUsersBaskets', function(
  $scope, 
  getUsersBaskets
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
  }

  $scope.saveLink = function(basketID) {
    console.log(basketID);
    console.log($scope.message);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
        pageInfo = response.page_info;

        return pageInfo
        // var req = new XMLHttpRequest(); 

        // req.open("POST", 'http://www.mybasketsapp.com/' + path);
        // req.open("POST", 'http://localhost:3000/' + path);
        // req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // req.send(JSON.stringify({url: url,
        //                         uniqueId: id,
        //                         message: message,
        //                         pageInfo: pageInfo}));

      });  
    }); // chrome.tabs.query

    console.log(pageInfo);

      // var url = 'http://localhost:3000/new_link';

      // var promise = $http({
      //   url: url,
      //   method: 'POST'
      // }).success(function(response) {

      //   return response;

      // }).error(function(response) {

      //   return {'status': false};

      // })

      // return promise;
  }

}])