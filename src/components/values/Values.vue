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

<script lang="ts" src="./Values.ts"></script>
