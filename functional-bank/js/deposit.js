document.getElementById('deposit-btn').addEventListener('click', function(){
    /*
        1.get the element by id
        2.get the value from the element
        3.convert string value to number
    */
    const NewDipositAmount = getInputFieldValueById('deposit-field');
    const PreviousDepositeValue = getTextElementValueById('deposit-total');

    // * calculate the deposit total
    const newDepositTotal = PreviousDepositeValue + NewDipositAmount;

    // * set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // * get previous balance using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');

    // * calculate the current total deposite amount
    const totalBalance = previousBalanceTotal + NewDipositAmount;
    // * set total deposit amount
    setTextElementValueById('balance-total', totalBalance);

});









































// * step-1. add event listener 

    // * step-2. get deposit amount from the deposit field
    // * step-3. get Current Deposit Total
    
    // * step-4. calculte the total deposit
    // * step-5 get balance from the balance field
    
    // * step-6 calculate the total balance
    // * step-6.1 set the total balance
    
    // * step-7. clear the input field