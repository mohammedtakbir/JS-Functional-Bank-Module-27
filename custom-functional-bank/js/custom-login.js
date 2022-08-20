document.getElementById('login-btn').addEventListener('click', function(){
    const email = getInput('email-field');
    const password = getInput('password-field');
    if(email === '' || password === ''){
        alert('enter email and password');
        return;
    }
    if(email === 'mohammed@takbir' && password === 'tkbr'){
        window.location.href = 'custom-deposit-withdraw.html';
    }
    else{
        alert('enter valid info')
    }
})