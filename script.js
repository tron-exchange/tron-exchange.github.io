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

// Function to generate a random transaction ID
function generateTransactionID() {
    return 'exchanging-' + Math.floor(Math.random() * 1000000); // Random 6-digit number
}

function startExchange() {
    const usdtAmount = document.getElementById("usdt-amount").value;
    if (usdtAmount >= 20 && usdtAmount <= 20000) {
        const transactionID = generateTransactionID();
        
        // Redirect to the "exchanging.html" page with the transaction ID and USDT amount in the URL
        window.location.href = `exchanging.html?transactionID=${transactionID}&usdtAmount=${usdtAmount}`;
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}
