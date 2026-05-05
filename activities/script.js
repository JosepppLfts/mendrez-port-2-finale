function calculateAll() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const display = document.getElementById("resultDisplay");
 
    if (isNaN(num1) || isNaN(num2)) {
        display.innerHTML = "<div style='color: #ef4444; text-align: center; font-size: 0.8rem;'>Please enter valid numbers.</div>";
        return;
    }
 
    const results = [
        { label: "Addition (+)", val: (num1 + num2).toFixed(2) },
        { label: "Subtraction (-)", val: (num1 - num2).toFixed(2) },
        { label: "Multiplication (*) ", val: (num1 * num2).toFixed(2) },
        { label: "Division (/)", val: (num2 !== 0) ? (num1 / num2).toFixed(2) : "Error" },
        { label: "Remainder (%)", val: (num2 !== 0) ? (num1 % num2).toFixed(2) : "Error" }
    ];
 
    display.innerHTML = results.map(item => `
        <div class="res-item">
            <span class="res-label">${item.label}</span>
            <span class="res-val">${item.val}</span>
        </div>
    `).join('');
}
 
function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultDisplay").innerHTML = "";
}