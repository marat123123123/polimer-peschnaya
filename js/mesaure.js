$( document ).ready(function() {
     window.scrollTo(0,0);
          $("*").each( function () {
            var $this = $(this);
            if (parseInt($this.css("fontSize")) < 16) {
                $this.css({ "font-size": "16px" });   
            }
        });
     var height = $('#sv').height();
            var $window = $(window);
             function Screen() {
         var wheight=$('#footer').height();
        var windowsize = $window.width();
        var touch=(('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
       var intervalID;
               $('#canvas').height(wheight);
        if (windowsize <1110 && touch ) {              		
                $('*').unbind('mouseenter mouseleave');
                        $( "#smallscreen" ).css('opacity','1');
                 $('#menu').addClass('sidenav').css({'width':'94vw','right':'-106vw'});
                 $('#menu a').css({'opacity':'1'});
                 $('#smallscreen').addClass('closebtn');
            $( "#smallscreen" ).on('click',function() {
                   $(this).hide(100,'linear');
              $('#menu').show().animate({'right':'0'},300,'linear',function(){
	     $('.sidenav a').show().animate({opacity:'1'},200,'linear'); });
             intervalID=setInterval(updateGradient, 10);
            $('main').addClass('blur');
       });
        $('a').on('click',function(){
		$('a').removeClass('b');
		 $(this).addClass('b');
      	    clearInterval(intervalID);
             $('.sidenav').fadeOut(100,'linear', function(){ 
	      $(this).css('right','-106vw');
		     $("#smallscreen").show(300,'linear');});

	  
  });    
                                                       
        }
        else if  (windowsize >1110 && touch ){
                $('*').unbind('mouseenter mouseleave');                    
        $('#canvas').height(wheight);
            $( "#smallscreen" ).css('opacity','0');
                }
       else if  (windowsize >1110 && !touch ){
                      $('#menu>li:not(#menu>li:first-of-type)').bind('mouseenter',
     function () {
var position=$('#slider').width()-$('#slide').width();
    $('#slider').css('margin-left',-(1/2)*position);
          $(this).css({'backgroundColor':'#cfc','background-size':'100% 2px'});
$('a:not(ul ul a)',this).addClass('a'); 
$('ul:first', this).stop(true, true).slideDown(300).css('visibility','visible');
});             
     $('#menu>li:not(#menu>li:first-of-type').bind('mouseleave',
   function () {
  $(this).css({'backgroundColor':'transparent','background-size':'0 1px'});
$('a',this).removeClass('a');     
$('ul:first', this).stop(true, true).delay(100).animate ({opacity: "hide"},300,"linear");
   });   
        $('article').bind('mouseenter',
     function () {
 $('img',this).addClass('scalep');
  $('h2',this).css( {color: '#00A400'});          
});       
         $('article').bind('mouseleave',
     function () {
 $('img',this).removeClass('scalep');
$('h2',this).css( {color: '#000'});
});  
                
        $('#canvas').height(wheight);
            $( "#smallscreen" ).css('opacity','0');
        $('#menu').width('auto');
                     } 
       else if (windowsize <1110 && !touch ){
	                            $('#menu>li:not(#menu>li:first-of-type)').unbind('mouseenter mouseleave'); 
                     $( "#smallscreen" ).css('opacity','1');
                $('#menu').addClass('sidenav').css({'width':'94vw','right':'-106vw'});
             $('#smallscreen').addClass('closebtn');
         $( "#smallscreen" ).on('click',function() {
               $(this).hide(100,'linear');
              $('#menu').show().animate({'right':'0'},300,'linear',function(){
	     $('.sidenav a').show().animate({opacity:'1'},200,'linear'); });
             intervalID=setInterval(updateGradient, 10);
            $('main').addClass('blur');
       });
    
        $('a').on('click',function(){
		$('a').removeClass('b');
		 $(this).addClass('b');
          clearInterval(intervalID);
             $('.sidenav').fadeOut(100,'linear', function(){ 
	      $(this).css('right','-106vw');
		     $("#smallscreen").show(300,'linear');
		     	    });   
              
                                                        });
 $('article').bind('mouseenter',
     function () {
 $('img',this).addClass('scalep');
  $('h2',this).css( {color: '#00A400'});          
});       
         $('article').bind('mouseleave',
     function () {
 $('img',this).removeClass('scalep');
$('h2',this).css( {color: '#000'});
});  
      $('#menu.sidenav>li').bind('mouseenter',
     function () {
        $(this).css('background-size','100% 1px');
     $('a',this).addClass('a');
});             
     $('#menu.sidenav>li').bind('mouseleave',
   function () {
        $('a',this).removeClass('a');
  $(this).css('background-size','0 2px');
 }); }
    
	     } Screen();
	
	$( window ).on('resize',function() {
 if  ($(window).width() >1110){
			  
	$('#menu').show().removeClass('sidenav').width('auto');
           $('#menu>li:not(#menu>li:first-of-type)').bind('mouseenter',
     function () {
var position=$('#slider').width()-$('#slide').width();
    $('#slider').css('margin-left',-(1/2)*position);
         $(this).css({'backgroundColor':'#cfc','background-size':'100% 2px'});
$('a:not(ul ul a)',this).addClass('a'); 
$('ul:first', this).stop(true, true).slideDown(300).css('visibility','visible');
});             
     $('#menu>li:not(#menu>li:first-of-type)').bind('mouseleave',
   function () {
  $(this).css({'backgroundColor':'transparent','background-size':'0 1px'});
$('a',this).removeClass('a');     
$('ul:first', this).stop(true, true).delay(100).animate ({'opacity': "hide"},300,"linear");
   }); 
       
                     } 
       else  {
	         var intervalID;
                $('#menu>li:not(#menu>li:first-of-type)').unbind('mouseenter mouseleave');  
	        $('#smallscreen').addClass('closebtn');
                $( "#smallscreen" ).animate ({'opacity': '1'},300,"linear");
                $('#menu').addClass('sidenav').width('94vw');
	          $( "#smallscreen" ).on('click',function() {
             $(this).hide();
	      $('main').addClass('blur');
              $('#menu').show().animate({'right':'0'},300);
          intervalID=setInterval(updateGradient, 10);
            
       });
    
        $('a').on('click',function(){
		$('a').removeClass('b');
		 $(this).addClass('b');
           $('main').addClass('blur');
          $("#smallscreen").show();
         $('#menu').animate({'right':'-106vw'},300);   
		 clearInterval(intervalID);
                                                        });
                }    

});
	$(window).on('orientationchange', function() {
	$(window).off('resize',Screen());	
   
});
	
});
	

