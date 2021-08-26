import './App.css';
import NavBar from './components/navbar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home.js';
import CreateAccount from './components/createaccount.js';
import Deposit from './components/deposit.js';
import Withdraw from './components/withdraw.js';
import AllData from './components/alldata.js';
import { HashRouter } from 'react-router-dom';
import React, { useContext } from 'react';
import UserContext from './components/context';


function App() {
    
  return (
     <HashRouter>
       
       <UserContext.Provider 
           value={{users:[{name: 'None', email: 'none@mit.edu', password: 'defaultpwd', balance: 0}]}}>
        <NavBar/>
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
      
        </UserContext.Provider>
       </HashRouter>
      
  );
}

export default App

