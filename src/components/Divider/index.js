import React from 'react';
import './styles.css';

function Divider({
  backgroundColor = 'blue',
  height = 1,
  border = 'none',
  width = '100%',
}) {
  return (
    <div
      className="component-Divider"
      style={{
        width,
      }}
    >
      <hr
        style={{
          backgroundColor,
          height,
          border,
        }}
      />
    </div>
  );
}

export default Divider;
