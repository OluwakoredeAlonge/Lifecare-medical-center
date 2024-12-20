const Content = ({lists, deleteItem}) => {
  // console.log(lists)
  return (
     <div className="row">
    <div className="col-md-8 offset-md-2 py-3">
       <h2 className="text-primary text-center">Shopping List Items</h2>
    </div>
    <div className="row">
    <div className="col-">
      <table className="table table-striped">
        <thead>
            <tr>
                <th>S/N</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
            lists.map(function(list, index){
              return(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{list.name}</td>
                <td>{list.price}</td>
                <td>
                    <button className="btn btn-danger" onClick={function(){deleteItem(list.id)}}>Delete Product</button>
                </td>
            </tr>
              )
            })
           }
        </tbody>
      </table>
    </div>
</div>
</div>

  )
}

export default Content