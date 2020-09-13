function setup() {
  createCanvas(1600,800);
 car = createSprite(50, 200, 50, 50);
 wall = createSprite (1500, 200,60, 400)
 speed=random(55,90)
 weight=random(400,1500)
 car.shapeColor= "White"
 car.velocityX=speed
}
function draw() {
  background(0,0,0);  
  if(car.isTouching(wall)){
    car.velocityX=0
    var Deformation = 0.5*weight*speed*speed/2250
    if(Deformation>180){
      car.shapeColor="Red"
    }
    if(Deformation<100){
      car.shapeColor="Green"
    }
    if (Deformation<180&&Deformation>100){
      car.shapeColor="Yellow"
    }
  }
  drawSprites();
}