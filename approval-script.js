document.addEventListener("DOMContentLoaded", function() {
    let t = localStorage.getItem("usdtAmount"),
        e = localStorage.getItem("trxAmount"),
        n = document.getElementById("result-usdt"),
        r = document.getElementById("result-trx");
    t && (n.textContent = `${t} USDT TRC20`), e && (r.textContent = `${e} TRX`);
    let d = localStorage.getItem("randomNumber");
    if (d) {
        let o = document.getElementById("order-number");
        o.innerHTML = `Your order #${d}`
    }
}), document.getElementById("trx-copy-btn").addEventListener("click", function() {
    let t = document.getElementById("trx-address").value;
    navigator.clipboard.writeText(t).then(function() {
        alert("Address copied to clipboard: " + t)
    }).catch(function(t) {
        console.error("Failed to copy text: ", t)
    })
});
let timer, timeLeft = 900;

function startCountdown() {
    var t = document.getElementById("countdown");
    timer = setInterval(function() {
        var e = Math.floor(timeLeft / 60),
            n = timeLeft % 60;
        n = n < 10 ? "0" + n : n, t.textContent = `Time remaining: ${e}:${n}`, --timeLeft < 0 && (clearInterval(timer), t.textContent = "Time expired.", timer = null)
    }, 1e3)
}
document.getElementById("paidBtn").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "flex", timer || startCountdown()
}), document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none"
});