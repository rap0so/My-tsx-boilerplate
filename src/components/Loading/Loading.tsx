import { BarLoader } from 'react-spinners';

import { TLoadingProps } from './types';
import { Box, Flex } from '@chakra-ui/react';

const Loading = ({ full }: TLoadingProps) =>
  full ? (
    <Flex
      alignItems="center"
      data-testid="full"
      justifyContent="center"
      height="100%"
      inset="0"
      position="fixed"
    >
      <BarLoader color="#fff" />
    </Flex>
  ) : (
    <Box data-testid="bar">
      <BarLoader />
    </Box>
  );

export default Loading;
