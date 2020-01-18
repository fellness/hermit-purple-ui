import React from 'react';
import { ConfigProvider } from 'antd';
import { StoreProvider } from 'easy-peasy';
import enGB from 'antd/es/locale/en_GB';

import './i18n';

import { Main } from './main';
import { store } from './store';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <ConfigProvider locale={enGB}>
        <Main />
      </ConfigProvider>
    </StoreProvider>
  );
};

export default App;
