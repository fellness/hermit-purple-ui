import React from 'react';
import {
  Descriptions,
  Divider,
  Empty,
  Input,
  PageHeader,
  Spin,
  Tag,
} from 'antd';
import gql from 'graphql-tag';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import {
  TransactionQuery,
  TransactionQueryVariables,
} from '../generated/types';
import { JSONLike } from '../container/JSONLike';
import { BlockHeight } from '../container/BlockHeight';
import { $ElementType } from 'utility-types';
import { HexWrapper } from '../container/Hex';

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
      block {
        height
      }
      serviceName
      method
      payload
      nonce
      pubkey
      signature
      receipt {
        cyclesUsed
        response {
          isError
          ret
        }
      }
    }
  }
`;

function ReceiptDescriptions(props: {
  transaction: $ElementType<TransactionQuery, 'transaction'>;
}) {
  const { t } = useTranslation();

  const receipt = props?.transaction?.receipt;
  if (!receipt) return null;

  return (
    <DescriptionsWrapper>
      <Descriptions bordered size="small" column={1} title={t('Receipt')}>
        <Descriptions.Item label={t('Cycles Used')}>
          <HexWrapper mode="number" data={receipt.cyclesUsed} />
        </Descriptions.Item>

        <Descriptions.Item label={t('Status')}>
          {receipt.response.isError ? (
            <Tag color="red">Error</Tag>
          ) : (
            <Tag color="green">Success</Tag>
          )}
        </Descriptions.Item>

        <Descriptions.Item label={t('Response')}>
          <JSONLike data={receipt.response.ret} />
        </Descriptions.Item>
      </Descriptions>
    </DescriptionsWrapper>
  );
}

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
      <ReceiptDescriptions transaction={transaction} />

      <Divider />

      <DescriptionsWrapper>
        <Descriptions size="small" column={1} bordered>
          <Descriptions.Item label={t('Hash')}>
            <HexWrapper data={transaction.txHash} />
          </Descriptions.Item>
          <Descriptions.Item label={t('Block')}>
            <BlockHeight height={transaction.block.height} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Service')}>
            {transaction.serviceName}
          </Descriptions.Item>

          <Descriptions.Item label={t('Method')}>
            {transaction.method}
          </Descriptions.Item>

          <Descriptions.Item label={t('Payload')}>
            <JSONLike data={transaction.payload} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Nonce')}>
            <HexWrapper data={transaction.nonce} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Cycles Limit')}>
            <HexWrapper mode="number" data={transaction.cyclesLimit} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Cycles Price')}>
            <HexWrapper mode="number" data={transaction.cyclesPrice} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Signature')}>
            <Input.TextArea value={transaction.signature} />
          </Descriptions.Item>
        </Descriptions>
      </DescriptionsWrapper>
    </PageHeader>
  );
}
