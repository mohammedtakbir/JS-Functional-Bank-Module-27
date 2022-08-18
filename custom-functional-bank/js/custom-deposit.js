document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = inputValue('deposit-field');
    // ! validation
    if(isNaN(newDepositAmount)){
        alert('please enter number');
        return;
    }
    const previousDeposit = getElementTextValue('deposit-total');

    const totalDepositAmount = previousDeposit + newDepositAmount;
    setElementTextValue('deposit-total', totalDepositAmount);

    const previousBalance = getElementTextValue('balance-total');

    const totalBalance = previousBalance + newDepositAmount;
    setElementTextValue('balance-total', totalBalance);
})