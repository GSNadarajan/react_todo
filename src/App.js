import './App.css';
import { useState } from "react";
import Main from './Main';
import Content from './Content';


function App() {


  const [items , setitem ] = useState(
    [
        {
            id : 1,
            task : "Reading books",
            checked : true,
        },
        {
            id : 2,
            task : "Making codes",
            checked : false,
        },
        {
            id : 3,
            task : "Learn new things",
            checked : true,
        },
        {
            id : 4,
            task : "Make exercise",
            checked : true,
        }
    ]

)

  return (
    <div className="App">
       <Main />
       <Content items={items} setitem={setitem} />
    </div>
  );
}

export default App;
