document.getElementById('login-btn').addEventListener('click', function(){
    const email = loginField('email-field');
    const password = loginField('password-field');
    if(email === 'mohammed@takbir.com' && password === 'takbir'){
        window.location.href = 'custom-deposit-withdraw.html';
    }
    else{
        alert('please enter valid info');
    }
})