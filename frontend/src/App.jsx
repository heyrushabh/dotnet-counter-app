import { useEffect, useState } from "react";
const API_URL = "/api";


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
  document.title = `${count} 🚀 Deployments`;
}, [count]);

return (
  <div className="app">
    <h1>🚀 HeyRushabh.dev</h1>

    <p className="subtitle">
      Terraform • AWS • Docker • CI/CD
    </p>

    <div className="count">{count}</div>

    <button onClick={incrementCount}>
      Deploy To Production 🚀
    </button>
  </div>
);
}

export default App;