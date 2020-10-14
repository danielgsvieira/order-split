import { Payment } from '@/core/models/Payment';

export class PaymentsState {
  public payments: Payment[];
  
  constructor(payments: Payment[] = []) {
    this.payments = payments;
  }
}
