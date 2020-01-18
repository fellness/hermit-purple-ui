import React from 'react';
import { Icon, Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { ServiceCaller } from './Toolkit/ServiceCaller';

const { Content, Sider } = Layout;

export function Toolkit() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { replace } = useHistory();

  const [, , type] = pathname.split('/');

  if (!type) {
    replace('/toolkit/service');
  }

  return (
    <Layout>
      <Sider width={200} style={{ backgroundColor: 'unset' }}>
        <Menu mode="inline" selectedKeys={[type]}>
          <Menu.Item key="service">
            <Link to={`/toolkit/service`}>
              <Icon type="key" />
              <span>{t('Service')}</span>
            </Link>
          </Menu.Item>
          {/*<Menu.Item key="transaction">*/}
          {/*  <Link to={`/toolkit/transaction`}>*/}
          {/*    <Icon type="api" />*/}
          {/*    <span>{t('Transaction')}</span>*/}
          {/*  </Link>*/}
          {/*</Menu.Item>*/}
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Switch>
          <Route exact path="/toolkit/service">
            <ServiceCaller />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
}
