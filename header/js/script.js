$(document).ready(function(){
	
	$(window).resize(function(){
		if($(window).width() < 1000){
			$("body").css('font-size', 10);
		}
		else{
			$("body").css('font-size', 15);
		}
	});
	
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.opacity = "0.5";
    } else {
        document.getElementById("header").style.opacity = "1.0";
    }
}

