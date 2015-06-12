angular.module('siteInfo', [])

.factory('getSiteInfo', ['$q', function($q) {

  return function() {

    var deferred = $q.defer();

    chrome.tabs.query({active: true}, function(tab) {
        
        deferred.resolve(tab[0]);

    });

    return deferred.promise;
    
  }; // return 


}]); // getSiteInfo