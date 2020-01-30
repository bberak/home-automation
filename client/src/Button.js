import React from 'react';
import './Button.css';

export default function Button({ action, color, backgroundColor, children }) {
  const transmit = () => {
    fetch(`/ir/${action}`, { method: "POST" }).catch(console.log);
  };

  return (
    <div
      onTouchStart={transmit}
      style={{ color, backgroundColor }}
      className="Button"
    >
      {children}
    </div>
  );
}

Button.defaultProps = {
  color: "#000",
  backgroundColor: "#fafbfb"
};

export function Placeholder() {
  return <div className="Placeholder" />;
}
