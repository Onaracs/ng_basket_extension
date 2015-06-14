angular.module('LinkCtrl', [
  'getLinks'
])

.controller('LinkCtrl', ['$scope', '$stateParams', 'getLinkstoBasket', function(
  $scope,
  $stateParams,
  getLinkstoBasket
) {

  $scope.basketID = $stateParams.basketID;
  $scope.basketName = $stateParams.basketName;

  getLinkstoBasket($stateParams.basketID).then(function(response) {

    console.log(response);

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

}])