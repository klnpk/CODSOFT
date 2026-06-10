const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
const themeBtn = document.getElementById("theme-toggle");

// Add values to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let expression = display.value;

        // Convert % into /100
        expression = expression.replace(/%/g, "/100");

        let result = eval(expression);

        // Save to history
        let historyItem = document.createElement("li");
        historyItem.textContent = `${display.value} = ${result}`;
        historyList.prepend(historyItem);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Clear history
function clearHistory() {
    historyList.innerHTML = "";
}

// Theme Toggle
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// Keyboard Support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        appendValue(key);
    }
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }
    else if (key === "Backspace") {
        deleteLast();
    }
    else if (key === "Escape") {
        clearDisplay();
    }
});