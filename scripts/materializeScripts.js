$(document).ready(function(){
    $('.parallax').parallax(); // image parallax
    $(".dropdown-trigger").dropdown(); // navbar dropdown
    $('.carousel').carousel(); // carousel

    // crust preference buttons
    $('#pastry_btn').click(function(){ // when pastry button is clicked
        $('.poll_btn').hide() // hide buttons
        $('#graham_img').hide()
        $('#other_img').hide()
        $('#pastry_img').css('display', 'block');
    });
    $('#graham_btn').click(function(){ // when graham button is clicked
        $('.poll_btn').hide() // hide buttons
        $('#pastry_img').hide()
        $('#other_img').hide()
        $('#graham_img').css('display', 'block');
    });
    $('#other_btn').click(function(){ // when other button is clicked
        $('.poll_btn').hide() // hide buttons
        $('#graham_img').hide()
        $('#pastry_img').hide()
        $('#other_img').css('display', 'block');
    });
});

// determine if element is in the viewport
function isElementInViewport(el) {
    if (typeof jQuery == "function" && el instanceof jQuery) {
        el=el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight ||document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

var scroll = window.requestAnimationFrame ||
    function(callback) {window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); // get elements to apply animation to

// show image if it's in viewport, hide otherwise
function loop () {
    elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)) { 
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}
loop();

$(document).ready(function(){
    $('select').formSelect();
  });


  