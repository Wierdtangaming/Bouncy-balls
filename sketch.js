var ball1,ball2,ball3,ball4;
var ball1_img,balll2_img,ball3_img,ball4_img;
var count;
var bottom_edge,left_edge,right_edge,top_edge;
var rand;

function preload() {
  ball1_img = loadImage("ball.png");
  ball2_img = loadImage("ball.png");
  ball3_img = loadImage("ball.png");
  ball4_img = loadImage("ball.png");
}


function setup() {
  createCanvas(400, 400);
  ball1 = createSprite(295,25,200,200);
  ball2 = createSprite(195,20,200,200);
  ball3 = createSprite(305,100,200,200);
  ball4 = createSprite(250,75,200,200);

  bottom_edge = createSprite(200 , 400, 400 , 10);
  bottom_edge.visible = false;
  left_edge = createSprite(0 , 200, 10 , 400);
  left_edge.visible = false;
  right_edge = createSprite(400 , 200, 10 , 400);
  right_edge.visible = false;
  top_edge = createSprite(200 , 0 , 400 , 10);
  top_edge.visible = false;

  count = 0;

  ball1.addImage(ball1_img);
  ball2.addImage(ball2_img);
  ball3.addImage(ball3_img); 
  ball4.addImage(ball4_img);

  ball1.scale = 0.10;
  ball2.scale = 0.10;
  ball3.scale = 0.10;
  ball4.scale = 0.10;

  rand =  0;

}

function draw() {
  ball1.velocityY = ball1.velocityY + 0.18;
  ball2.velocityY = ball2.velocityY + 0.32;
  ball3.velocityY = ball3.velocityY + 0.2;
  ball4.velocityY = ball4.velocityY + 0.13;

  ball1.velocityX = ball1.velocityX + 0.1;
  ball2.velocityX = ball2.velocityX - 0.23;
  ball3.velocityX = ball3.velocityX + 0.3;
  ball4.velocityX = ball4.velocityX - 0.13;

  count++;

   rand = Math.round(random(-15,15));

  background(220);
  ball1.bounceOff(bottom_edge);
  ball2.bounceOff(bottom_edge);
  ball3.bounceOff(bottom_edge);
  ball4.bounceOff(bottom_edge);

  ball1.bounceOff(left_edge);
  ball2.bounceOff(left_edge);
  ball3.bounceOff(left_edge);
  ball4.bounceOff(left_edge);

  ball1.bounceOff(right_edge);
  ball2.bounceOff(right_edge);
  ball3.bounceOff(right_edge);
  ball4.bounceOff(right_edge);
  
  ball1.bounceOff(top_edge);
  ball2.bounceOff(top_edge);
  ball3.bounceOff(top_edge);
  ball4.bounceOff(top_edge);

  if (mousePressedOver(ball1)){
    ball1.velocityX = ball1.velocityX + rand;
  }
  if (mousePressedOver(ball2)){
    ball2.velocityX = ball2.velocityX + rand;
  }
  if (mousePressedOver(ball3)){
    ball3.velocityX = ball3.velocityX + rand;
  }
  if (mousePressedOver(ball4)){
    ball4.velocityX = ball4.velocityX + rand;
  }

  drawSprites();
}
