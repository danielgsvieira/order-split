import { Module } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { ProductsState } from './state';

const productsStore: Module<ProductsState, ProductsState> = {
  namespaced: true,
  state: new ProductsState(),
  mutations,
  actions,
  getters,
};

export { productsStore };
