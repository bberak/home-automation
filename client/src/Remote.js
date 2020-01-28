import React from "react";
import Button, { Empty } from "./Button";

export default function Remote() {
  return (
    <div style={remote}>
      <div style={row}>
        <Button action={"power"}>Power</Button>
        <Empty />
        <Button action={"input"}>Input</Button>
      </div>

      <div style={row}>
        <Empty />
        <Button action={"up"}>Up</Button>
        <Empty />
      </div>

      <div style={row}>
        <Button action={"left"}>Left</Button>
        <Button action={"okay"}>OK</Button>
        <Button action={"right"}>Right</Button>
      </div>

      <div style={row}>
        <Empty />
        <Button action={"down"}>Down</Button>
        <Empty />
      </div>
    </div>
  );
}

const remote = {
  padding: 100
};

const row = {
  display: "flex",
  justifyContent: "space-between"
};
