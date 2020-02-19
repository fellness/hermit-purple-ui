import React from 'react';
import { Descriptions, Empty, Input, Spin, Tag } from 'antd';
import gql from 'graphql-tag';
import { useTranslation } from 'react-i18next';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { $ElementType } from 'utility-types';
import {
  TransactionQuery,
  TransactionQueryVariables,
} from '../generated/types';
import { JSONLike } from '../container/JSONLike';
import { BlockHeight } from '../container/BlockHeight';
import { HexWrapper } from '../container/Hex';
import { StyledCard } from '../styled/Card';

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
      cyclesUsed
      block {
        height
      }
      serviceName
      method
      payload
      nonce
      pubkey
      signature
      receiptIsError
      receiptRet
    }
  }
`;

function ReceiptDescriptions(props: {
  transaction: $ElementType<TransactionQuery, 'transaction'>;
}) {
  const { t } = useTranslation();
  if (!props.transaction) return null;
  const tx = props.transaction;

  return (
    <DescriptionsWrapper>
      <Descriptions bordered size="small" column={1}>
        <Descriptions.Item label={t('Cycles Used')}>
          <HexWrapper mode="number" data={tx.cyclesUsed ?? '0'} />
        </Descriptions.Item>

        <Descriptions.Item label={t('Status')}>
          {tx.receiptIsError ? (
            <Tag color="red">Error</Tag>
          ) : (
            <Tag color="green">Success</Tag>
          )}
        </Descriptions.Item>

        <Descriptions.Item label={t('Response')}>
          <JSONLike data={tx.receiptRet || ''} />
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

  const tx = data.transaction;

  return (
    <StyledCard title={`${t('Transaction')}`}>
      <DescriptionsWrapper>
        <Descriptions size="small" column={1} bordered>
          <Descriptions.Item label={t('Hash')}>
            <HexWrapper data={tx.txHash} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Status')}>
            {tx.receiptIsError ? (
              <Tag color="red">Error</Tag>
            ) : (
              <Tag color="green">Success</Tag>
            )}
          </Descriptions.Item>

          <Descriptions.Item label={t('Block')}>
            <BlockHeight height={tx.block.height} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Cycles Limit')}>
            <HexWrapper mode="number" data={tx.cyclesLimit} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Cycles Price')}>
            <HexWrapper mode="number" data={tx.cyclesPrice} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Cycles Used')}>
            <HexWrapper mode="number" data={tx.cyclesUsed ?? '0'} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Service')}>
            {tx.serviceName}
          </Descriptions.Item>

          <Descriptions.Item label={t('Method')}>{tx.method}</Descriptions.Item>

          <Descriptions.Item label={t('Payload')}>
            <JSONLike data={tx.payload} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Response')}>
            <JSONLike data={tx.receiptRet || '{}'} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Nonce')}>
            <HexWrapper data={tx.nonce} />
          </Descriptions.Item>

          <Descriptions.Item label={t('Signature')}>
            <Input.TextArea value={tx.signature} />
          </Descriptions.Item>
        </Descriptions>
      </DescriptionsWrapper>
    </StyledCard>
  );
}
