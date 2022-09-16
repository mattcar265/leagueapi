import React from "react";
import { Field, reduxForm } from "redux-form";
import "bulma/css/bulma.min.css";
import { connect } from "react-redux";
import { getPlayerByName } from "../actions";
import styles from "./styles.css";

const input = (props) => {
  return <input className="searchplayer" {...props.input} />;
};

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <form onSubmit={props.handleSubmit(props.getPlayerByName)}>
        <Field name="searchbar" component={input} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state.search };
};

const decorated = connect(mapStateToProps, {
  getPlayerByName,
})(SearchBar);
export default reduxForm({ form: "searchbar" })(decorated);
