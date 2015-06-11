angular.module('siteInfo', [])

.factory('getSiteInfo', ['$q', function($q) {
  console.log("getting in this")

  var getTabUrl = function() {

    var deferred = $q.defer();

    // deferred.resolve(chrome.tabs.getSelected(null, function(tab) {
    deferred.resolve(chrome.tabs.query({active: true}, function(tab) {
        
        console.log(tab);
        return tab;

    }));

    console.log(deferred.promise);
    return deferred.promise;

  }

  return {
    getTabUrl: getTabUrl
  };

  // return function() {

  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
  //       pageInfo = response.page_info;

  //     });
  //     return pageInfo;
  //   }); // chrome.tabs.query

  //   return pageInfo;
  // }

}])