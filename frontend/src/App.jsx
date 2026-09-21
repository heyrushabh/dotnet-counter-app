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
  loadCount();
}, []);

useEffect(() => {
  document.title = `${count} 🚀 Deployments`;
}, [count]);
return (
  <div className="app">
    <h1>🚀 HeyRushabh.Dev</h1>

    <p className="subtitle">
      React • .NET 10 • PostgreSQL • Docker • Nginx • GitHub Actions • AWS • Terraform
    </p>

    <div className="count">{count}</div>

    <button onClick={increment}>
      Deploy To Production 🚀
    </button>
  </div>
);
}

export default App;