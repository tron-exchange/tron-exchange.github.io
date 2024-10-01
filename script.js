const usdtInput = document.getElementById('usdt-amount');
const trxInput = document.getElementById('trx-amount');
const errorMessage = document.getElementById('error-message');
const exchangeRate = 7.5;

// Function to update TRX amount based on USDT input
function updateTRX() {
    const usdtAmount = parseFloat(usdtInput.value);
    if (usdtAmount >= 20 && usdtAmount <= 20000) {
        trxInput.value = (usdtAmount * exchangeRate).toFixed(2);
        errorMessage.style.display = 'none'; // Hide error message if input is valid
    } else {
        errorMessage.style.display = 'block'; // Show error message if input is invalid
    }
}

// Function to update USDT amount based on TRX input
function updateUSDT() {
    const trxAmount = parseFloat(trxInput.value);
    const usdtAmount = (trxAmount / exchangeRate).toFixed(2);
    usdtInput.value = usdtAmount;

    // Check if the reverse-converted USDT amount is within valid range
    if (usdtAmount >= 20 && usdtAmount <= 20000) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
}

// Add event listeners
usdtInput.addEventListener('input', updateTRX);
trxInput.addEventListener('input', updateUSDT);

// Prevent USDT input value outside the min/max limits
usdtInput.addEventListener('blur', function() {
    if (usdtInput.value < 20) {
        usdtInput.value = 20;
        updateTRX();
    } else if (usdtInput.value > 20000) {
        usdtInput.value = 20000;
        updateTRX();
    }
});
