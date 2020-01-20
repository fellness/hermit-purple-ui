import React from 'react';
import { Table } from 'antd';
import { ColumnProps, TableProps } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { Epoch } from '../generated/types';
import { EpochId } from './EpochId';
import { Timestamp } from './Timestamp';
import { SimplePage } from './SimplePage';

type RecentEpoch = Pick<Epoch, 'epochId' | 'timestamp' | 'transactionsCount'>;

type TurnPage = () => void;

export function EpochList(
  props: TableProps<RecentEpoch> & {
    simplePage?: {
      onPrevPage: TurnPage;
      onNextPage: TurnPage;
    };
  },
) {
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
    <>
      <Table
        rowKey={x => x.epochId.toString()}
        pagination={false}
        columns={columns}
        {...props}
      />
      {props.simplePage && (
        <SimplePage
          onPrevPage={props.simplePage.onPrevPage}
          onNextPage={props.simplePage.onNextPage}
        />
      )}
    </>
  );
}
