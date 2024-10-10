document.body.style.backgroundColor="red";



(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {message: "ho"});
    // do something with response here, not outside the function
    console.log(response);  
    })();

