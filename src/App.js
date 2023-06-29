import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Todo from './components/Todo';


function App() {
  
          //Here I've written all the functions and usestate which are passing through props

          //usestate for maintaining the tasks
          
          const [items , setItem ] = useState(JSON.parse(localStorage.getItem("todolist")))

         //To delete the task corresponding to the id

          function handleDelete (id){
            alert('Are you sure to want to delete this task ?')
            console.log(id);
            const listitems = items.filter(item => item.id !== id);
            setItem(listitems);
            localStorage.setItem("todolist",JSON.stringify(listitems))
          }
    
          //To check the task wheather it is completed or not

          function handleCheck (id){
              const listitems = items.map(item => item.id === id ? {...item ,checked: !item.checked} : item)
              setItem(listitems)
              localStorage.setItem("todolist",JSON.stringify(listitems))
          }

          //usestate for maintaining the new task to be added

          const [newItem , setnewItem] = useState('')

          //To pass the event 

          function handleSubmit(e){
              e.preventDefault();
              console.log("welcome handle submit")
              setnewItem(newItem)
              addItem(newItem)
              setnewItem('')
          }
      
          //To add new task with the existing state

          function addItem() {
              const id = items.length ? items[items.length - 1].id + 1 : 1;
              const addItems = { id, task: newItem, checked: false };
              const listItems = [...items, addItems];  //...items is an spread operator which makes the existing state to be stay there and append a new item with it
              setItem(listItems);
              localStorage.setItem("todolist", JSON.stringify(listItems));
            }
  
      
  return (
    <div className="app">
      <Header/>
       <Counter />
       <Todo  items={items} newItem={newItem} setnewItem={setnewItem}  handleCheck={handleCheck} handleDelete={handleDelete} handleSubmit={handleSubmit}/>
      
    </div>
  );
}

export default App;
