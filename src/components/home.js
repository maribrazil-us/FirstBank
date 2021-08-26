import UserContext from './context';
import React from 'react'
import {useContext} from 'react';

function Home(){
  const ctx = React.useContext(UserContext);
 
    return (
      <div>
      <br/>      
      <div className="card text-center text-white mx-auto bg-warning mb-3" style={{maxWidth: "35rem"}}>
        <div className="card-body">  
          <h4 className="card-title">WELCOME TO FIRST BANK OF REACTLAND</h4>
          <p className="card-text">For all your banking needs minus the security</p>
          <img src="bank.png" className="img-fluid" alt="Responsive image"/>
        </div>
      </div>
      </div>    
    );  
    
  }

  export default Home;