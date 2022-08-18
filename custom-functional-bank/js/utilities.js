// * for login
function loginField(inputId){
    const inputField = document.getElementById(inputId);
    const input = inputField.value;
    inputField.value = '';
    return input;
}
// * for deposit & withdraw
function inputValue(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputFieldAmount = parseFloat(inputFieldValueString);
    inputFieldValue.value = '';
    return inputFieldAmount;
}

function getElementTextValue(elementId){
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setElementTextValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    return element;
}