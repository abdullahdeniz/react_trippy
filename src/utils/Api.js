import React from 'react';


class Api {
    getHome(){
        fetch ("Config.host + /api/home")
    }
    
   

    render () {
        return(
            <div>Home </div>
        )
    }
}

export default new Api();