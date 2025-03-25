import { useReducer, useState } from "react";

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Todo List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => { dispatch({ type: "add", payload: input }); setInput(""); }}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => dispatch({ type: "remove", payload: todo.id })}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
