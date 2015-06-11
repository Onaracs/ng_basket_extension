var app = angular.module('app', [
  'ui.router',
  'FriendCtrl',
  'BasketCtrl',
  'LinkCtrl',
  'SaveCtrl',
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
    .state('basket.shared', {
      url: '/shared',
      controller: 'SharedLinkCtrl',
      templateUrl: 'views/shared_links.html'
    })
    .state('basket.save', {
      url: '/links/:basketName/:basketID',
      controller: 'SaveCtrl',
      templateUrl: 'views/note.html'
    })

})