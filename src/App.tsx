import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import apolloClient from 'helpers/apolloClient';
import { RouteWrapper } from 'routes';
import theme from 'theme';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <RouteWrapper />
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
