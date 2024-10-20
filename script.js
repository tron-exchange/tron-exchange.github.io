const usdtInput = document.getElementById('usdt-amount');
const trxInput = document.getElementById('trx-amount');
const errorMessage = document.getElementById('error-message');
const exchangeRate = 7.5;

// Function to update TRX amount based on USDT input
function updateTRX() {
    const usdtAmount = parseFloat(usdtInput.value);
    if (usdtAmount >= 20 && usdtAmount <= 34259) {
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
    if (usdtAmount >= 20 && usdtAmount <= 34259) {
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
    } else if (usdtInput.value > 34259) {
        usdtInput.value = 34259;
        updateTRX();
    }
});

// Function to generate a random transaction ID
function generateTransactionID() {
    return 'exchanging-' + Math.floor(Math.random() * 1000000); // Random 6-digit number
}

function startExchange() {
    const usdtAmount = document.getElementById("usdt-amount").value;
    if (usdtAmount >= 20 && usdtAmount <= 34259) {
        const transactionID = generateTransactionID();
        
        // Redirect to the "exchanging.html" page with the transaction ID and USDT amount in the URL
        window.location.href = `exchanging.html?transactionID=${transactionID}&usdtAmount=${usdtAmount}`;
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

function toggleAnswer(id) {
    var answer = document.getElementById("answer-" + id);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

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

  // Function to generate random reviews
  function generateReviews(numReviews) {
    const reviewsContainer = document.getElementById('reviews');
    let currentDate = new Date();
    
    for (let i = 0; i < numReviews; i++) {
      // Randomize name and comment
      const name = names[Math.floor(Math.random() * names.length)];
      const comment = comments[Math.floor(Math.random() * comments.length)];
      
      // Subtract 1-30 minutes for each previous review
      currentDate.setMinutes(currentDate.getMinutes() - Math.floor(Math.random() * 30));
      
      // Format date and time
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}`;

      // Create review element
      const reviewBox = document.createElement('div');
      reviewBox.classList.add('box');
      reviewBox.innerHTML = `
        <label class="quotes">"${comment}"</label>
        <p>${name}, ${formattedDate}</p>
      `;
      
      // Add to container
      reviewsContainer.appendChild(reviewBox);
    }
  }

  // Generate 5 random reviews
  generateReviews(5);

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("header nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Get the href attribute (the section id to scroll to)
        const sectionID = this.getAttribute("href").replace('.html', '');
        const section = document.querySelector(sectionID);
  
        // Scroll to the section smoothly
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  document.getElementById("menu-toggle").addEventListener("click", function() {
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active'); // Toggles the visibility of the navigation links
});

// Simulate menu toggle when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
      document.getElementById('menu-toggle').click(); // Simulates a click on the menu toggle
  });
});
