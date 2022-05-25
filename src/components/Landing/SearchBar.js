import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={classes.search_box}>
      <input
        type="text"
        className={classes.search_bar}
        placeholder="Where are you going?"
        onChange={(e) => props.setQuery(e.target.value)}
        value={props.query}
        onKeyPress={props.search}
      />
      <button className={classes.btn_search}>Enter</button>
    </div>
  );
};

export default SearchBar;
