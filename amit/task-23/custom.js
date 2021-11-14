//Write Your JS Code Here

function validate(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    /* Username Validation */
    if(username == ''){
        document.getElementById('nameError').innerHTML = 'Please fill the User Name.';
    }else if(username.length < 4){
        document.getElementById('nameError').innerHTML = 'User Name is too short.';
    }else{
        document.getElementById('username').classList.add('green');
        document.getElementById('nameError').innerHTML = '';
    }
    
    /* Email Validation */
    if(email == ''){
        document.getElementById('emailError').innerHTML = 'Please fill the Email.';
    }else if(email.indexOf('@') <= 0){
        document.getElementById("emailError").innerHTML = "Your Email is not Valid.";
        return false;
    }else{
        document.getElementById('email').classList.add('green');
        document.getElementById('emailError').innerHTML = '';
    }

    /* Username Validation */
    if(password == ''){
        document.getElementById('passError').innerHTML = 'Please fill the Password.';
    }else if(password.length < 4){
        document.getElementById('passError').innerHTML = 'Password is too short.';
    }else{
        document.getElementById('password').classList.add('green');
        document.getElementById('passError').innerHTML = '';
    }


}

