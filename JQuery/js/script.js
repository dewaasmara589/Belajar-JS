function animationIntro() {
    $("#text span").velocity("transition.slideLeftIn",{ 
                                stagger: 250,
                                complete: function(){
                                    animationButtonStart();
                                }
                            });
}

function animationButtonStart() {
    $("#start").velocity("transition.bounceUpIn")
                .mouseenter(function(){
                    $(this).velocity({width:100});
                })
                .mouseleave(function(){
                    $(this).velocity({width:125});
                });
}

$(document).ready(function() {
    animationIntro();
})