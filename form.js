document.getElementById('balanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the value from the form
    const transferOption = document.getElementById('transfer').value;

    // Send the data to the webhook URL
    fetch('https://your-webhook-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ transfer: transferOption })
    })
    .then(response => response.json())
    .then(data => {
        alert('Your response has been sent.');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
