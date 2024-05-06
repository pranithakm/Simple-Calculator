let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  toggleTableBackground();
})
function toggleTableBackground() {
    const tables = document.getElementsByTagName("table");

    for (let table of tables) {
        table.classList.toggle("light"); // Toggle "light" class based on checkbox state
    }
}



