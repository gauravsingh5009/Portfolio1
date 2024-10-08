$(function(){

    AOS.init();         //AOS initilization

    $(".toggle").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle()
    });
    if(screen.width<=980){
        $(".collapse ul li").click(function(){
            $(".collapse").slideUp();
            $(".toggle").removeClass("active")
        })
    }

    $(".btns a").click(function(e) {
        e.preventDefault();
        $(".btns a").removeClass("active");
        $(this).addClass("active");
    
        if ($(this).text() == "HTML&CSS") {
            $(".html").fadeIn();
            $(".sass, .bootstrap, .javascript, .fetchapi,.react").fadeOut();
        }
        else if($(this).text()=="FETCH API"){
            $(".fetchapi").fadeIn();
            $(".html,.sass,.bootstrap,.javascript,.react").fadeOut();
        }
        else if($(this).text()=="JAVASCRIPT"){
            $(".javascript").fadeIn();
            $(".html,.sass,.bootstrap,.fetchapi,.react").fadeOut();
        }
        else if($(this).text()=="BOOTSTRAP"){
            $(".bootstrap").fadeIn();
            $(".html,.sass,.javascript,.fetchapi,.react").fadeOut();
        }
        else if($(this).text()=="SASS"){
            $(".sass").fadeIn();
            $(".html,.bootstrap, .javascript, .fetchapi,.react").fadeOut();
        }
        else if($(this).text()=="REACT"){
            $(".react").fadeIn();
            $(".html,.bootstrap, .javascript, .fetchapi,.sass").fadeOut();
        }
    });

         

    
});