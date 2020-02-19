import React from 'react';
import { Table } from 'antd';
import { TableProps } from 'antd/es/table';

export function StyledTable<T>(props: TableProps<T>) {
  return <Table style={{ backgroundColor: '#fff' }} {...props} />;
}
