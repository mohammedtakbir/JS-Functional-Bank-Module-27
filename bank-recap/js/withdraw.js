// * step-1. add event handler to the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // * step-2. get withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    
    // * step-3. clear the Withdraw field
    withdrawField.value = '';
    
    // * step-4 get the previous Withdraw amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    // * step-5. calculate the withdraw total
    const totalWithdraw = previousWithdraw + newWithdrawAmount;

    // * step-6. set the total withdraw amount
    withdrawTotalElement.innerText = totalWithdraw;
    
    // * step-7. get the previous balance
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceSrtring = balanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceSrtring);
    
    // * step-8. calculate new balance and set the total 
    const newBalanceTotal =  previousBalance - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;











    
})
