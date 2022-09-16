import React from "react";
import "bulma/css/bulma.min.css";
import "./DetailedMatchPlayerCard.css";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { clickPlayerName } from "../actions";
import items from "../items.json";

const DetailedMatchPlayerCard = (props) => {
  const playersItems = [
    props.player.item1,
    props.player.item2,
    props.player.item3,
    props.player.item4,
    props.player.item5,
    props.player.item6,
  ];

  const filteredItems = items
    .filter((item) => playersItems.includes(item.id))
    .map((item) => {
      return (
        <Grid item xs={4}>
          <p className="image is-32x32">
            <img
              style={{
                border: "2px solid #777",
                borderStyle: "groove",
                borderColor: "black",
              }}
              src={
                "https://ddragon.leagueoflegends.com/cdn/12.7.1/img/item/" +
                item.id +
                ".png"
              }
              alt="item"
            />
          </p>
        </Grid>
      );
    });

  return (
    <Grid item xs={2.4}>
      <div style={{ maxWidth: "300px" }} className="box">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="image is-128x128">
            <img
              src={
                "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" +
                props.player.championId +
                ".png"
              }
              alt={props.player.championName}
            />
          </p>
        </div>
        <div
          onClick={() => {
            props.clickPlayerName(props.player.summonerName);
          }}
          className="player-name"
        >
          {props.player.summonerName}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {"K/D/A: " +
            props.player.kills +
            "/" +
            props.player.deaths +
            "/" +
            props.player.assists}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={1}>
            {filteredItems}
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default connect(null, { clickPlayerName })(DetailedMatchPlayerCard);
