import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Descriptions, Empty, PageHeader, Spin } from 'antd';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { BlockQuery, BlockQueryVariables } from '../generated/types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Timestamp } from '../container/Timestamp';
import { HexWrapper } from '../container/Hex';

const DescriptionsWrapper = styled.div`
  .ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: unset;
  }
`;

const QUERY_BLOCK = gql`
  query block($height: Int) {
    block(where: { height: $height }) {
      height
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

export function BlockDetail() {
  const { goBack } = useHistory();
  const { id } = useParams();
  const { t } = useTranslation();

  const { data, loading } = useQuery<BlockQuery, BlockQueryVariables>(
    QUERY_BLOCK,
    {
      variables: {
        height: Number(id),
      },
    },
  );

  if (loading) return <Spin />;
  if (!data || !data.block) return <Empty />;

  const block = data.block;

  return (
    <PageHeader
      title={`${t('Block')}`}
      subTitle={block.height}
      onBack={goBack}
    >
      <DescriptionsWrapper>
        <Descriptions column={1} bordered>
          <Descriptions.Item label={t('Block')}>{id}</Descriptions.Item>
          <Descriptions.Item label={t('Timestamp')}>
            <Timestamp timestamp={block.timestamp} />
          </Descriptions.Item>
          <Descriptions.Item label={t('Transaction Count')}>
            {block.transactionsCount}
          </Descriptions.Item>
          <Descriptions.Item label={t('Round ')}>
            {block.proof.round}
          </Descriptions.Item>
          <Descriptions.Item label={t('Validator Version')}>
            <HexWrapper mode="number" data={block.validatorVersion} />
          </Descriptions.Item>
          <Descriptions.Item label={t('State Root')}>
            <HexWrapper data={block.stateRoot} />
          </Descriptions.Item>
        </Descriptions>
      </DescriptionsWrapper>
    </PageHeader>
  );
}
