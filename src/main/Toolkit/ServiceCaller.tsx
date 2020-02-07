import React from 'react';
import { Formik } from 'formik';
import { Form, Radio, SubmitButton } from 'formik-antd';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { FormikConfig } from 'formik/dist/types';
import { accountFromPrivateKey, useMuta } from '../../hook/chian-sdk';
import { defaultService, PayloadType, Service } from './Service/ServiceInput';
import { ServiceInputField } from './Service/SeriviceInputField';

interface ServiceForm {
  rw: 'read' | 'write';
  service: Service;
}

export function ServiceCaller() {
  const { t } = useTranslation();

  const muta = useMuta();

  const handleSubmit: FormikConfig<ServiceForm>['onSubmit'] = async (
    value,
    { setSubmitting },
  ) => {
    const service = value.service;
    const { serviceName, method, payload, payloadType } = service;

    const tx = await muta.client.prepareTransaction({
      serviceName,
      method,
      payload: payloadType === PayloadType.JSON ? JSON.parse(payload) : payload,
    });

    // Only for testing
    const signed = accountFromPrivateKey(
      '0x1000000000000000000000000000000000000000000000000000000000000000',
    ).signTransaction(tx);

    const txHash = await muta.client.sendTransaction(signed);
    message.success(`write success, hash is ${txHash}`);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        rw: 'write',
        service: defaultService(),
      }}
      onSubmit={handleSubmit}
    >
      <Form style={{ padding: '24px' }} hideRequiredMark>
        <Form.Item name="rw">
          <Radio.Group name="rw" size="small">
            <Radio.Button disabled value="read">
              {t('Read(TODO)')}
            </Radio.Button>
            <Radio.Button value="write">{t('Write')}</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <ServiceInputField name="service" />

        <SubmitButton>{t('Submit')}</SubmitButton>
      </Form>
    </Formik>
  );
}
