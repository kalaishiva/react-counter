import React, { useState } from "react";

const Counter = () => {

const [count, setCount] = useState(0);


    return(
        <div >
            <div className="container">
        <h1>Counter App</h1>
        <h2 className="display" style={{color: "lightgreen"}}>Count The Number : {count} </h2>
        <div className="buttons">
            <button className="btn" onClick={()=>{return count >= 10 ? "" : setCount(count+1)}}>Increament</button>
            <button className="btn" onClick={()=> {return count <= 0 ? "" : setCount(count-1)}}>Decrement</button>
            <button className="btn" onClick={()=> (setCount(0))}>Reset</button>
        </div>
        </div>
        </div>
    )
}
export default Counter;