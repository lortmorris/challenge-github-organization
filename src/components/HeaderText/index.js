import React from 'react';

import Text from '../Text';
import Link from '../Link';

import './styles.css';

function HeaderText({ paths = [], selected }) {
  return (
    <div className="component-headerText">
      {paths.map((path) => (
        <span
          className={`component-headerText-path ${selected && 'selected'}`}
          key={`headerPath-${path.label}`}
        >
          <Link to={path.link}>
            <Text
              selected={path.selected}
              fontSize="18px"
              color="#73737D"
            >
              {`${path.label}`}
            </Text>
          </Link>
        </span>
      ))}
    </div>
  );
}

export default HeaderText;
