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
  interval:   800000
});


$('.navbar-brand').click(function(){
	$('.navbar-collapse').removeClass('in');
	$('.navbar-collapse li').removeClass('active');
});

$('.navbar-collapse li a').click(function(){
	$('.navbar-collapse').removeClass('in');
});

$('#legislatie .thumbnail').each(function(){
  $(this).click(function() {
    window.location = $(this).find('a').attr('href');
    return false;
  });
});

// validate contact form
$(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
								minlength: 4
            }
        },
        messages: {
            name: {
                required: 'Va rugam sa va precizati numele complet.',
                minlength: 'Numele dumneavoastra trebuie sa contina cel putin 2 caractere.'
            },
            email: {
                required: 'Va rugam sa folositi o adresa de email valida.'
            },
            message: {
                required: 'Va rugam sa transmiteti un mesaj.',
                minlength: 'Mesajul dumneavoastra trebuie sa contina cel putin 4 caractere'
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:'POST',
                data: $(form).serialize(),
                url:'../send_mail.php',
                success: function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});