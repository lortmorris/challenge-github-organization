import React from 'react';
import * as Icons from '@mui/icons-material';

function Icon({ name = '', selected = false }) {
  const IconShow = Icons[name];

  return (
    <IconShow
      className="component-Icon"
      color={selected ? 'secondary' : 'primary'}
    />
  );
}

export default Icon;
