chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
     
    


document.documentElement.classList.add('sasageyo');

let link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';

document.head.appendChild(link);

link.href = 'https://attack-on-titan.quentin-mathieu.fr/sasageyo.css';



});

