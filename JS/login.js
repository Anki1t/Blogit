function validate() {
    var username = document.getElementById("InputEmail1").value;
    var password = document.getElementById("InputPassword1").value;
    if (username == "sreyas@gmail.com" && password == "sreyas") {
        alert("Login Successfully");
        window.location.replace("Home1.html");
        return false;
        
    }
    if (username == "shruti@gmail.com" && password == "shruti") {
        alert("Login Successfully");
        window.location.replace("Home1.html");
        return false;
        
    }
    if (username == "swamy@gmail.com" && password == "swamy") {
        alert("Login Successfully");
        window.location.replace("Home1.html");
        return false;
        
    }
    if (username == "ankit@gmail.com" && password == "ankit") {
        alert("Login Successfully");
        window.location.replace("Home1.html");
        return false;
        
    }
    else {
        alert("Invalid Email or Password ");
    }
}