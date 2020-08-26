import React from 'react';
import { Box } from 'rebass';

const TopBar = (): JSX.Element => {
  return (
    <Box
      sx={{
        top: '0px',
        position: 'fixed',
        width: '100%',
        zIndex: '100',
        bg: 'white'
      }}
    >
      <h1>Duck Analytics</h1>
    </Box>
  );
};

export default TopBar;
