document.getElementById('summarizeBtn').addEventListener('click', function() {
    var videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl) {
        // Make sure the Flask server URL is correct and the server is running
        fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: videoUrl })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = data.summary;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
