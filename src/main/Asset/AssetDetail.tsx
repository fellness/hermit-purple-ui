import React from 'react';
import { PageHeader, Table } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gql from 'graphql-tag';
import { ColumnProps } from 'antd/es/table';
import { $ElementType, ValuesType } from 'utility-types';
import { AssetQuery, AssetQueryVariables } from '../../generated/types';
import { Address } from '../../container/Address';
import { HexWrapper } from '../../container/Hex';
import { SimplePagination } from '../../container/SimplePage';
import { usePageQuery } from '../../hook/use-page-query';

const QUERY_ASSET = gql`
  query asset($assetId: String!, $perPage: Int = 10, $skip: Int = 0) {
    asset(where: { assetId: $assetId }) {
      name
      symbol
      supply

      assetTransfers(first: $perPage, skip: $skip) {
        from {
          address
        }
        to {
          address
        }
        value
        transaction {
          txHash
        }
      }
    }
  }
`;

type Transfer = ValuesType<
  $ElementType<NonNullable<$ElementType<AssetQuery, 'asset'>>, 'assetTransfers'>
>;

export function AssetDetail() {
  const { t } = useTranslation();
  const { id } = useParams();

  const {
    query: { data, loading },
    onPrevPage,
    onNextPage,
    page,
  } = usePageQuery<AssetQuery, AssetQueryVariables>(QUERY_ASSET, {
    variables: {
      assetId: id as string,
    },
  });

  const columns: ColumnProps<Transfer>[] = [
    {
      title: t('Hash'),
      ellipsis: true,
      dataIndex: 'transaction.txHash',
      render: txHash => <Link to={`/transactions/${txHash}`}>{txHash}</Link>,
    },
    {
      title: t('From'),
      dataIndex: 'from.address',
      ellipsis: true,
      render: address => <Address address={address} />,
    },
    {
      title: t('To'),
      ellipsis: true,
      dataIndex: 'to.address',
      render: address => <Address address={address} />,
    },
    {
      title: t('Quantity'),
      dataIndex: 'value',
      render: value => <HexWrapper mode="number" data={value} />,
    },
  ];

  const asset = data?.asset;
  const assetName = `${asset?.symbol}(${asset?.name})`;
  const assetTransfers = asset?.assetTransfers;

  const hasNextPage = assetTransfers && assetTransfers.length > 10;

  return (
    <PageHeader title={t('Asset')} subTitle={assetName}>
      <Table
        loading={loading}
        dataSource={assetTransfers}
        columns={columns}
        pagination={false}
      />
      <SimplePagination
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
        hasPrevPage={page > 1}
        hasNextPage={hasNextPage}
      />
    </PageHeader>
  );
}
