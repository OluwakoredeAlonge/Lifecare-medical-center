const Navbar = ({amt, cartCount}) => {
    //xyz = 1000; props are immutable; they cannot be changed
    //internal styling
    const styleH1 = {
        color: "green",
        backgroundColor: "ghostwhite",
        padding:"20px"
    }
    return (
      <div className="row">
        <div className="col">
          <h1 className="text-center" style={styleH1}>Navbar</h1>
          <p className="text-center">Total amount:{amt}</p>
          <p className="text-center">Number of cart elements:{cartCount}</p>
        </div>
      </div>
    );
  };
  export default Navbar;
  