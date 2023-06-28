import React from "react";
import { useState } from "react";

const Additem = ({items,setitem}) => {

    const [newItem , setnewItem] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        console.log("welcome handle submit")
        setnewItem(newItem)
        console.log(newItem)
        addItem(newItem)
        setnewItem('')
    }

    function addItem (task){
        console.log(task)
        const id = items.length ? items[items.length -1].id + 1 : 1
        console.log(id)
        const additems =  {id,task,checked:false}
        const listitems = {...items,additems}
        setitem(listitems)
        // localStorage.setitem("todolist",JSON.stringify(listitems))




    }
    return(
        <form className="mt-4">   
        <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            
            <input type="text"  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add items" 
             value={newItem}
             onChange={(e) => setnewItem(e.target.value)}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)} class=" absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
        </div>
      </form>
      
    )
}

export default Additem;