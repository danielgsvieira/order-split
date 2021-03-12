import Vue from 'vue';
import Payments from '@/components/payments/Payments.vue';
import Persons from '@/components/persons/Persons.vue';
import ProductsTable from '@/components/product-table/ProductTable.vue';
import Values from '@/components/values/Values.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Payments,
    Persons,
    ProductsTable,
    Values,
  },
});
