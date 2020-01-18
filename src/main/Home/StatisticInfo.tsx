import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { Card, Col, Empty, Row, Spin, Statistic } from 'antd';
import gql from 'graphql-tag';
import { LatestEpochQuery } from '../../generated/types';

interface StatisticInfoProps {}

const QUERY_LATEST_EPOCH = gql`
  query latestEpoch {
    epoches(orderBy: { epochId: desc }, first: 2) {
      epochId
      timestamp
      validators {
        address
      }
    }
  }
`;

export function StatisticInfo(props: StatisticInfoProps) {
  const { t } = useTranslation();

  const { data, loading } = useQuery<LatestEpochQuery>(QUERY_LATEST_EPOCH, {
    pollInterval: 3000,
  });

  if (loading) return <Spin />;
  if (!data || !data.epoches.length) return <Empty />;

  const { epochId, validators, timestamp: after } = data.epoches[0];
  const before = data.epoches[1].timestamp;

  const timeUsage = +new Date(after) - +new Date(before);
  return (
    <Row gutter={32}>
      <Col span={8}>
        <Card>
          <Statistic title={t('Epoch Height')} value={epochId} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic
            title={t('Epoch Interval')}
            value={(timeUsage / 1000).toFixed(2)}
            suffix="s"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title={t('Epoch Validators')} value={validators.length} />
        </Card>
      </Col>
    </Row>
  );
}
