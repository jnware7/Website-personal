$(document).ready(function(){
	$('#menu-button').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function(){
    $("#menu-button").click(function(){
    	$('.pop-menu').toggle(function () {
	    $(".pop-menu").addClass("pop-menu-show");
	}, function () {
	    $(".pop-menu").removeClass("pop-menu-show");
	})


    });

});

$(document).ready(function(){
    $("#aboutme").click(function(){
    	$('.pop-menu').toggle(function () {
	    $(".pop-menu").addClass("pop-menu-show");
	}, function () {
	    $(".pop-menu").removeClass("pop-menu-show");
	})


    });

});
