import { StoreProduct } from './StoreProduct';

export class ProductRow {
  public product: StoreProduct;

  public persons: string[];

  constructor(product: StoreProduct, persons: string[]) {
    this.product = product;
    this.persons = persons;
  }

  public updatePersons(personName: string): void {
    const index = this.persons.findIndex((el: string) => el === personName);

    if (index !== -1) {
      this.persons.splice(index, 1);
    } else {
      this.persons.push(personName);
    }
  }

  getValuePerPerson(): number {
    return Number(this.product.value) / this.persons.length;
  }
}
