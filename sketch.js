var canvas;
var form
var database;
var playerCount
var gameState
var player

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();


  form = new Form();

  player = new Player()

  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
  background("pink");

  form.display();

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
