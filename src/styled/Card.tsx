import React from 'react';
import { Card } from 'antd';
import { CardProps } from 'antd/es/card';

export function StyledCard({
  style = {},
  bodyStyle = {},
  ...props
}: CardProps) {
  return (
    <Card
      type="inner"
      style={{ borderRadius: '4px', ...style }}
      bodyStyle={{ padding: '20px', ...bodyStyle }}
      size="small"
      {...props}
    />
  );
}
