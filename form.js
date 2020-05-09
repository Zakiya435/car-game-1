class Form
{   
    constructor(){

    }
    display()
    {
        var title = createElement('h2');
        title.html("Car racing game");
        title.position(200,100);
        var input = createInput("name");
        var button = createButton("Enter");
        var greeting = createElement('h3');
        input.position(200,300);
        button.position(250,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(200,200);
        });
    }
    
    
}