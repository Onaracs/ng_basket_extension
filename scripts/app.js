var app = angular.module('app', [
  'ui.router',
  'FriendCtrl',
  'BasketCtrl',
  'LinkCtrl',
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
	    templateUrl: 'views/baskets.html'
	  })
    .state('links', {
      url: '/links/:basketID',
      controller: 'LinkCtrl',
      templateUrl: 'views/links.html'
    })

})