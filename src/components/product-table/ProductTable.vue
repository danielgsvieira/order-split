<template>
  <v-container>
    <h3>Produtos</h3>
    <v-data-table
      :headers="tableHeaders"
      :items="products"
      :items-per-page="-1"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:item.value="{ item }">
        {{ toCurrency(item.value) }}
      </template>

      <template v-slot:item.persons="{ item }">
        <persons-cell :item="item"></persons-cell>
      </template>

      <template v-slot:footer>
        <new-product-form></new-product-form>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import PersonsCell from '@/components/product-table/PersonsCell.vue';
import NewProductForm from '@/components/product-table/NewProductForm.vue';
import { toCurrency } from '@/core/helpers/currency';

export default Vue.extend({
  name: 'ProductTable',
  components: {
    PersonsCell,
    NewProductForm,
  },
  data: () => ({
    tableHeaders: [
          {
            text: 'Nome',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          {
            text: 'Preço',
            align: 'center',
            sortable: true,
            value: 'value',
          },
          {
            text: 'Pessoas',
            align: 'start',
            value: 'persons',
          },
    ],
  }),
  computed: {
    ...mapGetters('productsStore', ['products']),
  },
  methods: {
    ...mapActions('productsStore', ['addProduct', 'updatePersonsOfProduct']),
    toCurrency(value: number): string {
      return toCurrency(value, 'R$', ',');
    },
  },
});
</script>
