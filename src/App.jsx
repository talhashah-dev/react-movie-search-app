import React from "react";
import Search from "./components/Search";
import MoviesContainer from "./components/MoviesContainer";

function App() {
  return (
    <div className="wrapper">
      <Search />
      <MoviesContainer />
    </div>
  );
}

export default App;
