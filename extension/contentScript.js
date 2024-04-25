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
        };
        ytdPlayer.appendChild(button);
    }
}

setTimeout(insertButton, 3000);
