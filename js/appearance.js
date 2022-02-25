$(document).ready(function() {
  if(window.location.hash) {
            var hash = window.location.hash;
            var page = $(hash).attr('href');
            $("#appear").load(page);
        }
        $('*').filter('#footer ul, article, .menu').on('click','a',function(e){
		 e.preventDefault();
		window.scrollTo(0,0);
		$('main').removeClass('blur');
		$('a').removeClass('b');
		$(this).not('.text').not('.fa').not('ul ul a').addClass('b');
	      $('#menu li ul').animate ({opacity: "hide"},200,"linear");
		            var href = $(this).attr('href');
            var hash = $(this).attr('id');
            $.ajax({
                url: href,
                success: function(data){
                    $("#appear").html(data);
                    window.location.hash = hash;
                }
		       
            });
            event.stopPropagation();
            return false;
        });
	

});
