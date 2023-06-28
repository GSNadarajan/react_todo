import React from "react";
import { useState } from "react";

const Counter = () => {

    const [count , setcount] = useState(99);

    

    function incrementer(){
        setcount(count + 1);
    }

    function decrementer(){
        setcount(count -1);
    }

    function Printname (name){
        alert(`Hello this is ${name}`);
    }
   
    return(
        <div className="mt-10">

          <div className="">
            <button className="bg-red-300 p-3" onClick={() => incrementer()}>+</button>
            <span className="p-3"> {count} </span>
            <button className="bg-red-300 p-3" onClick={() => decrementer()}>-</button>
          </div>
          <br />
            

            <button className=" bg-green-400" onClick={() => Printname('Nattu')}>Click here</button>

        </div>
    )
}

export default Counter;