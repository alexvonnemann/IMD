/* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/$(document).ready(function(){function e(){var e=$(window).width();if(e>=930){$(".dropdown").addClass("desktopbar");$(".has-dropdown").addClass("desktopbar");$(".top-bar").addClass("desktopbar");$(".liwrapper").addClass("active")}}function r(){var e=$(window).width(),r=e*n;e<=1333?t.width("1333").height("750"):t.width(e).height(r)}function i(){var e=$("#mcfooter").css("height");$("#page").css("padding-bottom",e)}$(window).width()<767?$(".tabsSmall").css("display","inline-block"):$(".tabsBig").css("display","inline-block");$(window).on("resize",function(){if($(window).width()<767){$(".tabsBig").css("display","none");$(".tabsSmall").css("display","inline-block")}else{$(".tabsBig").css("display","inline-block");$(".tabsSmall").css("display","none")}});$(document).scroll(function(){var e=$(document).scrollTop();if(e>=620){$("#pagenav").addClass("scrollednav");$("#mcfooter").css("z-index","2")}else{$("#pagenav").removeClass("scrollednav");$("#mcfooter").css("z-index","0")}});$(document).ready(e);var t=$("body").find("#stagevideo"),n=9/16;$(document).ready(r);$(window).resize(r);$(document).ready(i);$(window).resize(i);$(".menu-icon a").click(function(){var e=$(document).scrollTop();e<=500&&$("#pagenav").toggleClass("scrollednav")})});