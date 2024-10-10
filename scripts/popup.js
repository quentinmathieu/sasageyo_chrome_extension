// const checkbox = document.getElementById('check-box')
// console.log(checkbox)
// checkbox.addEventListener('change', (event) => {
//   if (event.currentTarget.checked) {
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {html: "youhou"});
        // do something with response here, not outside the function
        console.log(response.html);  
      })();
//   } else {
//     alert('not checked');
//   }
// })

