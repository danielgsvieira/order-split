import { Person } from '@/core/models/Person';

export class PersonsState {
  public persons: Person[];
  
  constructor(persons: Person[] = [
    { name: 'Bela' },
    { name: 'Dan' },
    { name: 'Letiça' },
    { name: 'Orio' },
  ]) {
    this.persons = persons;
  }
}
