$(function(){

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
    
        if ($(this).text() == "ALL") {
            $(".html,.sass,.bootstrap").fadeIn();
            
        }
        else if ($(this).text() == "HTML&CSS") {
            $(".html").fadeIn();
            $(".sass, .bootstrap").fadeOut();
        }
        else if($(this).text()=="BOOTSTRAP"){
            $(".bootstrap").fadeIn();
            $(".html,.sass").fadeOut();
        }
        else if($(this).text()=="SASS"){
            $(".sass").fadeIn();
            $(".html,.bootstrap").fadeOut();
        }
    });

         

    
});