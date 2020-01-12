import React from 'react';
import { ConfigProvider } from 'antd';
import enGB from 'antd/es/locale/en_GB';

import './i18n';

import { Main } from './main';

const App: React.FC = () => {
  return (
      <ConfigProvider locale={enGB}>
        <Main />
      </ConfigProvider>
  );
};

export default App;
