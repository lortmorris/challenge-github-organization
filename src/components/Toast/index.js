import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './styles.css';

const Alert = React.forwardRef((props, ref) => (<MuiAlert elevation={6} ref={ref} variant="filled" {...props} />));

function Toast({
  severity = 'error',
  open = false,
  message = 'This is a notification message',
  handleClose = () => {},
}) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }} className="component-Toast">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={severity} onClose={handleClose} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Toast;
