import React from "react";
import {FaPlus} from 'react-icons/fa';


const Additem = ({setnewItem,newItem,handleSubmit}) => {

  
    return(
        <div className="max-w-sm mx-auto">
             <form className="" onSubmit={handleSubmit}>   
                <label class="text-sm font-medium text-gray-900 sr-only dark:text-black">Search</label>
                <div class="flex">
                    
                    <input type="text"  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add items" 
                    value={newItem}
                    onChange={(e) => setnewItem(e.target.value)}
                  
                   />
                     <FaPlus role="button" type="submit" />
                    {/* <button type="submit"  class=" absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button> */}
                    
                </div>
             </form>
        </div>
       
      
    )
}

export default Additem;