import React, { useEffect, useState } from 'react';
import { Col, Input, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { ControlledEditor } from '@monaco-editor/react';

export interface Service {
  serviceName: string;
  method: string;
  payload: string;
  payloadType: PayloadType;
}

export enum PayloadType {
  PLAIN = 'plaintext',
  JSON = 'json',
  JAVASCRIPT = 'javascript',
}

interface ServiceInputProps {
  value: Service;
  onChange: (service: Service) => void;
}

export function defaultService() {
  return {
    payloadType: PayloadType.JSON,
    serviceName: '',
    method: '',
    payload: '',
  };
}

export function ServiceInput(props: ServiceInputProps) {
  const { t } = useTranslation();
  const [payloadType, setPayloadType] = useState<PayloadType>(PayloadType.JSON);
  const [serviceName, setServiceName] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const [payload, setPayload] = useState<string>('');

  useEffect(() => {
    props.onChange({ serviceName, method, payload, payloadType });
  }, [serviceName, method, payload, payloadType]);

  return (
    <Row gutter={20} style={{ minHeight: '300px' }}>
      <Col span={12}>
        {t('Service')}
        <Input
          placeholder={t('Service')}
          value={props.value.serviceName}
          onChange={e => setServiceName(e.target.value)}
        />
      </Col>

      <Col span={12}>
        {t('Method')}
        <Input
          placeholder={t('Method')}
          value={props.value.method}
          onChange={e => setMethod(e.target.value)}
        />
      </Col>

      <Col span={24} style={{ paddingTop: '16px', paddingBottom: '16px' }}>
        <div>{t('Payload')}</div>
        <Select<PayloadType>
          value={props.value.payloadType}
          onChange={setPayloadType}
          style={{ width: '120px' }}
        >
          <Select.Option key={PayloadType.PLAIN}>
            {PayloadType.PLAIN}
          </Select.Option>
          <Select.Option key={PayloadType.JSON}>
            {PayloadType.JSON}
          </Select.Option>
          <Select.Option key={PayloadType.JAVASCRIPT}>
            {PayloadType.JAVASCRIPT}
          </Select.Option>
        </Select>
        <ControlledEditor
          height={200}
          theme="dark"
          language={props.value.payloadType}
          value={props.value.payload}
          onChange={(ev, value) => setPayload(value ?? '')}
        />
      </Col>
    </Row>
  );
}
