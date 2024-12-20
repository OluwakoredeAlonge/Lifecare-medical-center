import {useState} from 'react'

const Deposit = ({bal, xyz}) => {
  const [amount, setAmount] = useState("") //this state will track whatever is typed in deposit amount
  function handleChange(e){
    // 
    setAmount(e.target.value);
  }
  return (
    <div className="row">
        <div className="col-6">
          <input type="number" className="form-control mb-3" placeholder="Enter deposit amount" value={amount} onChange={handleChange}/>
        <button className="btn btn-info" onClick={function(){
         xyz(Number(amount))
        }}>Deposit</button>
        <h2>Your current balance is <strong>{bal}</strong> </h2>
        </div>
    </div>
  )
}

export default Deposit