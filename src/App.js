import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  console.log(page);

  const content = page === "home" ? "Welcome" : "About";

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>

        {content}
      </header>
    </div>
  );
}

export default App;
