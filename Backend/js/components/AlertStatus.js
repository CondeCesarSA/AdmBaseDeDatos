import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';

export const AlertStatus = ({ alertVisible }) => {

  useEffect(() => {
    if (alertVisible) {
      setTimeout(() => {
        alertVisible(false)
      }, 5000);
    }
  }, [])

  return (
    <Alert
      sx={{ width: '25%', position: "absolute", right: "1.5%", top: "13%", zIndex: 1 }}
      variant="filled"
      severity="success"
      onClose={() => alertVisible(false)}
    >
      El cambio se realizo correctamente.
    </Alert>
  );
}