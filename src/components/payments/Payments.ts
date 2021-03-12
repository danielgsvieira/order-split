import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Payment } from '@/core/models/Payment';
import { toCurrency } from '@/core/helpers/currency';
import { StoreProduct } from '@/core/models/StoreProduct';

export default Vue.extend({
  name: 'Payments',

  data: () => ({
    paymentEdit: new Payment(), 
  }),
  computed: {
    ...mapGetters('personsStore', ['persons']),
    ...mapGetters('productsStore', ['products', 'totalPrice']),
    ...mapGetters('paymentsStore', ['payments', 'paymentsTotal']),
  },
  methods: {
    ...mapActions('paymentsStore', ['addPayment', 'removePayment']),
    toCurrency(value: number): string {
      return toCurrency(value, 'R$', ',');
    },
    clearPaymentEdit(): void {
      this.paymentEdit = new Payment();
    },
    onAddPayment(): void {
      const payment = new Payment(this.paymentEdit.payer, Number(this.paymentEdit.value));
      if (Number(payment.value) <= this.totalPrice) {
        this.addPayment(payment);
        this.clearPaymentEdit();
      } else {
        window.alert(
          'O valor do pagamento não pode ser maior que o valor total.\n'
          + `Valor total: ${this.totalPrice}\n`
          + `Pagamento inserido: ${payment.value}`,
        );
      }
    },
  },
});
