import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Ali");
  return (
    <div calssName="App">
      <header calssName="App-header">
        <h1>{name}</h1>
        <button onClick={() => setName("Ali Reza")}>Update</button>
      </header>
    </div>
  );
}

export default App;
