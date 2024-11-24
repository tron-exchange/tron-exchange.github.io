document.addEventListener("DOMContentLoaded", function() {
    const usdtAmount = localStorage.getItem('usdtAmount');
    const trxAmount = localStorage.getItem('trxAmount');
    
    const resultUsdtLabel = document.getElementById('result-usdt');
    const resultTrxLabel = document.getElementById('result-trx');
    
    if (usdtAmount) {
        resultUsdtLabel.textContent = `${usdtAmount} USDT`;  // Set the text of the USDT label
    }
    
    if (trxAmount) {
        resultTrxLabel.textContent = `${trxAmount} TRX`;  // Set the text of the TRX label
    }
    
    const randomNumber = localStorage.getItem('randomNumber');
    
    if (randomNumber) {
        const orderHeading = document.getElementById('order-number');
        orderHeading.innerHTML = `Your order #${randomNumber}`;
    }
});

document.getElementById('trx-copy-btn').addEventListener('click', function() {
    // Get the value of the address
    const address = document.getElementById('trx-address').value;

    // Copy the address to clipboard
    navigator.clipboard.writeText(address).then(function() {
        alert('Address copied to clipboard: ' + address);
    }).catch(function(error) {
        console.error('Failed to copy text: ', error);
    });
});

let timer; // Global variable to hold the countdown timer
let timeLeft = 15 * 60; // 15 minutes in seconds

// Show the overlay and start the countdown (only if not already running)
document.getElementById('paidBtn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'flex';
  
  // Only start the countdown if it hasn't started yet
  if (!timer) {
    startCountdown();
  }
});

// Close the overlay but keep the timer running
document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
});

// Countdown function
function startCountdown() {
  var countdownElement = document.getElementById('countdown');
  
  timer = setInterval(function() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero if seconds < 10
    
    countdownElement.textContent = `Time remaining: ${minutes}:${seconds}`;
    
    timeLeft--;
    
    if (timeLeft < 0) {
      clearInterval(timer);
      countdownElement.textContent = 'Time expired.';
      timer = null; // Reset timer when expired
    }
  }, 1000);
}
