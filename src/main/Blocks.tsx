import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { useQueryParam, NumberParam } from 'use-query-params';
import { BlocksListQuery, BlocksListQueryVariables } from '../generated/types';
import { BlockList } from '../container/BlockList';

export const BLOCK_LIST_QUERY = gql`
  query blocksList($skip: Int, $perPage: Int = 10) {
    blocks(orderBy: { height: desc }, skip: $skip, first: $perPage) {
      height
      timestamp
      transactionsCount
    }
  }
`;

export function Blocks() {
  const [queryPage, setPage] = useQueryParam('page', NumberParam);

  const page = queryPage ?? 1;
  const { data, loading } = useQuery<BlocksListQuery, BlocksListQueryVariables>(
    BLOCK_LIST_QUERY,
    {
      variables: { perPage: 10, skip: (page - 1) * 10 },
    },
  );

  function onPrevPage() {
    if (page <= 1) return;
    setPage(page - 1);
  }

  function onNextPage() {
    setPage(page + 1);
  }

  const blocks = data?.blocks ?? [];
  if (!page) setPage(1, 'replace');

  return (
    <BlockList
      loading={loading}
      dataSource={blocks}
      pagination={false}
      simplePage={{
        onPrevPage,
        onNextPage,
      }}
    />
  );
}
