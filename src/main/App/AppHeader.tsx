import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LogoImg from '../muta-logo.png';
import { Button, Drawer, Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { GlobalConfig } from './GloabalConfig';
import { useToggle } from 'react-use';

const Logo = styled(Link)`
  float: left;
  cursor: pointer;
  height: 64px;
  display: inline-block;
  font-size: 18px;
  padding-right: 24px;

  img {
    height: 63px;
  }
`;

const Extra = styled.div`
  float: right;
  line-height: 64px;
`;

const { Item: MenuItem } = Menu;

export function AppHeader() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [, type] = pathname.split('/');
  const [opening, toggleOpening] = useToggle(false);

  return (
    <>
      <Logo to="/">
        <img src={LogoImg} alt="logo" />
      </Logo>
      <Extra>
        <Button
          icon="setting"
          type="link"
          style={{ color: '#fff' }}
          onClick={() => toggleOpening(true)}
        />
      </Extra>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px', backgroundColor: '#1c2945' }}
        selectedKeys={[type]}
      >
        <MenuItem key="blocks">
          <Link to="/blocks">{t('Blocks')}</Link>
        </MenuItem>
        <MenuItem key="transactions">
          <Link to="/transactions">{t('Transactions')}</Link>
        </MenuItem>
        <MenuItem key="assets">
          <Link to="/assets">{t('Assets')}</Link>
        </MenuItem>
        <MenuItem key="toolkit">
          <Link to="/toolkit">{t('Toolkit')}</Link>
        </MenuItem>
      </Menu>

      <Drawer
        width={600}
        visible={opening}
        onClose={() => toggleOpening(false)}
      >
        <GlobalConfig />
      </Drawer>
    </>
  );
}
