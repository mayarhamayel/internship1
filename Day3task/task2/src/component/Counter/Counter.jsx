
import { useState } from "react";
import './counter.css'

function Counter (){

    const [counter,setCounter]=useState(0)


    return (
      <div className="countenir">
        <span>{counter}</span>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          add one
        </button>
      </div>
    );
    
}


export default Counter;