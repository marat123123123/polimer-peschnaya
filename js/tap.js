 $(document).on("mousedown", "article,nav:not(.sidenav)", function(e) {
    
    var $first = $(this);
    
       if($first.closest("[data-tap]")) {
      e.stopPropagation();
    }
    
    var initPos = $first.css("position"),
        offs = $first.offset(),
        x = e.pageX - offs.left,
        y = e.pageY - offs.top,
        dia = Math.min(this.offsetHeight, this.offsetWidth, 100), 
        $adds = $('<aside/>', {class : "tap",appendTo : $first });
    
    if(!initPos || initPos==="static") {
      $first.css({position:"relative"});
    }
    
    $('<aside/>', {
      class : "Waw",
      css : {
        background: $first.data("tap"),
        width: dia,
        height: dia,
        left: x - (dia/2),
        top: y - (dia/2),
      },
      appendTo : $adds,
      one : {
        animationend : function(){
          $adds.remove();
        }
      }
    });
  });

