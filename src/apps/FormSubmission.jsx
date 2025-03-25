import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {submitted && <h2>Welcome, {username}!</h2>}
    </div>
  );
}
