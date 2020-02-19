import React from 'react';
import { useTranslation } from 'react-i18next';
import { ColumnProps } from 'antd/es/table';
import gql from 'graphql-tag';
import { RecentTransactionsQuery } from '../../generated/types';
import { useQuery } from '@apollo/react-hooks';
import { hexToNum } from '../../utils';
import { Link } from 'react-router-dom';
import { $ElementType, ValuesType } from 'utility-types';
import { BlockHeight } from '../../container/BlockHeight';
import { StyledTable } from '../../styled/Table';

const QUERY_RECENT_TRANSACTION = gql`
  query recentTransactions {
    transactions(last: 10) {
      cyclesPrice
      txHash
      serviceName
      method
      block {
        height
      }
    }
  }
`;

type RecentTransaction = ValuesType<
  $ElementType<RecentTransactionsQuery, 'transactions'>
>;

export function RecentTransaction() {
  const { t } = useTranslation();

  const { data, loading } = useQuery<RecentTransactionsQuery>(
    QUERY_RECENT_TRANSACTION,
    {
      pollInterval: 3000,
    },
  );

  const columns: ColumnProps<RecentTransaction>[] = [
    {
      title: t('Transaction Hash'),
      dataIndex: 'txHash',
      ellipsis: true,
      render: hash => <Link to={`/transactions/${hash}`}>{hash}</Link>,
    },
    {
      title: t('Block'),
      dataIndex: 'block.height',
      render: id => <BlockHeight height={id} />,
    },
    { title: t('Cycles Price'), dataIndex: 'cyclesPrice', render: hexToNum },
    { title: t('Service'), dataIndex: 'serviceName' },
    { title: t('Method'), dataIndex: 'method' },
  ];

  const dataSource = data?.transactions ?? [];

  return (
    <StyledTable
      size="small"
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      title={() => t('Recent transactions')}
      pagination={false}
      rowKey={row => row.txHash}
    />
  );
}
