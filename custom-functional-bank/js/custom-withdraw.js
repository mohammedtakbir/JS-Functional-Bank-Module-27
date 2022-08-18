document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = inputValue('withdraw-field');
    // ! validation
    if(isNaN(newWithdrawAmount)){
        alert('please enter number');
        return;
    }
    const previousBalance = getElementTextValue('balance-total');
    // ! validation
    if(newWithdrawAmount > previousBalance){
        alert('not enough money');
        return;
    }
    const previousWithdraw = getElementTextValue('withdraw-total');
    
    const totalWithdrawAmount = previousWithdraw + newWithdrawAmount;
    setElementTextValue('withdraw-total', totalWithdrawAmount);
    
    const totalBalance = previousBalance - newWithdrawAmount;
    setElementTextValue('balance-total', totalBalance);
})