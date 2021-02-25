class Form{
    constructor(){
    this.title = createElement('h2')
    this.input = createInput("Enter your name here")
    this.answer = createInput("Answer")
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')
    this.submit = createButton("Submit")

    
    }

display(){
 this.title.html("My Quiz Game")
   this.title.position(400,0,0)

   this.answer.position(500,300)
   this.submit.position(400,350)

    this. input.position(300,300)

    this.question.html("Question:What starts and ends  with the letter e")
    this.question.position(200,60,0)


    this.option1.html("1:Everyone")
    this.option1.position(200,120,0)

    this.option2.html("2:Envelope")
    this.option2.position(200,140,0)

    this.option3.html("3:Estimate")
    this.option3.position(200,160,0)

    this.option4.html("4:Example")
    this.option4.position(200,180,0)

    this.submit.mousePressed(()=>{
        this.input.hide();
        this.option1.hide();
        this.answer.hide();
        this.question.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.submit.hide();

       
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
       
       
        
      });

}

 

}