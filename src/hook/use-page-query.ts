import { useState } from 'react';
import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import _ from 'lodash';
import { DocumentNode } from 'graphql';

export function usePageQuery<Q, P>(
  node: DocumentNode,
  defaultOptions?: QueryHookOptions<Q, P>,
) {
  const [page, setPage] = useState(1);

  const options: QueryHookOptions<Q, P> = _.defaultsDeep({}, defaultOptions, {
    variables: { perPage: 10, skip: (page - 1) * 10 },
  });
  const query = useQuery<Q, P>(node, options);

  function onPrevPage(n: number) {
    if (n <= 1) return;
    setPage(n - 1);
  }

  function onNextPage(n: number) {
    setPage(n + 1);
  }

  return { query, onPrevPage, onNextPage, page };
}
