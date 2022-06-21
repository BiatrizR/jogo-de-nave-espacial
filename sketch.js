const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var canvas
var ground
var planodefundo
var anigador
var jogador
var stars, starsImg, starsGroup
var inimigoNormal
var inimigoRapido
var inimigoReforcado
var angle = 90;

var enemyOne1, enemyTwo2

function preload() {
  anigador = loadAnimation("./assets/SpaceShip/s1.png","./assets/SpaceShip/s2.png","./assets/SpaceShip/s3.png");
 

  starsImg = loadImage("./assets/stars.jpg");

  enemyOne1 = loadAnimation(  "./assets/enemys/enemy5.png", "./assets/enemys/enemy6.png",  "./assets/enemys/enemy7.png");
  enemyTwo2 = loadAnimation(  "./assets/enemys/enemy1.png", "./assets/enemys/enemy2.png",  "./assets/enemys/enemy3.png");
 
  
}






function setup() {
  canvas = createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  starsGroup = new Group();

   
 

  jogador = createSprite(width/2,height/2+200,50,50);
  jogador.addAnimation("animaçãojogador",anigador);
  jogador.frameDelay=10
  

}

function draw(){  

  background("black")
  Engine.update(engine);
  drawSprites();


  /*if(stars.y > 600){
   stars.y=stars.height/8;
  } */


  if(keyDown(LEFT_ARROW)){
    jogador.x=jogador.x-4
  }
  if(keyDown(RIGHT_ARROW)){
    jogador.x=jogador.x+4
  }

  var ran = Math.round(random(1, 2));

 if( rameCount % 30 == 0 ){
  if(ran == 1){
    enemyOne(velocityX = 2)
  
  } else if(ran == 2){
    enemyOne(velocityX = -2)
  }}
  angleMode(DEGREES);


  for (var j = 0; j < totalUV; j++) {
    if (grupoRaiosUV.get(j) != undefined && grupoRaiosUV.get(j).collide(ozonio)) {
      grupoRaiosUV.get(j).destroy();
      grupoRaiosUV.destroyEach();
    }
  }
}

function enemyOne(velocity){
  rotate(angle)
  var enemy1 = createSprite(600, 40);

  enemy1.addAnimation("ENEMYONE", enemyOne1);
 //enemyOne1.frameDelay = 5
  enemy1.scale = 0.13;
  enemy1.velocityX = velocity;
  

  //enemy1.x = Math.round(random(0, 800));


}

function stars(){
  stars = createSprite(400, 300);
  stars.addImage("imagemdostars", starsImg);
  stars.scale = 0.15;  
  starsGroup.add(stars);
}
function tirosCurtos(){


}
function tirosLongos(){

}
