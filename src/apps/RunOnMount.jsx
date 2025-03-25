import { useState, useEffect } from "react";

export default function App() {
    
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); // Empty dependency array → Runs only once

  return (
    <div>
      <h2>Fetched Data:</h2>
      {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  );
}
