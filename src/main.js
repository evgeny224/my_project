$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

    //Код для нижних слайдеров с книгами

    $(document).ready(function(){
        $('.slider').slick({
            arrows:true,
            dots:false,
            slidesToShow:6,
            autoplay:false,
            speed:1000,
            // autoplaySpeed:800,
            waitForAnimate:false,
            centerMode:true,
            responsive:[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        });
    });
