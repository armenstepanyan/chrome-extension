# chrome-extension
Simple chrome extensions

### Click on extension icon
```
chrome.browserAction.onClicked.addListener(function (tab) {
    // send info for specefic tab
    chrome.tabs.sendMessage(tab.id, { action: 'display_list' }, function (response) {});
});
```

Create context menu in background.js
```
chrome.contextMenus.create({
	title: "Get Data", 
	contexts:["all", "page"], 
	onclick: openImgModal
  })

function openImgModal(info, tab){
    console.log(info, tab)
}
```

Open option page on icon click
```
chrome.action.onClicked.addListener(function(tab) {
	chrome.runtime.openOptionsPage();
})
```
### manifest v3
```
{
  "background": {
    "service_worker": "background.js"
 },
 "action": {
    "default_icon": "32.png"
 },
 ....
 }
```

Sending message to extension
```
chrome.runtime.sendMessage("ahanamijdbohnllmkgmhaeobimflbfkg", data, function (response) {
...
});
```

Listens message from `page.js` injected to current site
```
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
 ....
});
```

Communication between `content.js` and `background.js`

```
// content 
chrome.runtime.sendMessage({ type: 'get_move' }, function (response) {

});


// background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

});
```

