// * for login
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const input = inputField.value;
    inputField.value = '';
    return input;
}

// * for deposit & withdraw
function getAmount(InputId){
    const getAmountFromInput = document.getElementById(InputId);
    const AmountString = getAmountFromInput.value;
    const NewAmount = parseFloat(AmountString);
    getAmountFromInput.value = '';
    return NewAmount;
}

function getElement(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const previousElementValue = parseFloat(elementFieldString);
    return previousElementValue;
}

function setElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}