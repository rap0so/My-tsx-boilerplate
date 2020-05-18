import { ApolloProvider } from '@apollo/react-hooks';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import apolloClient from 'helpers/apolloClient';
import theme from 'providers/theme';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      {/* TODO: Add loader as fallback */}
      <Suspense fallback={<div />}>
        <Router>
          <Switch>
            <Route path="/" component={lazy(() => import('pages/home'))} />

            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
