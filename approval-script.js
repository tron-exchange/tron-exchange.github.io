

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
