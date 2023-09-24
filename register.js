document.getElementById("register-form").addEventListener("submit",function(event){
    event.preventDefault();
    const firstnamelastname = document.getElementById('firstname & lastname').Value;
    const username = document.getElementById('username').Value;
    const password = document.getElementById('password').Value;
    const confirmpassword = document.getElementById('confirmpassword').Value;
    const submitButton = document.getElementById("submit");

    if(username=='user'&& password=='pass'&& confirmpassword=='pass'){
        alert('registered Successful');
    }
    else{
    alert('registration Failed.Please check your username and password.');
    }
});