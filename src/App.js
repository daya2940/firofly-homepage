import "./App.css";
import Header from "./component/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/hero";
import Services from "./component/services";
import Gallery from "./component/gallery";
import Todo from "./component/todo";
import Contactus from "./component/contactus";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Todo />
      <Contactus />
    </div>
  );
}

export default App;
