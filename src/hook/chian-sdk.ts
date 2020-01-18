import { Muta } from 'muta-sdk';
import { useStoreState } from '../store';
import { useMemo } from 'react';

export function useMuta() {
  const endpoint = useStoreState(
    state => state.globalConfig.endpoint + '/chain',
  );

  return useMemo(() => {
    return new Muta({
      endpoint,
      chainId:
        '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',
    });
  }, [endpoint]);
}
