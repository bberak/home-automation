import React from "react";

export default function Button(props) {

  const transmit = () => {
    fetch(`/ir/${props.action}`, { method: 'POST' }).catch(console.log)
  }

  return <button onTouchStart={transmit} style={button}>{props.children}</button>;
}

export function Empty(argument) {
  return <div style={button} />;
}

const button = {
  display: "flex",
  flex: 1,
  fontSize: 20,
  fontWeight: "bold",
  alignItems: "center",
  justifyContent: "center",
  margin: 10,
  padding: 10,
  height: 80,
  borderRadius: 20
};
