import React from "react";
import Button, { Placeholder } from "./Button";

export default function Remote() {
  return (
    <div style={remoteCSS}>

      <h2 style={{ color: "#fff" }}>Panasonic</h2>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"power"} backgroundColor={"#de5762"} color={"#fff"}>
          Power
        </Button>
        <Placeholder />
        <Button action={"input"}>Input</Button>
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"internet"}>Net</Button>
        <Placeholder />
        <Button action={"exit"}>Exit</Button>
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Placeholder />
        <Button action={"up"}>Up</Button>
        <Placeholder />
      </div>

      <div style={rowCSS}>
        <Button action={"left"}>Left</Button>
        <Button action={"ok"}>Ok</Button>
        <Button action={"right"}>Right</Button>
      </div>

      <div style={rowCSS}>
        <Placeholder />
        <Button action={"down"}>Down</Button>
        <Placeholder />
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"mute"}>Mute</Button>
        <Button action={"subtitles"}>Sub</Button>
        <Button action={"guide"}>Guide</Button>
      </div>

      <div style={{...rowCSS, ...gap}}>
        <Button action={"volume-up"}>Vol +</Button>
        <Placeholder />
        <Button action={"channel-up"}>Ch +</Button>
      </div>

      <div style={rowCSS}>
        <Button action={"volume-down"}>Vol -</Button>
        <Placeholder />
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
