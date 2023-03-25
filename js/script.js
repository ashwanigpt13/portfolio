// $(document).ready(function(){

//     $('#menu').click(function(){
//       $(this).toggleClass('fa fa-times');
//       $('header').toggleClass('toggle');
//     });

//     $(window).On('scroll load',function(){
       
//         $('#menu').removeClass('fa-times');
//         $('header').removeClass('toggle');
//     });

$( document ).ready(function() {      
    $("#menu").click(function() {  
        $(this).toggleClass("fa fa-times");  
        $('header').toggleClass("toggle");
    });   

    $(window).on(function() {  
        $('#menu').removeClass("fas fa-times");  
        $('header').removeClass("toggle");

        if($(window).scrollTop() >0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    }); 
    
    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        )
    });

    //skills
    
});