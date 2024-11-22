

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