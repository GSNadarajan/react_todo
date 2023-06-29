import { useState } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Footer from './components/Footer';


function App() {
      // use state for maintaining the tasks
      const [items, setItems] = useState(JSON.parse(localStorage.getItem("todolist")) || []);

      // To delete the task corresponding to the id
      function handleDelete(id) {
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

      // Modal button

  
        const [isModalOpen, setIsModalOpen] = useState(false);
      
        // Function to handle opening the modal
        function openModal() {
          setIsModalOpen(true);
        }
      
        // Function to handle closing the modal
        function closeModal() {
          setIsModalOpen(false);
        }
    

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
        openModal ={openModal}
        closeModal = {closeModal}
        isModalOpen = {isModalOpen}
        setIsModalOpen = {setIsModalOpen}
      />
     
      <Footer />
    </div>
  );
}

export default App;
