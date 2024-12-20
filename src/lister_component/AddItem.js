import{useState} from "react";
const AddItem = ({addNewProduct}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  function handler(e){
    e.preventDefault();
   //validation
   if(name === "" || price === ""){
    alert("All fields are required")
   }else{
      //generate a random number to serve as the id
      const id = Math.random(1, 123982000000) + Date.now();; //generate a random number
      //alert(id)
      //form an object with it and send it to a function that will insert it into our state
      const item = {
        name:name, //the first nameis the key expected by the state, while values is what the user typed in the form
        price:price,
        id:id
      }
      addNewProduct(item)
   }
  }
  return (
    <div className="row">
        <div className="col-md-8 offset-md-2">
           <form onSubmit={handler}>
           <input type="text" className="form-control" placeholder="product name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           <input type="text" className="form-control mt-3" placeholder="product price"  value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
           <button className="btn btn-primary mt-3">Add Item to List</button>
           </form>
        </div>
    </div>
  )
}

export default AddItem