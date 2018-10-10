window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.opacity = "0.5";
    } else {
        document.getElementById("header").style.opacity = "1.0";
    }
}