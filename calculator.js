let memoryValue = 0; 

//  clear memory (MC)
function memoryClear() {
    memoryValue = 0;
    alert("Memory cleared.");
}

//  recall memory (MR)
function memoryRecall() {
    const display = document.querySelector('input[name="display"]');
    display.value = memoryValue;
}

//  add current value to memory (M+)
function memoryAdd() {
    const display = document.querySelector('input[name="display"]');
    if (!isNaN(display.value) && display.value.trim() !== "") {
        memoryValue += parseFloat(display.value);
        alert(`Added to memory: ${display.value}`);
    } else {
        alert("Please enter a valid number.");
    }
}

//  subtract current value to memory (M-)
function memorySubtract() {
    const display = document.querySelector('input[name="display"]');
    if (!isNaN(display.value) && display.value.trim() !== "") {
        memoryValue -= parseFloat(display.value);
        alert(`Subtracted from memory: ${display.value}`);
    } else {
        alert("Please enter a valid number.");
    }
}

// store value in memory (MS)
function memoryStore() {
    const display = document.querySelector('input[name="display"]');
    if (!isNaN(display.value) && display.value.trim() !== "") {
        memoryValue = parseFloat(display.value);
        alert(`Stored in memory: ${display.value}`);
    } else {
        alert("Please enter a valid number.");
    }
}

// clear the most recent entry (CE)
function clearEntry() {
    const display = document.querySelector('input[name="display"]');
    display.value = '';
}

// clear all entries (CLR)
function clearAll() {
    const display = document.querySelector('input[name="display"]');
    display.value = '';
    memoryValue = 0;
    alert("All memories are cleared.");
}


let previousBase = 'DEC';

function convert(base) {
    const display = document.querySelector('input[name="display"]');
    let value = display.value;

   
    let decimalValue;
    switch (previousBase) {
        case 'BIN': 
            decimalValue = parseInt(value, 2);
            break;
        case 'HEX': 
            decimalValue = parseInt(value, 16);
            break;
        case 'OCT':
            decimalValue = parseInt(value, 8);
            break;
        case 'DEC':
        default:
            decimalValue = parseInt(value, 10);
    }

    
    if (isNaN(decimalValue)) {
        display.value = "Invalid input";
        return;
    }

    
    switch (base) {
        case 'BIN': 
            display.value = decimalValue.toString(2);
            break;
        case 'HEX': 
            display.value = decimalValue.toString(16).toUpperCase();
            break;
        case 'OCT':
            display.value = decimalValue.toString(8);
            break;
        case 'DEC':
        default:
            display.value = decimalValue.toString(10);
    }

    
    previousBase = base;
}


