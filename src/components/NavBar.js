import React from "react";
import { Field, reduxForm } from "redux-form";
import "bulma/css/bulma.min.css";
import { connect } from "react-redux";
import { getPlayerByName } from "../actions";
import SearchBar from "./SearchBar";
import styles from "./styles.css";

const NavBar = (props) => {
  return (
    <div className="nav">
      <div className="navtitle">
        <p>League Of Legends Stats</p>
      </div>
      <div className="search">
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;