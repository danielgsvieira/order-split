<template>
  <v-container>
    <h3>Resultados</h3>
    <v-row v-if="payments.length === 0" justify="center">
      <span class="text-h6 font-weight-light">
        Adicione pagamentos para ver os resultados
      </span>
    </v-row>
    <div v-else>
      <v-row v-for="payment in payments" :key="payment.payer">
        <v-col cols="12">
          Pagamentos de {{ toCurrency(payment.value) }} feito por {{ payment.payer }}
        </v-col>
        <v-col cols="3" v-for="person in persons" :key="person.name">
          <v-card-title class="text-h5">
            {{ person.name }}
          </v-card-title>
          <v-card-text>
            <span class="text-h6 font-weight-light green--text">
              {{ getValueForPerson(person.name, payment) }}
            </span>
          </v-card-text>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
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
</script>
