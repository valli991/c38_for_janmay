var gameState = 0;
var form,player,game;
var playerCount;
var allPlayers;


function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(displayWidth-20,displayHeight-30)
    console.log(displayWidth,displayHeight)

    game = new Game();
    game.getState();
    game.start();

    
}
function draw(){
   if (playerCount == 4){
       game.update(1)
   }
   if(gameState == 1){
       clear();
       game.play();
   }


}