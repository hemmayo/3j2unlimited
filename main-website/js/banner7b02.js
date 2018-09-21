$(document).ready(function ()
{
  var img = document.getElementById('image');
  var imageCanvas = document.getElementById('imageCanvas');
  var patternCanvas = document.getElementById('patternCanvas');

  var ic_ctx = imageCanvas.getContext('2d');
  var pc_ctx = patternCanvas.getContext('2d');

  ic_ctx.drawImage(img, 0, 0, 10, 10);

  pc_ctx.canvas.width = window.innerWidth;
  pc_ctx.canvas.height = window.innerHeight;
  pc_ctx.rect(0, 0, window.innerWidth, window.innerHeight);
  pc_ctx.fillStyle = pc_ctx.createPattern(imageCanvas, "repeat");
  pc_ctx.fill();

  window.addEventListener('resize', function ()
  {
    pc_ctx.canvas.width = window.innerWidth;
    pc_ctx.canvas.height = window.innerHeight;
    pc_ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    pc_ctx.fillStyle = pc_ctx.createPattern(imageCanvas, "repeat");
    pc_ctx.fill();
  })
}());
