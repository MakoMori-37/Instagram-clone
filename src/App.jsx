import React from "react";
import "./App.css";
import Newfeed from "./components/feed";
import NavBar from "./components/NavBar";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Newfeed />
    </div>
  );
};

export default App;
