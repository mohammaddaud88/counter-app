import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const[count,setCount] = useState(0)
    function decreaseHandler(){
      setCount(count-1);

    }
    function increaseHandler(){
      setCount(count+1);
    }
    function resetHandler(){
      setCount(0);
    }

  return (
    <div className="container">
      <div className="heading">Icrement & Decrement</div>
      <div className="sub-container">
        <button onClick={decreaseHandler} className="increaseClick btn"> - </button>
      <div>
        {count}
      </div>
      <button onClick={increaseHandler} className="decreaseClick btn">+</button>
      </div>
        <button onClick={resetHandler} className="resetbtn">reset</button>
    </div>
  );
}

export default App;
