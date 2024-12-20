import AddItem from "./lister_component/AddItem";
import Content from "./lister_component/Content"; 
import Footer from "./lister_component/Footer";
import Header from "./lister_component/Header";
import{useState} from "react"
 const Lister = () => {
    const initialList = [
        {name: "Bokku Bread", price: "1300", id:1},
        {name: "Dell Laptop", price: "400,000",id:2},
        {name: "iPhone earpiece", price: "5000",id:3},
        {name: "Prada T-shirt", price: "20000",id:4}
    ];

    const [list, setList] = useState(initialList);
    function addNewProduct(product){
      setList([...list, product]);
    }
    // a function that accpets id of product to delete and then delete
    function deleteItem(id){
      //filter the current state and filter out products that has the id that was passed
      const filteredProduct = list.filter(function(li) {
        return li.id !== id;
      })
     setList(filteredProduct)
    }
  return (
   <div className="container">
    <div className="row">
        <div className="col">
           <Header lists = {list}/>
           <AddItem addNewProduct = {addNewProduct}/>
           <Content lists = {list} deleteItem = {deleteItem}/>
           <Footer/>
        </div>
    </div>
   </div>
  )
}
export default Lister;
