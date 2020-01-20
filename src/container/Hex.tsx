import React from 'react';
import { utils } from 'muta-sdk';
import { Tag } from 'antd';

interface HexWrapperProps {
  mode: 'number' | 'hex' | 'raw';
  data: string;
}

export function HexWrapper({ mode = 'hex', data }: HexWrapperProps) {
  const hex = utils.toHex(data);
  if (mode === 'number') return <span>{utils.hexToNum(data)}</span>;
  return (
    <span>{mode === 'hex' && <Tag style={{ fontSize: 14 }}>{hex}</Tag>}</span>
  );
}

HexWrapper.defaultProps = {
  mode: 'hex',
} as Partial<HexWrapperProps>;
