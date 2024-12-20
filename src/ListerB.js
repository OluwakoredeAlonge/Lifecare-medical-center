import AddItem from "./lister_componentb/AddItem";
import Content from "./lister_componentb/Content";
import Footer from "./lister_componentb/Footer";
import Header from "./lister_componentb/Header";
import { useState } from "react";
//import this will not use prop drilling
const ListerB = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Lister B: context api</h1>
          <Header/>
          <AddItem/>
          <Content/>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default ListerB;
