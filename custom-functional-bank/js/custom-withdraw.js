document.getElementById('withdraw-btn').addEventListener("click", function(){
    const newWithdrawAmount = getAmount('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('enter number');
        return;
    }
    const previousWithdraw = getElement('withdraw-total');
    const totalWithdraw = previousWithdraw + newWithdrawAmount;
    setElement('withdraw-total', totalWithdraw);

    const previousBalance = getElement('balance-total');
    const totalBalance = previousBalance - newWithdrawAmount;
    setElement('balance-total', totalBalance);
})