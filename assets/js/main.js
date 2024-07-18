$(".hero-area").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
});

// Economical Cars Carousel
$(".swift").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 3000,
    // nav: true,
});

$(".ford").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-punch").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".hyundai").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".alto").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});
$(".alto2").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda-slavia").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-nexon").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});
// Economical Cars Carousel End

// XUVs Car Carousel
$(".toyota").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 3000,
});

$(".ford").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-punch").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".hyundai").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".alto").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda-slavia").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});
$(".skoda-slavia2").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-nexon").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});
$(".tata-nexon2").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});
// XUVs Cars Carouel End

// Testimonial
$(".testimonial").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

// owl-carousel buttons
// swift
var owl = $('.swift.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.maruti-btn-left').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.maruti-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
// swift
var owl2 = $('.ford.owl-carousel');
owl2.owlCarousel();
// Go to the next item
$('.ford-btn-left').click(function() {
    owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.ford-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger('prev.owl.carousel', [300]);
})
// swift
var owl3 = $('.skoda.owl-carousel');
owl3.owlCarousel();
// Go to the next item
$('.skoda-btn-left').click(function() {
    owl3.trigger('next.owl.carousel');
})
// Go to the previous item
$('.skoda-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl3.trigger('prev.owl.carousel', [300]);
})
// swift
var owl4 = $('.tata-punch.owl-carousel');
owl4.owlCarousel();
// Go to the next item
$('.tata-btn-left').click(function() {
    owl4.trigger('next.owl.carousel');
})
// Go to the previous item
$('.tata-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl4.trigger('prev.owl.carousel', [300]);
})
// swift
var owl5 = $('.hyundai.owl-carousel');
owl5.owlCarousel();
// Go to the next item
$('.hyundai-btn-left').click(function() {
    owl5.trigger('next.owl.carousel');
})
// Go to the previous item
$('.hyundai-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl5.trigger('prev.owl.carousel', [300]);
})
// swift
var owl6 = $('.alto.owl-carousel');
owl6.owlCarousel();
// Go to the next item
$('.alto-btn-left').click(function() {
    owl6.trigger('next.owl.carousel');
})
// Go to the previous item
$('.alto-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl6.trigger('prev.owl.carousel', [300]);
})
// swift
var owl7 = $('.skoda-slavia.owl-carousel');
owl7.owlCarousel();
// Go to the next item
$('.slavia-btn-left').click(function() {
    owl7.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slavia-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl7.trigger('prev.owl.carousel', [300]);
})
// swift
var owl8 = $('.tata-nexon.owl-carousel');
owl8.owlCarousel();
// Go to the next item
$('.nexon-btn-left').click(function() {
    owl8.trigger('next.owl.carousel');
})
// Go to the previous item
$('.nexon-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl8.trigger('prev.owl.carousel', [300]);
})
// swift
var owl9 = $('.toyota.owl-carousel');
owl9.owlCarousel();
// Go to the next item
$('.toyota-btn-left').click(function() {
    owl9.trigger('next.owl.carousel');
})
// Go to the previous item
$('.toyota-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl9.trigger('prev.owl.carousel', [300]);
})
// swift
var owl10 = $('.ford.owl-carousel');
owl10.owlCarousel();
// Go to the next item
$('.scorpio-btn-left').click(function() {
    owl10.trigger('next.owl.carousel');
})
// Go to the previous item
$('.scorpio-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl10.trigger('prev.owl.carousel', [300]);
})
// swift
var owl11 = $('.skoda.owl-carousel');
owl11.owlCarousel();
// Go to the next item
$('.innova-btn-left').click(function() {
    owl11.trigger('next.owl.carousel');
})
// Go to the previous item
$('.innova-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl11.trigger('prev.owl.carousel', [300]);
})
// swift
var owl12 = $('.tata-punch.owl-carousel');
owl12.owlCarousel();
// Go to the next item
$('.fortuner-btn-left').click(function() {
    owl12.trigger('next.owl.carousel');
})
// Go to the previous item
$('.fortuner-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl12.trigger('prev.owl.carousel', [300]);
})
// swift
var owl13 = $('.hyundai.owl-carousel');
owl13.owlCarousel();
// Go to the next item
$('.thar-btn-left').click(function() {
    owl13.trigger('next.owl.carousel');
})
// Go to the previous item
$('.thar-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl13.trigger('prev.owl.carousel', [300]);
})
// swift
var owl14 = $('.alto2.owl-carousel');
owl14.owlCarousel();
// Go to the next item
$('.700-btn-left').click(function() {
    owl14.trigger('next.owl.carousel');
})
// Go to the previous item
$('.700-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl14.trigger('prev.owl.carousel', [300]);
})
// swift
var owl15 = $('.skoda-slavia2.owl-carousel');
owl15.owlCarousel();
// Go to the next item
$('.500-btn-left').click(function() {
    owl15.trigger('next.owl.carousel');
})
// Go to the previous item
$('.500-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl15.trigger('prev.owl.carousel', [300]);
})
// swift
var owl16 = $('.tata-nexon2.owl-carousel');
owl16.owlCarousel();
// Go to the next item
$('.hycross-btn-left').click(function() {
    owl16.trigger('next.owl.carousel');
})
// Go to the previous item
$('.hycross-btn-right').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl16.trigger('prev.owl.carousel', [300]);
})

// Tabs Menu 
// const allBtns = $(".tab-btns > li");
// const allTabs = $(".tab-content > div");
// allBtns.click( function() {
//   allBtns.removeClass("active");
//   $(this).addClass("active");
//   allTabs.removeClass("active");
//   $( $(this).data("tab") ).addClass("active");
// });

$("#tabs-nav a").click( function(e) {
	e.preventDefault();
	$(".tab-content > div").hide();
	$("#tabs-nav a").css("color", "#222");
	$("#tabs-nav a").css("background-color", "#fff");
	$(this).css("color", "#fff");
	$(this).css("background-color", "#9f1c33");
	$( $(this).data("tab") ).show();
})


// Slider Buttons
var slider = $(".owl-carousel");

$(".carousel-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".carousel-next").click(function() {
    slider.trigger("next.owl.carousel")
});



// navbar toggle class
document.querySelector("#navbarBtn").addEventListener("click", () => {
    if(document.querySelector("#navbar-item").classList.contains("hidden")){
        document.querySelector("#navbar-item").classList.toggle("hidden");
        document.querySelector("#navbar-item").classList.toggle("block");
    }else{
        document.querySelector("#navbar-item").classList.toggle("block");
        document.querySelector("#navbar-item").classList.toggle("hidden");
    }
})