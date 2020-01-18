import React from 'react';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { useStoreActions, useStoreState } from '../../store';
import { FormikConfig } from 'formik/dist/types';
import { GlobalConfigState, SupportedLanguage } from '../../store/globalConfig';
import { useTranslation } from 'react-i18next';

interface GlobalConfigProps {}

export function GlobalConfig(props: GlobalConfigProps) {
  const { endpoint } = useStoreState(state => state.globalConfig);
  const saveConfig = useStoreActions(
    actions => actions.globalConfig.saveConfig,
  );

  const { t } = useTranslation();

  const handleSubmit: FormikConfig<GlobalConfigState>['onSubmit'] = (
    config,
    { setSubmitting },
  ) => {
    saveConfig(config);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{ endpoint, language: SupportedLanguage.EN }}
        onSubmit={handleSubmit}
      >
        <Form hideRequiredMark>
          <Form.Item name="endpoint" label={t('Endpoint')}>
            <Input name="endpoint" />
          </Form.Item>
          <SubmitButton>{t('Save')}</SubmitButton>
        </Form>
      </Formik>
    </>
  );
}
