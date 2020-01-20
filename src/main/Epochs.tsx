import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { useQueryParam, NumberParam } from 'use-query-params';
import { EpochsListQuery, EpochsListQueryVariables } from '../generated/types';
import { EpochList } from '../container/EpochList';

export const EPOCH_LIST_QUERY = gql`
  query epochsList($skip: Int, $perPage: Int) {
    epoches(orderBy: { epochId: desc }, skip: $skip, first: $perPage) {
      epochId
      timestamp
      transactionsCount
    }
  }
`;

export function Epochs() {
  const [queryPage, setPage] = useQueryParam('page', NumberParam);

  const page = queryPage ?? 1;
  const { data, loading } = useQuery<EpochsListQuery, EpochsListQueryVariables>(
    EPOCH_LIST_QUERY,
    {
      variables: { perPage: 10, skip: page * 10 },
    },
  );

  function onPrevPage() {
    if (page <= 1) return;
    setPage(page - 1);
  }

  function onNextPage() {
    setPage(page + 1);
  }

  const epochs = data?.epoches ?? [];
  if (!page) setPage(1, 'replace');

  return (
    <EpochList
      loading={loading}
      dataSource={epochs}
      pagination={false}
      simplePage={{
        onPrevPage,
        onNextPage,
      }}
    />
  );
}
