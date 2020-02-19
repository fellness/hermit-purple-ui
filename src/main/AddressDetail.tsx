import React from 'react';
import { Divider, Empty } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { SimplePagination } from '../container/SimplePage';
import { useTranslation } from 'react-i18next';
import gql from 'graphql-tag';
import { usePageQuery } from '../hook/use-page-query';
import {
  AccountBalancesQuery,
  AccountBalancesQueryVariables,
  AccountTransactionQuery,
  AccountTransactionQueryVariables,
} from '../generated/types';
import { $ElementType, ValuesType } from 'utility-types';
import { ColumnProps } from 'antd/es/table';
import { BlockHeight } from '../container/BlockHeight';
import { hexToNum } from '../utils';
import _ from 'lodash';
import { StyledTable } from '../styled/Table';
import { useQuery } from '@apollo/react-hooks';
import { StyledCard } from '../styled/Card';

const QUERY_ACCOUNT_BALANCE = gql`
  query accountBalances($address: String!) {
    account(where: { address: $address }) {
      balances {
        asset {
          assetId
          name
          symbol
        }
        balance
      }
    }
  }
`;

function AccountBalanceList(props: { address: string }) {
  const { t } = useTranslation();
  const { data } = useQuery<
    AccountBalancesQuery,
    AccountBalancesQueryVariables
  >(QUERY_ACCOUNT_BALANCE, { variables: { address: props.address } });

  const account = data?.account;
  if (!account) return null;

  const columns: ColumnProps<ValuesType<typeof account.balances>>[] = [
    {
      title: t('Name'),
      dataIndex: 'asset.name',
    },

    {
      title: t('Symbol'),
      dataIndex: 'asset.symbol',
    },
    {
      title: t('Balance'),
      dataIndex: 'balance',
      render: hexToNum,
    },
  ];

  return (
    <StyledTable
      title={() => t('Holding')}
      pagination={false}
      size="small"
      dataSource={account.balances}
      columns={columns}
    />
  );
}

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

  if (!address) return <Empty />;

  // TODO: query order by desc
  const transactions = _.reverse(data?.account?.transactions ?? []);
  const length = transactions?.length;
  const hasNextPage = length === undefined ? false : length >= 10;

  return (
    <StyledCard title={t('Address')}>
      <AccountBalanceList address={address} />

      <Divider />

      <StyledTable
        size="small"
        title={() => t('Transactions')}
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
    </StyledCard>
  );
}
