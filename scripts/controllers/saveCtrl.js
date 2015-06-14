angular.module('SaveCtrl', ['siteInfo'])

.controller('SaveCtrl', ['$scope', '$state', '$http', '$stateParams', 'getSiteInfo', function(
  $scope,
  $state,
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

    $scope.url = response.url;
    $scope.title = response.title;
    $scope.image = response.favIconUrl;

  })

  $scope.viewLinks = function() {

    console.log('viewing link')
    $state.go()

  }

  $scope.saveLink = function(basketID) {

    console.log($scope);

    var promise = $http({
      url: 'http://localhost:3000/new_link',
      dataType: 'json',
      method: 'POST',
      params: {
        url: $scope.url,
        title: $scope.title,
        message: $scope.message,
        description: '',
        image: $scope.image,
        uniqueId: basketID
      },
      headers: {'Content-Type': 'application/json'}
    }).success(function(response) {

      console.log(response);
      return response;

    }).error(function(response) {

      return {'status': false};

    })
    
  } // saveLink()

}])

// $scope.saveLink = function(basketID) {

//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {

//       pageInfo = response.page_info;
//       console.log(pageInfo);

//       var promise = $http({
//         url: 'http://localhost:3000/sent_link',
//         dataType: 'json',
//         method: 'POST',
//         params: {
//           url: tabUrl,
//           title: pageInfo.title,
//           message: $scope.message,
//           description: pageInfo.description,
//           image: pageInfo.info,
//           uniqueId: basketID
//         },
//         headers: {'Content-Type': 'application/json'}
//       }).success(function(response) {
//         console.log(response);
//         return response;

//       }).error(function(response) {

//         return {'status': false};

//       })
      
//     });
//   }); // chrome.tabs.query
// } // saveLink()