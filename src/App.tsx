import React from "react";
import Header from "./components/Header";
import "./assets/styles/index.css";
import TerminalProfile from "./components/TerminalProfile";

const App: React.FC = () => {
  return (
    <div>
      <main>
        <TerminalProfile />
      </main>
    </div>
  );
};

export default App;
