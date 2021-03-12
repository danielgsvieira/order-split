export class Product {
  public name: string;

  public value: number;
  
  constructor(name: string = '', value: number = 0) {
    this.name = name;
    this.value = value;
  }
}
