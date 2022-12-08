chrome.action.onClicked.addListener(function(tab) {
	chrome.runtime.openOptionsPage();
})

// listen message from content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {    
	console.log(request);
	sendResponse({ receive: true });

})


