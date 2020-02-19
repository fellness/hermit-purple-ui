import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { ApolloProvider } from '@apollo/react-hooks';
import { QueryParamProvider } from 'use-query-params';
import { Home } from './Home';
import { Blocks } from './Blocks';
import { BlockDetail } from './BlockDetail';
import { Transactions } from './Transactions';
import { TransactionDetail } from './TransactionDetail';
import { AppHeader } from './App/AppHeader';
import { useClient } from '../hook/apollo-client';
import { useStoreActions } from '../store';
import { Assets } from './Asset/Assets';
import { AssetDetail } from './Asset/AssetDetail';
import { AddressDetail } from './AddressDetail';

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
          <Header style={{ backgroundColor: '#1c2945' }}>
            <AppHeader />
          </Header>
          <Content style={{ padding: '20px 50px' }}>
            <QueryParamProvider ReactRouterRoute={Route}>
              <Suspense fallback={<Spin />}>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/blocks">
                    <Blocks />
                  </Route>
                  <Route path="/blocks/:id">
                    <BlockDetail />
                  </Route>
                  <Route exact path="/transactions">
                    <Transactions />
                  </Route>
                  <Route exact path="/transactions/:id">
                    <TransactionDetail />
                  </Route>
                  <Route exact path="/assets">
                    <Assets />
                  </Route>
                  <Route exact path="/assets/:id">
                    <AssetDetail />
                  </Route>
                  <Route exact path="/address/:id">
                    <AddressDetail />
                  </Route>

                  <Route path="/toolkit">
                    <Toolkit />
                  </Route>
                </Switch>
              </Suspense>
            </QueryParamProvider>
          </Content>
        </Router>
      </Layout>
    </ApolloProvider>
  );
}
