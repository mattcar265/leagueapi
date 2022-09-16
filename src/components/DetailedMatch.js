import React from "react";
import "bulma/css/bulma.min.css";
import { connect } from "react-redux";
import DetailedMatchPlayerCard from "./DetailedMatchPlayerCard";
import { Grid } from "@mui/material";

const DetailedMatch = (props) => {
  const players = props.selectedMatch.info.participants.map((player) => {
    return <DetailedMatchPlayerCard player={player} />;
  });

  return (
    <div style={{ backgroundColor: "#4A4E69" }} className="box">
      <Grid container spacing={6}>
        {players}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedMatch: state.selected };
};

export default connect(mapStateToProps)(DetailedMatch);
