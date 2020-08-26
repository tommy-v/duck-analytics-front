// Libs
import React from 'react';

// Components
import { Box, Flex } from 'rebass';

const BasicResponsiveBox = (props: any): JSX.Element => {
  return (
    <Flex justifyContent="center">
      <Box width="100%" maxWidth="600px">
        {props.children}
      </Box>
    </Flex>
  );
};

export default BasicResponsiveBox;
