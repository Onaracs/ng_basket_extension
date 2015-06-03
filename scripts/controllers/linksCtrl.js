angular.module('LinkCtrl', ['getLinks'])

.controller('LinkCtrl', ['$scope', '$stateParams', 'getLinkstoBasket', function(
  $scope,
  $stateParams,
  getLinkstoBasket
) {

  console.log($scope);
  console.log($stateParams);

  getLinkstoBasket($stateParams.basketID).then(function(response) {

    console.log(response);

  })

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