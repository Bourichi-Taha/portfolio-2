import "./app.css";
import About from "./compenents/about/About";
import Contact from "./compenents/contact/Contact";
import Intro from "./compenents/intro/Intro";
import ProductsList from "./compenents/productsList/ProductsList";
import { useEffect, useState } from "react";

function App() {
  const [isChecked,setIsChecked] = useState(false);
  useEffect(() => {
    if (isChecked) {
      document.documentElement.style.setProperty('--primary-color',"grey");
      document.documentElement.style.setProperty('--secondary-color',"black");
      document.documentElement.style.setProperty('--text-color',"white");
    } else {
      document.documentElement.style.setProperty('--primary-color',"crimson");
      document.documentElement.style.setProperty('--secondary-color',"rgb(216, 216, 216)");
      document.documentElement.style.setProperty('--text-color',"black");

    }
  },[isChecked]);
  return (
    <div className="App" style={{ width: "100%" }}>
      <div className="switcherContainer" >
        <label className="switch">
          <input checked={isChecked} type="checkbox" onChange={() => setIsChecked(!isChecked)}/>
          <span className="slider round"></span>
        </label>
      </div>
      <Intro  />
      <About  />
      <ProductsList/>
      <Contact />
    </div>
  );
}

export default App;
