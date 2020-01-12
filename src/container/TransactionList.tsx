import React from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { useTranslation } from 'react-i18next';
import { SignedTransaction } from '../generated/graphql';

interface TransactionListProps {
  transactions: SignedTransaction[];
}

export function TransactionList(props: TransactionListProps) {
  const { t } = useTranslation();
  const columns: ColumnProps<SignedTransaction>[] = [
    { title: t('Hash') },
    {
      title: t('Address'),
    },
    {
      title: t('Epoch'),
    },
    {
      title: t('Timestamp'),
    },
  ];
  return <Table columns={columns} dataSource={props.transactions} />;
}
