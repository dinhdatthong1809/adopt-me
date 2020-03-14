import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App: React.FunctionComponent = () => {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;

render(<App />, document.getElementById("root"));
