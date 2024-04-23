// contentScript.js
// This script will add a button to YouTube video pages to summarize the video.

function insertButton() {
    const ytdPlayer = document.querySelector('ytd-watch-flexy');
    if (ytdPlayer && !document.querySelector('#summarizeBtn')) {
        const button = document.createElement('button');
        button.innerText = 'Summarize This Video';
        button.id = 'summarizeBtn';
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.padding = '10px';
        button.style.zIndex = '1000';
        button.onclick = function() {
            alert('Summarization triggered!');
            // Here you'd typically send a message to the background script to process the summary.
        };
        ytdPlayer.appendChild(button);
    }
}

// Wait for the YouTube page to load sufficiently before attempting to insert the button.
setTimeout(insertButton, 3000);
