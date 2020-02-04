import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { RecentBlocksQuery } from '../../generated/types';
import { BlockList } from '../../container/BlockList';
import { useTranslation } from 'react-i18next';

const QUERY_RECENT_INFO = gql`
  query recentBlocks {
    blocks(orderBy: { height: desc }, first: 11) {
      height
      transactionsCount
      timestamp
    }
  }
`;

export function RecentBlock() {
  const { t } = useTranslation();

  const { data, loading } = useQuery<RecentBlocksQuery>(QUERY_RECENT_INFO, {
    pollInterval: 3000,
  });

  const blocks = data?.blocks ?? [];

  return (
    <BlockList
      loading={loading}
      dataSource={blocks}
      size="small"
      title={() => t('Recent blocks')}
      pagination={false}
    />
  );
}
