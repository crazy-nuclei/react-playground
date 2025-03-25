import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput(""); // Clear input field
    }
  };

  return (
    <div>
      <h2>Dynamic List</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter item" />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
