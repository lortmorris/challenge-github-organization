import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function LinkComponent({
  children,
  fontSize,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  to = '',
  selected,
}) {
  return (
    <Link
      className={`component-Link ${selected ? 'selectedLink' : ''}`}
      to={to}
      style={{
        fontSize,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      }}
    >
      {children}
    </Link>
  );
}

export default LinkComponent;
