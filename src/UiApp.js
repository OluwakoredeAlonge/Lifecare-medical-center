import "bootstrap/dist/css/bootstrap.css";
import Header from "./ui_component/Header";
import Navbar from "./ui_component/Navbar";
import PageContent from "./ui_component/PageContent";
import Footer from "./ui_component/Footer";
import "./main.css";
import Student from "./ui_component/Student";
function UiApp() {
  let amount = 20000;
  let cartCount = 2;
  let students = ["sule", "tanwa", "tolu", "boniface"];
  let programmers = [
    { name: "John", score: 23 },
    { name: "Sam", score: 53 },
    { name: "Yemi", score: 45 },
    { name: "Sule", score: 14 },
    { name: "Bolu", score: 35 },
    { name: "Yemisi", score: 24 },
  ];
  //every functional component must return a jsx
  return (
    <div className="container-fluid">
      <Header amt={amount} cc={cartCount} />
      <Navbar amt={amount} cartCount={cartCount} />
      <PageContent student={students} />
      <Footer />
      <Student pro={programmers} />
    </div>
  );
}
export default UiApp;
