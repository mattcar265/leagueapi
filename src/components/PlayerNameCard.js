import React from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.min.css";

const PlayerNameCard = (props) => {
  return (
    <div className="box">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <b>{props.player_data.data.name}</b>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {"Level: " + props.player_data.data.summonerLevel}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="image is-128x128">
          <img
            className="is-rounded"
            src={
              "https://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/" +
              props.player_data.data.profileIconId +
              ".png"
            }
            alt="profile pic"
          />
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { player_data: state.search.response };
};

export default connect(mapStateToProps)(PlayerNameCard);
