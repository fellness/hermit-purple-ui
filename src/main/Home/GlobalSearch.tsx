import React from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router';

export function GlobalSearch() {
  const { push } = useHistory();

  function handleOnSearch(input: string) {
    if (/^(0x)?[abcdef0-9]{64}$/i.test(input)) {
      push(`/transactions/${input}`);
    } else if (Number(input) < 2147483647) {
      push(`/epochs/${input}`);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <Input.Search
        size="large"
        placeholder="epoch / transaction"
        onSearch={handleOnSearch}
      />
    </div>
  );
}
