import { createContext, useEffect, useState } from "react";
const ListContext = createContext();
//a provider
const ListProvider = ({ children }) => {
  //set up the state
  //create a function to check inside local storage and if there is any marketList in the local storage, if it is not there, it will return empty array
  function fetchListFromLocalStorage(){
    const initialList = localStorage.getItem("marketList");
    const realList = initialList ? JSON.parse(initialList) : [];
    return realList;
  }
  const [list, setList] = useState(fetchListFromLocalStorage());
  //set up all functions that the components need
  //useEffect will help us to update localstorage whenevr a new list is created or deleted
  useEffect(() =>{
    //whenevr the list changes, we will update the LocalStorage
    localStorage.setItem("marketList", JSON.stringify(list));
  }, [list])
  function addNewProduct(product) {
    setList([...list, product]);
  }

  // a function that accpets id of product to delete and then delete
  function deleteItem(id) {
    //filter the current state and filter out products that has the id that was passed
    const filteredProduct = list.filter(function (li) {
      return li.id !== id;
    });
    setList(filteredProduct);
  }
  return (
    <ListContext.Provider value={{ list, addNewProduct, deleteItem }}>
      {children}
    </ListContext.Provider>
  );
};
export { ListContext, ListProvider };
