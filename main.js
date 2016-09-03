var clock=0;
var FPS=60;
var hp=100;
var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var slimeImg=document.createElement("img");
slimeImg.src="images/slime.gif";
var heroPath=[
    {x:96,y:64},
    {x:384,y:64},
    {x:384,y:192},
    {x:224,y:192},
    {x:224,y:320},
    {x:544,y:320}
  ];
function isCollided(pointX,pointY,targetX,targetY,targetWidth,targetHeight){
  if(pointX>=targetX
  &&pointX<=targetX+targetWidth
  &&pointY>=targetY
  &&pointY<=targetY+targetHeight
  ){
  return true;
  }else{
  return false;
  }
}
function Hero(){
  this.hp=10;
  this.x=96;
  this.y=448;
  this.speed=64;
  this.pathDes=0;
  this.direction={x:0,y:-1};
  this.move = function(){
    	if(isCollided(enemyPath[this.pathDes].x, enemyPath[this.pathDes].y, this.x, this.y, this.speed/FPS, this.speed/FPS)){
    		//移動到偵測到的路徑點
    		this.x = enemyPath[this.pathDes].x;
    		this.y = enemyPath[this.pathDes].y;
    		//找出下一個路徑點
    		this.pathDes += 1;
    		if(this.pathDes >= enemyPath.length){
    		    this.HP = 0;
    		    treeHP = treeHP - 10;
    		    return;
    		}
    		//算出方向，修改方向
    		if(enemyPath[this.pathDes].x > this.x){
    			this.direction = {x:1, y:0};
    		}
    		else if(enemyPath[this.pathDes].x < this.x){
    			this.direction = {x:-1, y:0};
    		}
    		else if(enemyPath[this.pathDes].y > this.y){
    			this.direction = {x:0, y:1};
    		}
    		else if(enemyPath[this.pathDes].y < this.y){
    			this.direction = {x:0, y:-1};
    		}
    	}
    	else{
	    	this.x = this.x + this.direction.x * this.speed/FPS;
    		this.y = this.y + this.direction.y * this.speed/FPS;
    	}
  }
}
var heroes=[];
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
  clock=clock+1;
  if(clock%100==0){
    var hero = new Hero();
    heroes.push(hero);
  }
  ctx.drawImage(bglmg,0,0);
  ctx.fillText("HP:"+hp,100,100);
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
