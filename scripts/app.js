var app = angular.module('app', [
  'ui.router',
  'FriendCtrl',
  'BasketCtrl',
  'getBaskets',
  'siteInfo'
]);

app.config(function(
	$stateProvider, 
	$urlRouterProvider
) {

	$urlRouterProvider.otherwise('baskets');

	$stateProvider
    .state('friends', {
      url: '/friends',
      controller: 'FriendCtrl',
      templateUrl: 'views/shareLink.html'
    })
	  .state('baskets', {
	    url: '/baskets',
	    controller: 'BasketCtrl',
	    templateUrl: 'views/saveBaskets.html'
	  })

})