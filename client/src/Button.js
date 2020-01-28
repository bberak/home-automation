import React from "react";

export default function Button(props) {

  const transmit = () => {
    fetch(`/ir/send/${props.action}`, { method: 'POST' }).catch(console.log)
  }

  return <button onClick={transmit} style={button}>{props.children}</button>;
}

export function Empty(argument) {
  return <div style={button} />;
}

const button = {
  display: "flex",
  flex: 1,
  fontSize: "2rem",
  alignItems: "center",
  justifyContent: "center",
  margin: 20,
  padding: 50,
  borderRadius: 20
};
