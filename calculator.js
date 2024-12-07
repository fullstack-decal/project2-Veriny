//Check out calculator_hints.js for hints if you're stuck
let total = 0;
let strbuff = "";
let operator;
const display = document.querySelector(".result-screen");
console.log("cringe!");

function buttonEvent(val) {
    if (isNaN(parseInt(val))) {
        processSymbol(val);
    } else {
        handleNumber(val);
    }
    render();
    console.log("cringe!");
}

function render() {
    display.innerText = strbuff;
}

function handleNumber(val) {
    if (strbuff === "0") {
        strbuff = val;
    } else {
        strbuff += val;
    }
}

function handleMath(val) {
    if (strbuff === "0") {
      return;
    }
  
    const intBuffer = parseInt(strbuff);
    if (total === 0) {
      total = intBuffer;
    } else {
      calculate(intBuffer);
    }
  
    operator = val;
    strbuff = "0";
}

function processSymbol(val) {
    switch (val) {
      case "C":
        strbuff = "0";
        total = 0;
        break;
      case "=":
        if (operator === null) {
          return;
        }
        calculate(parseInt(strbuff));
        operator = null;
        strbuff = total;
        total = 0;
        break;
      case "←":
        if (strbuff.length === 1) {
            strbuff = "0";
        } else {
            strbuff = strbuff.substring(0, strbuff.length - 1);
        }
        break;
      case "+":
        handleMath(val);
        break;
      case "-":
        handleMath(val);
        break;
      case "*":
        handleMath(val);
        break;
      case "÷":
        handleMath(val);
        break;
    }
  }
  


function calculate(intBuffer) {
    console.log(total);
    console.log(intBuffer);
    console.log(operator);
    if (operator === "+") {
        console.log("add");
        total += intBuffer;
    } else if (operator === "-") {
        console.log("subtract");
        total -= intBuffer;
    } else if (operator === "*") {
        console.log("multiply");
        total *= intBuffer;
    } else {
        console.log("divide");
        total /= intBuffer;
    }
}

function listenerHelper(event) {
    buttonEvent(event.target.innerText);
}

function init() {
    var elements = document.querySelectorAll(".buttons");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", listenerHelper);

    }
}
  
window.onload = init;