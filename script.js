const usdtInput = document.getElementById('usdtAmount');
const trxInput = document.getElementById('trx-amount');
const minSum = 25;  
const maxSum = 769524;  
const anotherRate = 5.55; 
const exchangeRate = anotherRate * 1.13; 

const reverseRate = 1 / exchangeRate;
const reserve = maxSum * exchangeRate;

document.addEventListener("DOMContentLoaded", function () {
   

    // Initialize the input values with 0.00 initially
    usdtInput.value = '0.00'; // Set USDT input to 0.00 initially
    trxInput.value = '0.00'; // Set TRX input to 0.00 initially

    // Update the UI with exchange rates and limits
    document.querySelector('.min-sum').innerHTML = `Min. sum: ${minSum} USDT`;
    document.querySelector('.max-sum').innerHTML = `Max. sum: ${maxSum.toLocaleString()} USDT`;
    document.querySelector('.exchange-rate').innerHTML = `Exchange rate: 1 USDT = ${exchangeRate.toFixed(4)} TRX`;
    document.querySelector('.exchange-rate-reverse').innerHTML = `Exchange rate: 1 TRX = ${reverseRate.toFixed(4)} TRX`;
    document.querySelector('.reserve').innerHTML = `Reserve: ${reserve.toLocaleString()} TRX`;

    // Attach event listeners for real-time updates
    usdtInput.addEventListener('input', updateTRX);
    trxInput.addEventListener('input', updateUSDT);

    // Populate Marquee-tags with random quotes and times
    document.querySelectorAll('.Marquee-tag').forEach(tag => {
        tag.textContent = `${generateRandomQuote()}`; // Add quotes before the time part
    });

    // Check inputs on blur to enforce min/max validation
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

    // Function to update styles based on min/max input validation
    function updateInputStyles() {
        // Update the min/max sum text color to yellow
        const minSumElem = document.querySelector('.min-sum');
        const maxSumElem = document.querySelector('.max-sum'); 
    }

    // Initial input style update
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
    // List of quotes and names
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

    // Randomly select a quote from the list
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Generate random time
    const randomTime = generateRandomTime();

    // Return formatted quote with author and time
    return `"${randomQuote.text}" - ${randomQuote.name}, ${randomTime}`;
}

// Function to generate a random time between now and 36 hours ago
function generateRandomTime() {
    // Get the current date and time
    const currentTime = new Date();

    // Generate a random number of milliseconds between 0 and 36 hours ago
    const randomTimeAgo = Math.floor(Math.random() * (150 * 60 * 60 * 1000));  

    // Subtract the random time from the current time
    const randomDate = new Date(currentTime - randomTimeAgo);

    // Return the formatted time (HH:mm dd MMM)
    return formatTime(randomDate);
}

// Function to format the date into HH:mm dd MMM
function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' });

    // Return time in the desired format: HH:mm dd MMM
    return `${pad(hours)}:${pad(minutes)} ${pad(day)} ${month}`;
}

// Helper function to pad single-digit numbers with leading zero
function pad(num) {
    return num < 10 ? `0${num}` : num;
}

// Function to toggle the visibility of FAQ answers
function toggleAnswer(id) {
    const answerElement = document.getElementById(`answer-${id}`);
    const button = document.querySelector(`#faq .faq-item:nth-child(${id}) .toggle-answer-btn`);

    // Toggle visibility of the answer
    if (answerElement.style.display === 'none' || answerElement.style.display === '') {
        answerElement.style.display = 'block';
        button.textContent = '-'; // Change the button to a minus sign when answer is shown
    } else {
        answerElement.style.display = 'none';
        button.textContent = '+'; // Change the button to a plus sign when answer is hidden
    }
}

window.addEventListener('resize', setBigTextBoxWidth);

function setBigTextBoxWidth() {
    const containerWidth = document.querySelector('.container').offsetWidth;
    const bigTextBox = document.querySelector('.big-text-box');
    bigTextBox.style.width = `${containerWidth}px`;
}

// Call it once to set the initial width
setBigTextBoxWidth();

// Reset nav menu state and setup event listener for toggling menu
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('nav-menu');
    const menuToggle = document.getElementById('menu-toggle');

    // Ensure the menu starts in a closed state by removing 'active' class
    navMenu.classList.remove('active');

    // Toggle navigation menu on mobile when the menu icon is clicked
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Add window resize listener to ensure correct behavior
    window.addEventListener('resize', function() {
        // If window size is large enough (not mobile), hide menu again
        if (window.innerWidth > 1199) {
            navMenu.classList.remove('active');
        }
    });
});
