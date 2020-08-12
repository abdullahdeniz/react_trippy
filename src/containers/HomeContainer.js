import React from 'react';
import Api from '../utils/Api'





class HomeContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
       "cities" : []
    }
  }

  componentDidMount(){
      Api.getHome()
  }
  

  render() {
    return (
      <div>
         Hello Home
      </div>
 
      
    );
  }
}

export default HomeContainer;




