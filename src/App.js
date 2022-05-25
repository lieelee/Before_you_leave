import React, { useState, useContext } from "react";
import SearchBar from "./components/Landing/SearchBar";
import AppProvider from "./store/AppProvider";
import AppContext from "./store/app-context";
import Weather from "./components/Weather/Weather";
import Hi from "./components/Hi/Hi";
import { Route, Routes, Switch } from "react-router-dom";

const api = {
  key: "2a470a5ce69a36ec5dc341371a7e9713",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const appCtx = useContext(AppContext);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  return (
    <AppProvider>
      <Routes>
        <Route path="/search" element={<Hi />} />
        <Route
          path="/"
          element={
            <SearchBar setQuery={setQuery} query={query} search={search} />
          }
        />
      </Routes>

      {/* <SearchBar setQuery={setQuery} query={query} search={search} /> */}
      <Weather weather={weather} />
    </AppProvider>
  );
}

export default App;
