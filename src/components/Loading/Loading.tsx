import { FC } from 'react';
import { BarLoader } from 'react-spinners';

import loadingWrapperStyle from './loadingWrapperStyle';
import { TLoadingProps } from './types';
import { Box, Flex } from 'rebass';

const Loading: FC<TLoadingProps> = ({ full }) =>
  full ? (
    <Flex
      alignItems="center"
      data-testid="full"
      display="flex"
      justifyContent="center"
      height="100%"
      style={loadingWrapperStyle}
    >
      <BarLoader color="#fff" />
    </Flex>
  ) : (
    <Box data-testid="bar">
      <BarLoader />
    </Box>
  );

export default Loading;
