import React, { useState } from "react";
import {FaTrash,FaPlus } from 'react-icons/fa';


const Todo = ({items,handleCheck,handleDelete,handleSubmit,newItem,setNewItem,searcItem,setSearchItem}) => {
   

    return(
        <div className=" container mt-20 border border-gray-950 mx-auto w-60 p-3">
            <h1 className="text-4xl text-center">Todolist</h1>
            <form className="mt-4" onSubmit={handleSubmit}>   
                <div class="relative">
                    
                    <input type="text"  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add items" 
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    />
                   <FaPlus role="button" type="submit"  class=" absolute right-2.5 top-4" />         
                 </div>         
            </form>

            <form className="mt-4" onChange={(e) => e.preventDefault()}>   
                <div class="">
                    
                    <input type="text"  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search items" 
                           value={searcItem}
                           onChange={(e) => setSearchItem(e.target.value)}
                   />
                 </div>         
            </form>

            <ul >
              {items.length > 0 ?
              items.map((item) =>
              (
              
              
              <li key={item.id} className="mt-4">
                <input className="float-left p-4 mt-2" onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked}/>
                <label style={item.checked ? {textDecoration : 'line-through'} : null}  className="ml-4 mb-4" onDoubleClick={() => handleCheck(item.checked) }>{item.task}</label>
                <FaTrash  className="float-right " type="button" aria-label="delete" onClick={() => handleDelete(item.id)} role="button"/>

              </li>
              
                ))
            : (
                <p className="text-center mt-4">Your list is empty</p>
            )
            }


            </ul>
        </div>
    )
}

export default Todo;