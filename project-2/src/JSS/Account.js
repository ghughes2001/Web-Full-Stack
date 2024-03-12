function myFunction() {
    var x = document.getElementById("acc");
    if (x.className === "account-nav") {
        x.className += " responsive";
    }
    else {
        x.className = "account-nav";
    }
}