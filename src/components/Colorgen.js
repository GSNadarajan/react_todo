import React from "react";
import { useState } from "react";

const Colorgen = () => {

    const [colorValue, setcolorValue] = useState('')
    // const [isdarkest, setisDarkest] = useState(true)
    return(
      <div>
        
        <div className="container mt-20 border border-gray-950 mx-auto md:mx-auto w-72 md:w-80 p-3 h-68 ">
            <h1 className="text-center text-2xl">Color changer</h1>
            <div className="border border-gray-900 mx-auto h-40 mt-2 rounded-lg" style={
                {
                    backgroundColor : colorValue,
                    // color : isdarkest ? "#000" : "#FFF"
                }}
            >
                <p className="mt-14 text-center h-10">{colorValue ? colorValue : "enter some color"}</p>              
            </div>

            <form className="mt-5" onsubmit = {(e) => e.preventDefault()}>
                <div class="">
                    <input
                    autoFocus
                     type="text"
                     class="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     value={colorValue}
                     onChange={(e) =>setcolorValue(e.target.value)}
                     placeholder="Enter color name" 
                    />
                </div> 
            
                {/* <button  onClick={() => setisDarkest(!isdarkest)} className="mx-1 md:mx- mt-3 w-64 md:w-72 p-3 rounded-lg text-white bg-blue-700 ">Toggle color</button> */}
            </form>

           
        </div>
        
       

        
      
      </div>
    )
}

export default Colorgen;