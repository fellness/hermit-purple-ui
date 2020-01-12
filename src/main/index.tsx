import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Home } from './Home';
import { Epochs } from './Epochs';
import { EpochDetail } from './EpochDetail';
import { Transactions } from './Transactions';

const { Header, Content } = Layout;
const MenuItem = Menu.Item;

const Logo = styled(Link)`
  float: left;
  cursor: pointer;
  line-height: 64px;
  display: inline-block;
  font-size: 18px;
  padding-right: 24px;
`;

function AppHeader() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [, type] = pathname.split('/');

  return (
    <>
      <Logo to="/">Hermit</Logo>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}
        selectedKeys={[type]}
      >
        <MenuItem key="epochs">
          <Link to="/epochs">{t('Epochs')}</Link>
        </MenuItem>
        <MenuItem key="transactions">
          <Link to="/transactions">{t('Transactions')}</Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export function Main() {
  const client = new ApolloClient({});

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content style={{ padding: '16px 50px' }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/epochs">
                <Epochs />
              </Route>
              <Route path="/epochs/:id">
                <EpochDetail />
              </Route>
              <Route path="/transactions">
                <Transactions />
              </Route>
            </Switch>
          </Content>
        </Router>
      </Layout>
    </ApolloProvider>
  );
}
