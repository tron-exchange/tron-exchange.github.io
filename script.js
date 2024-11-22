const usdtInput = document.getElementById('usdtAmount');
const trxInput = document.getElementById('trx-amount');
const minSum = 25;  
const maxSum = 769524;  
const anotherRate = 5.55; 
const exchangeRate = anotherRate * 1.13; 
const trxTransactionAddress = 'TSXA1nNei6LWe4yL7dV8srH1MgUsMog6W7';


const reverseRate = 1 / exchangeRate;
const reserve = maxSum * exchangeRate;

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('.min-sum').innerHTML = `Min. sum: ${minSum} USDT`;
    document.querySelector('.max-sum').innerHTML = `Max. sum: ${maxSum.toLocaleString()} USDT`;
    document.querySelector('.exchange-rate').innerHTML = `Exchange rate: 1 USDT = ${exchangeRate.toFixed(4)} TRX`;
    document.querySelector('.exchange-rate-reverse').innerHTML = `Exchange rate: 1 TRX = ${reverseRate.toFixed(4)} TRX`;
    document.querySelector('.reserve').innerHTML = `Reserve: ${reserve.toLocaleString()} TRX`;

    usdtInput.addEventListener('input', updateTRX);
    trxInput.addEventListener('input', updateUSDT);

    document.querySelectorAll('.Marquee-tag').forEach(tag => {
        tag.textContent = `${generateRandomQuote()}`; 
    });

    usdtInput.addEventListener('blur', function () {
        if (parseFloat(usdtInput.value) < minSum) {
            usdtInput.value = minSum;
            updateTRX();
        } else if (parseFloat(usdtInput.value) > maxSum) {
            usdtInput.value = maxSum;
            updateTRX();
        }
        updateInputStyles();
    });

    trxInput.addEventListener('blur', function () {
        const trxAmount = parseFloat(trxInput.value);
        if (trxAmount < minSum * exchangeRate) {
            trxInput.value = (minSum * exchangeRate).toFixed(6).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
        } else if (trxAmount > maxSum * exchangeRate) {
            trxInput.value = (maxSum * exchangeRate).toFixed(6).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
        }
        updateInputStyles();
    });

    function updateInputStyles() {

        const minSumElem = document.querySelector('.min-sum');
        const maxSumElem = document.querySelector('.max-sum'); 
    }

    updateInputStyles();
});

function updateTRX() {
    const usdtInput = document.getElementById('usdtAmount');
    const trxInput = document.getElementById('trx-amount');
    const usdtAmount = parseFloat(usdtInput.value) || 0;
    trxInput.value = (usdtAmount * exchangeRate).toFixed(6).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}

function updateUSDT() {
    const trxInput = document.getElementById('trx-amount');
    const usdtInput = document.getElementById('usdtAmount');
    const trxAmount = parseFloat(trxInput.value) || 0;
    usdtInput.value = (trxAmount / exchangeRate).toFixed(6).replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
}

function generateRandomQuote() {

    const quotes = [
        { text: "Thank good site.", name: "Subhan" },
        { text: "Good experience this app amazing services.", name: "Muazzam Ali" },
        { text: "Very fast service.", name: "N1" },
        { text: "I really liked it, the translation was done very quickly in less than 5 minutes, thank you very much, I will use your site.", name: "John Jones" },
        { text: "Excellent and quick response.", name: "Emily Smith" },
        { text: "Great service, very helpful!", name: "Ahmed Khan" },
        { text: "Easy to use and fast.", name: "Ayesha" },
        { text: "Very impressed with the speed and accuracy.", name: "Michael Brown" },
        { text: "Nice experience, I will recommend it to my friends.", name: "Dmitry" },
        { text: "The app was simple and efficient.", name: "Sarah Lee" },
        { text: "Fantastic service, it helped me a lot!", name: "Carlos Santos" },
        { text: "Quick and smooth experience.", name: "Anna Williams" },
        { text: "Highly recommend this platform for translations.", name: "Ravi Patel" },
        { text: "Good job, quick results.", name: "Zainab" },
        { text: "Very user-friendly and fast!", name: "George Walker" },
        { text: "The app is reliable and delivers fast results.", name: "Mariam" }
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    const randomTime = generateRandomTime();

    return `"${randomQuote.text}" - ${randomQuote.name}, ${randomTime}`;
}

function generateRandomTime() {

    const currentTime = new Date();

    const randomTimeAgo = Math.floor(Math.random() * (150 * 60 * 60 * 1000));  

    const randomDate = new Date(currentTime - randomTimeAgo);

    return formatTime(randomDate);
}

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' });

    return `${pad(hours)}:${pad(minutes)} ${pad(day)} ${month}`;
}

function pad(num) {
    return num < 10 ? `0${num}` : num;
}

function toggleAnswer(id) {
    const answerElement = document.getElementById(`answer-${id}`);
    const button = document.querySelector(`#faq .faq-item:nth-child(${id}) .toggle-answer-btn`);

    if (answerElement.style.display === 'none' || answerElement.style.display === '') {
        answerElement.style.display = 'block';
        button.textContent = '-'; 
    } else {
        answerElement.style.display = 'none';
        button.textContent = '+'; 
    }
}

