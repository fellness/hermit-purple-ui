import React from 'react';
import { Button } from 'antd';
import { useQueryParam, NumberParam } from 'use-query-params';
import { ButtonGroupProps } from 'antd/es/button';

export type TurnPage = (n: number) => void;

interface SimplePageProps {
  onPrevPage: TurnPage;
  onNextPage: TurnPage;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
}

export function SimplePagination(props: ButtonGroupProps & SimplePageProps) {
  const [pageQuery, setPage] = useQueryParam('page', NumberParam);
  let { hasNextPage, hasPrevPage } = props;

  hasPrevPage = hasPrevPage ?? true;
  hasNextPage = hasNextPage ?? true;

  const page = pageQuery ?? 1;

  async function onPrevPage() {
    if (page <= 1) return;
    props.onPrevPage(page);
    setPage(page - 1);
  }

  async function onNextPage() {
    props.onNextPage(page);
    setPage(page + 1);
  }

  return (
    <Button.Group style={{ float: 'right', marginTop: '8px' }} {...props}>
      <Button icon="left" onClick={onPrevPage} disabled={!hasPrevPage} />
      <Button icon="right" onClick={onNextPage} disabled={!hasNextPage} />
    </Button.Group>
  );
}
