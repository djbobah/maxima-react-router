import * as React from "react";

import "./App.css";
import WordsList from "./components/WordsList/WordsList.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordsList />
      </header>
    </div>
  );
}

export default App;
