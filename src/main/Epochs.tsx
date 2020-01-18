import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
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
  const { data, loading } = useQuery<EpochsListQuery, EpochsListQueryVariables>(
    EPOCH_LIST_QUERY,
    {
      variables: { perPage: 20, skip: 0 },
    },
  );
  const epochs = data?.epoches ?? [];

  return (
    <EpochList
      loading={loading}
      dataSource={epochs}
      pagination={{
        defaultPageSize: 20,
        onChange: (page, x) => console.log(page, x),
      }}
    />
  );
}
