function myFunction() {
    var x = document.getElementById("registration-nav");
    if (x.className === "registration-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "registration-nav";
    }
}