import { Person } from '@/core/models/Person';
import { MutationTree } from 'vuex';
import { PersonsState } from './state';

const mutations: MutationTree<PersonsState> = {
  setPersons(state: PersonsState, names: string[]): void {
    const persons = names.map((el: string) => new Person(el));
    state.persons = persons;
  },
  addPerson(state: PersonsState, name: string): void {
    const person = new Person(name);
    state.persons.push(person);
  },
  removePerson(state: PersonsState, name: string): void {
    const index = state.persons.findIndex((el: Person) => {
      return el.name === name;
    });

    state.persons.splice(index, 1);
  },
};

export { mutations };
