import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { Card, Col, Empty, Row, Spin, Statistic } from 'antd';
import gql from 'graphql-tag';
import { LatestBlockQuery } from '../../generated/types';

interface StatisticInfoProps {}

const QUERY_LATEST_BLOCK = gql`
  query latestBlock {
    blocks(orderBy: { height: desc }, first: 2) {
      height
      timestamp
      validators {
        address
      }
    }
  }
`;

export function StatisticInfo(props: StatisticInfoProps) {
  const { t } = useTranslation();

  const { data, loading } = useQuery<LatestBlockQuery>(QUERY_LATEST_BLOCK, {
    pollInterval: 3000,
  });

  if (loading) return <Spin />;
  if (!data || !data.blocks.length) return <Empty />;

  const { height, validators, timestamp: after } = data.blocks[0];
  const before = data.blocks[1].timestamp;

  const cardStyle = {
    borderRadius: '4px',
    border: 'solid 1px #cfd8df',
  };

  const timeUsage = +new Date(after) - +new Date(before);
  return (
    <Row gutter={32}>
      <Col span={8}>
        <Card size="small" title={t('Block Height')} style={cardStyle}>
          <Statistic value={height} />
        </Card>
      </Col>
      <Col span={8}>
        <Card size="small" title={t('Block Interval')} style={cardStyle}>
          <Statistic value={(timeUsage / 1000).toFixed(2)} suffix="s" />
        </Card>
      </Col>
      <Col span={8}>
        <Card size="small" title={t('Block Validators')} style={cardStyle}>
          <Statistic value={validators.length} />
        </Card>
      </Col>
    </Row>
  );
}
