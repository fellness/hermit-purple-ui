import React from 'react';
import { Link } from 'react-router-dom';

interface AddressProps {
  address: string;
}

export function Address(props: AddressProps) {
  const { address } = props;

  return <Link to={`/address/${address}`}>{address}</Link>;
}
