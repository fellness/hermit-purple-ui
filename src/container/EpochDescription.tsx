import React from 'react';
import { useParams } from 'react-router';

interface EpochDescriptionProps {}

export function EpochDescription(props: EpochDescriptionProps) {
  const { id } = useParams();

  return <div>{id}</div>;
}
