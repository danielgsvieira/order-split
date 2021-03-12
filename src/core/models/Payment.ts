export class Payment {
  public payer: string;

  public value: number;

  constructor(payer: string = '', value: number = 0) {
    this.payer = payer;
    this.value = value;
  }
}