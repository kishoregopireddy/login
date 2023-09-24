document.getElementById("login-form").addEventListener("submit",function(event){
    event.preventDefault();
    const username = document.getElementById('username').Value;
    const password = document.getElementById('password').Value;
    const submitButton = document.getElementById("submit");

    if(username=='user'&& password=='pass'){
        alert('Login Successful');
    }
    else{
    alert('Login Failed.Please check your username and password.');
    }
});