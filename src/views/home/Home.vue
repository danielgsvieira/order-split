<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="9" xl=6>
        <persons></persons>
        <v-divider></v-divider>
        <products-table></products-table>
        <v-divider></v-divider>
        <payments></payments>
        <v-divider></v-divider>
        <values></values>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Payments from '@/components/Payments.vue';
import Persons from '@/components/Persons.vue';
import ProductsTable from '@/components/product-table/ProductTable.vue';
import Values from '@/components/Values.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Payments,
    Persons,
    ProductsTable,
    Values,
  },
});
</script>
