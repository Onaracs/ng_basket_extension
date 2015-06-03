angular.module('LinkCtrl', ['getLinks'])

.controller('LinkCtrl', ['$scope', '$stateParams', '$http', 'getLinkstoBasket', function(
  $scope,
  $stateParams,
  $http,
  getLinkstoBasket
) {

  var tabUrl,
      pageInfo;

  $scope.basketID = $stateParams.basketID;
  $scope.basketName = $stateParams.basketName;

  // get the current URL
  chrome.tabs.getSelected(null, function(tab) {

      tabUrl = tab.url;

  });

  getLinkstoBasket($stateParams.basketID).then(function(response) {

    // $$hashKey: "object:11"
    // created_at: "2015-05-16T11:56:50.556-04:00"
    // description: "Share your videos with friends, family, and the world"
    // folder_id: 2
    // id: 4
    // image: null
    // message: "Where did he go?"
    // title: "Hatbox Ghost Reappears in Haunted Mansion | Disneyland Resort - YouTube"
    // updated_at: "2015-05-16T11:56:50.556-04:00"
    // url: "https://www.youtube.com/watch?v=oAg3pP-PYok"
    $scope.links = response.data;

  })

  $scope.saveLink = function(basketID) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {

        pageInfo = response.page_info;
        console.log(pageInfo);
        console.log(basketID);

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
          
          $scope.links = response;

        }).error(function(response) {

          return {'status': false};

        })
        
      }); // chrome.tabs.sendMessage

    }); // chrome.tabs.query

  } // saveLink()

}])