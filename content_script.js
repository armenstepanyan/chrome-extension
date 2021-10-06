chrome.runtime.onMessage.addListener(function(msg) {
    console.log("Message from background: ", msg);
});


document.addEventListener('click', function(){
	chrome.runtime.sendMessage({ data: 'message from content script'}, function (response) {
	  console.log(response)
	});
})


