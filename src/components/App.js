import React from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import SearchBar from "./SearchBar";
import PlayerInfo from "./PlayerInfo";
import "bulma/css/bulma.min.css";
import { createBrowserHistory } from "history";
import NavBar from "./NavBar";

import DetailedMatch from "./DetailedMatch";

//22223B
//4A4E69
//9A8C98
//C9ADA7
//F2E9E4

export const history = createBrowserHistory();

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#22223B",
        minWidth: "600px",
        minHeight: "100vh",
      }}
    >
      <Router history={history}>
        <Route path="/" component={NavBar} />
        <Route path={"/player_info/player_name/"} component={PlayerInfo} />
        <Route path={"/match/"} component={DetailedMatch} />
      </Router>
    </div>
  );
};

export default App;
