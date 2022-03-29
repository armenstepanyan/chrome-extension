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
