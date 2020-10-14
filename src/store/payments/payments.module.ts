import { Module } from 'vuex';
import { PaymentsState } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const paymentsStore: Module<PaymentsState, PaymentsState> = {
  namespaced: true,
  state: new PaymentsState(),
  mutations,
  actions,
  getters,
};

export { paymentsStore };
