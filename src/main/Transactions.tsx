import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { GetTransactionListQuery } from '../generated/types';
import { ColumnProps } from 'antd/es/table';
import { $ElementType, ValuesType } from 'utility-types';
import { Link } from 'react-router-dom';
import { hexToNum } from '../utils';
import { EpochId } from '../container/EpochId';

const TRANSACTION_LIST_QUERY = gql`
  query getTransactionList {
    transactions(first: 10, orderBy: { id: desc }) {
      txHash
      cyclesPrice
      cyclesLimit
      serviceName
      method
      epoch {
        epochId
      }
    }
  }
`;

type TransactionList = ValuesType<
  $ElementType<GetTransactionListQuery, 'transactions'>
>;
export const Transactions = () => {
  const { t } = useTranslation();
  const { data, loading } = useQuery<GetTransactionListQuery>(
    TRANSACTION_LIST_QUERY,
  );

  const transactions = data?.transactions;
  const columns: ColumnProps<TransactionList>[] = [
    {
      title: t('Hash'),
      dataIndex: 'txHash',
      ellipsis: true,
      render: txHash => <Link to={`/transactions/${txHash}`}>{txHash}</Link>,
    },

    {
      title: t('Epoch'),
      dataIndex: 'epoch.epochId',
      render: epochId => <EpochId epochId={epochId} />,
    },
    {
      title: t('Service'),
      dataIndex: 'serviceName',
    },
    {
      title: t('Method'),
      dataIndex: 'method',
    },
    {
      title: t('Cycles Limit'),
      dataIndex: 'cyclesPrice',
      render: hexToNum,
    },
    {
      title: t('Cycles Price'),
      dataIndex: 'cyclesLimit',
      render: hexToNum,
    },
  ];
  return (
    <Table
      rowKey={row => row.txHash}
      loading={loading}
      columns={columns}
      dataSource={transactions ?? []}
    />
  );
};
