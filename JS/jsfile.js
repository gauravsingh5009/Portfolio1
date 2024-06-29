$(function(){
    $(".toggle").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle()
    });

    if(screen.width<=980){
        $(".collapse ul li").click(function(e){
            $(".collapse").slideUp();
            $(".toggle").removeClass("active")
        })
    }
});