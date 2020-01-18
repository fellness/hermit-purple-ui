import React from 'react';
import { Table } from 'antd';
import { ColumnProps, TableProps } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { Epoch } from '../generated/types';
import { EpochId } from './EpochId';
import { Timestamp } from './Timestamp';

type RecentEpoch = Pick<Epoch, 'epochId' | 'timestamp' | 'transactionsCount'>;

export function EpochList(props: TableProps<RecentEpoch>) {
  const { t } = useTranslation();

  const columns: ColumnProps<RecentEpoch>[] = [
    {
      title: t('Height'),
      dataIndex: 'epochId',
      render: (epochId: number) => <EpochId epochId={epochId} />,
    },
    {
      title: t('Timestamp'),
      dataIndex: 'timestamp',
      render: (timestamp: Date) => <Timestamp timestamp={timestamp} />,
    },
    {
      title: t('Transactions'),
      dataIndex: 'transactionsCount',
    },
  ];

  return (
    <Table rowKey={x => x.epochId.toString()} columns={columns} {...props} />
  );
}
