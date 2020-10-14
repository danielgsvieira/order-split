import { Person } from '@/core/models/Person';
import { GetterTree } from 'vuex';
import { PersonsState } from './state';

const getters: GetterTree<PersonsState, PersonsState> = {
  persons: (state): Person[] => state.persons,
};

export { getters };
