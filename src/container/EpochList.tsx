import React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { Epoch } from '../types';
import { useTranslation } from 'react-i18next';

interface BlocksProps {
  epochs: Epoch[];
}

export function EpochList(props: BlocksProps) {
  const { t } = useTranslation();

  const columns: ColumnProps<Epoch>[] = [
    {
      title: t('Epoch height'),
    },
    {
      title: t('Hash'),
    },
    {
      title: t('Timestamp'),
    },
    {
      title: t('Transactions'),
    },
  ];

  return <Table columns={columns} dataSource={props.epochs} />;
}
