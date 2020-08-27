import React from 'react';
import { Box, Heading } from 'rebass';

const TopBar = (): JSX.Element => {
  return (
    <Box
      sx={{
        top: '0px',
        left: '0px',
        position: 'fixed',
        width: '100%',
        zIndex: '100',
        bg: 'white',
        textAlign: 'center'
      }}
    >
      <Heading mt={4} fontSize={[5,6]}>
        Duck Analytics <span aria-label="Duck" role="img">🦆</span>
      </Heading>
    </Box>
  );
};

export default TopBar;
