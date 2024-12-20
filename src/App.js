import Balance from "./bankComponent/Balance";
import Broke from "./bankComponent/Broke";
import Deposit from "./bankComponent/Deposit";
import Rich from "./bankComponent/Rich";
import Withdraw from "./bankComponent/Withdraw";
import { useState } from "react";

function App() {
  //const balance = 20000; //since the balance is not fixed, do not do this, instead, use hook "useState" to manage it
  //useState(): import ;
  const [balance, setBalance] = useState(0); //syntax for managing state
  //setBalance(1000); don't update a state like this
  //setBalance(balance + 1000)
  function handleWithdraw(amount){
    if(balance >= amount){
        setBalance(balance - amount)
    }else{
        alert("Your balance is too low")
    }
  }
  function handleDeposit(amount){
    setBalance(balance + amount);
  }
  return (
    <div className="containerFluid">
      {/* <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleBalance}>Deposit</button> */}
      <h1>Bank App</h1>
      {/* displaying componenets based on condition */}
      {
        balance > 1000 ? <Rich/> : <Broke/>
      }
      <Balance bal={balance} />
      <Withdraw bal={balance} sksk ={handleWithdraw}/>
      <Deposit bal={balance}  xyz ={handleDeposit}/>
    </div>
  );
}
export default App;
