import React from 'react';
import JSONTree from 'react-json-tree';

interface TransactionPayloadProps {
  payload: string;
}

const theme = {
  scheme: 'monokai',
  base00: 'unset',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

const defaultExpandNodes: (
  keyPath: (string | number)[],
  data: [any] | {},
  level: number,
) => boolean = (key, data, level) => level < 2;

export function TransactionPayload(props: TransactionPayloadProps) {
  let object: object;
  try {
    object = { payload: JSON.parse(props.payload) };
  } catch (e) {
    object = JSON.parse(JSON.stringify(props.payload));
  }

  return (
    <JSONTree
      data={object}
      theme={theme}
      invertTheme={false}
      hideRoot
      shouldExpandNode={defaultExpandNodes}
    />
  );
}
