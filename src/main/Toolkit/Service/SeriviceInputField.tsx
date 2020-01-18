import React from 'react';
import { Service, ServiceInput } from './ServiceInput';
import { useField } from 'formik';

interface ServiceInputFieldProps {
  name: string;
}

export function ServiceInputField(props: ServiceInputFieldProps) {
  const [field, meta, helpers] = useField<Service>(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  return <ServiceInput value={value} onChange={setValue} />;
}
