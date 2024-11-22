document.addEventListener("DOMContentLoaded", function() {
    const randomNumber = localStorage.getItem('randomNumber');

    if (randomNumber) {
        const orderHeading = document.getElementById('order-number');
        orderHeading.innerHTML = `Your order #${randomNumber}`;
    }
});
