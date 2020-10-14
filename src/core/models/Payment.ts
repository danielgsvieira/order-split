export class Payment {
  public payer: string;

  public value: number|undefined;

  constructor(payer: string = '', value: number|undefined = undefined) {
    this.payer = payer;
    this.value = value;
  }
}