chrome.browserAction.onClicked.addListener(function(tab) {
    var title = encodeURIComponent(tab.title);
    var url = encodeURIComponent(tab.url);
    var shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
    window.open(shareUrl, '_blank');
  });
  