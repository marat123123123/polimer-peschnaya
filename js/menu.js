$(window).on("load", function (e) {   
$('.preloader').fadeOut('slow',function() {
});
    $('footer a').bind('mouseenter', function () {
$(this).stop(true, true).css('color','#77c1e5'); 
 });
$('footer a').bind('mouseleave',function () {
 $(this).stop(true, true).css('color','#00bdbd'); 
});
    $('#menu li li').bind('mouseenter',
function () {
      $(this).stop(true, true).css('border-left-color','#00A400'); 
 $('a',this).addClass('a'); 
});
$('#menu li li').bind('mouseleave',function () {
     $(this).stop(true, true).css('border-left-color','transparent'); 
    $('a',this).removeClass('a'); 
   });
             $('li ul').hide ();
    $('#menu>li').css('border-bottom','2px solid transparent');

});
