document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getAmount('deposit-field');
    if(isNaN(newDepositAmount)){
        alert('enter number');
        return;
    }
    const previousDepositTotal = getElement('deposit-total');
    const totalDeposit = previousDepositTotal + newDepositAmount;
    setElement('deposit-total', totalDeposit);

    const previousBalance = getElement('balance-total');
    const totalBalance = previousBalance + newDepositAmount;
    setElement('balance-total', totalBalance);
})