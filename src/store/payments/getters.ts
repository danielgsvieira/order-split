import { Payment } from '@/core/models/Payment';
import { GetterTree } from 'vuex';
import { PaymentsState } from './state';

const getters: GetterTree<PaymentsState, PaymentsState> = {
  payments: (state): Payment[] => state.payments,
  paymentsTotal: (state): number => {
    let totalPrice = 0;
    state.payments.forEach((el) => totalPrice += el.value);
    return totalPrice;
  },
};

export { getters };
