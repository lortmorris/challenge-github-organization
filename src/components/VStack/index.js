import React from 'react';
import './styles.css';

function VStack({
  children,
  display = 'flex',
  flexDirection = 'column',
  gap,
  columnGap,
  justifyContent,
  justifySelf,
  alignItems,
  alignSelf,
  width,
  background,
  height,
  boxShadow,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  borderRadius,
  position,
  flexWrap,
  zIndex,
  maxWidth,
  minWidth,
  borderBottom,
  borderTop,
  borderLeft,
  borderRight,
  borderWidth,
}) {
  return (
    <div
      className="component-VStack"
      style={{
        display,
        flexDirection,
        justifyContent,
        justifySelf,
        alignItems,
        alignSelf,
        width,
        height,
        boxShadow,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        background,
        borderRadius,
        position,
        flexWrap,
        zIndex,
        maxWidth,
        minWidth,
        gap,
        columnGap,
        borderBottom,
        borderTop,
        borderLeft,
        borderRight,
        borderWidth,
      }}
    >
      {children}
    </div>
  );
}

export default VStack;
