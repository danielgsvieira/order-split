import { Payment } from '@/core/models/Payment';
import { ActionContext, ActionTree } from 'vuex';
import { PaymentsState } from './state';

type PaymentsActionContext = ActionContext<PaymentsState, PaymentsState>;

const actions: ActionTree<PaymentsState, PaymentsState> = {
  setPayments(context: PaymentsActionContext, payments: Payment[]) {
    context.commit('setPayments', payments);
  },
  addPayment(context: PaymentsActionContext, payment: Payment) {
    context.commit('addPayment', payment);
  },
  removePayment(context: PaymentsActionContext, payment: Payment) {
    context.commit('removePayment', payment);
  },
};

export { actions };
