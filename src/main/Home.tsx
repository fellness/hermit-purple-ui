import React from 'react';
import { Card, Col, Row, Statistic, Table } from 'antd';
import { useTranslation } from 'react-i18next';

interface StatisticInfoProps {
  epochId: number;
}

function StatisticInfo(props: StatisticInfoProps) {
  const { t } = useTranslation();

  return (
    <Row gutter={32}>
      <Col span={8}>
        <Card>
          <Statistic title={t('Epoch Height')} value={12000000} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title={t('Epoch Interval')} value={3} suffix="s" />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title={t('Epoch Validators')} value={8} />
        </Card>
      </Col>
    </Row>
  );
}

function HomeInfo() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '32px 0' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Table
            size="small"
            columns={[]}
            dataSource={[{}]}
            title={() => t('Recent epochs')}
            pagination={false}
          />
        </Col>
        <Col span={12}>
          <Table
            size="small"
            columns={[]}
            dataSource={[{}]}
            title={() => t('Recent transactions')}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
}

export function Home() {
  return (
    <>
      <StatisticInfo epochId={1200000} />
      <HomeInfo />
    </>
  );
}
