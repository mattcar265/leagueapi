import React from "react";
import { connect } from "react-redux";
import MatchList from "./MatchList";
import PlayerNameCard from "./PlayerNameCard";
import RankCard from "./RankCard";
import "bulma/css/bulma.min.css";

const PlayerInfo = (props) => {
  if (props.player_data) {
    return (
      <div style={{ display: "" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PlayerNameCard />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <RankCard />
        </div>
        <MatchList />
      </div>
    );
  } else {
    return <h1 style={{ color: "white", padding: "20px" }}>Error Player Not Found...</h1>;
  }
};

const mapStateToProps = (state) => {
  return { player_data: state.search.response_two };
};

export default connect(mapStateToProps)(PlayerInfo);
