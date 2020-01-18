import React from 'react';
import { Col, Row } from 'antd';

import { StatisticInfo } from './Home/StatisticInfo';
import { RecentEpoch } from './Home/RecentEpoch';
import { RecentTransaction } from './Home/RecentTransaction';
import { GlobalSearch } from './Home/GlobalSearch';

export function Home() {
  return (
    <>
      <GlobalSearch />
      <StatisticInfo />
      <div style={{ padding: '32px 0' }}>
        <Row gutter={24}>
          <Col span={12}>
            <RecentEpoch />
          </Col>
          <Col span={12}>
            <RecentTransaction />
          </Col>
        </Row>
      </div>
    </>
  );
}
