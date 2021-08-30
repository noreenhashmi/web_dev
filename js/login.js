$(document).ready(function () {
    function validate() {

        var username = document.getElementById("name").value;
        var pwd = document.getElementById("pwd").value;
        let key = username.value;
        let value = pwd.value;
        if (username == "noreen" && pwd == "Noreen@1234") {
            alert("Login successful!")
            localStorage.setItem("login-Status",JSON.stringify(true));
            location.assign("./orders.html") ;

        } else {
            alert(" Please Enter Valid Credential!");
            localStorage.setItem("login-Status",JSON.stringify(false));

        }
    }
    $("#login-form").submit(function(ef){
        ef.preventDefault();
        validate();
    })
        
});