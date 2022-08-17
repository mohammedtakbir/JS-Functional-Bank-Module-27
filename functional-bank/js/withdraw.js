// * step-1. add event handler in withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // * step-2. get withdraw amount from withdraw input field
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    
    // * step-3. get withdraw previous value 
    const previousWithdrawValue = getTextElementValueById('withdraw-total');
    
    // * step-4. calculate the total withdraw amount
    const WithdrawAmount = previousWithdrawValue + newWithdrawAmount;
    
    // * step-5. set withdraw amount
    setTextElementValueById('withdraw-total', WithdrawAmount);

    // * step-6. get previous balance
    const previousBalance = getTextElementValueById('balance-total');
    
    // * step-7. calculate the total withdraw amount and set
    const totalBalance = previousBalance - newWithdrawAmount;
    setTextElementValueById('balance-total', totalBalance);













})









































// * step-1. add event handler to the withdraw button

    // * step-2. get withdraw input field
    
    // * step-3. clear the Withdraw field
    
    // * step-4 get the previous Withdraw amount

    // * step-5. calculate the withdraw total

    // * step-6. set the total withdraw amount
    // * step-7. get the previous balance
    
    // * step-8. calculate new balance and set the total 







