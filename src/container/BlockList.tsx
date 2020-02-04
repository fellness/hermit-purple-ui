import React from 'react';
import { Table } from 'antd';
import { ColumnProps, TableProps } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { Block } from '../generated/types';
import { BlockHeight } from './BlockHeight';
import { Timestamp } from './Timestamp';
import { SimplePage } from './SimplePage';

type RecentBlock = Pick<Block, 'height' | 'timestamp' | 'transactionsCount'>;

type TurnPage = () => void;

export function BlockList(
  props: TableProps<RecentBlock> & {
    simplePage?: {
      onPrevPage: TurnPage;
      onNextPage: TurnPage;
    };
  },
) {
  const { t } = useTranslation();

  const columns: ColumnProps<RecentBlock>[] = [
    {
      title: t('Height'),
      dataIndex: 'height',
      render: (height: number) => <BlockHeight height={height} />,
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
        rowKey={x => x.height.toString()}
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
