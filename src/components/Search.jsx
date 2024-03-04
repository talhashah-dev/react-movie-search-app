import { React, useState } from "react";
import "../App.css";

function Search() {
  const clearIcon = document.getElementsByClassName("clearIcon");
  function showSearchClear() {
    //code to excute
  }
  return (
    <div className="searchContainer">
      <input
        type="search"
        className="searchInput"
        placeholder="Search a Movie"
        autoFocus
        onChange={showSearchClear}
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
        alt="Search Icon"
        className="searchIcon"
      />
      <img
        src="https://static.thenounproject.com/png/5507757-200.png"
        alt="Clear Icon"
        className="clearIcon"
      />
    </div>
  );
}
export default Search;
