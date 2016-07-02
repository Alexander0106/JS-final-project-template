var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var hero={
  x:0,
  y:0
};
var heroImg=document.createElement("img");
heroImg.src="images/rukia.gif";
var ctImg=document.createElement("img");
ctImg.src="images/tower-btn.png";
var towerImg=document.createElement("img");
towerImg.src="images/tower.png";
var cursor={x:0,y:0}
$("#game").mousemove(function(event){
  cursor.x=(event.offsetX)-16;
  cursor.y=(event.offsetY)-16;
});
var isBuilding=false;
$("#game").click(function(event){
  isBuilding=false;
  if(event.x>590&&event.y>430){
    isBuilding=true;
  }
});
var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");
function draw(){
  ctx.drawImage(bglmg,hero.x,hero.y);
  ctx.drawImage(heroImg,hero.x,hero.y);
  ctx.drawImage(ctImg,590,430,50,50);
  if(isBuilding==true){
    ctx.drawImage(towerImg,cursor.x,cursor.y,32,32);
  }
}
setInterval(draw,10);
