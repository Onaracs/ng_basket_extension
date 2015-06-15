angular.module('FriendCtrl', [
  'getFriends',
  // 'shareLinkForm'
])

.controller('FriendCtrl', ['$scope', '$http', 'getUsersFriends', function(
  $scope,
  $http,
  getUsersFriends
) {

  var tabUrl,
      pageInfo;

  // get the current URL
  chrome.tabs.getSelected(null, function(tab) {

      tabUrl = tab.url;

  });

  getUsersFriends().then(function(response) {

    $scope.friends = response.data;

  })

  //SEND LINK TO FRIEND THROUGH THE ID
  $scope.showSubmit = function(friend) {

    $scope.selectedFriend = friend;

    $scope.showMessage = true;

  }

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