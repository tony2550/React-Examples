import "./App.css";
import ToggleList from "./components/ToggleList";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <header className="App-header">React-Examples!</header>
      <nav className="App-nav">
        <span onClick={() => setPage(0)}>Collaspe</span>
        <span onClick={() => setPage(1)}>Ex2</span>
      </nav>
      <div className="main">{page === 0 ? <ToggleList /> : null}</div>
    </div>
  );
};

export default App;
