var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var hero={
  x:0,
  y:0
};
var heroImg=document.createElement("img");
heroImg.src="images/rukia.gif";
}
var ctImg=document.createElement("img");
ctImg.src="images/tower-btn.png";
var towerImg=document.createElement("img");
towerImg.src="images/"
var canvas=document.getElementByld("game");
var ctx=canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,hero.x,hero.y);
  ctx.drawImage(heroImg,hero.x,hero.y);
  ctx.drawImage(ctImg,590,430,50,50);
}
setInterval(draw,40);
