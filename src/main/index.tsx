import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { ApolloProvider } from '@apollo/react-hooks';
import { Home } from './Home';
import { Epochs } from './Epochs';
import { EpochDetail } from './EpochDetail';
import { Transactions } from './Transactions';
import { TransactionDetail } from './TransactionDetail';
import { AppHeader } from './App/AppHeader';
import { useClient } from '../hook/apollo-client';
import { useStoreActions } from '../store';

const Toolkit = lazy(() =>
  import('./Toolkit').then(x => ({ default: x.Toolkit })),
);

const { Header, Content } = Layout;

export function Main() {
  const [client] = useClient();
  const initConfig = useStoreActions(
    actions => actions.globalConfig.initConfig,
  );

  useEffect(() => {
    initConfig();
  }, [initConfig]);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content style={{ padding: '16px 50px' }}>
            <Suspense fallback={<Spin />}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/epochs">
                  <Epochs />
                </Route>
                <Route path="/epochs/:id">
                  <EpochDetail />
                </Route>
                <Route exact path="/transactions">
                  <Transactions />
                </Route>
                <Route exact path="/transactions/:id">
                  <TransactionDetail />
                </Route>
                <Route path="/toolkit">
                  <Toolkit />
                </Route>
              </Switch>
            </Suspense>
          </Content>
        </Router>
      </Layout>
    </ApolloProvider>
  );
}
