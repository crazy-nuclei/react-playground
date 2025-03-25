export default function App() {
    const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍇 Grapes"];
  
    return (
      <div>
        <h2>Fruit List:</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
  