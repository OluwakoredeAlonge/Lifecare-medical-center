import "./pagecontent.css"; //external styling
import sksk from "../sksk.jpeg";
const PageContent = ({student}) => {
    return (
      <div className="row content">
        <div className="col">
          <h1 className="text-center">PageContent</h1>
          <div className="row">
            <div className="col-md-6">
                <p>Image located inside src folder</p>
                <img src={sksk} className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <p>Image located inside public folder</p>
                <img src="/sksk.jpeg" className="img-fluid" alt="fuck it"/>
            </div>
          </div>
          <div className="row">
            <div className="col">
                {
                    student.map((std, index) =>{
                        return(
                            <div className="col-md-3 p-3">
                                <p>{std}</p>
                            </div>
                        )
                    })
                }
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default PageContent;
  