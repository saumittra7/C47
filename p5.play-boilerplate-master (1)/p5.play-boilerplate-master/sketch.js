var boy , boyImg
var bg , bgImg




function preload(){
boyImg = loadImage("boy2.gif")
bgImg = loadImage("Road.jpg")

}
function setup()
{
  createCanvas(1000,500);
  bg = createSprite(200,100,2000,500);
  bg.addImage(bgImg)
  bg.velocityX = -4
  bg.scale = 3;
  boy = createSprite(50,490,50,50)
  boy.addImage (boyImg)
}

function draw() 
{
  background(51);
  if(bg.x<100){
  bg.x = bg.width/2
  }
  drawSprites()
}

