export class Product {
  public name: string;

  public value: number|undefined;
  
  constructor(name: string = '', value: number|undefined = undefined) {
    this.name = name;
    this.value = value;
  }
}
