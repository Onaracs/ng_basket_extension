angular.module('SaveCtrl', [])

.controller('SaveCtrl', ['$scope', '$http', '$stateParams', function(
  $scope,
  $http,
  $stateParams
) {

  var tabUrl,
      pageInfo;

  $scope.basketID = $stateParams.basketID;
  $scope.basketName = $stateParams.basketName;

  // get the current URL
  chrome.tabs.getSelected(null, function(tab) {

      tabUrl = tab.url;

  });

  $scope.saveLink = function(friend) {

    console.log(friend);
    console.log($scope.message);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {

        pageInfo = response.page_info;
        console.log(pageInfo);

        var promise = $http({
          url: 'http://localhost:3000/sent_link',
          dataType: 'json',
          method: 'POST',
          params: {
            url: tabUrl,
            message: $scope.message,
            title: pageInfo.title,
            description: pageInfo.description,
            image: pageInfo.info,
            uniqueId: friend.id
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