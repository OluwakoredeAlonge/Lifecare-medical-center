function Student({ pro }) {
  //console.log(pro);
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {pro.map(function (pr, index) {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pr.name}</td>
                <td>{pr.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
  //console.log(prop.stu)
}
export default Student;
