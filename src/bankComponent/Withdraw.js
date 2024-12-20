import {useState} from 'react'

const Withdraw = ({bal, sksk}) => {
  const [amount, setAmount] = useState("")
  function updateAmount(e){
    setAmount(e.target.value)
  }
  function handleWithdraw(){
    if(amount === "" || amount === 0){
      alert("How much are you withdrawing?")
    }else{
      sksk(amount)
    }
  }
  return (
    <div className="row">
    <div className="col-6">
    <input type="number" className="form-control mb-3" placeholder="Enter withdraw amount" value={amount} onChange={updateAmount} />
        <button className="btn btn-danger" onClick={sksk}>Withdraw</button>
        <h2>Your withdrawal limit is <strong>{bal}</strong> </h2>

    </div>
</div>
  )
}

export default Withdraw