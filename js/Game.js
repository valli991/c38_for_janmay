class Game{
    constructor(){}
    getState(){
        var getStateRef = database.ref('gameState')
        getStateRef.on("value",function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(gameState==0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once('value');
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player.getCount();
            }
           
            
            form = new Form();
            form.display()
        }
       //create car sprites here
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100)
        Player.getPlayerInfo();
        var x = 0
        var y;
        var ind = 0;
        if(allPlayers!=undefined){
            
            
            for(var i in allPlayers){
                x = x+200;
                y = displayHeight - allPlayers[i].distance
                //assign x and y position for the car sprites
               
                if (ind+1==player.index){
                    //add shapecolor to the car
                  
                }
                else{
                    //add shapecolor to the car
                }
                ind = ind+1;
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null)
        {
            player.distance+=10;
            player.update()
        }
        drawSprites()
    }
    
}