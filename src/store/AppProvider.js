import React, { useReducer, useState } from "react";
import AppContext from "./app-context";

// const api = {
//   base: "https://api.openweathermap.org/data/2.5/",
// };

const AppProvider = (props) => {
  const appCtx = {
    // api_key: api.key,
    // api_base: api.base,
  };

  return (
    <AppContext.Provider value={appCtx}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
