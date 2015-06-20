angular.module('navBar', [])
  .directive('navBar', function() {

    return {
      restrict: 'EA',
      scope: true,
      templateUrl: '/components/nav-bar/nav-bar.html',
      link: function( scope ) {

        scope.tabs = [
          {
            title: 'Inbox',
            link: 'basket.shared'
          },
          {
            title: 'My Baskets',
            link: 'basket'
          },
          {
            title: 'Friends',
            link: 'friends'
          }
        ];

      }
    }

  })