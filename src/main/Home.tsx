import React from 'react';
import { Col, Row } from 'antd';

import { StatisticInfo } from './Home/StatisticInfo';
import { RecentBlock } from './Home/RecentBlock';
import { RecentTransaction } from './Home/RecentTransaction';
import { GlobalSearch } from './Home/GlobalSearch';

export function Home() {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <GlobalSearch />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <StatisticInfo />
      </div>
      <div>
        <Row gutter={20}>
          <Col span={12}>
            <RecentBlock />
          </Col>
          <Col span={12}>
            <RecentTransaction />
          </Col>
        </Row>
      </div>
    </>
  );
}
