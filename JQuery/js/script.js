function animationIntro() {
    $("#text span").velocity("transition.slideLeftIn", { stagger: 250 });
}

$(document).ready(function() {
    animationIntro();
})