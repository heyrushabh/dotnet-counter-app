import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const loadCount = async () => {
    const response = await fetch("http://localhost:5007/Counter");

    const data = await response.json();

    setCount(data.value);
  };

  const increment = async () => {
    await fetch(
      "http://localhost:5007/Counter/increment",
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
      <h1>DevOps Counter App</h1>

      <h2>Current Count: {count}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;