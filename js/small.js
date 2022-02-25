    var colors = new Array(
  [253, 89, 73],
  [214, 36, 159],
  [40, 90,253],
  [214, 36, 159],
);

var step = 0;
var colorIndices = [0, 1, 2, 3];
var gradientSpeed = 0.007;

function updateGradient() {
  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]]
  
  

  var istep = 1 - step;
 var r = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color = "rgb(" + r + "," + g + "," + b + ")";

   $(".sidenav")
    .css({
      background:
        "-webkit-radial-gradient(30% 150%, circle,  #fdf497 0%,"+color+" 75%,#fd5949 100%)"
    })
   
    
    .css({
      background:
        "-moz-radial-gradient(30% 150%, circle,  #fdf497 0%,"+color+" 75%,#fd5949 100%)"
    });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
};
