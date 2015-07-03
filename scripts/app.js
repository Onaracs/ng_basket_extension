var app = angular.module('app', [
  'ui.router',
  'FriendCtrl',
  'BasketCtrl',
  'LinkCtrl',
  'FormCtrl',
  'SharedLinkCtrl'
]);

app.config(function(
	$stateProvider, 
	$urlRouterProvider
) {

	$urlRouterProvider.otherwise('baskets');

	$stateProvider
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
	    controller: 'FormCtrl',
      templateUrl: 'views/note.html'
    })
    .state('friends', {
      url: '/friends',
      controller: 'FriendCtrl',
      templateUrl: 'views/friends.html'
    })
    .state('friends.success', {
      url: '/success',
      templateUrl: 'views/success.html'
    })
})