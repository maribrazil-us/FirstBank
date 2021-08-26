import Card from './card.js'
import UserContext from './context';
import React from 'react'

function Home(){
  const ctx = React.useContext(UserContext);
 
    return (
      <div>
      <br/>      
      <div className="card text-center text-white bg-warning mb-3" style={{maxWidth: "35rem", marginLeft: "2rem"}}>
        <div className="card-body">  
          <h3 className="card-title">WELCOME TO FIRST BANK OF REACT</h3>
          <p className="card-text">For all your banking needs</p>
          <img src="bank.png" className="img-fluid" alt="Responsive image"/>
        </div>
      </div>
      </div>    
    );  
    
  }

  export default Home;