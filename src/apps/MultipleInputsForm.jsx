import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}
