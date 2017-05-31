
$(document).ready(function(){
	//animation LOGO
	$(function(){
		var animationName = "animated hinge";
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		var element = "a.navbar-brand";
		$(element).on("mouseover",function() {
			$(element).addClass(animationName).one(animationEnd, function(){
				$(element).removeClass(animationName);
			});
		});
	});

	/*Toggle NAV mobile*/
	$('.navbar-collapse li a').click(function(){
    	$( ".menu-toggle.navbar-toggle" ).trigger( "click" );
	});
	
	/*======Animate Name ==========*/
	var paras = $('.centerMyName'),
    i = 0;
	// If using jQuery 1.3 or lower, you need to do $(paras[i++] || []) to avoid an "undefined" error
	function animateNav () {
	    $(paras[i++]).fadeIn('slow', animateNav);   
	}
	animateNav();

	function parallax(section, element){
		var animationName = "animated bounceInUp";
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		var element = $(item);
		if ($(window).scrollTop() > $( section ).height()) {
			$(element).addClass(animationName).one(animationEnd, function(){
				$(element).removeClass(animationName);
			});
	    } 
	};
	/*===== On Window Scroll ======*/
	$(window).scroll(function(){
	// Sticky header
		if ($(window).scrollTop() > 50) {
			$('#top-nav').removeClass('sticky');
	    } else {
	        $('#top-nav').addClass('sticky');
	    }
	});

	parallax("#about","#about h1");
});