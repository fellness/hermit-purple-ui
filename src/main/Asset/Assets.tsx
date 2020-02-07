import React from 'react';
import { useTranslation } from 'react-i18next';
import { ColumnProps } from 'antd/es/table';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { $ElementType, ValuesType } from 'utility-types';
import { Table } from 'antd';
import {
  GetAssetListQuery,
  GetAssetListQueryVariables,
} from '../../generated/types';
import { SimplePagination } from '../../container/SimplePage';
import { HexWrapper } from '../../container/Hex';
import { usePageQuery } from '../../hook/use-page-query';

const ASSET_LIST_QUERY = gql`
  query getAssetList($perPage: Int, $skip: Int) {
    assets(first: $perPage, skip: $skip) {
      assetId
      name
      symbol
      supply
    }
  }
`;

type AssetList = ValuesType<$ElementType<GetAssetListQuery, 'assets'>>;

export const Assets = () => {
  const { t } = useTranslation();

  const {
    query: { data, loading },
    onPrevPage,
    onNextPage,
    page,
  } = usePageQuery<GetAssetListQuery, GetAssetListQueryVariables>(
    ASSET_LIST_QUERY,
  );

  const columns: ColumnProps<AssetList>[] = [
    {
      title: t('Name'),
      key: 'name',
      render: (_, asset) => (
        <Link to={`/assets/${asset.assetId}`}>
          {asset.symbol}({asset.name})
        </Link>
      ),
    },

    {
      title: t('Id'),
      dataIndex: 'assetId',
      ellipsis: true,
    },
    {
      title: t('Supply'),
      dataIndex: 'supply',
      render: supply => <HexWrapper mode="number" data={supply} />,
    },
  ];

  const length = data?.assets?.length;

  const hasNextPage = length === undefined ? false : length >= 10;

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        pagination={false}
        dataSource={data?.assets ?? []}
      />
      <SimplePagination
        hasNextPage={hasNextPage}
        hasPrevPage={page > 1}
        onPrevPage={onPrevPage}
        onNextPage={onNextPage}
      />
    </>
  );
};
