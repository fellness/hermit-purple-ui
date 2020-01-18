import React from 'react';
import dayjs from 'dayjs';

interface TimestampProps {
  timestamp: dayjs.ConfigType;
}

export function Timestamp(props: TimestampProps) {
  return <>{dayjs(props.timestamp).format('YYYY-MM-DD HH:mm:ss')}</>;
}
