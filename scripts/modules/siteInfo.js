angular.module('siteInfo', [])

.factory('getSiteInfo', function() {
  console.log("getting in this")

  return function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {ping: "Send Page Info"}, function(response) {
        pageInfo = response.page_info;

      });
      return pageInfo;
    }); // chrome.tabs.query

    return pageInfo;
  }

})