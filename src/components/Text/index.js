import React from 'react';

import './style.css';

function Text({
  children,
  fontSize = '12px',
  maxWidth = '100%',
  color = '#333',
  fontWeight = 'normal',
  textAlign = 'start',
  lineHeight,
  marginRight,
  marginLeft,
  selected,
  textDecoration,
}) {
  return (
    <span
      style={{
        maxWidth,
        textDecoration,
        fontSize,
        fontWeight,
        color,
        textAlign,
        lineHeight,
        marginRight,
        marginLeft,
      }}
      className={`component-Text ${selected && 'selectedText'}`}
    >
      {children}
    </span>
  );
}

export default Text;
