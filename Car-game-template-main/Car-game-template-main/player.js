class Player
{
    constructor()
    {
        this.index=0
        this.name=null
        this.distance=0
    }

    getcount()
    {
         database.ref('playerCount').on("value",function(data){count=data.val()})
    }

    updatecount()
    {
        
       database.ref('/').update({playerCount:count})

    }
    
    getPlayerInfo()
    {

    }

    update()
    {
       playerIndex="players/player"+this.index
       database.ref(playerIndex).set({name:this.name,distance:this.distance})
    }

}