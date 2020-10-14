import { Module } from 'vuex';
import { PersonsState } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const personsStore: Module<PersonsState, PersonsState> = {
  namespaced: true,
  state: new PersonsState(),
  mutations,
  actions,
  getters,
};

export { personsStore };
