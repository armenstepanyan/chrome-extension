chrome.browserAction.onClicked.addListener(function(tab) {
    navigateOptionPage();
})


function navigateOptionPage() {
    var optionsUrl = chrome.extension.getURL('options/index.html');
    chrome.tabs.query({}, function(extensionTabs) {
        var found = false;
        for (var i=0; i < extensionTabs.length; i++) {
            if ( extensionTabs[i].url.includes(optionsUrl)) {
                found = true;
                chrome.tabs.update(extensionTabs[i].id, {"active": true, url: extensionTabs[i].url});
            }
        }
        if (found === false) {
            chrome.tabs.create({url: "options/index.html"});
        }
    });
}

// listen message from content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {    
	console.log(request);
	sendResponse({ receive: true });

})


