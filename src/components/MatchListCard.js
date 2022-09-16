import React from "react";
import "bulma/css/bulma.min.css";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { history } from "./App";
import { selectMatch } from "../actions";

const MatchListCard = (props) => {
  const goToDetailedMatch = () => {
    props.selectMatch(props.match);

    history.push("/match/" + props.match.info.gameId);
  };

  const playerInfo = props.match.info.participants
    .filter((player) => player.puuid === props.playerInfo.data.puuid)
    .map((filteredPlayer) => {
      return (
        <div className="box" style={{ overFlow: "hidden" }}>
          <p className="image is-64x64">
            <img
              src={
                "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" +
                filteredPlayer.championId +
                ".png"
              }
              alt={filteredPlayer.championName}
            />
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {filteredPlayer.kills +
              "/" +
              filteredPlayer.deaths +
              "/" +
              filteredPlayer.assists}
          </div>
          <span
            style={{ display: "flex", justifyContent: "center" }}
            className={filteredPlayer.win ? "tag is-success" : "tag is-danger"}
          >
            {filteredPlayer.win ? "Victory" : "Defeat"}
          </span>
        </div>
      );
    });

  var d = new Date(0);
  d.setUTCSeconds(props.match.info.gameStartTimestamp / 1000);

  return (
    <Grid item xs={2.4}>
      <div style={{ maxWidth: "200px", minWidth: "150px" }} className="box">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {d.toLocaleDateString()}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {playerInfo}
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                display: "flex",
                maxWidth: "100px",
              }}
              onClick={goToDetailedMatch}
              className="button is-info"
            >
              match details
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return { playerInfo: state.search.response };
};

export default connect(mapStateToProps, { selectMatch })(MatchListCard);
