import React, { useState } from "react";


const Todo = () => {
    

    const [items , setItem ] = useState(JSON.parse(localStorage.getItem("todolist")))

          function handleDelete (id){
            alert('Are you sure to want to delete this task ?')
            console.log(id);
            const listitems = items.filter(item => item.id !== id);
            setItem(listitems);
            localStorage.setItem("todolist",JSON.stringify(listitems))
          }
    
          function handleCheck (id){
              const listitems = items.map(item => item.id === id ? {...item ,checked: !item.checked} : item)
              setItem(listitems)
              localStorage.setItem("todolist",JSON.stringify(listitems))
          }


          const [newItem , setnewItem] = useState('')

          function handleSubmit(e){
              e.preventDefault();
              console.log("welcome handle submit")
              setnewItem(newItem)
              addItem(newItem)
              setnewItem('')
          }
      
        //   function addItem (task){
        //       const id = items.length ? items[items.length -1].id + 1 : 1
        //       const addItems =  {id,task,checked:false}
        //       const listitems = {...items,addItems}
        //       setItem(listitems)
        //       console.log(listitems)
        //       localStorage.setItem("todolist",JSON.stringify(listitems))
        //   }

        function addItem() {
            const id = items.length ? items[items.length - 1].id + 1 : 1;
            const addItems = { id, task: newItem, checked: false };
            const listItems = [...items, addItems];
            setItem(listItems);
            localStorage.setItem("todolist", JSON.stringify(listItems));
          }
          


    return(
        <div className=" container mt-20 border border-black mx-auto w-60 p-3">

            <h1 className="text-4xl">Todolist</h1>
            <form className="mt-4" onSubmit={handleSubmit}>   
                <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    
                    <input type="text"  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add items" 
                    value={newItem}
                    onChange={(e) => setnewItem(e.target.value)}
                    />
                    <button type="submit" class=" absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
                </div>
            </form>



            <ul >
              {items.length > 0 ?
              items.map((item) =>
              (
              
              
              <li key={item.id}>
                <input className="float-left p-4 mt-2" onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked}/>
                <label style={item.checked ? {textDecoration : 'line-through'} : null}  className="ml-4 mb-4" onDoubleClick={() => handleCheck(item.checked) }>{item.task}</label>
                <button className="float-right" type="button" aria-label="delete" onClick={() => handleDelete(item.id)} role="button">deletee
                </button>

              </li>
              
                ))
            : (
                <p className="text-center">Your list is empty</p>
            )
            }


              </ul>


        </div>
    )
}

export default Todo;