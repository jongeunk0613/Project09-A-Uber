import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import SignIn from '@/routes/SignIn';
import Home from '@routes/Home';
import Signup from '@routes/Signup';
import theme from '@theme/.';
import GlobalStyle from '@theme/global';
import reducer from '@reducers/.';
import client from '@/apollo';

import '@theme/antd.less';

const store = createStore(reducer);

const App: FC = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default App;
