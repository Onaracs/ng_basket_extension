var app = angular.module('app', [
  'ui.router',
  'FriendCtrl',
  'BasketCtrl',
  'LinkCtrl'
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
      templateUrl: 'views/friends.html'
    })
	  .state('baskets', {
	    url: '/baskets',
	    controller: 'BasketCtrl',
	    templateUrl: 'views/baskets.html'
	  })
    .state('baskets.links', {
      url: '/links/:basketName/:basketID',
      controller: 'LinkCtrl',
      templateUrl: 'views/links.html'
    })

})