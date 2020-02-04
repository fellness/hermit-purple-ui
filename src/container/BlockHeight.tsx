import React from 'react';
import { Link } from 'react-router-dom';

interface BlockHeightProps {
  height: number;
}

export function BlockHeight(props: BlockHeightProps) {
  const { height } = props;
  return <Link to={`/blocks/${height}`}>#{height}</Link>;
}
