$(".hero-area").owlCarousel({
    items: 1,
    loop: true,
    autoplay:true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
});

// Economical Cars Carousel
$(".swift").owlCarousel({
    items: 1,
    loop: true,
    autoplay:true,
    dots: false,
    autoplayTimeout: 3000,
});

$(".ford").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-punch").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".hyundai").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".alto").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda-slavia").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-nexon").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});
// Economical Cars Carousel End

// XUVs Car Carousel
$(".toyota").owlCarousel({
    items: 1,
    loop: true,
    autoplay:true,
    dots: false,
    autoplayTimeout: 3000,
});

$(".ford").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-punch").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".hyundai").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".alto").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".skoda-slavia").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});

$(".tata-nexon").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 750,
    dots: false,
    autoplayTimeout: 3000,
});
// XUVs Cars Carouel End

// Tabs Menu 

$("#tabs-nav a").click( function(e) {
	e.preventDefault();
	$(".tab-content > div").hide();
	$("#tabs-nav a").css("color", "#222");
	$("#tabs-nav a").css("background-color", "#fff");
	$(this).css("color", "#fff");
	$(this).css("background-color", "#9f1c33");
	$( $(this).data("tab") ).show();
})
