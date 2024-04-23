document.getElementById('summarizeBtn').addEventListener('click', function() {
    var videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl) {
        document.getElementById('summarizeBtn').innerText = 'Summarizing...';
        fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: videoUrl })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('summarizeBtn').innerText = 'Summarize';
            document.getElementById('result').innerText = data.summary;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('summarizeBtn').innerText = 'Summarize';
        });
    }
});
