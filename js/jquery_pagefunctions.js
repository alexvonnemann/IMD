  /* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/



$(document).ready(function() {


	// Pupup for Projects & Articles
	var open = false;
	
    var offsetY = window.pageYOffset,
        $body = $('body'),
        $win = $(window),
        $close = $('.close'),
        $open = $('.open'),
        $overlay = $('#overlay'),
        $popup = $('#popup');
    // Close with 'esc' key
    $(document).keyup(function (e) {
        if (e.keyCode === 27){ $close.trigger('click'); }
    });
    $open.click(function (event) {
    		event.preventDefault();
    		link = $(this).attr("href");
	        offsetY = window.pageYOffset;
	        // Block scrolling
	        $body.css({
	            'position': 'fixed',
	            'top': -offsetY + 'px'
	        });
	        // Show overlay
	        $overlay.fadeIn('fast');
	        $popup.fadeIn('fast');
	        $('.popupcontent').load(link);
	        $popup.addClass('animated fadeInDown');
	        setTimeout(function(){
	            $popup.removeClass('animated fadeInDown');
			}, 1000);
    });

    $close.click(function () {
        // Allow scrolling again
        $body.css({
            'position': 'static'
        });
        // Make the page stay at the position it was at before the overlay
        $win.scrollTop(offsetY);
        // Hide overlay
        $popup.addClass('animated fadeOutDownBig');
        $overlay.fadeOut('slow');
        $popup.fadeOut('fast');
        setTimeout(function(){
            $popup.removeClass('animated fadeOutDownBig');
		}, 1000);
    });



	// Tabs to Accordion on Small Screens

	if ($(window).width() < 767) {
		$('.tabsSmall').css('display', 'inline-block');
	}
	else {
		$('.tabsBig').css('display', 'inline-block');
	}

	$(window).on('resize', function() {
		if ($(window).width() < 767) {
			$('.tabsBig').css('display', 'none');
			$('.tabsSmall').css('display','inline-block');
		} else {
			$('.tabsBig').css('display', 'inline-block');
			$('.tabsSmall').css('display', 'none');
		}
	});


	// Change z-Index for Stage and Footer on Scroll
	
	$(document).scroll(function() {
		var scroll = $(document).scrollTop();
		if(open == false){
			if ($("#header").hasClass("has-bigstage")) {
				if(scroll >=660){
					$('#pagenav').addClass('scrollednav');
					if (scroll >=800){
						$('#mcfooter').css('z-index', '2');
					}	
				}
				if (scroll <=799) {
					$('#mcfooter').css('z-index', '0');
				}
				if (scroll <=0) {
					$('#pagenav').removeClass('scrollednav');
				}  
			} else {
				if(scroll >=380){
					$('#pagenav').addClass('scrollednav');
					if (scroll >=500){
						$('#mcfooter').css('z-index', '2');
					}
				}else{
					$('#pagenav').removeClass('scrollednav');
					$('#mcfooter').css('z-index', '0');
				};
			}
		}
	});

		// Stage Nav Subnave Fullwidth from Medium Screens

	function stagenavsub(){
		var width = $(window).width();

		if(width>=930) {
			$( ".dropdown" ).addClass("desktopbar");
			$( ".has-dropdown" ).addClass("desktopbar");
			$( ".top-bar" ).addClass("desktopbar");
			$( ".top-bar-section" ).addClass("desktopbar");
			$( ".liwrapper" ).addClass("active");
		}
	}
	$(document).ready(stagenavsub);


	// Stage Sizing Fullwidth 16:9

	var myPlayer = $("body").find("#stagevideo");    // Store the video object
	var aspectRatio = 9/16; // Make up an aspect ratio

	function resizeVideoJS(){
		var width = $(window).width();
		var height = width * aspectRatio;

	if(width <= 1333) {
		myPlayer.width("1333").height("750");
		//$( "#page.has-bigstage" ).css( "padding-top", "636px" );
		//$( "#header.has-bigstage" ).css( "height", "636px" );
	}else {
		myPlayer.width(width).height(height);
		//$( "#page.has-bigstage" ).css( "padding-top", height );
		//$( "#header.has-bigstage" ).css( "height", height );
	}}
	
	$(document).ready(resizeVideoJS);
	$(window).resize(resizeVideoJS);


	// Mediencampus Footer Height Parallax


    function mcfooterheight(){

	var width = $(window).width();
	if(width>=767) {
		var mcfooterHeight = $("#mcfooter").css('height');
		$( "#page" ).css( "padding-bottom", mcfooterHeight );
    }else {
        $( "#page" ).css( "padding-bottom", "0" );
    }}

	$(window).bind('load', mcfooterheight);
	$(window).resize(mcfooterheight);
	

	
	// Orbit Multitext
	
	$("#slider1").on("after-slide-change.fndtn.orbit", function(event, orbit) {

		var slideDescriptions = $('.slide-descriptions .slide-description');

		slideDescriptions.removeClass('active');
		slideDescriptions.eq(orbit.slide_number).addClass('active');

	});
	
	// mobile header bleibt rot -- marco --
	$(".menu-icon a").click(function() {
		var scroll = $(document).scrollTop();

		if(open == false){
				$("#pagenav").addClass("scrollednav");
				open = true;
			}else{
				$("#pagenav").removeClass("scrollednav");
				open = false;
			}
	});
	
});