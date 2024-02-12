import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import WordsList from "./components/WordsList/WordsList.tsx";
import WordPage from "./components/WordPage/WordPage.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<WordsList />} />
          <Route path="/page/:word" element={<WordPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
