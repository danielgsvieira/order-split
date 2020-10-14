import { Payment } from '@/core/models/Payment';
import { GetterTree } from 'vuex';
import { PaymentsState } from './state';

const getters: GetterTree<PaymentsState, PaymentsState> = {
  payments: (state): Payment[] => state.payments,
};

export { getters };
