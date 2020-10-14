<template>
  <v-container>
    <h3>Pagamentos</h3>
    <v-form @submit.prevent="onAddPayment()">
      <v-row>
        <v-chip
          class="ma-1"
          v-for="payment in payments"
          :key="payment.payer"
          close
          @click:close="removePayment(payment.payer)"
        >
          {{ payment.payer }} pagou {{ toCurrency(payment.value) }}
        </v-chip>
      </v-row>
      <v-row justify="start" align="center">
        <v-col>
          <v-select
            outlined
            dense
            hide-details
            :items="persons"
            item-text="name"
            item-value="name"
            label="Pagador"
            v-model="paymentEdit.payer"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
            outlined
            dense
            hide-details
            label="Valor pago"
            type="number"
            step="0.01"
            v-model="paymentEdit.value"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn type="submit">Adicionar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
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
    ...mapGetters('productsStore', ['products']),
    ...mapGetters('paymentsStore', ['payments']),
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
      if (Number(payment.value) <= this.totalValue()) {
        this.addPayment(payment);
        this.clearPaymentEdit();
      } else {
        window.alert(
          'O valor do pagamento não pode ser maior que o valor total.\n'
          + `Valor total: ${this.totalValue()}\n`
          + `Pagamento inserido: ${payment.value}`,
        );
      }
    },
    totalValue(): number {
      let value = 0;

      this.products.forEach((el: StoreProduct) => {
        value += Number(el.value);
      });

      return Math.round(value * 100) / 100;
    },
  },
});
</script>
