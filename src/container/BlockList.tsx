import React from 'react';
import { ColumnProps, TableProps } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { Block } from '../generated/types';
import { BlockHeight } from './BlockHeight';
import { Timestamp } from './Timestamp';
import { SimplePagination } from './SimplePage';
import { StyledTable } from '../styled/Table';

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
      <StyledTable
        rowKey={x => x.height.toString()}
        pagination={false}
        columns={columns}
        {...props}
      />
      {props.simplePage && (
        <SimplePagination
          onPrevPage={props.simplePage.onPrevPage}
          onNextPage={props.simplePage.onNextPage}
        />
      )}
    </>
  );
}
