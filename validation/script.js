const emailInput=document.getElementById('email');
const passwordInput=document.getElementById('password');
const form=document.getElementById('validationForm');
const errorMessage=document.querySelectorAll('.error');

const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
form?.addEventListener('submit',function(e){
    e.preventDefault();
    if(emailRegex.test(emailInput.value)){
        errorMessage[0].textContent='Valid Email Address';
        errorMessage[0].style.color='green';
        emailInput.style.border='1px solid green';
    }else{
        errorMessage[0].textContent='Invalid Email Address';
        errorMessage[0].style.color='red';
        emailInput.style.border='1px solid red';
    }
    if(passwordRegex.test(passwordInput.value)){
        errorMessage[1].textContent='Valid Password';
        errorMessage[1].style.color='green';
        passwordInput.style.border='1px solid green';
    }else{
        errorMessage[1].textContent='Invalid Password';
        errorMessage[1].style.color='red';
        passwordInput.style.border='1px solid red';
    }
})