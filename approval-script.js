

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

document.getElementById('paidBtn').addEventListener('click', function() {
    // Show the overlay
    document.getElementById('overlay').style.display = 'flex';
    startCountdown();
  });
  
  // Close the overlay when the close button is clicked
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
  });
  
  // Countdown function for 15 minutes
  function startCountdown() {
    var timeLeft = 15 * 60; // 15 minutes in seconds
    var countdownElement = document.getElementById('countdown');
    
    var timer = setInterval(function() {
      var minutes = Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds; // Add leading zero if seconds < 10
      
      countdownElement.textContent = `Time remaining: ${minutes}:${seconds}`;
      
      timeLeft--;
      
      if (timeLeft < 0) {
        clearInterval(timer);
        countdownElement.textContent = 'Time expired.';
      }
    }, 1000);
  }
  