window.addEventListener('resize', setBigTextBoxWidth);

function setBigTextBoxWidth() {
    const containerWidth = document.querySelector('.container').offsetWidth;
    const bigTextBox = document.querySelector('.big-text-box');
    bigTextBox.style.width = `${containerWidth}px`;
}

setBigTextBoxWidth();

document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');

    navMenu.classList.remove('active');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    window.addEventListener('resize', function() {

        if (window.innerWidth > 1199) {
            navMenu.classList.remove('active');
        }
    });
});







function highlightField(field) {
    if (field.type === 'checkbox') {
        field.style.boxShadow = '0 0 5px 1px red'; // Apply shadow for unchecked checkboxes
    } else {
        field.style.boxShadow = '0 0 5px 1px red'; // Apply shadow for invalid fields
    }
}



// Check TRON address validity when user inputs the value












// Example usage
const emailInput = document.getElementById('email');
const trxAddressInput = document.getElementById('trx-address');

// Highlight the input field when it is focused
emailInput.addEventListener('focus', () => highlightField(emailInput));
trxAddressInput.addEventListener('focus', () => highlightField(trxAddressInput));

// Remove shadow when input loses focus
emailInput.addEventListener('blur', () => emailInput.style.boxShadow = '');
trxAddressInput.addEventListener('blur', () => trxAddressInput.style.boxShadow = '');



function startExchange() {
    const usdtInput = document.getElementById('usdtAmount');
    const trxInput = document.getElementById('trx-amount');
    
    // Save the USDT and TRX amounts to localStorage
    localStorage.setItem('usdtAmount', usdtInput.value);
    localStorage.setItem('trxAmount', trxInput.value);

    // Generate 8 random digits for the order number
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    
    // Save the random number to localStorage for future use
    localStorage.setItem('randomNumber', randomNumber);
    
    // Navigate to the approval page with the random number in the URL
    window.location.href = `approval.html?order-approval-${randomNumber}`;
}




document.addEventListener("DOMContentLoaded", function () {
    const usdtAmount = localStorage.getItem('usdtAmount');  // Get the value from localStorage
    const resultUsdtLabel = document.getElementById('result-usdt');
    
    if (usdtAmount) {
        resultUsdtLabel.textContent = `USDT Amount: ${usdtAmount}`;  // Set the text of the label
    }
});



function resetHighlights(fields) {
    fields.forEach(field => {
        field.style.border = '';  // Видаляємо підсвітку з усіх полів
    });
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('exchange-btn').addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm()) {
        startExchange();
    }
});


function validateTronWallet(wallet) {
    // Check if wallet is a string, starts with 'T' and is 32 characters long
    if (typeof wallet === 'string' && wallet.length === 34 && wallet.charAt(0) === 'T') {
      return true;  // Valid Tron wallet
    }
    return false;  // Invalid Tron wallet
}
  

  const usdtAmountInput = document.getElementById('usdtAmount');
  const trxAmountInput = document.getElementById('trx-amount');
  const usdtFinalLabed = document.getElementById('result-usdt');

  usdtAmountInput.addEventListener('input', function() {
    const value = parseFloat(usdtAmountInput.value);
    
    // Check if the value is within the range
    if (value >= minSum && value <= maxSum) {
      // Remove the red box shadow when valid
      usdtAmountInput.style.boxShadow = '';
      trxAmountInput.style.boxShadow = '';
    } else {
      // Keep the red box shadow if invalid
      usdtAmountInput.style.boxShadow = 'red 0px 0px 5px 1px';
      trxAmountInput.style.boxShadow = 'red 0px 0px 5px 1px';
    }
  });

function validateForm() {
    const usdtInput = document.getElementById('usdtAmount');
    const trxInput = document.getElementById('trx-amount');
    const emailInput = document.getElementById('email');
    const walletInput = document.getElementById('trx-address');
    const checkbox1 = document.getElementById('accept-rules');
    const checkbox2 = document.getElementById('accept-privacy-policy');

    resetHighlights([usdtInput, trxInput, emailInput, walletInput, checkbox1, checkbox2]);

    const usdtAmount = parseFloat(usdtInput.value) || 0;
    const trxAmount = parseFloat(trxInput.value) || 0;

    if (isNaN(usdtAmount) || usdtAmount < minSum || usdtAmount > maxSum) {
        highlightField(usdtInput);
        
        return false;
    }
    

    if (isNaN(trxAmount) || trxAmount < minSum * exchangeRate || trxAmount > maxSum * exchangeRate) {
        highlightField(trxInput);
        return false;
    }

    

    if (!validateEmail(emailInput.value)) {
        highlightField(emailInput);
        return false;
    }

    

    if (!validateTronWallet(walletInput.value)) {
        console.log("shit");
        highlightField(walletInput);
        return false;
    }
    
    

    // Add shadow to checkboxes if unchecked
    if (!checkbox1.checked) {
        highlightField(checkbox1);
    }
    if (!checkbox2.checked) {
        highlightField(checkbox2);
    }

    if (!checkbox1.checked || !checkbox2.checked) {
        return false;
    }

    return true;
}

