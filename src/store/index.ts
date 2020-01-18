import { createStore, createTypedHooks } from 'easy-peasy';
import { globalConfig, GlobalConfigModel } from './globalConfig';

interface StoreModel {
  globalConfig: GlobalConfigModel;
}

const storeModel: StoreModel = {
  globalConfig,
};

export const store = createStore<StoreModel>(storeModel);
const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
