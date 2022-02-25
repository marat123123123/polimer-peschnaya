var nine = $("#nine"),
  eight = $("#eight"),
  seven = $("#seven"),
  six = $("#six"),
  five = $("#five"),
 four= $("#four"),
  three = $("#three"),
  two = $("#two"),
  one = $("#one"),
  zero = $("#zero"),
  logo = $("#logo"),
   sv = $("#sv"),
    glass = $(".glass")
;

TweenMax.set(["svg"], {
  visibility: "visible"
});

var tl = new TimelineMax({
  paused: false,
  repeat: -1,
  yoyo: false,
  repeatDelay: 0
});


tl.to(glass,1,{delay:3,boxShadow: "0 0 1rem 0 rgba(54, 169, 255, .2)" })
  .to(sv,1,{delay:1,x: '212'})
  .to(logo,0.3,{opacity:'1'})
  .to(nine, 0.3, {
    morphSVG:
    {
    shape:"#four",
    type:"rotational"},
    ease: Power4.easeOut
  })
  .to(nine, 0.3, {
    morphSVG:
    {
    shape:"#three",
    type:"rotational"},
    delay: 1,
    ease: Power4.easeOut
  })
  .to(nine, 0.3, {
    morphSVG:
    {shape:"#two",
    type:"rotational"},
    delay: 1,
    ease: Power4.easeOut
  })
  .to(nine, 0.3, {
    morphSVG: 
    {shape:"#one",
    type:"rotational"},
    delay:1,
   ease: Power4.easeOut
  })
.to(nine, 0.1, {
  morphSVG: {
      shape:"#nine",
    type:"rotational"},
    delay:1,
    opacity:1,
   ease:Power4.easeOut
})
.to(nine, 0.1, {
   opacity:0,
   ease: Bounce.easeOut
  })
.to(glass,0.05,{boxShadow:"none"})
.to(sv,3,{x: '-123'})
.to(logo,0.1,{left:'10',top:'10'})
.to(nine, 0.1, {
    opacity:1,
   ease: Bounce.easeOut
  })
  .to(nine, 0.3, {
    morphSVG: 
    {shape:"#eight",
    type:"rotational"},
    ease: Power4.easeOut
  })
  .to(nine, 0.3, {
    morphSVG: {
        shape:"#seven",
    type:"rotational"},
    delay: 1,
    ease: Power4.easeOut
  }) 
  .to(nine, 0.3, {
    morphSVG:
    {shape:"#six",
    type:"rotational"},
    delay: 1,
    ease: Power4.easeOut
  })
.to(nine, 0.3, {
    morphSVG:
    {shape:"#five",
    type:"rotational"},
    delay: 1,
    ease: Power4.easeOut
  })
  .to(nine, 0.3, {
    morphSVG: 
    {shape:"#zero",
    type:"rotational"},
    delay: 1,
    ease: Power4.easeOut
  })
.to(logo,1,{opacity:'0'})
 ;
