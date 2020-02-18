import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Tooltip } from 'antd';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

interface TimestampProps {
  timestamp: dayjs.ConfigType;
}

export function Timestamp(props: TimestampProps) {
  const time = dayjs(props.timestamp);
  return <Tooltip title={time.format('L LT')}>{time.toNow()}</Tooltip>;
}
