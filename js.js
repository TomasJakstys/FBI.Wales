function showText() {
    const blackScreen = document.querySelector('.black-screen');
    blackScreen.style.display = 'none';
    showInformation(); // Call showInformation here to show the information after hiding the black screen
    getIPAddress(); // Call getIPAddress here if you want to show the IP address after hiding the black screen
}

console.log('Everything should go as planned.');




function showInformation() {
    const information = document.querySelector('.information');
    information.style.display = 'block'; // Set display to block to make it visible
}

function throttle(func, delay) {
    let timeout;
    return function() {
        if (!timeout) {
            timeout = setTimeout(() => {
                func.apply(this, arguments);
                timeout = null;
            }, delay);
        }
    };
}

// Example usage
const throttledFunc = throttle(sendToDiscord, 10000); // Limit to one call per second
button.addEventListener('click', throttledFunc);
