angular.module('SaveCtrl', ['siteInfo'])

.controller('SaveCtrl', ['$scope', '$http', '$stateParams', 'getSiteInfo', function(
  $scope,
  $http,
  $stateParams,
  getSiteInfo
) {

  var tabUrl,
      pageInfo,
      test;

  $scope.basketID = $stateParams.basketID;
  $scope.basketName = $stateParams.basketName;
  
  getSiteInfo().then(function(response) {

    console.log(response);
    $scope.url = response.url;

  })
  console.log($scope);
  // getSiteInfo().getTabUrl().then(function(response) {

  //   console.log(response);
  //   $scope.url = response;

  // })
// console.log(getSiteInfo(getTabUrl()));

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
  //     console.log(response);
  //     $scope.title = response.page_info.title;
  //   })
  // })

  $scope.saveLink = function(friend) {

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