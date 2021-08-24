import React from 'react';
import Card from './card';
import UserContext from './context';

function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [deposit, setDeposit] = React.useState();
  const [balance, setBalance] = React.useState(ctx.users[ctx.users.length -1].balance);
  const [validTransaction, setValidTransaction] = React.useState(false)
  
  

const handleChange = (event) => {
  const amount = Number(event.target.value);
  if (amount <= 0 || amount > balance) {
  setValidTransaction(false);
  alert('Error: invalid amount. Check if amount is > 0 and/or account has sufficient balance.');
  }
  else {
  setValidTransaction(true)
  }
      setDeposit(Number(event.target.value));
  };  

function handleSubmit(event){
  const amount = parseInt(deposit)
  const newBalance = balance - amount;
  ctx.users.push({
    name: ctx.users[ctx.users.length -1].name,
    email: ctx.users[ctx.users.length -1].email,
    password: ctx.users[ctx.users.length -1].password,
    balance: newBalance,
  });
  setBalance(newBalance);
  setShow(false);
  
  }

  function clearForm(){
    setDeposit(0);
    setShow(true);
  }
  
  return (
    <div className="dataEntry" style={{marginLeft: "2rem", marginTop: "2rem"}}>
      <h1>Withdraw</h1> 
      <br/>
    <Card
      bgcolor="info"
      body={show ? (
        <>
            <h2 id="total">Balance ${ctx.users[ctx.users.length -1].balance}</h2>
            
            Withdrawal Amount<br/>
            <input type="number" min="0" placeholder="Enter Amount" value={deposit} onChange={handleChange}/><br/>
            <br></br>
            <button type="submit" className="btn btn-light" onClick={handleSubmit} disabled={!validTransaction} >Withdraw</button>
            </>
      ):(
        <>
              <h2 id="total">Balance ${balance}</h2>
              <h5>Success! Withdrawal complete.</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
      )
      }
      />
      </div>
  );  

}

  export default Withdraw;