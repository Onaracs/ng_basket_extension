var app = angular.module('app', [
  'ui.router',
  'FriendCtrl',
  'BasketCtrl',
  'LinkCtrl',
  'SharedLinkCtrl'
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
	  .state('basket', {
	    url: '/baskets',
      controller: 'BasketCtrl',
      templateUrl: 'views/baskets.html'
    })
    .state('basket.links', {
      url: 'links/:basketName/:basketID',
      controller: 'LinkCtrl',
      templateUrl: 'views/links.html'
    })
    .state('basket.shared', {
      url: '/shared',
      controller: 'SharedLinkCtrl',
      templateUrl: 'views/shared_links.html'
    })
    .state('basket.save', {
      url: '/links/:basketName/:basketID',
	    controller: 'BasketCtrl',
      templateUrl: 'views/note.html'
    })

})