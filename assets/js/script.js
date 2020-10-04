
setTimeout(() => {
    document.getElementById("loader").style.display = "block";
    $("#loader *").show();
    setTimeout(() => {
        $("body *").show();
        $(".bubble").hide();
        $(".down").hide();
        $("#loader").hide();
    }, 5000);
}, 000);
// var bubble = document.getElementsByClassName("bubble");
setTimeout(() => {
    document.getElementById("bubble").style.display = "block";
    setTimeout(() => {
        document.getElementById("bubble").style.animation = "fade 2s";
        setTimeout(() => {
            document.getElementById("bubble").style.display = "none";
        }, 2000);
    }, 4000);
}, 13000);
setInterval(() => {
    document.getElementById("rocket").style.display = "block";
    setTimeout(() => {
        document.getElementById("rocket").style.display = "none";
    }, 6500);
}, 12000);

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        stagePadding: 50,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:1
            },
            1000:{
                items:2
            }       
        }
    });
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});