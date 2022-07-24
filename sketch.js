
function setup() {
  createCanvas(400,400);
  background(255,0,0);
  //box = createSprite(200,200,50,50);




  for (var i = 0; i < 360; i+=6) {
    var sprite3 = createSprite(195, 105, 7, 3);
    sprite3.rotation = i;
    sprite3.x =  200-70*Math.cos(Math.PI*2*i/359);
    sprite3.y =  200-70*Math.sin(Math.PI*2*i/359);
  }

  for (var i = 0; i < 360; i+=30) {
    var dial_12 = createSprite(195, 105, 15, 5);
    dial_12.rotation = i;
    dial_12.x = 200-70*Math.cos(Math.PI*2*i/359);
    dial_12.y = 200-70*Math.sin(Math.PI*2*i/359);
  }

  var d = new Date(),
  H1 = (d.getHours()<10?'0':'') + d.getHours(),
  m1 = (d.getMinutes()<10?'0':'') + d.getMinutes(),
  s1 = (d.getSeconds()<10?'0':'') + d.getSeconds();
  if(H1<12){
    var h1 = H1;
  }else if(H1==12){
    h1 = H1;
  }else{
    h1 = H1-12;
  }
  var sprite = createSprite(200, 200, 50, 5);
  sprite.rotation = (30*h1)+(6*m1/12)+90;
  //sprite.width=100;
  //sprite.height = 100;
 // sprite.scale = 1;
  sprite.rotateToDirection=true;
  sprite.velocityX = 0;
  sprite.velocityY = 0;


  var sprite1 = createSprite(200, 200, 75, 3);
  sprite1.rotation = (6*m1)+(6*s1/60)+90;
  sprite1.rotateToDirection=true;
  sprite1.velocityX = 0;
  sprite1.velocityY = 0;


  var sprite2 = createSprite(200, 200, 97, 2);
  sprite2.rotation = (6*s1)+90;
  sprite2.rotateToDirection=true;
  sprite2.velocityX = 0;
  sprite2.velocityY = 0;


}

function draw() {

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  //fill("green");
 // fill(rgb(100, 255,100, 0.1));
 // ellipse(200, 200, 180, 180);
 // fill(rgb(180, 180,180, 0.11));
 // ellipse(200, 200, 100, 100);

 //background(rgb(255, 255,255, 0.1));
  //dial_12.rotation=dial_12.rotation+0;
  //sprite3.rotation=sprite3.rotation+0;


  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
  if (keyDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyDown(DOWN_ARROW)) 
  {
    background("green");
  }
 /*
  sprite2.rotation=sprite2.rotation+0.2005;
  sprite1.rotation=sprite1.rotation+0.2005/60;
  sprite.rotation=sprite.rotation+(0.2005/60)/60;
*/

  
  drawSprites();
}

