import { Payment } from '@/core/models/Payment';
import { MutationTree } from 'vuex';
import { PaymentsState } from './state';

const mutations: MutationTree<PaymentsState> = {
  setPayments(state: PaymentsState, payments: Payment[]): void {
    state.payments = payments;
  },
  addPayment(state: PaymentsState, payment: Payment): void {
    state.payments.push(payment);
  },
  removePayment(state: PaymentsState, payment: Payment): void {
    const index = state.payments.findIndex((el: Payment) => {
      return el.payer === payment.payer;
    });

    state.payments.splice(index, 1);
  },
};

export { mutations };
