import { Person } from '@/core/models/Person';
import { ActionContext, ActionTree } from 'vuex';
import { PersonsState } from './state';

type PersonsActionContext = ActionContext<PersonsState, PersonsState>;

const actions: ActionTree<PersonsState, PersonsState> = {
  setPersons(context: PersonsActionContext, persons: Person[]) {
    context.commit('setPersons', persons);
  },
  addPerson(context: PersonsActionContext, person: Person) {
    context.commit('addPerson', person);
  },
  removePerson(context: PersonsActionContext, person: Person) {
    context.commit('removePerson', person);
  },
};

export { actions };
