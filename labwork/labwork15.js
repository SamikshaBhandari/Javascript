const registration=document.getElementById('registration');
        const emailInput=document.getElementById('email');
        const ageInput=document.getElementById('age');
        const passwordInput=document.getElementById('password');
        const confirmPasswordInput=document.getElementById('confirmpass');
        const zipcodeInput=document.getElementById('zipcode');
        const termsCheckbox=document.getElementById('terms');
        const urlInput=document.getElementById('url');
        const dateInput=document.getElementById('date');
        const fileUploadInput=document.getElementById('fileupload');
        const countrySelect=document.getElementById('country');
        const errorMessage=document.querySelectorAll('.error');

        const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const agePattern=/^(1[120]|[2-9]\d)$/;
        const confirmpassPattern=/^.{8,}$/;
        const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const zipcodePattern=/^\d{5}(-\d{4})?$/;
        const urlPattern=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
        const datePattern=/^\d{4}-\d{2}-\d{2}$/;
        const filePattern=/^[\w,\s-]+\.[A-Za-z]{3}$/;
        const countryPattern=/^[A-Za-z\s]{2,}$/;
        
        registration.addEventListener('submit',function(e){
                e.preventDefault();
                if(emailPattern.test(emailInput.value)){
                  errorMessage[0].textContent='valid Email Address';
                  errorMessage[0].style.color='green'; 
                  emailInput.style.border='1px solid green';
                }else{
                  errorMessage[0].textContent='Invalid Email Address';
                  errorMessage[0].style.color='red';  
                        emailInput.style.border='1px solid red';   
                }
                if(agePattern.test(ageInput.value)){
                  errorMessage[1].textContent='valid age';
                  errorMessage[1].style.color='green'; 
                  ageInput.style.border='1px solid green';
                }else{
                  errorMessage[1].textContent='Invalid age';
                  errorMessage[1].style.color='red';  
                        ageInput.style.border='1px solid red';   
                }

                if(passwordPattern.test(passwordInput.value)){
                  errorMessage[2].textContent='valid password';
                  errorMessage[2].style.color='green'; 
                  passwordInput.style.border='1px solid green';
                }else{
                  errorMessage[2].textContent='Invalid password';
                  errorMessage[2].style.color='red';  
                        passwordInput.style.border='1px solid red';   
                }


                if(confirmpassPattern.test(confirmPasswordInput.value)){
                  errorMessage[3].textContent='valid password';
                  errorMessage[3].style.color='green'; 
                  confirmPasswordInput.style.border='1px solid green';
                }else{
                  errorMessage[3].textContent='Invalid password';
                  errorMessage[3].style.color='red';  
                        confirmPasswordInput.style.border='1px solid red';   
                }

                 if(zipcodePattern.test(zipcodeInput.value)){
                  errorMessage[4].textContent='valid zipcode';
                  errorMessage[4].style.color='green'; 
                  zipcodeInput.style.border='1px solid green';
                }else{
                  errorMessage[4].textContent='Invalid zipcode';
                  errorMessage[4].style.color='red';  
                        zipcodeInput.style.border='1px solid red';   
                }

                if(urlPattern.test(urlInput.value)){
                  errorMessage[6].textContent='valid url';
                  errorMessage[6].style.color='green'; 
                  urlInput.style.border='1px solid green';
                }else{
                  errorMessage[6].textContent='Invalid url';
                  errorMessage[6].style.color='red';  
                        urlInput.style.border='1px solid red';   
                }

                if(datePattern.test(dateInput.value)){
                  errorMessage[7].textContent='valid date';
                  errorMessage[7].style.color='green'; 
                  dateInput.style.border='1px solid green';
                }else{
                  errorMessage[7].textContent='Invalid date';
                  errorMessage[7].style.color='red';  
                dateInput.style.border='1px solid red';   
                }

                if(filePattern.test(fileUploadInput.value)){
                  errorMessage[8].textContent='valid file';
                  errorMessage[8].style.color='green'; 
                  fileUploadInput.style.border='1px solid green';
                }else{
                  errorMessage[8].textContent='Invalid file';
                  errorMessage[8].style.color='red';  
                fileUploadInput.style.border='1px solid red';   
                }


                if(countryPattern.test(countrySelect.value)){
                  errorMessage[9].textContent='valid country';
                  errorMessage[9].style.color='green'; 
                  countrySelect.style.border='1px solid green';
                }else{
                  errorMessage[9].textContent='Invalid country';
                  errorMessage[9].style.color='red';  
                countrySelect.style.border='1px solid red';   
                }
        })