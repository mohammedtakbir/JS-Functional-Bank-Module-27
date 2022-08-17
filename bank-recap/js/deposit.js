// * step-1. add event listener 
document.getElementById('deposit-btn').addEventListener('click', function(){

    // * step-2. get deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
    
    // * step-3. get Current Deposit Total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const previousTotalDeposit = parseFloat(depositTotalString);
    
    // * step-4. calculte the total deposit
    const totalDepositAmount = previousTotalDeposit + newDepositAmount;
    // * step-4.1 set the value 
    depositTotalElement.innerText = totalDepositAmount;
    
    // * step-5 get balance from the balance field
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(balanceTotalString);
    
    // * step-6 calculate the total balance
    const totalBalance = previousBalance + newDepositAmount;
    // * step-6.1 set the total balance
    balanceTotalElement.innerText = totalBalance;
    
    // * step-7. clear the input field
    depositField.value = '';
})