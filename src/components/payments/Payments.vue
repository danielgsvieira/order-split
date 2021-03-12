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

    Total dos pagamentos: {{ toCurrency(paymentsTotal) }}
  </v-container>
</template>

<script lang="ts" src="./Payments.ts"></script>
