import React from "react";
import { connect } from "react-redux";
import "bulma/css/bulma.min.css";

const RankCard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justyifyContent: "center",
        paddingTop: "5px",
        paddingBottom: "10px",
      }}
    >
      <div style={{ minWidth: "170px" }} className="box">
        <div className="box">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="image is-64x64">
              <img
                className=""
                src={require("../images/ranks/Emblem_" +
                  props.player_data.data[0].tier +
                  ".png")}
                alt="rank pic"
              />
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {props.player_data.data[0]?.tier +
              " " +
              props.player_data.data[0].rank}
          </div>
        </div>
        <div className="block">
          {props.player_data.data[0].leaguePoints + "lp"}
        </div>
        <div className="block">{props.player_data.data[0].wins + " Wins"}</div>
        <div className="block">
          {props.player_data.data[0].losses + " Losses"}
        </div>
        <div className="block">
          {"Win rate: " +
            (
              (props.player_data.data[0].wins /
                (props.player_data.data[0].losses +
                  props.player_data.data[0].wins)) *
              100
            ).toFixed(2) +
            "%"}
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { player_data: state.search.response_two };
};

export default connect(mapStatetoProps)(RankCard);
