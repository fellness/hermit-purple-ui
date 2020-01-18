import React from 'react';
import { Link } from 'react-router-dom';

interface EpochIdProps {
  epochId: number;
}

export function EpochId(props: EpochIdProps) {
  const { epochId } = props;
  return <Link to={`/epochs/${epochId}`}>#{epochId}</Link>;
}
