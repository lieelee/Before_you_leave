import React, { useStaet, useContext } from "react";

const AppContext = React.createContext({
  api_key: "",
  api_base: "",
});

export default AppContext;
