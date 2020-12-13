/*const controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	triggerElement:'#scroll-wrapper',
	triggerHook:
}).setPin("#scroll-wrapper").addTo(controller)*/
$(document).ready(function() {
var owl = $('.scrolling-wrapper >.owl-carousel');
 var owl1 = $('.scrolling-wrapper1 >.owl-carousel');
 var owl2 = $('.scrolling-wrapper2 >.owl-carousel');
 owl.owlCarousel({
    loop:true,
    margin:0,
   nav:true,
    autoplay:false, 
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true
        }
    }
});
 
 owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

 owl1.owlCarousel({
    loop:true,
    margin:0,
   nav:true,
    autoplay:false, 
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true
        }
    }
});
 owl1.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl1.trigger('next.owl');
    } else {
        owl1.trigger('prev.owl');
    }
    e.preventDefault();
});
 owl2.owlCarousel({
    loop:true,
    margin:0,
   nav:true,
    autoplay:false, 
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true
        }
    }
});
 owl2.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl2.trigger('next.owl');
    } else {
        owl2.trigger('prev.owl');
    }
    e.preventDefault();
});
            
});
 