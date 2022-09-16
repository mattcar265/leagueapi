import React from "react";
import MatchListCard from "./MatchListCard";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import "bulma/css/bulma.min.css";

const MatchList = (props) => {
  const eachMatchInfo = props.matches.map((matchInfo) => {
    return <MatchListCard match={matchInfo.data} />;
  });

  return (
    <div
      style={{
        backgroundColor: "#4A4E69",
        overflow: "auto",
        minWidth: "600px",
      }}
      className="box"
    >
      <label style={{ color: "white" }} className="subtitle">
        Past 10 Games Played
      </label>
      <Grid container spacing={1}>
        {eachMatchInfo}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { matches: state.search.response_four };
};

export default connect(mapStateToProps)(MatchList);
