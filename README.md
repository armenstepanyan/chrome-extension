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
Get url 
```
chrome.runtime.getURL('options/index.html')
```
### Context menu
```
const CONTEXT_MENU_ID = "my_extension_menu_id";

var cmid = chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "Block this site",
    contexts: ["all", "page"]
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == CONTEXT_MENU_ID) {
        // handle click here
    }
});
```

Disable context menu
```
chrome.contextMenus.update(CONTEXT_MENU_ID, { enable: false }); // make disabled
chrome.contextMenus.update(CONTEXT_MENU_ID, { visible: false }); // hide menu
```

### Sending message to extension

manifest.json
```
"externally_connectable": {
  "matches": ["*://site.com/*", "*://www.site.com/*"]
},
```

```
chrome.runtime.sendMessage("ahanamijdbohnllmkgmhaeobimflbfkg", data, function (response) {
...
});
```

Listen message from `page.js` injected to current site
```
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
 ....
});
```

### block request
```
const iframeHosts = [
	'https://site.org/',
];
chrome.declarativeNetRequest.updateDynamicRules({
	removeRuleIds: iframeHosts.map((h, i) => i + 1),
	addRules: iframeHosts.map((h, i) => ({
		id: i + 1,
		condition: {
			regexFilter: '/aaa',
			resourceTypes: ['xmlhttprequest'],
		},
		action: {
			type: 'block',

		},
	})),
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

### Open page on update
```typescript
chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason === 'update') {
	  chrome.tabs.create({
		url: chrome.runtime.getURL('update.html')
	  })
	}
  });
```

