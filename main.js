var clock=0;
var FPS=60;
var hp=100;
var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var heroPath=[
    {x:96,y:64},
    {x:384,y:64},
    {x:384,y:192},
    {x:224,y:192},
    {x:224,y:320},
    {x:544,y:320}
  ];
function hero(){
  this.hp=10;
  this.x=96;
  this.y=448;
  this.speed=64;
  this.pathDes=0;
  this.direction={x:0,y:-1};
  this.move=function(){
    this.x=heroPath[this.pathDes].x;
    this.y=heroPath[this.pathDes].y;
    this.pathDes=this.pathDes+1;
  }
};
var heroes=[]
var enemyPath=[
  {x:96,y:64},
  {x:384,y:64}
];
var heroImg=document.createElement("img");
heroImg.src="images/rukia.gif";
var ctImg=document.createElement("img");
ctImg.src="images/tower-btn.png";
var tower={
  x:0,
  y:0
};
var towerImg=document.createElement("img");
towerImg.src="images/tower.png";
var cursor={x:0,y:0}
$("#game").mousemove(function(event){
  cursor.x=(event.offsetX)-16;
  cursor.y=(event.offsetY)-16;
});
var isBuilding=false;
$("#game").click(function(event){
  if(event.offsetX>590&&event.offsetY>430){
    isBuilding=true;
  }else{
    if(isBuilding==true){
      tower.x=event.offsetX-event.offsetX%32;
      tower.y=event.offsetY-event.offsetY%32;
    }
    isBuilding=false;
  }
});
var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");
ctx.font="25px Arial";
ctx.fillStyle="red";
function draw(){
  var clock=clock+1;
  if(clock%100==0){
    var enemy=new Hero();
    heroes.push(hero);
  }
  ctx.drawImage(bglmg,0,0);
  ctx.fillText("HP:"+hp,100,100);
  ctx.drawImage(heroImg,hero.x,hero.y);
  var i=0;
  while(i<heroes.length){
    i=i+1;
    heroes[i].move();
    ctx.drawImage(slimeImg,heroes[i].x,heroes[i].y);
  }
  if(isBuilding==true){
    ctx.drawImage(towerImg,cursor.x,cursor.y,32,32);
  }else{
    ctx.drawImage(towerImg,tower.x,tower.y);
  }
}
setInterval(draw,10);
