import React from 'react';
import './styles.css';

function Box({
  children,
  backgroundColor = 'transparent',
  width,
  height,
  display = 'flex',
  flexDirection = 'column',
  justifyContent,
  alignSelf,
  alignItems,
  borderRadius,
  position,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  boxShadow,
  border,
  maxWidth,
  minWidth,
  flexWrap,
}) {
  return (
    <div
      className="component-Box"
      style={{
        backgroundColor,
        width,
        height,
        display,
        flexDirection,
        justifyContent,
        alignItems,
        borderRadius,
        position,
        padding,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        boxShadow,
        border,
        alignSelf,
        maxWidth,
        minWidth,
        flexWrap,
      }}
    >
      {children}
    </div>
  );
}

export default Box;
