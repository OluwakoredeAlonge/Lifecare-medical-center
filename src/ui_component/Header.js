//inline style
const Header = (props) => {
  return (
    <div className="row">
      <div className="col">
        <h1 className="text-center" style={{color: 'tomato', backgroundColor:"blue", minHeight: "20vh"}}>Header</h1>
        <p className="text-center">Total amount:{props.amt}</p>
        <p className="text-center">Number of cart elements:{props.cc}</p>
      </div>
    </div>
  );
};
export default Header;
