import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Descriptions, Empty, PageHeader, Spin } from 'antd';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { EpochQuery, EpochQueryVariables } from '../generated/types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Timestamp } from '../container/Timestamp';
import { HexWrapper } from '../container/Hex';

const DescriptionsWrapper = styled.div`
  .ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: unset;
  }
`;

const QUERY_EPOCH = gql`
  query epoch($epochId: Int) {
    epoch(where: { epochId: $epochId }) {
      epochId
      proof {
        round
      }
      stateRoot
      timestamp
      transactionsCount
      validatorVersion
    }
  }
`;

export function EpochDetail() {
  const { goBack } = useHistory();
  const { id } = useParams();
  const { t } = useTranslation();

  const { data, loading } = useQuery<EpochQuery, EpochQueryVariables>(
    QUERY_EPOCH,
    {
      variables: {
        epochId: Number(id),
      },
    },
  );

  if (loading) return <Spin />;
  if (!data || !data.epoch) return <Empty />;

  const epoch = data.epoch;

  return (
    <PageHeader
      title={`${t('Epoch')}`}
      subTitle={epoch.epochId}
      onBack={goBack}
    >
      <DescriptionsWrapper>
        <Descriptions column={1} bordered>
          <Descriptions.Item label={t('Epoch')}>{id}</Descriptions.Item>
          <Descriptions.Item label={t('Timestamp')}>
            <Timestamp timestamp={epoch.timestamp} />
          </Descriptions.Item>
          <Descriptions.Item label={t('Transaction Count')}>
            {epoch.transactionsCount}
          </Descriptions.Item>
          <Descriptions.Item label={t('Round ')}>
            {epoch.proof.round}
          </Descriptions.Item>
          <Descriptions.Item label={t('Validator Version')}>
            <HexWrapper mode="number" data={epoch.validatorVersion} />
          </Descriptions.Item>
          <Descriptions.Item label={t('State Root')}>
            <HexWrapper data={epoch.stateRoot} />
          </Descriptions.Item>
        </Descriptions>
      </DescriptionsWrapper>
    </PageHeader>
  );
}
