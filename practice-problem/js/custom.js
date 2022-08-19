
function inputField(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    inputValue.value = '';
    const input = parseFloat(inputValueString);
    return input;
}
function resultField(resultId) {
    const resultField = document.getElementById(resultId);
    const resultFieldString = resultField.innerText;
    const result = parseFloat(resultFieldString);
    return result;
}
function setResult(resultId, value) {
    const multiplyResult = document.getElementById(resultId);
    multiplyResult.innerText = value;
}

// ? Double
document.getElementById('double-btn').addEventListener('click', function () {
    const input = inputField('input-field');
    /* if (typeof input !== 'number') {
       alert('gvadfd')
       return;
    } */
    if (isNaN(input)) {
        alert('Enter number')
        return;
    }
    else{
        const double = input * 2;
        setResult('result-field', double);
    }

})
// ? Tripple
document.getElementById('tripple-btn').addEventListener('click', function () {
    const input = inputField('input-field');
    if (isNaN(input)) {
        alert('Enter number')
        return;
    }
    const tripple = input * 3;
    setResult('result-field', tripple);
})