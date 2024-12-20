const Header = ({lists}) => {
  return (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <h1 className="text-center">Lister</h1>
            <p className="text-center">Number of Items in Shopping List: <strong>{lists.length}</strong> </p>
        </div>
    </div>
  )
}

export default Header