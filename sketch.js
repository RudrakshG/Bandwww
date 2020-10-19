var bullet,speed,weight;
var wall,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 10, 50);
  bullet.velocityX = speed;
  bullet.shapeColor("white");
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  damage = 0;
  
}

function draw() {
  background(255,255,255);  
  
   text("damage = " + damage,400,100);
  
   bullet.collide(wall);
   
   if (bullet.collide(wall)) {
    bullet.velocityX = 0;
    damage = 0.5 * weight * bullet.velocityX * bullet.velocityX / thickness * thickness * thickness;  
   }

   if (damage < 10) {
    wall.shapeColor(0,255,0);
   }

   if (damage > 10) {
    wall.shapeColor(230,230,0);
  }
    
  drawSprites();
}