const usdtInput = document.getElementById('usdt-amount');
const trxInput = document.getElementById('trx-amount');
const errorMessage = document.getElementById('error-message');
const exchangeRate = 7.5;

// Adds event listeners to smooth scroll to sections on navigation link click
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("header nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionID = this.getAttribute("href").replace('.html', '');
            const section = document.querySelector(sectionID);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Generates random reviews
function generateReviews(numReviews) {
  const reviewsContainer = document.getElementById('reviews');
  let currentDate = new Date();
  
  for (let i = 0; i < numReviews; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const comment = comments[Math.floor(Math.random() * comments.length)];
      currentDate.setMinutes(currentDate.getMinutes() - Math.floor(Math.random() * 30));
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}`;

      // Create the review box and apply class
      const reviewBox = document.createElement('div');
      reviewBox.classList.add('review-box');  // Update the class to 'review-box'

      // Add content inside the review box
      reviewBox.innerHTML = `
          <label class="quotes">"${comment}"</label>
          <hr>
          <p>${name}, ${formattedDate}</p>
      `;

      // Append the review box to the container
      reviewsContainer.appendChild(reviewBox);
  }
}


// Generates a random transaction ID
function generateTransactionID() {
    return 'exchanging-' + Math.floor(Math.random() * 1000000);
}

// Toggles the visibility of the navigation links
document.getElementById("menu-toggle").addEventListener("click", function () {
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
});

// Simulates menu toggle when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('menu-toggle').click();
    });
});

// Initiates the exchange process and redirects with transaction details
function startExchange() {
    const usdtAmount = document.getElementById("usdt-amount").value;
    if (usdtAmount >= 20 && usdtAmount <= 34259) {
        const transactionID = generateTransactionID();
        window.location.href = `exchanging.html?transactionID=${transactionID}&usdtAmount=${usdtAmount}`;
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

// Toggles the visibility of an answer section
function toggleAnswer(id) {
    var answer = document.getElementById("answer-" + id);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

// Updates the TRX amount based on USDT input
function updateTRX() {
    const usdtAmount = parseFloat(usdtInput.value);
    if (usdtAmount >= 20 && usdtAmount <= 34259) {
        trxInput.value = (usdtAmount * exchangeRate).toFixed(2);
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
}

// Updates the USDT amount based on TRX input
function updateUSDT() {
    const trxAmount = parseFloat(trxInput.value);
    const usdtAmount = (trxAmount / exchangeRate).toFixed(2);
    usdtInput.value = usdtAmount;

    if (usdtAmount >= 20 && usdtAmount <= 34259) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
}

// Ensures the USDT input is within the specified limits
usdtInput.addEventListener('blur', function () {
    if (usdtInput.value < 20) {
        usdtInput.value = 20;
        updateTRX();
    } else if (usdtInput.value > 34259) {
        usdtInput.value = 34259;
        updateTRX();
    }
});

usdtInput.addEventListener('input', updateTRX);
trxInput.addEventListener('input', updateUSDT);

// Base of random names
const names = [
    "Subhan", "Muazzam", "N1", "Alex", "Sarah", "JohnDoe", "Jane", "Chris",
    "Fatima", "James", "Lily", "Tommy", "Zara", "Ravi", "Sophia", "Jack",
    "Olivia", "Leo", "Ayesha", "Nick", "Emily", "Ahmed", "Sasha", "Mark"
];

// Base of random comments
const comments = [
    "Thank good site.", "Good experience, amazing services.",
    "Very fast service.", "Highly recommend!", "Smooth and easy to use.",
    "Exceptional quality.", "Simple and effective.", "A must try!",
    "Great design and functionality.", "Quick and reliable!"
];

// Generate 5 random reviews
generateReviews(5);
