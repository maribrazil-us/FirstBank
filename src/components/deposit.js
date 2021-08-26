import React from 'react';
import Card from './card';
import UserContext from './context';

function Deposit(){
    const ctx = React.useContext(UserContext);
    const [show, setShow] = React.useState(true);
    const [deposit, setDeposit] = React.useState();
    const [balance, setBalance] = React.useState(ctx.users[ctx.users.length -1].balance);
    const [validTransaction, setValidTransaction] = React.useState(false)
    
    
    
const handleChange = (event) => {
    const amount = Number(event.target.value);
      if (amount <= 0) {
      setValidTransaction(false);
      alert('Error: amount must be greater than 0')
      }
     else {
      setValidTransaction(true)
     }
      setDeposit(Number(event.target.value));
    };  

  function handleSubmit(event){
    const amount = parseInt(deposit)
    const newBalance = balance + amount;
    ctx.users.push({
      name: ctx.users[ctx.users.length -1].name,
      email: ctx.users[ctx.users.length -1].email,
      password: ctx.users[ctx.users.length -1].password,
      balance: newBalance,
    });
    setBalance(newBalance);
    setShow(false);
    console.log(ctx.users);
    console.log(balance);
    }

    
    function clearForm(){
      setDeposit(0);
      setShow(true);
    }
    
    return (
      <div className="mx-auto" style={{marginTop: "2rem", maxWidth: "25rem"}} >
        <h1>Deposit</h1> 
        <br/>
      <Card
        bgcolor="info"
        body={show ? (
          <>
              <h2 id="total">Balance ${ctx.users[ctx.users.length -1].balance}</h2>

              Deposit Amount<br/>
              <input type="number" min="0" placeholder="Enter Amount" value={deposit} onChange={handleChange}/><br/>
              <br></br>
              <button type="submit" className="btn btn-warning" onClick={handleSubmit} disabled={!validTransaction} >Deposit</button>
              </>
        ) : (
          <>
              <h2 id="total">Balance ${balance}</h2>
              <h5>Success! Amount deposited.</h5>
              <button type="submit" className="btn btn-warning" onClick={clearForm}>Make another deposit</button>
              </>
        )
        }
        />
        </div>
    );  
  
  }

  export default Deposit;