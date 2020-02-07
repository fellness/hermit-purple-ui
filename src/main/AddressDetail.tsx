import React from 'react';
import { PageHeader, Table } from 'antd';
import { useParams } from 'react-router-dom';
import { SimplePagination } from '../container/SimplePage';
import { useTranslation } from 'react-i18next';
import gql from 'graphql-tag';
import { usePageQuery } from '../hook/use-page-query';
import {
  AccountTransactionQuery,
  AccountTransactionQueryVariables,
} from '../generated/types';
import { $ElementType, ValuesType } from 'utility-types';
import { ColumnProps } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { BlockHeight } from '../container/BlockHeight';
import { hexToNum } from '../utils';
import _ from 'lodash';

const QUERY_ACCOUNT_TRANSACTION = gql`
  query accountTransaction(
    $address: String!
    $first: Int = 10
    $skip: Int = 0
  ) {
    account(where: { address: $address }) {
      transactions(last: $first, skip: $skip) {
        txHash
        cyclesPrice
        cyclesLimit
        serviceName
        method
        block {
          height
          timestamp
        }
      }
    }
  }
`;

type Transaction = ValuesType<
  $ElementType<
    NonNullable<$ElementType<AccountTransactionQuery, 'account'>>,
    'transactions'
  >
>;

export function AddressDetail() {
  const { t } = useTranslation();
  const { id: address } = useParams();

  const {
    query: { data, loading },
    onNextPage,
    onPrevPage,
    page,
  } = usePageQuery<AccountTransactionQuery, AccountTransactionQueryVariables>(
    QUERY_ACCOUNT_TRANSACTION,
    {
      variables: {
        address: address as string,
      },
    },
  );

  const columns: ColumnProps<Transaction>[] = [
    {
      title: t('Hash'),
      dataIndex: 'txHash',
      ellipsis: true,
      render: txHash => <Link to={`/transactions/${txHash}`}>{txHash}</Link>,
    },

    {
      title: t('Block'),
      dataIndex: 'block.height',
      render: height => <BlockHeight height={height} />,
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

  // TODO: query order by desc
  const transactions = _.reverse(data?.account?.transactions ?? []);
  const length = transactions?.length;
  const hasNextPage = length === undefined ? false : length >= 10;

  return (
    <PageHeader title={t('Address')} subTitle={address}>
      <Table
        loading={loading}
        columns={columns}
        pagination={false}
        dataSource={transactions ?? []}
      />
      <SimplePagination
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        hasNextPage={hasNextPage}
        hasPrevPage={page > 1}
      />
    </PageHeader>
  );
}
