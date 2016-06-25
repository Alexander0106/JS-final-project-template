var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var canvas=document.getElementByld("game-canvas");
var ctx=canvas.getContext("2d");
var hero={
  x:0,
  y:0
}
function draw(){
  ctx.drawImage(bglmg,hero.x,hero.y);
}
setInterval(draw,40);
