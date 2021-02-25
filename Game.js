class Game{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          
        }
    }
    
    play(){
        Form.hide();

        Player.getPlayerInfo();
        textSize(30);
        fill("blue")

        text("Note Correct Answer is in green!")
        for(var plr in allPlayers)
          var correctAns = "2"

          if(correctAns === allPlayers[plr].answer)
          fill('red' )
          else{
            fill(green)
          }

          display_answers =+30
          textSize(30)
          text(allPlayers[plr].name+":"+allPlayers[plr].answer,250,display_answers)
     
        
      
        
       // text("Game Start", 120, 100)


        

    
    }
}
