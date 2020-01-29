import React from "react";
import Button, { Empty } from "./Button";

export default function Remote() {
  return (
    <div style={remoteCSS}>

      <h2 style={{ color: "#fff"}}>Panasonic</h2>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"power"} backgroundColor={"#de5762"} color={"#fff"}>
          Power
        </Button>
        <Empty />
        <Button action={"input"}>Input</Button>
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"internet"}>Net</Button>
        <Empty />
        <Button action={"exit"}>Exit</Button>
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Empty />
        <Button action={"up"}>Up</Button>
        <Empty />
      </div>

      <div style={rowCSS}>
        <Button action={"left"}>Left</Button>
        <Button action={"ok"}>Ok</Button>
        <Button action={"right"}>Right</Button>
      </div>

      <div style={rowCSS}>
        <Empty />
        <Button action={"down"}>Down</Button>
        <Empty />
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"mute"}>Mute</Button>
        <Button action={"subtitles"}>Sub</Button>
        <Button action={"guide"}>Guide</Button>
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"volume-up"}>Vol +</Button>
        <Empty />
        <Button action={"channel-up"}>Ch +</Button>
      </div>

      <div style={rowCSS}>
        <Button action={"volume-down"}>Vol -</Button>
        <Empty />
        <Button action={"channel-down"}>Ch -</Button>
      </div>
    </div>
  );
}

const remoteCSS = {
  paddingTop: 30,
  paddingBottom: 30
};

const rowCSS = {
  display: "flex",
  flexDirection: "row"
};

const gap = {
  marginTop: 30
}
