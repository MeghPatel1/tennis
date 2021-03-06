var ballIMG,courtIMG,scoreIMG,playerIMG
var compPlayer,ball,player
var gameState=0
var playerCount
var form,game,player,database;


function preload(){
ballIMG=loadImage("Images/ball.jpg")
courtIMG=loadImage("Images/tennis court.jpg")
scoreIMG=loadImage("Images/scoreboard.png")
playerIMG=loadImage("Images/player.png")
}

function setup() {
  createCanvas(800,400);
  database=firebase.database()
 /* compPlayer=createSprite(100,200)
  compPlayer.addImage(playerIMG)
  compPlayer.scale=0.4

  ball=createSprite(620,200,50,50)
  ball.addImage(ballIMG)
  ball.scale=0.1

  player=createSprite(700,200)
  player.addImage(playerIMG)
  player.scale=0.4

  scoreboard=createSprite(400,20)
  scoreboard.addImage(scoreIMG)
 scoreboard.scale=0.5
 */

  game=new Game()
  game.getState()
  game.start()
}

function draw() {
 

 /* if(keyDown("right_arrow")){
    ball.x=ball.x+5
  
  }

  if(keyDown("up_arrow")){
    player.y=player.y-5
  
  }

  if(keyDown("down_arrow")){
    player.y=player.y+5
  
  }

  compPlayer.y=ball.y

  
if(ball.isTouching(player)){
  ball.velocityX=-6
  ball.velocityY=0.5
}
else if (ball.isTouching(compPlayer)){
  ball.velocityX=6
  ball.velocityY=random(-1,1)

}
*/
if(playerCount===2){
  game.update(1)
}

  drawSprites();
}