'use strict';

var currentDate = new Date();
$('#currentYear').html((currentDate).getFullYear());

$(function() {
    $('a[href*=#]:not([href=#], .noJumpLink)').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                return false;
            }
        }
    });
  $('.nav a').on('click', function(){
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  });
});

$('#home-carousel').carousel({
  interval:   12000
});
$('.carousel-control.left').click(function() {
  $('#home-carousel').carousel('prev');
});

$('.carousel-control.right').click(function() {
  $('#home-carousel').carousel('next');
});

$('.navbar-brand').click(function(){
	$('.navbar-collapse').removeClass('in');
	$('.navbar-collapse li').removeClass('active');
});

$('.navbar-collapse li a').click(function(){
	$('.navbar-collapse').removeClass('in');
});
