import React from 'react';
import { ControlledEditor, EditorProps } from '@monaco-editor/react';
import { useField } from 'formik';

type MonacoProps = EditorProps & { name: string };

export function Monaco(props: MonacoProps) {
  const [field, meta, helpers] = useField<string>(props.name);

  return (
    <ControlledEditor
      theme="dark"
      value={meta.value}
      onChange={(ev, value) => helpers.setValue(value ?? '')}
      {...props}
    />
  );
}
