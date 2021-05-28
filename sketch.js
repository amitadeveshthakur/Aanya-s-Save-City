var scene;
var pc,pcimg;
var gameState;
var co1,co2,co3 ,covid; 
var bulletimg,bullet,bulletGrp;
var points = 0;
var covidgrp;
var covid ;
var sound1 ; 

function preload(){
  scene = loadImage("images/city.jpg");
  pcimg=loadImage("images/alien.png");
  co1=loadImage("images/corona 1.png");
  co2=loadImage("images/corona 2.png");
  co3=loadImage("images/corona 3.png");
  bulletimg=loadImage("images/red.png");
  sound1=loadSound("images/sound.mp3");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
 
  pc=createSprite(displayWidth/10,500,10,10);
  console.log(pc);
  pc.addImage(pcimg);
  pc.scale=1.3;

  //bullet = createSprite(pc.x+90,pc.y+10,10,10);
  //console.log(bullet)
 // bullet.addImage(bulletimg);
 // bullet.rotation = 270;
 // bullet.scale=0.04;
  covidgrp = createGroup();
  bulletGrp=createGroup();
  console.log(covidgrp)
  }

function draw() {
  background("white");
    image(scene, 0,0,displayWidth, displayHeight); 
    camera.position.x=displayWidth/2;
     
      
 
    pc.setCollider("circle",-60,20,60 );

    fill("white");
    textSize(30);
    text("POINTS: "+points ,displayWidth-displayWidth/7,camera.position.y+300);

    if(keyDown("space")){
      createBullet();
      //bullet.velocityX = 100;
      //play(sound);
      sound1.play();
    }

    /*if(bullet.x>pc.x+400){
     // bullet = createSprite(pc.x+90,pc.y+10,10,10);
      console.log(bullet)
      bullet.addImage(bulletimg);
      bullet.rotation = 270;
      bullet.scale=0.04;  
      
      }*/

    if(keyWentDown(UP_ARROW)){
      pc.velocityY = -15;
     // bullet.velocityY = -15;
    }
    if(keyWentUp(UP_ARROW)){
      pc.velocityY = 0 ;
     // bullet.velocityY=0;
    }
    if(keyWentDown(DOWN_ARROW)){
      pc.velocityY = 15;
     // bullet.velocityY = 15;
    }
    if(keyWentUp(DOWN_ARROW)){
      pc.velocityY = 0;
      //bullet.velocityY = 0;
    }

    if(frameCount%50===0){
      covid = createSprite(random(displayWidth/5,displayWidth),random(0-displayHeight,displayHeight));
      console.log(covid);
      var rand = Math.round(random(1,3));
      //covid.velocityX = random(-3,3);
      covid.velocityY=random(3,15);
      //covid.bounceOff(edges);
      covidgrp.add(covid);
      switch(rand){
          case 1 : covid.addImage(co1) ;
          covid.scale =0.2;
          break;
          case 2 : covid.addImage(co2);
          covid.scale = 0.3;
          break;
          case 3 : covid.addImage(co3) ;
          covid.scale = 0.2;
          break;
          default:break;
          }
        }
    
      //console.log(bulletGrp);
      
      if(bulletGrp.isTouching(covidgrp)){
        covid.destroy();  
        points+=1;
      }  
     
     drawSprites();
    
    }

   function createBullet(){
    
    bullet = createSprite(pc.x+90,pc.y+10,10,10);
    bulletGrp.add(bullet);
    bullet.addImage(bulletimg);
      bullet.rotation = 270;
      bullet.scale=0.04;
      bullet.x=pc.x+90;
      bullet.y=pc.y+10;
      bullet.velocityX = 100;
      bullet.lifetime=400;
      return bullet;
    }
