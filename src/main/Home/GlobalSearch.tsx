import React from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

export function GlobalSearch() {
  const { push } = useHistory();
  const { t } = useTranslation();

  function handleOnSearch(input: string) {
    if (/^(0x)?[abcdef0-9]{64}$/i.test(input)) {
      push(`/transactions/${input}`);
    } else if (Number(input) < 2147483647) {
      push(`/blocks/${input}`);
    }
  }

  return (
    <Input.Search
      size="large"
      enterButton={t('Search')}
      placeholder={t('Block / Transaction')}
      onSearch={handleOnSearch}
    />
  );
}
