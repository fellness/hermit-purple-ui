import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { RecentEpochesQuery } from '../../generated/types';
import { EpochList } from '../../container/EpochList';
import { useTranslation } from 'react-i18next';

const QUERY_RECENT_INFO = gql`
  query recentEpoches {
    epoches(orderBy: { epochId: desc }, first: 11) {
      epochId
      transactionsCount
      timestamp
    }
  }
`;

export function RecentEpoch() {
  const { t } = useTranslation();

  const { data, loading } = useQuery<RecentEpochesQuery>(QUERY_RECENT_INFO, {
    pollInterval: 3000,
  });

  const epochs = data?.epoches ?? [];

  return (
    <EpochList
      loading={loading}
      dataSource={epochs}
      size="small"
      title={() => t('Recent epochs')}
      pagination={false}
    />
  );
}
