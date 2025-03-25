import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" placeholder="Type here..." onChange={(e) => setText(e.target.value)} />
      <h2>{text}</h2>
    </div>
  );
}
