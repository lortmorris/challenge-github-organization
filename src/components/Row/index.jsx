import React from 'react';
import './styles.css';

function Row({
  children,
  backgroundColor,
  display = 'flex',
  flexDirection = 'row',
  alignItems,
  justifyContent,
  alignSelf,
  justifySelf,
  boxShadow,
  width,
  height,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  position,
  flexWrap,
  zIndex,
  maxWidth,
  minWidth,
  gap,
  columnGap,
  borderBottom,
  borderTop,
}) {
  return (
    <div
      className="component-Row"
      style={{
        backgroundColor,
        display,
        flexDirection,
        alignItems,
        justifyContent,
        alignSelf,
        justifySelf,
        boxShadow,
        width,
        height,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        position,
        flexWrap,
        zIndex,
        maxWidth,
        minWidth,
        gap,
        columnGap,
        borderBottom,
        borderTop,
      }}
    >
      {children}
    </div>
  );
}

export default Row;
