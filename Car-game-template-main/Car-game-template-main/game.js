class Game
{
    constructor()
    {

    }
    getstate()
    {
        database.ref('gameState').on("value",function(data){state=data.val()})

    }
    
    updateState(state)
    {
       database.ref('/').update({gameState:state})
    }
    
    start()
    {
        if(state===0)
        {
        
            player.getcount()
            form.display()
        }
               
             
               

    }

    play()
    {
        form.hide()
        textSize(25)
        text("gameStart",700,500)
    }

    end()
    {

    }
}