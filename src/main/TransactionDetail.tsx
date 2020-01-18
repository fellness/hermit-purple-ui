import React from 'react';
import { Descriptions, Empty, Input, PageHeader, Spin } from 'antd';
import gql from 'graphql-tag';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import {
  TransactionQuery,
  TransactionQueryVariables,
} from '../generated/types';
import { TransactionPayload } from '../container/TransactionPayload';
import { EpochId } from '../container/EpochId';

const DescriptionsWrapper = styled.div`
  .ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: unset;
  }
`;

const QUERY_TRANSACTION = gql`
  query transaction($txHash: String!) {
    transaction(where: { txHash: $txHash }) {
      txHash
      cyclesLimit
      cyclesPrice
      epoch {
        epochId
      }
      serviceName
      method
      payload
      nonce
      pubkey
      signature
    }
  }
`;

export function TransactionDetail() {
  const { goBack } = useHistory();
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, loading } = useQuery<
    TransactionQuery,
    TransactionQueryVariables
  >(QUERY_TRANSACTION, {
    variables: {
      txHash: id as string,
    },
  });
  if (loading) return <Spin />;
  if (!data || !data.transaction) return <Empty />;

  const transaction = data.transaction;

  return (
    <PageHeader
      title={`${t('Transaction')}`}
      subTitle={transaction.txHash}
      onBack={goBack}
    >
      <DescriptionsWrapper>
        <Descriptions column={1} bordered>
          <Descriptions.Item label={t('Hash')}>
            {transaction.txHash}
          </Descriptions.Item>
          <Descriptions.Item label={t('Epoch')}>
            <EpochId epochId={transaction.epoch.epochId} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Service')}>
            {transaction.serviceName}
          </Descriptions.Item>

          <Descriptions.Item label={t('Method')}>
            {transaction.method}
          </Descriptions.Item>

          <Descriptions.Item label={t('Payload')}>
            <TransactionPayload payload={transaction.payload} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Nonce')}>
            {transaction.nonce}
          </Descriptions.Item>

          <Descriptions.Item label={t('Cycles Limit')}>
            {transaction.cyclesLimit}
          </Descriptions.Item>

          <Descriptions.Item label={t('Cycles Price')}>
            {transaction.cyclesPrice}
          </Descriptions.Item>

          <Descriptions.Item label={t('Service')}>
            <Input.TextArea value={transaction.signature} />
          </Descriptions.Item>
        </Descriptions>
      </DescriptionsWrapper>
    </PageHeader>
  );
}
