import ApolloClient, { Operation, PresetConfig } from 'apollo-boost';

const clientOptions: PresetConfig = {
  request: (operation: Operation) => {
    const domain = window.location.hostname;
    const headers = {
      'X-Tenant': domain,
    };

    operation.setContext({
      headers,
    });
  },
  uri: process.env.REACT_APP_GRAPHQL_URL,
};

const apolloClient = new ApolloClient(clientOptions);

export default apolloClient;
