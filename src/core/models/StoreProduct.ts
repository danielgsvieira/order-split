import { Product } from '@/core/models/Product';

export class StoreProduct extends Product {
  private static currentId = 1;

  public id: number;

  public persons: string[];

  constructor(name: string, value: number|undefined, persons: string[] = []) {
    super(name, value);

    this.id = StoreProduct.currentId;
    this.persons = persons;

    StoreProduct.currentId += 1;
  }

  public isPersonIncluded(personName: string): boolean {
    return this.persons.includes(personName);
  }

  public updatePersons(personName: string): void {
    if (this.isPersonIncluded(personName)) {
      const index = this.persons.findIndex((el: string) => el === personName);
      this.persons.splice(index, 1);
    } else {
      this.persons.push(personName);
    }
  }

  getValuePerPerson(): number {
    return Number(this.value) / this.persons.length;
  }
}
