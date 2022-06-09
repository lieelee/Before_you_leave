import React, { useState, useContext } from "react";
import SearchBar from "./components/Landing/SearchBar";
import AppProvider from "./store/AppProvider";
import AppContext from "./store/app-context";
import Weather from "./components/Weather/Weather";
import Hi from "./components/Hi/Hi";
import Food from "./components/Food/Food";
import { Route, Routes, Switch } from "react-router-dom";
import { useBusinessSearch } from "./hooks/yelp-api/useBusinessSearch";

const api = {
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
      <Food />
    </AppProvider>
  );
}

export default App;
