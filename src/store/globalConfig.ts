import { action, Action, thunk, Thunk } from 'easy-peasy';
import * as storage from 'store';

export enum SupportedLanguage {
  EN = 'EN',
  ZH = 'ZH',
}

export interface GlobalConfigState {
  endpoint: string;
  language: SupportedLanguage;
}

export interface GlobalConfigModel extends GlobalConfigState {
  setEndpoint: Action<GlobalConfigModel, string>;
  setLanguage: Action<GlobalConfigModel, SupportedLanguage>;

  initConfig: Thunk<GlobalConfigModel>;
  saveConfig: Thunk<GlobalConfigModel, GlobalConfigState>;
}

export const globalConfig: GlobalConfigModel = {
  endpoint: 'http://api.muta.tech',
  language: SupportedLanguage.EN,

  setEndpoint: action((state, endpoint) => {
    state.endpoint = endpoint;
  }),
  setLanguage: action((state, language) => {
    state.language = language;
  }),

  initConfig: thunk(actions => {
    const config = storage.get('globalConfig');
    if (!config) return;

    if (config.endpoint) {
      actions.setEndpoint(config.endpoint);
    }

    if (config.language) {
      actions.setLanguage(config.language);
    }
  }),

  saveConfig: thunk((actions, payload) => {
    const { endpoint, language } = payload;
    actions.setEndpoint(endpoint);
    actions.setLanguage(language);

    storage.set('globalConfig', payload);
  }),
};
