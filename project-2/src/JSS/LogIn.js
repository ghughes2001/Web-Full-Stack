function myFunction() {
    var x = document.getElementById("log-nav");
    if (x.className === "login-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "login-nav";
    }
}