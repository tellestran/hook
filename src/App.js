import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Content from "./view/Content";
import Content2 from "./view/Content2";

function App() {
  // const [show, setShow] = useState(false)
  // console.log('>>show: ', show)

  // const handleOnClickShow = () => {
  //   setShow(!show)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<button onClick={handleOnClickShow}> Show </button>
        {show ? <Content /> : []} */}
        <Content2 />
      </header>
    </div>
  );
}

export default App;
