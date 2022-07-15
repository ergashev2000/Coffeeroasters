function div() {
    var element = document.getElementById("test");
    element.classList.remove("alert_bg");

    var close = document.getElementById("non");
    setTimeout(function(){ close.style.display = "none";}, 300);
}