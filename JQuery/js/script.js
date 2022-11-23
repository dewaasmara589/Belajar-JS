function animationIntro() {
    $("#text span").velocity("transition.slideLeftIn",{ 
                                stagger: 150,
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

function animasiIntroOut() {
    $("#start").velocity("transition.whirlOut",{ 
                            stagger: 150,
                            complete: function(){
                                $("#text").velocity({"font-size":"20px", "top":"95%"},
                                                    {duration: 1000,
                                                    complete: function(){
                                                        callMenu();

                                                        $("#menu ul li a[href='what-we-do']").trigger("click");
                                                    }
                                                    })
                            }
                        });
}

function callMenu(){
    $("#menu ul li").velocity("transition.slideLeftIn",{stagger: 150});

    $("#menu ul li a").click(function(){
        // Cara 1
        // $(this).parent("li").addClass("active");

        // $(this).parent("li").siblings().removeClass("active");
    
        // Cara 2
        $(this).parent("li").addClass("active").siblings().removeClass("active");
    })
}

$(document).ready(function() {
    animationIntro();
})