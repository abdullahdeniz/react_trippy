import React from 'react';
import HomeContainer from '../containers/HomeContainer'

class Api {
    getHome(){
        fetch ('Config.host + /api/home')
        .then(res => res.json())
        .then(json => {
            this.setState({
                
            })

        } 
            )
    }
    
   

    render () {
        return(
            <div>Home </div>
        )
    }
}

export default new Api();