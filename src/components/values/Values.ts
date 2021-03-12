import Vue from 'vue';
import { mapGetters } from 'vuex';
import { StoreProduct } from '@/core/models/StoreProduct';
import { toCurrency } from '@/core/helpers/currency';
import { Payment } from '@/core/models/Payment';

export default Vue.extend({
  name: 'Values',

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('paymentsStore', ['payments']),
    ...mapGetters('personsStore', ['persons']),
    ...mapGetters('productsStore', ['products']),
  },
  methods: {
    toCurrency(value: number): string {
      return toCurrency(value, 'R$', ',');
    },
    getValueForPerson(personName: string, payment: Payment): string {
      const totalValue = this.totalValueForPerson(personName, payment);

      return toCurrency(totalValue, 'R$', ',');
    },
    totalValue(): number {
      let value = 0;

      this.products.forEach((el: StoreProduct) => {
        value += Number(el.value);
      });

      return value;
    },
    totalValueForPerson(personName: string, payment: Payment): number {
      let value = 0;

      this.products.forEach((el: StoreProduct) => {
        if (el.isPersonIncluded(personName)) {
          value += el.getValuePerPerson();
        }
      });

      return value * (Number(payment.value) / this.totalValue());
    },
  },
});
