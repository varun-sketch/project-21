var wall, thickness;
thickness=random(22,83);
var bullet, speed, weight;
var damage;

function setup() {
  speed = random(30,52)
  weight=random(223, 321)
  createCanvas(1600,400);
  bullet=createSprite(59,200, 20, 60);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  bullet.shapeColor=color(0, 0, 0);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocity=0;
    damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;
    if(damage>10){
      bullet.shapeColor=color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor=color(230,230,0);
    }
    bullet.x = 1500;
    bullet.y = 200;
  }
  drawSprites();
}