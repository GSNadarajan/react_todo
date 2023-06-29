import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';

function App() {
  // use state for maintaining the tasks
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todolist")) || []);

  // To delete the task corresponding to the id
  function handleDelete(id) {
    alert('Are you sure you want to delete this task?');
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("todolist", JSON.stringify(updatedItems));
  }

  // To check the task whether it is completed or not
  function handleCheck(id) {
    const updatedItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(updatedItems);
    localStorage.setItem("todolist", JSON.stringify(updatedItems));
  }

  // use state for maintaining the new task to be added
  const [newItem, setNewItem] = useState('');

  // To add new task with the existing state
  function handleSubmit(e) {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }

  function addItem(task) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addItems = { id, task, checked: false };
    const updatedItems = [...items, addItems];
    setItems(updatedItems);
    localStorage.setItem("todolist", JSON.stringify(updatedItems));
  }

  // use state for maintaining the search item
  const [searchItem, setSearchItem] = useState('');

  return (
    <div className="app">
      <Header />
      <Todo
        items={items.filter(item => item.task.toLowerCase().includes(searchItem.toLowerCase()))}
        newItem={newItem}
        setNewItem={setNewItem}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <Footer />
    </div>
  );
}

export default App;
