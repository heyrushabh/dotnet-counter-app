import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;


function App() {
  const [count, setCount] = useState(0);

  const loadCount = async () => {
    const response = await fetch(`${API_URL}/Counter`);

    const data = await response.json();

    setCount(data.value);
  };

  const increment = async () => {
    await fetch(
      `${API_URL}/Counter/increment`,
      {
        method: "POST"
      }
    );

    await loadCount();
  };

  useEffect(() => {
    loadCount();
  }, []);

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Current Count: {count}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;