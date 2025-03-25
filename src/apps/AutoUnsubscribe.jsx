import { useState, useEffect } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
      {show && <Timer />}
    </div>
  );
}

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => console.log("Timer Running..."), 1000);
    return () => {
      clearInterval(interval);
      console.log("Timer Stopped.");
    };
  }, []);

  return <p>Timer Running... Check Console</p>;
}
