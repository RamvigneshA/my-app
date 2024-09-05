import "./App.css";
import { useState } from "react";
import { User } from "./user";

function App() {
  const [value, setvalue] = useState([]);
  const [newValue, setNewValue] = useState("");

  const handle = (event) => {
    setNewValue(event.target.value);
  };

  const add = () => {
    if (newValue === "") return;

    let key = crypto.randomUUID();
    const solo = { name: newValue, key };
    setvalue([...value, solo]);
    console.log(value);

    setNewValue("");
  };
  const remove = (key) => {
    const arr = value.filter((val) => val.key !== key);
    setvalue(arr);
  };
  return (
    <div className="App">
    
      <div className="container">
        <div className="userInput">
          <input type="text" value={newValue} onChange={handle} />
          <button onClick={add}>Add</button>
        </div>
        <div className="tasks">
          {value.map((val) => {
            return <User name={val.name} num={val.key} remove={remove} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
