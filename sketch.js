var fixedrect,movingrect;





function setup() {

  createCanvas(800,400);
fixedrect=createSprite(200,200,50,100);
movingrect=createSprite(200,200,100,50);
fixedrect.shapeColor="blue";
movingrect.shapeColor="blue";
}
function draw() {
  background(0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";

  }else{
    fixedrect.shapeColor="blue";
    movingrect.shapeColor="blue";

  }
  drawSprites();
}